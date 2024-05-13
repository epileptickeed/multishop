import { Catalogue } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { visibleSelector } from "../../../../redux/VisibleSlices/selector";
import { setCatalogueItems } from "../../../../redux/VisibleSlices/slice";
const CatalogueHeaders = ({ id, title }: Catalogue) => {
  const dispatch = useDispatch();
  const { catalogueItemsIndex } = useSelector(visibleSelector);
  return (
    <p
      className={
        catalogueItemsIndex === id
          ? "catalogue_menu_item-active"
          : "catalogue_menu_item"
      }
      key={id}
      onClick={() => dispatch(setCatalogueItems(id))}
    >
      {title}
    </p>
  );
};

export default CatalogueHeaders;
