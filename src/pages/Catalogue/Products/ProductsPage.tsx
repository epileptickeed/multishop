import items from '../../../../data/items.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectedItemSelector } from '../../../../redux/PickedItemsSlice/selector';
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { CatalogueItemSelector } from '../../../../redux/fetch/selector';
import { setToCart, setToFavorite } from '../../../../redux/fetch/fetch';
import { useEffect, useState } from 'react';
import { setCurrentPageItems } from '../../../../redux/fetch/fetch';

const ProductsPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const dispatch = useDispatch();

  const { currentMainHeader, currentSubHeaderItem, currentSecondHeader } =
    useSelector(selectedItemSelector);

  const { favoritedItems, cartItems, currentProductsOnPage } = useSelector(CatalogueItemSelector);
  const { headerName, itemId } = useParams();
  // const selectedItems =
  //   items[currentSubHeaderItem].items[currentMainHeader].items[currentSecondHeader].products;

  // const selectedItems = items[currentSubHeaderItem].items[currentMainHeader].items.find(
  //   (item) => item.id === itemId,
  // );

  // console.log(currentMainHeader);

  const selectedItems = items[currentSubHeaderItem].items[currentMainHeader].items.find(
    (item) => item.id === itemId,
  );
  // console.log(selectedItems);

  useEffect(() => {
    dispatch(setCurrentPageItems(selectedItems?.products));
  }, [selectedItems]);

  const boughtItems = (id: string) => {
    const addedCartItems = selectedItems?.products.map((item) => {
      return item.id === id ? { ...item, isAdded: !item.isAdded } : item;
    });
    const filteredCartItems = addedCartItems?.filter((item) => {
      // if (item.includes())
      return item.isAdded === true;
    });
    dispatch(setToCart(filteredCartItems));
  };

  const handleFavoriteClick = (id: string) => {
    const itemsFaved = selectedItems?.products.map((item) => {
      return item.id === id ? { ...item, isFavorite: !item.isFavorite } : item;
    });
    const filteredFavItems = itemsFaved?.filter((item) => {
      return item.isFavorite === true;
    });
    dispatch(setToFavorite(filteredFavItems));
    setIsFavorited(true);
  };
  console.log(favoritedItems);

  return (
    <div className="products_main">
      <h1>{headerName}</h1>
      <div className="products_main_items">
        <div className="products_menu"></div>
        <div className="products_items_column">
          {selectedItems?.products.map((item, index) => {
            return (
              <div className="products_item_card_column" key={index}>
                <div className="products_item_card_column_title">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <p>{item.id}</p>
                </div>
                <div className="products_item_card_column_price">
                  <h1>{item.price}</h1>
                  <div className="products_item_card_column_price_buttons">
                    <button className="favoriteBtn" onClick={() => handleFavoriteClick(item.id)}>
                      {isFavorited ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => boughtItems(item.id)}>Купить</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
