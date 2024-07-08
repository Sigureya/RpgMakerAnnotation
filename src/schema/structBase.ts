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
  | Type_Array<{}[]>
  | Type_Struct<{}>
  | BooleanAnnotation
  | Primitive_Numbers
  | Primitive_NumbersArray
  | Primitive_Strings
  | Primitive_StringsArray;

export interface HasStruct extends AnnotationBase {
  struct: StructBase;
}

export interface Type_Array<
  Array extends {}[],
  ArrayAnnotation extends StructBase = StructBase
> extends HasStruct {
  type: "struct[]";
  struct: ArrayAnnotation;
  default: Array;
}

export interface Type_Struct<
  T extends {},
  StructAnnotation extends StructBase = StructBase
> extends HasStruct {
  type: "struct";
  struct: StructAnnotation;
  default: T;
}
