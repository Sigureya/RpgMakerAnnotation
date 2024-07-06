import type { AnnotationBase } from "./annotationPropety";

export interface NumberArg extends AnnotationBase {
  min?: number;
  max?: number;
  digit?: number;
  default: number;
  type: "number";
}

export interface BooleanAnnotation extends AnnotationBase {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
export interface StringAnnotation extends AnnotationBase {
  type: "string";
  default: string;
}

export interface MultilineString extends AnnotationBase {
  type: "multiline_string";
  default: string;
}

export interface FilePathAnnotation extends AnnotationBase {
  type: "file";
  default: string;
  dir: string;
}
export interface ComboAnnotation extends AnnotationBase {
  default: string;
  type: "combo";
  options: string[];
}
interface ValuePair<T> {
  option: string;
  value: T;
}

interface SelectAnnotation<T extends number | string> extends AnnotationBase {
  type: "select";
  default: T;
  options: ValuePair<T>[];
}

export type Select = SelectAnnotation<number> | SelectAnnotation<string>;

export interface DataIndexArg<Name extends string> extends AnnotationBase {
  type: Name;

  default: number;
}

export interface Actor extends DataIndexArg<"actor"> {}
export interface Switch extends DataIndexArg<"switch"> {}
export interface Armor extends DataIndexArg<"armor"> {}
export interface Skill extends DataIndexArg<"skill"> {}
export interface Item extends DataIndexArg<"item"> {}
export interface Weapon extends DataIndexArg<"weapon"> {}
export interface Troop extends DataIndexArg<"troop"> {}
export interface Class extends DataIndexArg<"class"> {}
export interface State extends DataIndexArg<"state"> {}
export interface CommonEvent extends DataIndexArg<"common_event"> {}
