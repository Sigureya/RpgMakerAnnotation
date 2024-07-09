import {
  ANNOTATION_NUMBER,
  ANNOTATION_SKILL,
  ANNOTATION_TABLE_STRING,
  Struct,
} from "../src/schema";

export interface SkillCondition {
  id: number;
  pluginName: string;
  commandName: string;
}

export interface Enemy {
  hp: number;
  mp: number;
  skills: SkillCondition[];
}

export const STRUCT_SKILLCONDTION: Struct<SkillCondition> = {
  params: {
    id: ANNOTATION_SKILL,
    commandName: ANNOTATION_TABLE_STRING.string,
    pluginName: ANNOTATION_TABLE_STRING.string,
  },
  structName: "SkillCondition",
} as const;

export const STRUCT_ENEMY: Struct<Enemy> = {
  structName: "Enemy",
  params: {
    hp: ANNOTATION_NUMBER,
    mp: ANNOTATION_NUMBER,
    skills: {
      type: "struct[]",
      struct: STRUCT_SKILLCONDTION,
      default: [],
    },
  },
} as const;
const aa: Struct<{ hoge: number }> = {
  params: {
    hoge: {
      type: "select",
      default: 0,
      options: [],
    },
  },
  structName: "",
};
