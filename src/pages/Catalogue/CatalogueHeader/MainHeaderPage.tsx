import blogs from '../blogs.json';
import { Link, useParams } from 'react-router-dom';
import items from '../../../../data/items.json';
import MainHeaderItems from './MainHeaderItems';

const MainHeaderPage = () => {
  const { headerName, itemId } = useParams();
  const selectedItems = items.find((item) => item.id === itemId);

  return (
    <div className="catalogue_header_page">
      <h5>
        Каталог {'>'} <Link to={``}>{headerName}</Link>
      </h5>

      <h1>{headerName}</h1>

      <div className="catalogs_header_items">
        {selectedItems?.items.map((item, index) => {
          return (
            <MainHeaderItems
              key={item.id}
              {...item}
              headerName={headerName}
              itemId={itemId}
              index={index}
            />
          );
        })}
      </div>

      <h2>Популярные категории</h2>

      <h2>Блоги</h2>
      <div className="slider_main">
        <button className="btnLeft">left</button>
        <button className="btnRight">right</button>
        <div className="slider">
          {blogs.map((item) => {
            return (
              <div key={item.id} className="slider_item">
                <div
                  className="slider_item_inner"
                  style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="background-grey"></div>
                  <p>{item.title}</p>
                  <span>{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainHeaderPage;
