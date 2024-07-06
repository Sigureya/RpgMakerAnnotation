import type { AnnotationBaseWidhDefault } from "./annotationPropety";
import { ValueOf } from "../metatypes";
export * from "./numbers";
export * from "./strings";
export interface BooleanAnnotation extends AnnotationBaseWidhDefault {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
interface ValuePair<T> {
  option: string;
  value: T;
}

interface SelectAnnotation<T extends number | string>
  extends AnnotationBaseWidhDefault {
  type: "select";
  default: T;
  options: ValuePair<T>[];
}

export type Select = SelectAnnotation<number> | SelectAnnotation<string>;
