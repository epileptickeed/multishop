import { useDispatch, useSelector } from 'react-redux';
import { selectedItemSelector } from '../../../../redux/PickedItemsSlice/selector';
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { CatalogueItemSelector } from '../../../../redux/fetch/selector';
import { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import { setToCart, setToFavorite } from '../../../../redux/fetch/fetch';
import { HeaderItems } from '../../../components/Navbar/Catalogue/types';
import { Rating } from '@mui/material';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { headerName, itemId } = useParams();

  const [savedTitle, setSavedTitle] = useState(headerName);

  const { shopItems, status } = useSelector(CatalogueItemSelector);
  const { currentMainHeader, currentSubHeaderItem } = useSelector(selectedItemSelector);

  let pageItems: HeaderItems[];
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
  } else {
    pageItems = shopItems[currentSubHeaderItem].items[currentMainHeader].items.filter(
      (item) => item.id === savedTitle,
    );
  }

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
                        <Rating value={products.rating} />
                      </div>
                      <div className="products_item_card_column_price">
                        <h1>{products.price}</h1>
                        <div className="products_item_card_column_price_buttons">
                          <button
                            className="favoriteBtn"
                            onClick={() => dispatch(setToFavorite(products))}>
                            {products.isFavorite ? <FaHeart /> : <FaRegHeart />}
                          </button>
                          <button onClick={() => dispatch(setToCart(products))}>Купить</button>
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
