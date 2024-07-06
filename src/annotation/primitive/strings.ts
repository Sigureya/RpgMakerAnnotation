import { Annotation } from "./annotationBase";

export interface StringArg extends Annotation {
  type: "string";
  default: string;
}

export interface MultilineString extends Annotation {
  type: "multiline_string";
  default: string;
}

export interface FilePathAnnotation extends Annotation {
  type: "file";
  default: string;
  dir: string;
}
export interface ComboAnnotation extends Annotation {
  default: string;
  type: "combo";
  options: string[];
}

export type Primitive_Strings = [
  StringArg,
  MultilineString,
  FilePathAnnotation,
  ComboAnnotation
][number];
