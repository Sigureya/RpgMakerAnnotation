import { ReomoveArray } from "../metatypes";
import {
  AnnotationBase,
  Primitive_Numbers,
  Primitive_Strings,
  BooleanAnnotation,
  Primitive_NumbersArray,
  Primitive_StringsArray,
} from "./primitive";
export interface StructBase {
  structName: string;
  params: ParameterBase;
}
export interface ParameterBase extends Record<string, Annotation> {}
export type Annotation =
  | Type_Array<object>
  | Type_Struct<object>
  | BooleanAnnotation
  | Primitive_Numbers
  | Primitive_NumbersArray
  | Primitive_Strings
  | Primitive_StringsArray;

export interface Type_Array<
  T extends object,
  ArrayAnnotation extends StructBase = StructBase
> extends AnnotationBase {
  type: "struct[]";
  array: ArrayAnnotation;
  //もしTが配列だと複雑化するので、常に配列を解除する
  default: ReomoveArray<T>[];
}

export interface Type_Struct<
  T,
  StructAnnotation extends StructBase = StructBase
> extends AnnotationBase {
  type: "struct";
  struct: StructAnnotation;
  default: T;
}
