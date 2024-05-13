// import news from '../../../../data/news.json';
// import { useSelector } from 'react-redux';
// import { filterSelector } from '../../../../redux/newsFilterSlices/selector';
// import { motion } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';

// const Content = () => {
//   const { currentFilter } = useSelector(filterSelector);

//   const filteredContent = news.filter((item) => {
//     return item.filter === currentFilter ? { ...item } : false;
//   });

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [width, setWidth] = useState(0);

//   //   useEffect(() => {
//   //     console.log(containerRef.current?.scrollWidth - containerRef.current?.offsetWidth);
//   //     setWidth(containerRef.current?.scrollWidth - containerRef.current?.offsetWidth);
//   //   }, [filteredContent]);

//   return (
//     <motion.div
//       className="news_content_inner"
//       drag="x"
//       dragConstraints={{ right: 0, left: -width }}>
//       {currentFilter === ''
//         ? news.map((item) => {
//             return (
//               <motion.div key={item.id} className="item">
//                 <h2>{item.title}</h2>
//                 <img src={item.image} alt={item.title} />
//               </motion.div>
//             );
//           })
//         : filteredContent.map((item) => {
//             return (
//               <motion.div className="item" key={item.id}>
//                 <h2>{item.title}</h2>
//                 <img src={item.image} alt="" />
//               </motion.div>
//             );
//           })}
//     </motion.div>
//   );
// };

// export default Content;
