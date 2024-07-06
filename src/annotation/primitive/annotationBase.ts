export interface AnnotationBase {
  type: string;
  desc?: string;
  text?: string;
  parent?: string;
  default?: unknown;
}

export interface Annotation extends AnnotationBase {
  default: unknown;
}
