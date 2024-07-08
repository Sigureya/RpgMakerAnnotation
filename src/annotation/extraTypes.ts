import { ReomoveArray } from "../metatypes";
import { AnnotationBase, Primitive, PrimitiveAll } from "./primitive";
export interface StructBase {
  structName: string;
  params: ParameterBase;
}
export interface ParameterBase extends Record<string, Annotation> {}
export type Annotation =
  | PrimitiveAll
  | Type_Array<object>
  | Type_Struct<object>
  | Type_PrimitiveArray<boolean>
  | Type_PrimitiveArray<string>
  | Type_PrimitiveArray<number>;

export interface Type_PrimitiveArray<T> extends AnnotationBase {
  type: `${Primitive<T>["type"]}[]`;
  default: Primitive<T>["default"][];
}

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
