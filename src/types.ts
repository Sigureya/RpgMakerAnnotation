export type ValueOf<T> = T[keyof T];
export type ReomoveArray<T> = T extends Array<unknown> ? T[number] : T;
