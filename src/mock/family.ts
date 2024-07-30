import { Person } from "./person";

export interface Family {
  member: Person[];
  address: string;
  guest: Person;
}

export const MOCK_FAMILY: Family = {
  member: [
    {
      age: 5,
      name: "sinnosuke",
    },
    {
      age: 36,
      name: "hirosi",
    },
  ],
  guest: {
    age: 0,
    name: "",
  },
  address: "tokyo",
} as const;
