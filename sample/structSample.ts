import { Person, Family } from "./person2";

import { Struct } from "../src/annotation/struct";
import { Primitive_Numbers } from "../src/annotation/primitive";

const structPerson: Struct<Person> = {
  structName: "Person",
  params: {
    age: { type: "number", default: 0 },
    name: { type: "string", default: "" },
  },
} as const;

type ParamConcept = Record<string, { default: number | boolean | string }>;

type ResultOf_CreateDefault<T extends ParamConcept> = {
  [Key in keyof T]: T[Key]["default"];
};

function createDefault<T extends ParamConcept>(params: T) {
  const members = Object.entries(params).map((ent) => {
    return {
      [ent[0]]: ent[1]["default"],
    };
  });
  return Object.assign({}, ...members) as ResultOf_CreateDefault<T>;
}

//const ddd = createDefault(structPerson.params);

//T[]の場合をうまく乗り切る方法
const structFamiry: Struct<Family> = {
  structName: "Family",
  params: {
    guest: {
      type: "struct",
      struct: structPerson,
      text: "ゲスト",
      default: { age: 17, name: "" },
    },
    member: {
      type: "struct[]",
      array: structPerson,
      default: [{ age: 5, name: "Nohara Shinnosuke" }],
    },
    address: {
      type: "string",
      default: "",
    },
  },
} as const;

const nnn: Primitive_Numbers = {
  type: "armor",
  default: 0,
};
// const fall:Struct5<number>={
// }
//type:"array"
//array:DEF

//type:"struct"
//struct:DEF

//この形に落とし込めば、インターフェースは統一できる
