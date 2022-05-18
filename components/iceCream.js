app.component('ice-cream', {
    props:{
      cart:{
          type: Array,
          required: true
      }
    },
    template : `<div>
                <div class="icecream react" id="icecream">
                    <p class="cone"></p>
                    <!-- <p>Please start adding scoops</p> -->
                    <div class="scoop" v-for="cartItem in cart" :class="cartItem.name.toLowerCase()"></div>
                    <div v-if="cart.length > 0" class="cherry"></div>
                    <div v-else class="question"></div>
                </div>
            </div>`
})