import { Parameter, ParameterBase, Struct } from "./struct";

export interface PluginCommandBase {
  commandName: string;
  desc?: string;
  text?: string;
  args: ParameterBase;
}

export interface PluginCommand<ArgType extends object>
  extends PluginCommandBase {
  args: Parameter<ArgType>;
}
