import type { Annotation } from "./annotationBase";
export * from "./numbers";
export * from "./strings";
export interface BooleanAnnotation extends Annotation {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
