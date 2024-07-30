export function createLine<ElementName extends string>(
  elementName: ElementName,
  text?: string
) {
  return text ? (`@${elementName} ${text}\n` as const) : "";
}
