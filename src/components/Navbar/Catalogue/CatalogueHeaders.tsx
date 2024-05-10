import { Catalogue } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { visibleSelector } from "../../../../redux/VisibleSlices/selector";
import { setCatalogueItems } from "../../../../redux/VisibleSlices/slice";
const CatalogueHeaders = ({ id, title }: Catalogue) => {
  const dispatch = useDispatch();
  const { catalogueItems } = useSelector(visibleSelector);
  console.log(catalogueItems, "items");
  console.log(id, "id");
  return (
    <h2
      className={
        catalogueItems === id
          ? "catalogue_menu_item-active"
          : "catalogue_menu_item"
      }
      key={id}
      onClick={() => dispatch(setCatalogueItems(id))}
    >
      {title}
    </h2>
  );
};

export default CatalogueHeaders;
