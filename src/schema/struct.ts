import { Primitive, PrimitiveArray } from "./primitive";
import { StructBase, Type_Array, Type_Struct } from "./structBase";

export interface Struct<T extends object> extends StructBase {
  params: {
    [Key in keyof T]: T[Key] extends number | string | boolean
      ? Primitive<T[Key]>
      : T[Key] extends number[] | string[]
      ? PrimitiveArray<T[Key]>
      : T[Key] extends {}[]
      ? Type_Array<T[Key], Struct<T[Key][number]>>
      : T[Key] extends {}
      ? Type_Struct<T[Key], Struct<T[Key]>>
      : never;
  };
}

export type Parameter<T extends object> = Struct<T>["params"];
