export interface AnnotationBase {
  type: string;
  desc?: string;
  text?: string;
  parent?: string;
  default: unknown;
}
export type RemoveBaseProps<T extends AnnotationBase> = {
  [Key in Exclude<keyof T, keyof AnnotationBase>]: T[Key];
};

export type RemoveBasePropsOptional<T extends AnnotationBase> = {
  [Key in Exclude<keyof T, keyof AnnotationBase>]?: T[Key];
};
