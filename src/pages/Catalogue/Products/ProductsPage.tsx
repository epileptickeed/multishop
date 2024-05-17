import items from '../../../../data/items.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectedItemSelector } from '../../../../redux/PickedItemsSlice/selector';
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { CatalogueItemSelector } from '../../../../redux/fetch/selector';
import { setToCart } from '../../../../redux/fetch/fetch';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const { currentMainHeader, currentSubHeaderItem, currentSecondHeader } =
    useSelector(selectedItemSelector);

  const { favoritedItems, cartItems } = useSelector(CatalogueItemSelector);
  const { headerName } = useParams();
  const selectedItems =
    items[currentSubHeaderItem].items[currentMainHeader].items[currentSecondHeader].products;

  const boughtItems = (id: string) => {
    const addedCartItems = selectedItems.map((item) => {
      return item.id === id ? { ...item, isAdded: !item.isAdded } : item;
    });
    const filteredCartItems = addedCartItems.filter((item) => item.isAdded === true);
    dispatch(setToCart(filteredCartItems));
  };
  console.log(cartItems);

  return (
    <div className="products_main">
      <h1>{headerName}</h1>
      <div className="products_main_items">
        <div className="products_menu"></div>
        <div className="products_items_column">
          {selectedItems.map((item, index) => {
            return (
              <div className="products_item_card_column" key={index}>
                <div className="products_item_card_column_title">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </div>
                <div className="products_item_card_column_price">
                  <h1>{item.price}</h1>
                  <div className="products_item_card_column_price_buttons">
                    <button>
                      <FaRegHeart />
                      <FaHeart />
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
