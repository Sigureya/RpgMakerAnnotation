import { AnnotationBase } from "./primitive";
import { Struct, StructBase } from "./struct";

function createParam(ant: AnnotationBase) {
  //  const  desc.desc ? `@desc ${desc.desc}` : "";
}

function createSturct<T>(struct: StructBase) {
  const list = Object.values(struct.params);

  const xxx = [`/*~struct~${struct.structName}:`, `*/`] as const;
}

function createPlugin<StructTypes extends StructBase[]>(
  structList: StructTypes
) {}
