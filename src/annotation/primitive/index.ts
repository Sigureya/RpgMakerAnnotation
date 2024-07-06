import { Primitive_Numbers } from "./numbers";
import { BooleanAnnotation } from "./primitive";
import { Primitive_Strings } from "./strings";

export * from "./annotationBase";
export * from "./numbers";
export * from "./strings";
export * from "./constatns";

export type Primitive<T> = T extends number
  ? Primitive_Numbers
  : T extends string
  ? Primitive_Strings
  : boolean extends T
  ? BooleanAnnotation
  : never;
{
}
