export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Apartment {
  name: string;
  price: number;
}

export interface AllInfoApartment {
  address: string;
  room_count: number;
  floor: number;
  absolute_area: number;
  living_area: number;
  shared_bathroom: number;
  description: string;
}

export type AllInfoAAboutApart = Apartment & AllInfoApartment;

// export interface AllInfoAAboutApart extends Apartment, AllInfoApartment {}
