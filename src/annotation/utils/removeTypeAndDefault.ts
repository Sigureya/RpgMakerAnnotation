export type RemoveTypeAndDefault<T> = {
  [Key in keyof T]: Key extends "type" | "default" ? unknown : T[Key];
};
