import type {
  BooleanAnnotation,
  Select,
} from "./annotation/primitive/primitive";

type TT<V> = { type: string; default: V };

export type ValueType<T extends TT<T["default"]>> = T extends BooleanAnnotation
  ? boolean
  : T extends Select
  ? T["options"][number]["value"]
  : T["default"];

export type ToArrayAnnotation<T extends TT<T["default"]>> = {
  [Key in keyof T]: Key extends "type"
    ? `${T[Key]}[]`
    : Key extends "default"
    ? ValueType<T>[]
    : T[Key];
};
export function createArrayAnnotation<T extends TT<T["default"]>>(
  typeDefine: T,
  defaultList: ValueType<T>[]
) {
  return {
    ...typeDefine,
    type: `${typeDefine.type}[]`,
    default: defaultList,
  } as ToArrayAnnotation<T>;
}
