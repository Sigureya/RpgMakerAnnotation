import { createLine } from "./utills";
import {
  Annotation,
  BooleanAnnotation,
  FilePathAnnotation,
  NumberArg,
  RemoveBasePropsOptional,
  RemoveBaseProps,
  Type_Struct,
  StringSelect,
  ComboAnnotation,
} from "./schema";
import { NumberSelect } from "./schema/primitive/select";

function numberArg(ant: RemoveBasePropsOptional<NumberArg>) {
  const digit = createLine("digit", ant.decimals?.toString());
  const max = createLine("max", ant.max?.toString());
  const min = createLine("min", ant.min?.toString());
  return [digit, max, min] as const;
}
function booleanArg(ant: RemoveBasePropsOptional<BooleanAnnotation>) {
  const on = createLine("on", ant.on);
  const off = createLine("off", ant.off);
  return [on, off] as const;
}
function createOption(pair: { option: string; value: string | number }) {
  const option = createLine("option", pair.option);
  const value = createLine("value", pair.value.toString());
  return [option, value] as const;
}

function selectArg<T extends NumberSelect | StringSelect>(
  ant: RemoveBaseProps<T>
) {
  return ant.options.flatMap((pair) => createOption(pair));
}

export function fileArg(ant: RemoveBaseProps<FilePathAnnotation>) {
  const dir = createLine("dir", ant.dir);
  return [dir] as const;
}

export function comboArg(ant: RemoveBaseProps<ComboAnnotation>) {
  const options = ant.options.map((opt) => createLine("option", opt));
  return options;
}

export function createAditionalAnnotation(
  annotation: Annotation
): ReadonlyArray<string> {
  switch (annotation.type) {
    case "number":
    case "number[]":
      return numberArg(annotation);
    case "boolean":
      return booleanArg(annotation);
    case "select":
      return selectArg(annotation);
    case "file":
    case "file[]":
      return fileArg(annotation);
    case "combo":
    case "combo[]":
      return comboArg(annotation);
  }
  return [];
}
