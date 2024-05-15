import { useEffect, useRef, useState } from 'react';
import Buttons from './Content/Buttons';
// import Content from './Content/Content';
import news from '../../../data/news.json';

import { motion } from 'framer-motion';
import { filterSelector } from '../../../redux/newsFilterSlices/selector';
import { useSelector } from 'react-redux';

const News = () => {
  const { currentFilter } = useSelector(filterSelector);

  const filteredContent = news.filter((item) => {
    return item.filter === currentFilter ? { ...item } : false;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [width, setWidth] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = news.length - 10;
    } else if (newIndex >= news.length - 2) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current?.scrollWidth - containerRef.current?.offsetWidth);
    }
  }, [filteredContent, currentFilter]);

  return (
    <div className="news">
      <div className="news_buttons">
        <Buttons />
      </div>
      <button onClick={() => updateIndex(activeIndex - 1)}>left</button>
      <button onClick={() => updateIndex(activeIndex + 1)}>right</button>
      <motion.div className="news_content" ref={containerRef}>
        {/* <Content /> */}
        <motion.div
          className="news_content_inner"
          // drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: `-${activeIndex * 20.79}%` }}>
          {currentFilter === ''
            ? news.map((item) => {
                return (
                  <motion.div key={item.id} className="item">
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                  </motion.div>
                );
              })
            : filteredContent.map((item) => {
                return (
                  <motion.div className="item" key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="" />
                  </motion.div>
                );
              })}
          {' hello '}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default News;
