export interface AnnotationBase {
  type: string;
  desc?: string;
  text?: string;
  parent?: string;
}

export interface AnnotationBaseWidhDefault extends AnnotationBase {
  default: unknown;
}
