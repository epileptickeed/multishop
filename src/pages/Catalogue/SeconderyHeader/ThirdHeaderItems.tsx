import { Link } from 'react-router-dom';
import { CatalogueHeaderItemsProps } from '../CatalogueTypes';
import { useDispatch } from 'react-redux';
import { setSecondHeader } from '../../../../redux/PickedItemsSlice/PickedItemSlice';

const ThirdHeaderItems = ({ headerName, title, id, itemId, index }: CatalogueHeaderItemsProps) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link
        to={`/catalog/${headerName}/${itemId}/${title}/${id}/${title}/${id}`}
        onClick={() => dispatch(setSecondHeader(index))}>
        <img src="/items/tehnika.jpg" alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default ThirdHeaderItems;
