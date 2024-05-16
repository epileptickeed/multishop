import { useSelector } from 'react-redux';
import { visibleSelector } from '../../../../../redux/VisibleSlices/selector';
import { Catalogue } from '../types';
import SubHeaderItems from './SubHeaderItems';
import { Link } from 'react-router-dom';

const ItemsHeader = ({ items, id }: Catalogue) => {
  const { catalogueItemsIndex } = useSelector(visibleSelector);

  return (
    // при изменении тут с == на === всё ломается, если id с +'oм(запарсено в инт) хз почему узнать разобраться
    <div className={catalogueItemsIndex == +id ? 'main_header' : 'notActive'} key={id}>
      {items.map((header) => (
        <div key={header.id} className="main_header_items">
          <Link to={header.link}>{header.title}</Link>
          <div className="sub_header_items">
            {header.items.map((items) => (
              <SubHeaderItems key={items.id} {...items} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsHeader;
