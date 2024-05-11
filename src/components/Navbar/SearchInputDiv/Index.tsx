import { IoSearch } from "react-icons/io5";
import { setSearchValue, nullHistory } from "../../../../redux/FormSlice/slice";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../../../redux/FormSlice/selector";

const index = () => {
  const dispatch = useDispatch();
  const { search, searchHistory } = useSelector(searchSelector);
  return (
    <form action="">
      <input
        type="text"
        placeholder="Поиск по сайту.."
        value={search}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      <IoSearch size={25} />
      {searchHistory.length === 0 ? (
        false
      ) : (
        <div className="searchHistory">
          <div>
            <h3>История поиска</h3>
            <button onClick={() => dispatch(nullHistory([]))}>
              Очистить историю
            </button>
          </div>
          {searchHistory.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      )}
    </form>
  );
};

export default index;
