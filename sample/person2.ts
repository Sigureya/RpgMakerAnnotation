export interface Person {
  name: string;
  age: number;
}

export interface Family {
  member: Person[];
  address: string;
  guest: Person;
}
