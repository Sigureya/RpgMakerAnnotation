import type { Annotation } from "./annotation";

export const ANNOTATION_DEFAULT_STRING: Annotation<string> = {
  type: "string",
  default: "",
} as const;
export const ANNOTATION_DEFAULT_NUMBER: Annotation<number> = {
  type: "number",
  default: 0,
} as const;
