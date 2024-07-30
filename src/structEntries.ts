import { Struct } from "./schema/struct";
import { Annotation, ParameterBase, StructBase } from "./schema/structBase";

export function obtainParams(params: ParameterBase): StructBase[] {
  return Object.values<Annotation>(params).flatMap((ant) => {
    return ant.type === "struct" || ant.type === "struct[]" ? [ant.struct] : [];
  });
}

export function recursiveEntires(
  struct: StructBase,
  set: ReadonlySet<StructBase>,
  depth: number
): StructBase[] {
  const childParams: StructBase[] =
    depth < 100 ? obtainParams(struct.params) : [];
  const newSet: ReadonlySet<StructBase> = new Set([...set, ...childParams]);

  const grandchildParams = childParams.flatMap((structDefine) =>
    recursiveEntires(structDefine, newSet, depth + 1)
  );
  return [...grandchildParams, ...childParams];
}

export function extractStructs<T extends object>(
  struct: Struct<T>
): Set<StructBase> {
  const set: ReadonlySet<StructBase> = new Set(obtainParams(struct.params));
  const types = Array.from(set).flatMap((ant) => recursiveEntires(ant, set, 0));
  return new Set([...types, ...set]);
}

export function extractParams(params: ParameterBase) {
  return Object.values<Annotation>(params);
}
