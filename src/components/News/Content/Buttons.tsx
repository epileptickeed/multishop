import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../../../redux/newsFilterSlices/selector';
import { setCurrentFilter } from '../../../../redux/newsFilterSlices/NewsFilterSlice';

const Buttons = () => {
  const dispatch = useDispatch();
  const { newsButtons, currentFilter } = useSelector(filterSelector);
  return (
    <div>
      {newsButtons.map((item, index) => {
        return (
          <button
            className={item.filter === currentFilter ? 'newsBtnActive' : 'btnNewsNotActive'}
            onClick={() => dispatch(setCurrentFilter(item.filter))}
            key={index}>
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
