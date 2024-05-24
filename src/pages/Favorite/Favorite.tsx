import { useSelector } from 'react-redux';
import { CatalogueItemSelector } from '../../../redux/fetch/selector';
import Empty from './Empty';

const Favorite = () => {
  const { favoritedItems } = useSelector(CatalogueItemSelector);
  return (
    <div>
      {favoritedItems.length > 0 ? (
        favoritedItems.map((item) => {
          return <h1>{item.title}</h1>;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Favorite;
