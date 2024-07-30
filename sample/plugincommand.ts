import { ANNOTATION_TABLE_STRING, PluginCommand } from "../src/plugin/schema";
import { Person } from "./person2";

export const newParson: PluginCommand<Person> = {
  commandName: "newParson",

  args: {
    age: {
      type: "number",
      default: 0,
    },
    name: ANNOTATION_TABLE_STRING.string,
  },
} as const;
