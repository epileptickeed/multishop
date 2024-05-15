export type HeaderItems = {
  title: string;
  id: string;
  amount: number;
};

export type CatalogueItems = {
  title: string;
  id: string;
  link: string;
  items: HeaderItems[];
};

export type Catalogue = {
  title: string;
  id: string;
  items: CatalogueItems[];
};
