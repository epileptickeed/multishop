export type HeaderItems = {
  title: string;
  id: number;
  amount: number;
};

export type CatalogueItems = {
  title: string;
  id: number;
  link: string;
  items: HeaderItems[];
};

export type Catalogue = {
  title: string;
  id: number;
  items: CatalogueItems[];
};
