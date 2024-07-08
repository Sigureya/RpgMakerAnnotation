import { NumberArg, Struct } from "../src/annotation";

export interface NameList {
  list: string[];
  numbers: number[];
}

// interface DDD extends NumberArg {
//   type: unknown;
// }

//const ex:Remove
//keyofで取得した後、typeとdefaultを除去

const STRUCT_NAMELIST: Struct<NameList> = {
  structName: "NameList",
  params: {
    numbers: {
      type: "select[]",
      default: [],
    },
    list: {
      default: ["aaa"],
      type: "combo[]",

      //      options: [],

      // TODO:optionsなどが不足している
    },
  },
};
