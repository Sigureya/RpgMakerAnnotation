import { createLine } from "./utills/createLine";
import { Annotation, StructBase } from "./schema";
import { createAditionalAnnotation } from "./createParamAdditionalAnnotation";

export function getTypename(ant: Annotation) {
  switch (ant.type) {
    case "struct":
      return `struct<${ant.struct.structName}>` as const;
    case "struct[]":
      return `struct<${ant.struct.structName}>[]` as const;
  }
  return ant.type;
}
export function createParam(paramName: string, ant: Annotation) {
  const param = createLine("param", paramName);
  const desc = createLine("desc", ant.desc);
  const text = createLine("text", ant.text);
  const type = createLine("type", getTypename(ant));
  const parent = createLine("parent", ant.parent);
  const default_ = createLine(
    "default",
    ant.default ? JSON.stringify(ant.default) : ""
  );

  const typeAnnoation = createAditionalAnnotation(ant);
  return [param, desc, text, type, default_, ...typeAnnoation, parent] as const;
}

export function createSturct(struct: StructBase) {
  const list = Object.entries(struct.params).flatMap((item) => {
    return createParam(item[0], item[1]);
  });
  const params = list.join();
  return `/*~struct~${struct.structName}:\n ${params}\n*/\n` as const;
}
