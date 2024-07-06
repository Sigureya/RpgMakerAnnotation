import { Struct } from "./struct";

export interface PluginCommand<ArgType> {
  commandName: string;
  args: Struct<ArgType>["params"];
  desc?: string;
  text?: string;
}
