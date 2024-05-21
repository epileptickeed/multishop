import { useDispatch, useSelector } from 'react-redux';
import { selectedItemSelector } from '../../../../redux/PickedItemsSlice/selector';
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { CatalogueItemSelector } from '../../../../redux/fetch/selector';
import { useEffect, useState } from 'react';
import { setItems } from '../../../../redux/fetch/fetch';
import Loading from '../../Loading/Loading';

const ProductsPage = () => {
  const { headerName, itemId } = useParams();
  const dispatch = useDispatch();

  // console.log(itemId);
  const [savedTitle, setSavedTitle] = useState(headerName);

  useEffect(() => {
    setSavedTitle(itemId);
  }, [itemId]);
  console.log(savedTitle);

  const { shopItems, status } = useSelector(CatalogueItemSelector);
  const { currentSubHeaderItem, currentMainHeader, currentSecondHeader } =
    useSelector(selectedItemSelector);
  // const [pageItems, setPageItems] = useState([]);
  console.log(status);
  // if (status === 'loading') {
  const pageItems = shopItems[currentSubHeaderItem].items[currentMainHeader].items.filter(
    (item) => item.id === savedTitle,
  );
  // setPageItems(items);
  // }
  // console
  // console.log(pageItems);

  const handleFavoriteClick = (id: string) => {};
  const buyItem = (id: string) => {
    // const boughtItems = shopItems.map((item) => {
    //   return item.id === id ? { ...item, isAdded: !item.isAdded } : item;
    // });
    // dispatch(setItems(boughtItems));
  };

  // console.log(pageItems);

  return (
    <div className="products_main">
      <h1>{headerName}</h1>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className="products_main_items">
          <div className="products_menu"></div>
          <div className="products_items_column">
            {pageItems.map((item, index) => {
              return (
                <div key={index}>
                  {item.products.map((products, index) => (
                    <div className="products_item_card_column" key={index}>
                      <div className="products_item_card_column_title">
                        <img src={products.image} alt={products.title} />
                        <p>{products.title}</p>
                        <p>{products.id}</p>
                      </div>
                      <div className="products_item_card_column_price">
                        <h1>{products.price}</h1>
                        <div className="products_item_card_column_price_buttons">
                          <button
                            className="favoriteBtn"
                            onClick={() => handleFavoriteClick(products.id)}>
                            {products.isFavorite ? <FaHeart /> : <FaRegHeart />}
                          </button>
                          <button onClick={() => buyItem(products.id)}>Купить</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
