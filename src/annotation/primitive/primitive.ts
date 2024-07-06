import type { AnnotationBase } from "./annotationBase";
export * from "./numbers";
export * from "./strings";
export interface BooleanAnnotation extends AnnotationBase {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
