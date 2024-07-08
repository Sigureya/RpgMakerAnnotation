export interface Person {
  name: string;
  age: number;
}
export interface Family {
  member: Person[];
  address: string;
  guest: Person;
}
export interface Road {
  distance: number;
}
export interface Position {
  x: number;
  y: number;
}
export interface City {
  fimilys: Family[];
  road: Road[];
  position: Position;
}
