import { AnnotationBaseWidhDefault } from "./annotationPropety";

export interface StringAnnotation extends AnnotationBaseWidhDefault {
  type: "string";
  default: string;
}

export interface MultilineString extends AnnotationBaseWidhDefault {
  type: "multiline_string";
  default: string;
}

export interface FilePathAnnotation extends AnnotationBaseWidhDefault {
  type: "file";
  default: string;
  dir: string;
}
export interface ComboAnnotation extends AnnotationBaseWidhDefault {
  default: string;
  type: "combo";
  options: string[];
}
