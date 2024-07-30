import {
  Annotation,
  BooleanAnnotation,
  NumberArg,
  Primitive_Numbers,
  Primitive_Strings,
  Struct,
  StructBase,
  Type_Struct,
} from "../struct/schema";

function createDefaultFromPrimitive<
  T extends Primitive_Numbers | Primitive_Strings | BooleanAnnotation
>(ant: T): T["default"] {
  return ant.default;
}

function createDefaultArray<T extends { default: unknown[] }>(
  _ant: T
): T["default"] {
  return [] as const;
}

function createDefault<T extends Annotation>(ant: T) {
  switch (ant.type) {
    case "struct[]":
      return ant.default as T["default"];
    case "struct":
      return ant.default as T["default"];
  }
  if (typeof ant.default === "object") {
    return ant.default as T["default"];
  }
  return createDefaultFromPrimitive(ant) as T["default"];
}

function createBooleanAnnotation(b: boolean): BooleanAnnotation {
  return {
    type: "boolean",
    default: b,
  };
}
function createNumberAnnotation(num: number): NumberArg {
  return {
    type: "number",
    default: num,
  };
}

function createObjectAnnotation<T extends object | []>(obj: T) {
  //object.keys()して、様子を見る
  //配列なら空っぽか数字、objectなら文字列になるはず
  const keys = Object.keys(obj);
}

function createMember<T>(t: T) {
  switch (typeof t) {
    case "boolean":
      return createBooleanAnnotation(t);
    case "number":
      return createNumberAnnotation(t);
    case "string":
    case "bigint":
    case "symbol":
    case "undefined":
    case "object":
    case "function":

    default:
      break;
  }
}

function createParams<T extends object>(obj: T): Struct<T>["params"] {
  // TODO:必要性も含めて検討する
  return {};
}

function createSturct<T extends object>(name: string, struct: T): Struct<T> {
  return {
    structName: name,
    params: createParams(struct),
  };
}

function createTypeStruct<T extends object>(
  name: string,
  struct: T
): Type_Struct<T> {
  return {
    type: "struct",
    default: { ...struct },
    struct: createSturct(name, struct),
  };
}

function createUnnamedStruct<T extends object>(obj: T, id: number) {
  const uniqueId = Object.keys(obj)
    .map((k) => k.charAt(0))
    .join();

  return `unnamade_${id}_${uniqueId}` as const;
}
