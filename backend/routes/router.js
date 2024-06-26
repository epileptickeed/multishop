const express = require('express');
const router = express.Router();

router.get('/items', (req, res) => {
  const data = [
    {
      title: 'Бытовая техника',
      id: '0',
      items: [
        {
          title: 'Встраиваемая техника',
          id: '100',
          items: [
            {
              title: 'Варочные панели',
              id: '1000',
              amount: 523,
              products: [
                {
                  id: '10000',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
                {
                  id: '10001',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 600,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4.4,
                  rating_votes: 951,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
                {
                  id: '1000123232',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 651,
                  isFavorite: false,
                  isAdded: false,
                  rating: 5,
                  rating_votes: 5,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Духовые шкафы',
              id: '1001',
              amount: 315,
              products: [
                {
                  id: '10002',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Вытяжки',
              id: '1002',
              amount: 715,
              products: [
                {
                  id: '10003',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Встраиваемые микроволновые печи',
              id: '1003',
              amount: 61,
              products: [
                {
                  id: '10004',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Встраиваемые холодильники',
              id: '1004',
              amount: 75,
              products: [
                {
                  id: '10005',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Встраиваемые морозильные шкафы',
              id: '1005',
              amount: 16,
              products: [
                {
                  id: '10006',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Встраиваемые посудомоечные машины',
              id: '1006',
              amount: 160,
              products: [
                {
                  id: '10007',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Встраиваемые стиральные машины',
              id: '1007',
              amount: 20,
              products: [
                {
                  id: '10008',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
          ],
        },
        {
          title: 'Техника для кухни',
          id: '101',
          items: [
            {
              title: 'Плиты и печи',
              id: '1008',
              amount: 1406,
              products: [
                {
                  id: '10009',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Холодильное оборудование',
              id: '1009',
              amount: 1670,
              products: [
                {
                  id: '10010',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Посудомоечные машины',
              id: '1010',
              amount: 339,
              products: [
                {
                  id: '10011',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Приготовление напитков',
              id: '1011',
              amount: 2488,
              products: [
                {
                  id: '10012',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Электрочайники и термопоты',
              id: '1012',
              amount: 877,
              products: [
                {
                  id: '10012',
                  image: 'item_image',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  catalogueName: 'Техника для кухни',
                  count: 0,
                },
              ],
            },
          ],
        },
        {
          title: 'Техника для дома',
          id: '102',
          items: [
            {
              title: 'Стирка и сушка',
              id: '1013',
              amount: 1406,
              products: [
                {
                  id: '10014',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Глаженье',
              id: '1014',
              amount: 1670,
              products: [
                {
                  id: '10015',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
            {
              title: 'Уборка',
              id: '1015',
              amount: 339,
              products: [
                {
                  id: '10016',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Встраиваемая техника',
                  count: 0,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: 'Красота и здоровье',
      id: '1',
      items: [
        {
          title: 'Укладка и сушка волос',
          id: '200',
          items: [
            {
              title: 'Фены',
              id: '2000',
              amount: 287,
              products: [
                {
                  id: '20000',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Фены',
                  count: 0,
                },
              ],
            },
            {
              title: 'Фены-щетки',
              id: '2001',
              amount: 49,
              products: [
                {
                  id: '20001',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Фены-щетки',
                  count: 0,
                },
              ],
            },
            {
              title: 'Фены-щетки',
              id: '2002',
              amount: 49,
              products: [
                {
                  id: '20002',
                  image: '/items/tehnika.jpg',
                  title: 'item_title',
                  price: 500,
                  isFavorite: false,
                  isAdded: false,
                  rating: 4,
                  rating_votes: 929,
                  in_stock: 1,
                  profitable: true,
                  reliability: 'high',
                  catalogueName: 'Фены-щетки',
                  count: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  res.send(data);
});

module.exports = router;
