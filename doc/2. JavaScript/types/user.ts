export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export enum METHOD {
  forEach = "forEach",
  map = "map",
  filter = "filter",
  find = "find",
  some = "some",
  every = "every",
  reduce = "reduce",
  sort = "sort",
  slice = "slice",
  join = "join",
}
