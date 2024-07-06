import { ReomoveArray } from "./metatypes";
import { Primitive } from "./primitive";
export * from "./structOld"; //一時しのぎ。あとで修正予定

interface ObjectArray<T> {
  type: "array";
  //もしTが配列だと複雑化するので、常に配列を解除する
  array: Struct<ReomoveArray<T>>;
  default: ReomoveArray<T>[];
}

export interface Struct<T> {
  structName: string;
  params: {
    [Key in keyof T]: T[Key] extends object[]
      ? ObjectArray<T[Key]>
      : T[Key] extends object
      ? Struct<T[Key]>
      : Primitive<T[Key]>;
  };
}
