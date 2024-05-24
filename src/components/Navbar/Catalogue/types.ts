export interface Products extends HeaderItems {
  id: string;
  image: string;
  title: string;
  price: number;
  isFavorite: boolean;
  isAdded: boolean;
  rating: number;
  rating_votes: number;
  in_stock: number;
  profitable: boolean;
  reliability: string;
  catalogueName: string;
  count: number;
}

export type HeaderItems = {
  title: string;
  id: string;
  amount: number;
  products: Products[];
};

export type CatalogueItems = {
  title: string;
  id: string;
  link?: string;
  items: HeaderItems[];
};

export type Catalogue = {
  title: string;
  id: string;
  items: CatalogueItems[];
};
