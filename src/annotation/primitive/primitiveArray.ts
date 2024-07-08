import { AnnotationBase } from "./annotationBase";

type ValueType<
  T extends AnnotationBase,
  Key extends keyof T
> = Key extends "type"
  ? `${T["type"]}[]`
  : Key extends "default"
  ? Array<T["default"]>
  : T[Key];

export type ToArrayAnnotation<T extends AnnotationBase> =
  T[keyof T] extends undefined
    ? {
        [K in keyof T]?: T[K];
      }
    : {
        [K in keyof T]: ValueType<T, K>;
      };

export type MMap<List extends AnnotationBase[]> = {
  [Key in keyof List]: ToArrayAnnotation<List[Key]>;
};
