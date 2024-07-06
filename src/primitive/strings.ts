import { ValueOf } from "src/metatypes";
import { AnnotationBase } from "./annotationPropety";

export interface StringArg extends AnnotationBase {
  type: "string";
  default: string;
}

export interface MultilineString extends AnnotationBase {
  type: "multiline_string";
  default: string;
}

export interface FilePathAnnotation extends AnnotationBase {
  type: "file";
  default: string;
  dir: string;
}
export interface ComboAnnotation extends AnnotationBase {
  default: string;
  type: "combo";
  options: string[];
}

export type Primitive_Strings = ValueOf<[]>;
