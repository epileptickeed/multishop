import { useParams } from 'react-router-dom';
import SubHeaderItems from './SubHeaderItems';
import items from '../../../../data/items.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const SubHeadersPages = () => {
  const currentSubHeaderItem = useSelector(
    (state: RootState) => state.PickedItems.currentSubHeaderItem,
  );
  const { headerName, itemId } = useParams();

  const selectedItems = items[currentSubHeaderItem].items.find((item) => item.id === itemId);

  return (
    <div className="catalogue_header_page">
      <h3>{headerName}</h3>

      <div className="catalogs_header_items">
        {selectedItems?.items.map((item) => {
          return <SubHeaderItems key={item.id} {...item} headerName={headerName} itemId={itemId} />;
        })}
      </div>
    </div>
  );
};

export default SubHeadersPages;
