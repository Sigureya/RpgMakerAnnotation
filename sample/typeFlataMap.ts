import { Struct, StructBase } from "../src/schema";
import { Person } from "./person2";

type FlatMap<T extends StructBase> = {
  [Key in T["structName"]]: T;
};
// } & {
//   [Key in keyof T["structName"]]: null;
// };

const FLAT: FlatMap<Struct<Person>> = {};
