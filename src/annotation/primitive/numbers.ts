import { Annotation } from "./annotationBase";
import { Select } from "./select";
export interface NumberArg extends Annotation {
  min?: number;
  max?: number;
  digit?: number;
  default: number;
  type: "number";
}
export interface DataIndexArg<Name extends string> extends Annotation {
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
export type Primitive_Numbers = [
  NumberArg,
  Actor,
  Switch,
  Armor,
  Skill,
  Item,
  Weapon,
  Troop,
  Class,
  State,
  CommonEvent,
  Select<number>
][number];
