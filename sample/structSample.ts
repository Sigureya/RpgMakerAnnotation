import { Person, Family } from "./person2";

import { Struct5 } from "../src/struct";

const structPerson: Struct5<Person> = {
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
const structFamiry: Struct5<Family> = {
  structName: "Family",
  params: {
    guest: { ...structPerson },
    member: {
      type: "array",
      array: structPerson,
      default: [{ age: 5, name: "Nohara Shinnosuke" }],
    },
    address: {
      type: "string",
      default: "",
    },
  },
} as const;
// const fall:Struct5<number>={
// }
//type:"array"
//array:DEF

//type:"struct"
//struct:DEF

//この形に落とし込めば、インターフェースは統一できる
