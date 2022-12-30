interface item {
  name?: string;
  price?: string;
}

export interface store {
  id?: number;
  name?: string;
  lat?: number;
  lng?: number;
  address?: string;
  items?: item[];
}

export const stores = [
  {
    id: 1,
    name: 'Pastarazzi',
    lat: 46.897312739967994,
    lng: 8.247854270275685,
    address: 'Indirizzo di Pastarazzi',
    items: [
      { name: 'Cake', price: 'CHF 29.00' },
      { name: 'Pizza', price: 'CHF 15.00' },
      { name: 'Wurst', price: 'CHF 8.95' },
      { name: 'Tortilla', price: 'CHF 5.00' },
    ],
  },
  {
    id: 2,
    name: 'GABBANI Gastronomia',
    lat: 46.00504706079694,
    lng: 8.949392423891894,
    address: 'Indirizzo di GABBANI Gastronomia',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
  {
    id: 3,
    name: 'Spaghetti Store SA',
    lat: 46.00328590638796,
    lng: 8.951063937507287,
    address: 'Indirizzo di Spaghetti Store SA',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
  {
    id: 4,
    name: 'Biancolatte',
    lat: 47.201990148142144,
    lng: 8.522549135019045,
    address: 'Indirizzo di Biancolatte',
    items: [
      { name: 'Cake', price: 'CHF 29.00' },
      { name: 'Pizza', price: 'CHF 15.00' },
      { name: 'Wurst', price: 'CHF 8.95' },
      { name: 'Tortilla', price: 'CHF 5.00' },
    ],
  },
  {
    id: 5,
    name: 'Casa Ferlin',
    lat: 47.0036696240109,
    lng: 8.850488069327706,
    address: 'Indirizzo di Casa Ferlin',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
  {
    id: 6,
    name: 'Caffè Milano',
    lat: 47.20328590638796,
    lng: 8.861063937507287,
    address: 'Indirizzo di Caffè Milano',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
  {
    id: 7,
    name: 'Sayuri',
    lat: 46.767312739967994,
    lng: 8.357854270275685,
    address: 'Indirizzo di Sayuri',
    items: [
      { name: 'Cake', price: 'CHF 29.00' },
      { name: 'Pizza', price: 'CHF 15.00' },
      { name: 'Wurst', price: 'CHF 8.95' },
      { name: 'Tortilla', price: 'CHF 5.00' },
    ],
  },
  {
    id: 8,
    name: 'Agua Lugano',
    lat: 46.10504706079694,
    lng: 7.949392423891894,
    address: 'Indirizzo di Agua Lugano',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
  {
    id: 9,
    name: 'AnaCapri',
    lat: 46.30328590638796,
    lng: 8.351063937507287,
    address: 'Indirizzo di AnaCapri',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
  {
    id: 10,
    name: 'La Tinèra',
    lat: 46.20328590638796,
    lng: 8.281063937507287,
    address: 'Indirizzo di La Tinèra',
    items: [
      { name: 'Panettone al Pistacchio', price: 'CHF 45.00' },
      { name: 'Panettone Classico', price: 'CHF 35.00' },
      { name: 'Sensazione', price: 'CHF 175.00' },
      { name: 'Sopraceneri', price: 'CHF 360.00' },
    ],
  },
];
