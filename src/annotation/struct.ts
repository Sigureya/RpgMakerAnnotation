import { ReomoveArray } from "../metatypes";
import { AnnotationBase, Primitive } from "./primitive";

export interface ParameterBase extends Record<string, AnnotationBase> {}
export interface StructBase {
  structName: string;
  params: ParameterBase;
}

interface Type_Array<T, ArrayAnnotation extends StructBase>
  extends AnnotationBase {
  type: "array";
  array: ArrayAnnotation;
  //もしTが配列だと複雑化するので、常に配列を解除する
  default: ReomoveArray<T>[];
}

interface Type_Struct<T, StructAnnotation extends StructBase>
  extends AnnotationBase {
  type: "struct";
  struct: StructAnnotation;
  default: T;
}
//↑上記の2クラスはStruct<>に直接は触れないようにし、再起を単純にする

export interface Struct<T extends object> extends StructBase {
  params: {
    [Key in keyof T]: T[Key] extends object[]
      ? Type_Array<T[Key], Struct<ReomoveArray<T[Key]>>>
      : T[Key] extends object
      ? Type_Struct<T[Key], Struct<T[Key]>>
      : Primitive<T[Key]>;
  };
}

export type Parameter<T extends object> = Struct<T>["params"];
