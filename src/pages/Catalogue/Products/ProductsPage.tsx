import items from '../../../../data/items.json';
import { useSelector } from 'react-redux';
import { selectedItemSelector } from '../../../../redux/PickedItemsSlice/selector';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { currentMainHeader, currentSubHeaderItem, currentSecondHeader } =
    useSelector(selectedItemSelector);
  const params = useParams();
  console.log(params);
  const { headerName } = useParams();
  const selectedItems =
    items[currentSubHeaderItem].items[currentMainHeader].items[currentSecondHeader].products;
  console.log(selectedItems);

  return (
    <div className="products_main">
      <h1>{headerName}</h1>
      <div className="products_menu"></div>
      <div className="products">
        {selectedItems.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.price}</h1>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
