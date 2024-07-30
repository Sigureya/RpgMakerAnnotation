import { Annotation, Struct, StructBase } from "../src/schema";
import { Person } from "./person2";
import { extractParams, extractStructs } from "../src/structEntries";
import { FlatObject } from "../src/annotation/flatObject";

function atParamFromAnnotationTo(annotation: Annotation) {
  //  annotation.type ===""
  //  annotation.
  //  annotation.
}

function build(struct: StructBase) {
  const params = extractParams(struct.params);
}

function hoge(struct: Struct<Person>) {
  const types = extractStructs(struct);
}
