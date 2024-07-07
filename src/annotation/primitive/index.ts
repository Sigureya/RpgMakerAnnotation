import { Primitive_Numbers } from "./numbers";
import { BooleanAnnotation } from "./primitive";
import { Primitive_Strings } from "./strings";

export * from "./annotationBase";
export * from "./numbers";
export * from "./strings";
export * from "./constatns";

export type Primitive<T> = boolean extends T
  ? BooleanAnnotation
  : T extends number
  ? Primitive_Numbers
  : T extends string
  ? Primitive_Strings
  : never;
{
}

export type PrimitiveAll =
  | BooleanAnnotation
  | Primitive_Numbers
  | Primitive_Strings;
