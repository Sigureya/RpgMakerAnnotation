import type { Annotation, Struct } from "./annotationOld";
export interface StructSimple {
  struct: string;
  params: null;
}

export interface Struct8<T, Name extends string> {
  struct: Name;
  params: null;
}

type StructRecord<Key extends string> = {
  [K in Key]: Struct8<unknown, Key>;
};

export function createPlugin<StructTypes extends Struct[]>(
  structs: StructTypes
) {}

class Plugin<StructTypes extends Record<string, StructSimple>> {
  struct: StructTypes;
  constructor(structs: StructTypes) {}
}

// export function createStructsFromArray<List extends Struct8<unknown, string>[]>(
//   list: List
// ) {
//   const objectList = list.map((st) => {
//     return { [st.struct]: st } as const;
//   });
//   return Object.assign({}, ...objectList) as StructRecord<string>;
// }

function rrr<T extends Record<string, StructSimple>>(t: T) {
  return t;
}

const r = rrr({ aaa: { params: null, struct: "aaa" } });

// 不一致は実行時にテストする

// const plg = new Plugin(([0, ""]));

function createPlugin2(
  types: [],
  params: Annotation<{ a: number }>,
  commands: []
) {}
