import type { StructBase } from "./struct";
import type { ValueType } from "./templates";
import type { AnnotationTypes } from "./typesTable";

export type Parametors = Record<string, AnnotationTypes>;
export type FunctionArgments<T extends Parametors> = {
  [key in keyof T]: ValueType<T[key]>;
};
export interface IPluginCommand<Result, Param extends Parametors> {
  name: string;
  args: Param;
  func: (arg: Readonly<FunctionArgments<Param>>) => Result;
}

export function createPluginCommand<T extends Parametors, Result>(
  name: string,
  param: T,
  func: (arg: Readonly<FunctionArgments<T>>) => Result
): IPluginCommand<Result, T> {
  return {
    name: name,
    args: param,
    func: func,
  } as const;
}

const structDummy: StructBase = {
  struct: "aaa",
  params: {
    age: {
      type: "number",
      default: 0,
    },
    name: {
      type: "string",
      default: "",
    },
  },
} as const;

// TODO:別ファイルに移すべきだが、置き場所が決まらないので一時的にここに置く
const TestFunc = createPluginCommand(
  "test",
  {
    list: { type: "number[]", default: [8, 9], text: "数値リスト" },
    actorId: { type: "actor", default: 0, text: "アクター" },
    defaultLevel: { type: "number", default: 10, desc: "aaa" },
    text: { type: "string", default: "初期テキスト" },
    combo: {
      type: "combo",
      options: ["ggg", "ghhh"],
      default: "初期選択データ",
    },
    useXXX: { type: "boolean", default: true },
    modeSelect: {
      type: "select",
      options: [
        { option: "easy", value: 80 },
        { option: "normal", value: 100 },
      ] as const,
      default: 80,
    },
    langSelect: {
      type: "select",
      default: "en",
      options: [
        { option: "英語", value: "en" },
        { option: "日本語", value: "jp" },
      ] as const,
    },
    event: {
      type: "common_event",
      default: 0,
    },
  },
  (arg) => {
    arg.list;
    arg.useXXX;
    arg.defaultLevel;
    arg.combo;
    arg.actorId;
    arg.langSelect;
    arg.modeSelect;
  }
);
