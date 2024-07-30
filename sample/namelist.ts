import {
  Struct,
  Primitive_Numbers,
  AnnotationBase,
  Primitive_NumbersArray,
  Annotation,
} from "../src/schema";
import { ToArrayAnnotation } from "../src/schema/primitive/primitiveArray";

export interface NameList {
  list: string[];
  numbers: number[];
}

// interface DDD extends NumberArg {
//   type: unknown;
// }

function antTest(ant: Annotation) {
  ant.default;
  if (ant.type === "struct") {
  }
}

//const ex:Remove
//keyofで取得した後、typeとdefaultを除去

const ARR: ToArrayAnnotation<Primitive_Numbers> = {
  type: "number[]",
  default: [],
};

const ARR2: Primitive_NumbersArray = {
  type: "select[]",
  default: [],
  options: [],
};

antTest(ARR2);

export const ARRR_EX: ToArrayAnnotation<Primitive_Numbers> = {
  default: [],
  type: "number[]",
};
export const STRUCT_NAMELIST: Struct<NameList> = {
  structName: "NameList",
  params: {
    numbers: {
      type: "select[]",
      default: [],
      options: [],
    },
    list: {
      default: ["aaa"],
      type: "combo[]",

      options: [],
    },
  },
};
