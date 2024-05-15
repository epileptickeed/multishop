import React from 'react';
import blogs from './blogs.json';

const CatalogueHeader = () => {
  const catalogHeaderName = 'Бытовая техника';
  let items = 10;

  const containerStyles = {
    width: '100%',
    height: '400px',
  };
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="catalogue_header_page">
      <h5>
        Каталог {'>'} {catalogHeaderName}
      </h5>

      <h1>{catalogHeaderName}</h1>

      <div className="catalogs_header_item">
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
        <div className="card">
          <img src="/items/tehnika.jpg" alt="" />
          <h1>item_title</h1>
        </div>
      </div>

      <h2>Популярные категории</h2>

      <h2>Блоги</h2>
      <div className="slider">
        {blogs.map((item) => {
          return (
            <div key={item.id} className="slider_item">
              <div className="slider_item_inner" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="background-grey"></div>
                <p>{item.title}</p>
                <span>{item.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogueHeader;
