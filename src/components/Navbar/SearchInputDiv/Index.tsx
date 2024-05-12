import { IoSearch } from "react-icons/io5";
import { setSearchValue } from "../../../../redux/FormSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../../../redux/FormSlice/selector";
import { useRef } from "react";
import SearchHistory from "./SearchHistory";

const index = () => {
  const dispatch = useDispatch();
  const { search, searchHistory } = useSelector(searchSelector);
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form action="">
      <input
        type="text"
        placeholder="Поиск по сайту.."
        value={search}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        ref={searchRef}
      />
      <IoSearch size={25} className="search_svg" />
      {searchHistory.length === 0 ? false : <SearchHistory />}
    </form>
  );
};

export default index;
