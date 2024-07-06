import { Annotation } from "./annotationBase";

interface ValuePair<T> {
  option: string;
  value: T;
}

export interface Select<T extends number | string> extends Annotation {
  type: "select";
  default: T;
  options: ValuePair<T>[];
}
