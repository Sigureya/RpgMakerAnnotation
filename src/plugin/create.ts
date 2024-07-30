import { extractStructsFromParameters } from "./structEntries";
import {
  Annotation,
  ParameterBase,
  PluginBase,
  PluginCommandBase,
  StructBase,
} from "./schema";
import { createSturct } from "./createParamFromAnnotation.";

export function extractStructs(
  plugin: PluginBase,
  command: PluginCommandBase[]
) {
  const params: ParameterBase[] = [
    ...command.map((cmd) => cmd.args),
    plugin.params,
  ];

  return extractStructsFromParameters(params);
}

function defineStruct(struct: StructBase, index: number) {
  const name = struct.structName === "" ? `Unnamed${index}` : struct.structName;
}

function createPlugin(plugin: PluginBase, command: PluginCommandBase[]) {
  Array.from(extractStructs(plugin, command))
    .map((struct) => createSturct(struct))
    .join();
}
