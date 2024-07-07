import { Parameter, ParameterBase } from "./struct";

export interface PluginBase {
  help: string;
  base: string[];
  orderAfter: string[];
  orderBefore: string[];
  params: ParameterBase;
}

export interface PluginParam<Params extends Record<string, unknown>>
  extends PluginBase {
  params: Parameter<Params>;
}
