import { Annotation, ParameterBase, StructBase } from "../schema";

function memberStructOf(ant: Annotation) {
  const list = ant.type === "struct" ? Object.values(ant.struct.params) : [];
  return list.filter((member) => member.type === "struct");
}

function memberArrayOf(ant: Annotation) {
  const list = ant.type === "struct[]" ? Object.values(ant.struct.params) : [];
  return list.filter((member) => member.type === "struct");
}

function flatmap(ant: Annotation) {
  const memberStruct = memberStructOf(ant);
}

type XXPP<T extends StructBase> = {
  [Key in keyof T["params"]]: T["params"][Key];
};
