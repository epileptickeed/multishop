import { useDispatch, useSelector } from "react-redux";
import { deleteSearch, nullHistory } from "../../../../redux/FormSlice/slice";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { searchSelector } from "../../../../redux/FormSlice/selector";

const SearchHistory = () => {
  const dispatch = useDispatch();
  const { searchHistory } = useSelector(searchSelector);
  return (
    <div className="searchHistory">
      <div className="search_history_header">
        <h3>История поиска</h3>
        <h4 onClick={() => dispatch(nullHistory())}>Очистить историю</h4>
      </div>
      {searchHistory.map((item) => {
        return (
          <div key={item.id} className="search_history_items">
            <Link key={item.id} to="favorite">
              {item.title}
            </Link>
            <IoClose
              className="close_svg"
              size={25}
              onClick={() => dispatch(deleteSearch(item.id))}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
