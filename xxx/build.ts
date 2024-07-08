import { Person } from "../sample/person2";
import * as aa from "../src/schema";

const structPerson: aa.Struct<Person> = {
  params: {
    age: aa.ANNOTATION_NUMBER,
    name: aa.ANNOTATION_TABLE_STRING.string,
  },
  structName: "Person",
} as const;

const text = aa.createSturct(structPerson);
