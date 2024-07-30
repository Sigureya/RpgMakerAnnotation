import type { AnnotationBase } from "./annotationBase";
export interface BooleanAnnotation extends AnnotationBase {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
