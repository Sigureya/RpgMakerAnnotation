import { City } from "../../sample/person2";
import { Struct } from "../plugin/schema";

type ReomoveArray<T> = T extends unknown[] ? T[number] : T;

type ExtractObject<T> = Extract<ReomoveArray<T>, object>;

export type FlatObject<T> = T extends object
  ? Struct<T> | FlatObject<ExtractObject<T[keyof T]>>
  : never;
