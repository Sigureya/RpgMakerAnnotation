import { ReomoveArray } from "../metatypes";
import { Primitive } from "./primitive";
import { RemoveTypeAndDefault } from "./utils/removeTypeAndDefault";
import {
  StructBase,
  Type_Array,
  Type_PrimitiveArray,
  Type_Struct,
} from "./extraTypes";

interface Dummy {
  dummy: number;
}
type PrimitiveTypes = number | string | boolean;
type EX2<T> = {
  [Key in Exclude<keyof T, "type" | "default">]?: T[Key];
};

export interface Struct<T extends object> extends StructBase {
  params: {
    [Key in keyof T]: T[Key] extends PrimitiveTypes
      ? Primitive<T[Key]>
      : T[Key] extends PrimitiveTypes[]
      ? Type_PrimitiveArray<T[Key][number]> /*& EX2<Primitive<T[Key][number]>>*/
      : T[Key] extends object[]
      ? Type_Array<T[Key], Struct<ReomoveArray<T[Key]>>>
      : T[Key] extends object
      ? Type_Struct<T[Key], Struct<T[Key]>>
      : never;
  };
}

export type Parameter<T extends object> = Struct<T>["params"];
