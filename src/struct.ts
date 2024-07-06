import { AnnotationBase } from "./primitive/annotationPropety";
import { ReomoveArray } from "./metatypes";
export * from "./structOld"; //一時しのぎ。あとで修正予定

type Primitive = AnnotationBase;

interface ObjectArray<T> {
  type: "array";
  //もしTが配列だと複雑化するので、常に配列を解除する
  array: Struct5<ReomoveArray<T>>;
  default: ReomoveArray<T>[];
}

export interface Struct5<T> {
  structName: string;
  params: {
    [Key in keyof T]: T[Key] extends object[]
      ? ObjectArray<T[Key]>
      : T[Key] extends object
      ? Struct5<T[Key]>
      : Primitive;
  };
}
