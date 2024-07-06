import type { AnnotationTypes } from "./typesTable";

export interface StructBase {
  struct: string;
  // type: `struct<${this["struct"]}>`;
  params: Record<string, AnnotationTypes>;
}

export interface Struct {
  struct: string;
  type: string;
  params: Record<string, AnnotationTypes>;
}

function createStruct(name: string) {
  return {
    type: `struct<${name}>`,
  };
}

// 逆の方が良さそう
// 任意のオブジェクトを引数に、それをベースにした型定義アノテーションを作らせる
