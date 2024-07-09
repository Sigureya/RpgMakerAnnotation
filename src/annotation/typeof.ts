export interface TypeOfCallTable {
  boolean_(b: boolean): unknown;
  number_(num: number): unknown;
  string_(str: string): unknown;
  array_(array: unknown[]): unknown;
}

function typeOfObject<T extends object, Callbacks extends TypeOfCallTable>(
  obj: T,
  callbacks: Callbacks
) {
  const keys = Object.keys(obj);
}

export function typeofCall<T, Callbacks extends TypeOfCallTable>(
  obj: T,
  callbacks: Callbacks
) {
  if (typeof obj === "boolean") {
    return callbacks.boolean_(obj);
  }
  if (!obj) {
    return;
  }
  switch (typeof obj) {
    case "string":
      return callbacks.string_(obj);

    case "number":
      return callbacks.number_(obj);
    case "object":
      return typeOfObject(obj, callbacks);
  }
}
