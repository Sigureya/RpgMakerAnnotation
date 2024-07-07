import { ReomoveArray } from "../metatypes";
import { Annotation, Primitive } from "./primitive";

export interface ParameterBase extends Record<string, Annotation> {}
export interface StructBase {
  structName: string;
  params: ParameterBase;
}

interface Type_Array<T, ArrayAnnotation extends StructBase = StructBase>
  extends Annotation {
  type: "array";
  //もしTが配列だと複雑化するので、常に配列を解除する
  array: ArrayAnnotation;
  default: ReomoveArray<T>[];
}

interface Type_Struct<T, Ant extends StructBase> extends Annotation {
  type: "struct";
  struct: Ant;
  default: T;
}

export interface Struct<T> extends StructBase {
  params: {
    [Key in keyof T]: T[Key] extends object[]
      ? Type_Array<T[Key], Struct<ReomoveArray<T[Key]>>>
      : T[Key] extends object
      ? Type_Struct<T[Key], Struct<T[Key]>>
      : Primitive<T[Key]>;
  };
}

export type Parameter<T> = Struct<T>["params"];
