import {
  STRUCT_CITY,
  STRUCT_FAMIRY,
  STRUCT_PERSON,
} from "../../sample/structSample";
import { ValueOf } from "../metatypes";
import { Annotation, HasStruct, Struct, StructBase } from "../schema";
import { FlatObject } from "./flatObject";

class StructSet {
  _set = new Set<HasStruct>();
  list(): ReadonlySet<HasStruct> {
    return this._set;
  }
  add(annotation: Annotation) {
    if (annotation.type !== "struct" && annotation.type !== "struct[]") {
      return;
    }
    if (this._set.has(annotation)) {
      //無限再帰防止 登録済みなら無視する
      return;
    }
    this._set.add(annotation);

    const members = Object.values(annotation.struct.params);
    //再帰呼び出しで追加する
    members.forEach((m) => this.add(m));
  }
}
function extractParams<St extends Struct<object>>(struct: St) {
  const list = Object.values(struct.params);
  type Params = St["params"];
  return list.filter(
    (ant) => ant.type === "struct" || ant.type === "struct[]"
  ) as Extract<Params[keyof Params], HasStruct>[];
}

const aa: StructBase[] = extractParams(STRUCT_CITY).map((m) => m.struct);

function saiki<StructType extends Struct<object>>(
  struct: StructType,
  set: ReadonlySet<StructBase>,
  depth: number
): StructBase[] {
  const members = extractParams(struct)
    .filter(
      (s) => !set.has(s.struct) //既知の型は無視する
    )
    .map((m) => m.struct as Extract<StructType["params"], StructBase>);
  const newSet = new Set([...set, ...members]);
  return members.flatMap((m) => saiki(m, newSet, depth + 1));
}

export function extractStructs<T extends Struct<object>>(
  struct: T
): StructBase[] {
  const set: Set<StructBase> = new Set();
  return saiki(struct, set, 0);
}
function listEx(list: StructBase[]) {
  const newTypes: StructBase[] = list.flatMap((t) => extractStructs(t));
  return [...list, ...newTypes];
}

const l2 = new Set<StructBase>(
  listEx([STRUCT_CITY, STRUCT_FAMIRY, STRUCT_PERSON])
);
