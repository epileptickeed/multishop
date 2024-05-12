import news from "../../../data/news.json";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../../redux/newsFilterSlices/selector";
import { setCurrentFilter } from "../../../redux/newsFilterSlices/NewsFilterSlice";

const News = () => {
  const dispatch = useDispatch();
  const { newsButtons, currentFilter } = useSelector(filterSelector);

  const filteredContent = news.filter((item) => {
    return item.filter === currentFilter ? { ...item } : false;
  });

  console.log(filteredContent);

  return (
    <div className="news">
      <div className="news_buttons">
        {newsButtons.map((item, index) => {
          return (
            <button
              onClick={() => dispatch(setCurrentFilter(item.filter))}
              key={index}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="news_content">
        {currentFilter === ""
          ? news.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.image} alt="" />
                </div>
              );
            })
          : filteredContent.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.image} alt="" />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default News;
