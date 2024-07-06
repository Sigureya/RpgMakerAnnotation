// TODO:struct<Person>で、Schema用のオブジェクトを書ける構造にしたい

import { AnnotationBase } from "../src/annotation/primitive/annotationBase";
import type { Annotation, Struct6 } from "../src/annotationOld";

// ツクールの@paramとか用の
export interface Person {
  name: string;
  age: number;
  job: number;
  isAlive: boolean;
  skills: number[];
  hoge: number;
  item: Item;
  //  pocket: Item[];
}

interface Item {
  id: number;
  namn: string;
}

const ITEM_ANNOTATION: Struct6<Item, "Item"> = {
  struct: "struct<Item>",
  params: {
    id: { type: "number", default: 0 },
    namn: { type: "string", default: "" },
  },
};

// const POCKET: Annotation<Item[]> = {
//   type: "struct<Item>",
//   default: [],
//   _struct: ITEM_ANNOTATION.params,
// };
// TODO:配列やオブジェクトの場合、アノテーションは不要にする
// 定義オブジェクトはクラスにした方が良さそう
const personAnnotation: Annotation<Person> = {
  age: { type: "number", default: 0 },
  isAlive: { type: "boolean", default: true },
  job: { type: "class", default: 0 },
  name: { type: "string", default: "", text: "名前" },
  skills: { type: "number[]", default: [] },
  hoge: { type: "select", default: 9, options: [{ option: "aaa", value: 0 }] },
  item: {
    id: { type: "number", default: 0 },
    namn: { type: "string", default: "" },
  },
  //  pocket: POCKET,
};
export function createDefaultFromAnnotation<T extends object>(
  annotation: Annotation<T> & Record<string, AnnotationBase>
) {
  const entries = Object.entries(annotation).map((member) => {
    return {
      [member[0]]: member[1],
    };
  });
  return Object.assign({}, ...entries) as T;
}

// const nnan: Annotation<number> = { default: 0, type: "number" };
// createDefaultFromAnnotation(nnan);
// const pearson: Person = createDefaultFromAnnotation(personAnnotation);

type hoge<T> = T extends number ? "true" : "false";

const h: hoge<number[]> = "false";
