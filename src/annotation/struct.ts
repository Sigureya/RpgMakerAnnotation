import { ReomoveArray } from "../metatypes";
import { Annotation, AnnotationBase, Primitive } from "./primitive";

interface ObjectArray<T> extends Annotation {
  type: "array";
  //もしTが配列だと複雑化するので、常に配列を解除する
  array: Struct<ReomoveArray<T>>;
  default: ReomoveArray<T>[];
}

export interface StructBase {
  structName: string;
  params: Record<string, AnnotationBase>;
}

export interface Struct<T> extends StructBase {
  params: {
    [Key in keyof T]: T[Key] extends object[]
      ? ObjectArray<T[Key]>
      : T[Key] extends object
      ? {
          type: "struct";
          struct: Struct<T[Key]>;
          default: T[Key];
        } & AnnotationBase
      : Primitive<T[Key]>;
  };
}
