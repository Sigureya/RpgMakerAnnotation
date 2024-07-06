import type { ValueOf } from "./metatypes";
import type { TypeTable_Array, TypeTable_Primitive } from "./typesTable";
import type { AnnotationBase } from "./primitive/annotationPropety";
type StructName<Name extends string> = `struct<${Name}>`;
interface AnnotationObjectArray<T extends object[], Name extends string> {
  default: ReomoveArray<T>[];
  type: AnnotationBase;
}
type ReomoveArray<T> = T extends Array<unknown> ? T[number] : T;

type AnnotationTypesDetail<
  Type,
  Table extends Record<string, AnnotationBase>
> = ValueOf<{
  [Key in keyof Table]: Type extends Table[Key]["default"] ? Table[Key] : never;
}>;

type AnnotationTypes<T> =
  | AnnotationTypesDetail<T, TypeTable_Array>
  | AnnotationTypesDetail<T, TypeTable_Primitive>;

export type Annotation<T> = T extends Array<object>
  ? AnnotationObjectArray<T, string> // TODO:ここの特殊化が必要
  : T extends Array<unknown> | number | string | boolean
  ? AnnotationTypes<T>
  : {
      [Key in keyof T]: Annotation<T[Key]>;
    };
export interface Struct {
  struct: `struct<${string}>`;
  params: Annotation<unknown>;
}

export interface Struct6<T, Name extends string> {
  struct: `struct<${Name}>`;
  params: Annotation<T>;
}

export function structName(name: string) {
  return `struct<${name}>` as const;
}
