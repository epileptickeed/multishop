import { Link } from 'react-router-dom';
import { CatalogueHeaderItemsProps } from '../CatalogueTypes';
import { setCurrentMainHeader } from '../../../../redux/PickedItemsSlice/PickedItemSlice';
import { useDispatch } from 'react-redux';

const MainHeaderItems = ({ headerName, itemId, title, id, index }: CatalogueHeaderItemsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Link
        onClick={() => dispatch(setCurrentMainHeader(index))}
        to={`/catalog/${headerName}/${itemId}/${title}/${id}`}>
        <img src="/items/tehnika.jpg" alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default MainHeaderItems;
