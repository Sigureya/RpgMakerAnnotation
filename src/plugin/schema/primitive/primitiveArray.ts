import { AnnotationBase } from "./annotationBase";

type ValueType<
  T extends AnnotationBase,
  Key extends keyof T
> = Key extends "type"
  ? `${T["type"]}[]`
  : Key extends "default"
  ? Array<T["default"]>
  : T[Key];

export type ToArrayAnnotation<T extends AnnotationBase> = {
  array: AnnotationBase;
} & T[keyof T] extends undefined
  ? {
      [K in keyof T]?: T[K];
    }
  : {
      [K in keyof T]: ValueType<T, K>;
    };
