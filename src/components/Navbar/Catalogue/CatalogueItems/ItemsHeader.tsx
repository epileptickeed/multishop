import { useSelector } from "react-redux";
import { visibleSelector } from "../../../../../redux/VisibleSlices/selector";
import { Catalogue } from "../types";
import SubHeaderItems from "./SubHeaderItems";

const ItemsHeader = ({ items, id }: Catalogue) => {
  const { catalogueItemsIndex } = useSelector(visibleSelector);

  return (
    <div
      className={catalogueItemsIndex === id ? "main_header" : "notActive"}
      key={id}
    >
      {items.map((header) => (
        <div key={header.id} className="main_header_items">
          <h2>{header.title}</h2>
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
