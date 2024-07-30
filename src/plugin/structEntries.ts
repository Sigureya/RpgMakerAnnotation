import { Annotation, ParameterBase, StructBase } from "./schema";

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

export function extractStructsFromParameters(
  paramList: Iterable<ParameterBase>
) {
  const result: Set<StructBase> = new Set();
  for (const iterator of paramList) {
    const childStructs = obtainParams(iterator).flatMap((s) =>
      recursiveEntires(s, result, 0)
    );
    childStructs.forEach((child) => result.add(child));
  }
  return result;
}

export function extractParams(params: ParameterBase) {
  return Object.values<Annotation>(params);
}
