import { Link } from 'react-router-dom';
import { CatalogueHeaderItemsProps } from '../CatalogueTypes';

const SubHeaderItems = ({ headerName, title, id, itemId }: CatalogueHeaderItemsProps) => {
  return (
    <Link to={`/catalog/${headerName}/${itemId}/${title}/${id}`}>
      <div className="card">
        <img src="/items/tehnika.jpg" alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default SubHeaderItems;
