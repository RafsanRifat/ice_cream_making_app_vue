const app = Vue.createApp({
    data: function () {
        return {
            variant: 'vanilla',
            logo: 'images/logo.svg',
            vueLogo: 'images/vueLogo.svg',
            cart: ['vanilla', 'orange', 'chocolate'],
            variants: [
                {id: 1, name: 'Vanilla', price: 200},
                {id: 2, name: 'Chocolate', price: 150},
                {id: 3, name: 'Strawberry', price: 140},
                {id: 4, name: 'Orange', price: 100},
                {id: 1, name: 'Lemon', price: 50}
            ]
        }
    }
});