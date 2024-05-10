import catalogue from "../../../../data/items.json";
import CatalogueHeaders from "./CatalogueHeaders";
import { useSelector } from "react-redux";
import { visibleSelector } from "../../../../redux/VisibleSlices/selector";

const Items = () => {
  const { catalogueItems } = useSelector(visibleSelector);
  return (
    <div className="catalogue">
      <div className="headers_container">
        {catalogue.map((catalogue) => {
          return <CatalogueHeaders key={catalogue.id} {...catalogue} />;
        })}
      </div>

      <div className="items_container">
        {catalogue.map((catalogue) => {
          return (
            <div
              className={
                catalogueItems === catalogue.id ? "main_header" : "notActive"
              }
              key={catalogue.id}
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
