import { NumberArg } from "./numbers";
import { StringArg } from "./strings";

export const ANNOTATION_STRING: StringArg = {
  type: "string",
  default: "",
} as const;
export const ANNOTATION_NUMBER: NumberArg = {
  type: "number",
  default: 0,
} as const;
