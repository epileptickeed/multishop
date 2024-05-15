import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPages = () => {
  const { itemId } = useParams();

  console.log(itemId);

  return (
    <div className="item_page">
      <img src="" alt="" />
      <h2>Item</h2>
    </div>
  );
};

export default ItemPages;
