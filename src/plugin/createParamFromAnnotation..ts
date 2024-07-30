import { Annotation, StructBase } from "./schema";

export function createLine<ElementName extends string>(
  elementName: ElementName,
  text?: string
) {
  return text ? (`@${elementName} ${text}\n` as const) : "";
}

function getTypename(ant: Annotation) {
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
  const desc = createLine("desc", ant.text);
  const text = createLine("text", ant.text);
  const type = createLine("type", getTypename(ant));
  const parent = createLine("parent", ant.parent);
  const default_ = createLine(
    "default",
    ant.default ? JSON.stringify(ant.default) : ""
  );
  return [param, desc, text, type, parent, default_] as const;
}

export function createSturct(struct: StructBase) {
  const list = Object.entries(struct.params).flatMap((item) => {
    return createParam(item[0], item[1]);
  });
  const params = list.join();
  return `/*~struct~${struct.structName}:\n ${params}\n*/\n` as const;
}

// TODO:structを直列化して、再帰的に取り込みたい
function createPlugin<StructTypes extends StructBase[]>(
  structList: StructTypes
) {
  //TODO:これmap<K,V>に放り込んだ方が使いやすそう?
  const s = structList.map((struct) => createSturct(struct));
}
