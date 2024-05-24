import { useParams } from 'react-router-dom';
import items from '../../../../data/items.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import ThirdHeaderItems from './ThirdHeaderItems';

const ThirdHeaderPage = () => {
  const currentSubHeaderItem = useSelector(
    (state: RootState) => state.PickedItems.PickedItems.currentSubHeaderItem,
  );
  console.log(currentSubHeaderItem);
  const { headerName, itemId } = useParams();

  const selectedItems = items[currentSubHeaderItem].items.find((item) => item.id === itemId);
  console.log(selectedItems);

  return (
    <div className="catalogue_header_page">
      <h3>{headerName}</h3>

      <div className="catalogs_header_items">
        {selectedItems?.items.map((item, index) => {
          return (
            <ThirdHeaderItems
              key={item.id}
              {...item}
              headerName={headerName}
              itemId={itemId}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThirdHeaderPage;
