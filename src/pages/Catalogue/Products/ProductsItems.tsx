import { HeaderItems } from '../../../components/Navbar/Catalogue/types';
import { useDispatch } from 'react-redux';
import { setToCart, setToFavorite } from '../../../../redux/fetch/fetch';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Rating } from '@mui/material';

const ProductsItems = ({ products }: HeaderItems) => {
  const dispatch = useDispatch();
  return (
    <div className="products_items_column_inner">
      {products.map((products) => (
        <div className="products_item_card_column" key={products.id}>
          <div className="products_item_card_column_middle">
            <div className="products_item_card_column_image">
              <img src={products.image} alt={products.title} />
              <p className="products_item_card_column_id">{products.id}</p>
            </div>
            <div className="products_item_card_column_title">
              <p>{products.title}</p>
              <div className="products_item_card_column_rating">
                <Rating value={products.rating} size="small" />
                <span>{products.rating_votes}</span>
              </div>
            </div>
          </div>
          <div className="products_item_card_column_price">
            <h1>{products.price} ₽</h1>
            <div className="products_item_card_column_price_buttons">
              <button className="favoriteBtn" onClick={() => dispatch(setToFavorite(products))}>
                {products.isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button className="buyBtn" onClick={() => dispatch(setToCart(products))}>
                Купить
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsItems;
