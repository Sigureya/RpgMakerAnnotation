import { extractStructsFromParameters } from "./structEntries";
import { PluginBase, PluginCommandBase } from "./schema";

function createPlugin(plugin: PluginBase, command: PluginCommandBase[]) {
  const a = extractStructsFromParameters(plugin.params);
}
