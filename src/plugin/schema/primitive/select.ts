import { AnnotationBase } from "./annotationBase";

interface ValuePair<T> {
  option: string;
  value: T;
}

export interface Select<T extends number | string> extends AnnotationBase {
  type: "select";
  default: T;
  options: ValuePair<T>[];
}

export interface NumberSelect extends Select<number> {}
export interface StringSelect extends Select<string> {}
