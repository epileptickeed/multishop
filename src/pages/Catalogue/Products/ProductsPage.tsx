import { useDispatch, useSelector } from 'react-redux';
import { selectedItemSelector } from '../../../../redux/PickedItemsSlice/selector';
import { useParams } from 'react-router-dom';
import { CatalogueItemSelector } from '../../../../redux/fetch/selector';
import { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import ProductsItems from './ProductsItems';
import { RootState } from '../../../../redux/store';
import { setSortId } from '../../../../redux/SortSlice/slice';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { headerName, itemId } = useParams();

  const [savedTitle, setSavedTitle] = useState(headerName);

  const { shopItems, status } = useSelector(CatalogueItemSelector);
  const { currentMainHeader, currentSubHeaderItem } = useSelector(selectedItemSelector);

  const sortId = useSelector((state: RootState) => state.sort.sortId);
  console.log(sortId);
  const [open, setOpen] = useState<boolean>(false);

  const sortItems = [
    { title: 'сначала дорогие' },
    { title: 'сначала не дорогие' },
    { title: 'сначала популярные' },
  ];

  const handleSortClick = (id: number) => {
    dispatch(setSortId(id));
    setOpen(false);
  };

  useEffect(() => {
    setSavedTitle(itemId);
  }, [itemId]);

  if (
    status === 'loading' ||
    !shopItems ||
    !shopItems[currentSubHeaderItem] ||
    !shopItems[currentSubHeaderItem].items[currentMainHeader]
  ) {
    return <Loading />;
  }
  const pageItems = shopItems[currentSubHeaderItem].items[currentMainHeader].items.filter(
    (item) => item.id === savedTitle,
  );

  return (
    <div className="products_main">
      <h1>{headerName}</h1>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className="products_main_items">
          <div className="products_menu"></div>
          <div className="products_items_column">
            <div className="products_sort">
              <span>Сортировка по: </span>
              <button onClick={() => setOpen(!open)}>
                {sortItems.map((item, index) => {
                  return (
                    <span key={index} className={sortId === index ? '' : 'notActive'}>
                      {item.title}
                    </span>
                  );
                })}
              </button>
              {open && (
                <div className="sortPopup">
                  {sortItems.map((item, index) => {
                    return (
                      <span key={index} onClick={() => handleSortClick(index)}>
                        {item.title}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
            {pageItems.map((item) => {
              return <ProductsItems key={item.id} {...item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
