import CatalogueHeaders from './CatalogueHeaders';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { useEffect } from 'react';
import { fetchShopItems } from '../../../../redux/fetch/fetch';
import { CatalogueItemSelector } from '../../../../redux/fetch/selector';
import ItemsHeader from './CatalogueItems/ItemsHeader';
import catalogue from '../../../../data/items.json';

const Items = () => {
  const { shopItems } = useSelector(CatalogueItemSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchShopItems());
  }, [dispatch]);

  return (
    <div className="catalogue">
      <div className="headers_container">
        {catalogue.map((catalogue) => {
          return <CatalogueHeaders key={catalogue.id} {...catalogue} />;
        })}
      </div>

      <div className="items_container">
        {catalogue.map((catalogue) => {
          return <ItemsHeader key={catalogue.id} {...catalogue} />;
        })}
      </div>
    </div>
  );
};

export default Items;
