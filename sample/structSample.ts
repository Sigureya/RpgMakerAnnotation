import { Person, Family, City } from "./person2";

import { Struct } from "../src/plugin/schema/struct";
import {
  ANNOTATION_NUMBER,
  Primitive_Numbers,
} from "../src/plugin/schema/primitive";

export const STRUCT_PERSON: Struct<Person> = {
  structName: "Person",
  params: {
    age: { type: "number", default: 0 },
    name: { type: "string", default: "" },
  },
} as const;

export const STRUCT_FAMIRY: Struct<Family> = {
  structName: "Family",
  params: {
    guest: {
      type: "struct",
      struct: STRUCT_PERSON,
      text: "ゲスト",
      default: { age: 17, name: "" },
    },
    member: {
      type: "struct[]",
      struct: STRUCT_PERSON,
      default: [{ age: 5, name: "Nohara Shinnosuke" }],
    },
    address: {
      type: "string",
      default: "",
    },
  },
} as const;

export const STRUCT_CITY: Struct<City> = {
  structName: "City",
  params: {
    fimilys: {
      type: "struct[]",
      struct: STRUCT_FAMIRY,
      default: [],
    },
    position: {
      type: "struct",
      default: {
        x: 0,
        y: 0,
      },
      struct: {
        structName: "Position",
        params: {
          x: ANNOTATION_NUMBER,
          y: ANNOTATION_NUMBER,
        },
      },
    },

    road: {
      type: "struct[]",
      default: [],
      struct: {
        structName: "Road",
        params: {
          distance: {
            type: "number",
            default: 0,
          },
        },
      },
    },
  },
} as const;

const TYPE_LIST = [STRUCT_CITY, STRUCT_FAMIRY, STRUCT_PERSON] as const;
function listEx<T extends ReadonlyArray<Struct<{}>>>(list: T) {
  return [...list] as const;
}

const list2 = listEx(TYPE_LIST);
