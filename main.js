const app = Vue.createApp({
    data: function () {
        return {
            variant: 'vanilla',
            logo: 'images/logo.svg',
            vueLogo: 'images/vueLogo.svg',
            // cart: ['vanilla', 'orange', 'chocolate'],
            variants: [
                {id: 1, name: 'Vanilla', price: 200},
                {id: 2, name: 'Chocolate', price: 150},
                {id: 3, name: 'Strawberry', price: 140},
                {id: 4, name: 'Orange', price: 100},
                {id: 5, name: 'Lemon', price: 50}
            ],
            cart: [],
            showModal: false
        }
    },
    methods: {
        addToCart(varisntId) {
            // console.log(varisntId);

            // cart this.variants.find(variant => variant.id === varisntId);
            data = this.variants.find(function (variant) {
                return variant.id === varisntId
            })
            cartItem = this.cart.push(data)
            // console.log(this.cart.length)
        },
        removeFromCart(variantId) {
            let position = this.cart.findIndex(variant => variant.id === variantId)
            console.log(variantId)
            console.log(position)
            this.cart.splice(position, 1)
        },
        toggleModal(){
            this.showModal = !this.showModal
        },
        clearCart(){
            this.cart = []
        }
    },
    computed: {
        total(){
            return this.cart.reduce(function (initialValue, presentObject){
               return total =  initialValue + presentObject.price
            }, 0);
        }
    }
});