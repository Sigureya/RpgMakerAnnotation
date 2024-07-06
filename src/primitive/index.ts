import { Primitive_Numbers } from "./numbers";

export * from "./numbers";
export * from "./strings";
export * from "./constatns";

export type Primitive<T extends number | string | boolean> = T extends number
  ? Primitive_Numbers
  : never;
{
}
