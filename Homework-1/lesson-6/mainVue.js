
const products= [
  {id: 1, title: 'Телевизор Samsung', price: 2000, img: 'http://placehold.it/350x300', quantity: 1},
  {id: 2, title: 'Iphone 12', price: 4000, img: 'http://placehold.it/350x300', quantity: 1},
  {id: 3, title: 'Sony Playstation', price: 3000, img: 'http://placehold.it/350x300', quantity: 1},
  {id: 4, title: 'MacBook Pro', price: 5200, img: 'http://placehold.it/350x300', quantity: 1},
];

// Приложение на Vue
const app = new Vue({
  el: '#myApp',
  data: {
  },

  components: {
    CompHeader,
    CompFooter,
    CompProducts,
  },

  methods: {
    // Метод для работы с сервером
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error)
        });
    },
  },
});