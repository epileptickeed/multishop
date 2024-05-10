import { HeaderItems } from "../types";

const SubHeaderItems = ({ id, title, amount }: HeaderItems) => {
  return (
    <div key={id} className="sub_header_items_card">
      <span>{title}</span>
      <span>{amount}</span>
    </div>
  );
};

export default SubHeaderItems;
