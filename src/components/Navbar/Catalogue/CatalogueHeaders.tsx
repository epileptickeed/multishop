import { Catalogue } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { visibleSelector } from '../../../../redux/VisibleSlices/selector';
import { setCatalogueItems } from '../../../../redux/VisibleSlices/slice';
import { Link } from 'react-router-dom';
import { setCurrentSubHeader } from '../../../../redux/PickedItemsSlice/PickedItemSlice';
const CatalogueHeaders = ({ id, title }: Catalogue) => {
  const dispatch = useDispatch();
  const { catalogueItemsIndex } = useSelector(visibleSelector);

  return (
    <p
      className={catalogueItemsIndex === +id ? 'catalogue_menu_item-active' : 'catalogue_menu_item'}
      key={id}
      onMouseOver={() => dispatch(setCatalogueItems(id))}>
      <Link onClick={() => dispatch(setCurrentSubHeader(+id))} to={`/catalog/${title}/${id}`}>
        {title}
      </Link>
    </p>
  );
};

export default CatalogueHeaders;
