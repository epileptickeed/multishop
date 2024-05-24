import { useSelector } from 'react-redux';
import { CatalogueItemSelector } from '../../../redux/fetch/selector';
import CartEmpty from './CartEmpty';

const Cart = () => {
  const { cartItems } = useSelector(CatalogueItemSelector);
  console.log(cartItems);
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div key={item.id}>
              {item.title}
              {item.id}
            </div>
          );
        })
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
