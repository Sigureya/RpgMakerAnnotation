import { City } from "../../sample/person2";
import { Struct } from "../schema";

type ReomoveArray<T> = T extends unknown[] ? T[number] : T;

type ExtractObject<T> = Extract<ReomoveArray<T>, object>;

type Pack<T> = (x: T) => void;

export type FlatObject<T> = T extends object
  ? Struct<T> | FlatObject<ExtractObject<T[keyof T]>>
  : never;

type c = FlatObject<City>;
//type xx = c["structName"];
