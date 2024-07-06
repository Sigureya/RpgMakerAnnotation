import type { ValueOf } from "./metatypes";
import type * as P from "./primitive/primitive";
import type { ToArrayAnnotation } from "./templates";

export type TypeTable_Primitive = {
  actor: P.Actor;
  class: P.Class;
  skill: P.Skill;
  number: P.NumberArg;
  combo: P.ComboAnnotation;
  string: P.StringArg;
  multiline_string: P.MultilineString;
  select: P.Select;
  boolean: P.BooleanAnnotation;
  common_event: P.CommonEvent;
};

export type TypeTable_Array = {
  [Key in keyof TypeTable_Primitive]: ToArrayAnnotation<
    TypeTable_Primitive[Key]
  >;
};

export type AnnotationTypes =
  | ValueOf<TypeTable_Primitive>
  | ValueOf<TypeTable_Array>;
