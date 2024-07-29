import { Struct } from "./schema/struct";
import { Annotation, ParameterBase, StructBase } from "./schema/structBase";

function paramEntires(params: ParameterBase): Annotation[] {
  const list = Object.values<Annotation>(params);
  return list.filter((ant) => ant.type === "struct" || ant.type === "struct[]");
}

function recursiveEntires(
  anotation: Annotation,
  set: ReadonlySet<Annotation>,
  depth: number
): Annotation[] {
  const params: Annotation[] =
    depth < 100 &&
    (anotation.type === "struct" || anotation.type === "struct[]")
      ? paramEntires(anotation.struct.params)
      : [];
  const newSet = new Set([...set, ...params]);

  return params.flatMap((a) => recursiveEntires(a, newSet, depth + 1));
}

export function entires<T extends object>(struct: Struct<T>): Annotation[] {
  const params = paramEntires(struct.params);
  const set: ReadonlySet<Annotation> = new Set(params);
  return params.flatMap((ant) => recursiveEntires(ant, set, 0));
}
