export interface AnnotationBase {
  type: string;
  desc?: string;
  text?: string;
  parent?: string;
  default: unknown;
}
