import type { AnnotationBase } from "./annotationBase";
export * from "./numbers";
export * from "./strings";
export interface BooleanAnnotation extends AnnotationBase {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
interface ValuePair<T> {
  option: string;
  value: T;
}

interface SelectAnnotation<T extends number | string> extends AnnotationBase {
  type: "select";
  default: T;
  options: ValuePair<T>[];
}

export type Select = SelectAnnotation<number> | SelectAnnotation<string>;
