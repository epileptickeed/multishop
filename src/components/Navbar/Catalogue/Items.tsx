import React, { useState } from "react";
import catalogue from "../../../../data/items.json";

const Items = () => {
  //   console.log(catalogue);
  const [visible, setVisible] = useState(0);
  return (
    <div className="catalogue">
      <div className="headers_container">
        {catalogue.map((catalogue) => {
          return (
            <h2 className="main_items" onClick={() => setVisible(catalogue.id)}>
              {catalogue.title}
            </h2>
          );
        })}
      </div>

      <div className="items_container">
        {catalogue.map((catalogue) => {
          return (
            <div
              className={visible === catalogue.id ? "main_header" : "notActive"}
            >
              {catalogue.items.map((header) => (
                <div key={header.id} className="main_header_items">
                  <h2>{header.title}</h2>
                  <div className="sub_header_items">
                    {header.items.map((items) => (
                      <div key={items.id} className="sub_header_items_card">
                        <span>{items.title}</span>
                        <span>{items.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
