app.component('order-form', {
    props: {
        cart: {
            type: Array,
            required: true
        },
    },
    template: `   <div class="react" id="modal">
                        <div class="backdrop" @click="hideOrderForm"></div>
                        <div class="modalBody">
                            <div class="formContainer react" id="orderForm">
                                <h1>Complete the form below and hit submit</h1>
                                <form class="orderForm">
                                    <ul>
                                        <li>
                                            <input
                                                    type="text"
                                                    name="name"
                                                    class="fieldStyle fieldSplit alignLeft"
                                                    placeholder="Name"
                                            />
                                            <input
                                                    type="text"
                                                    name="phone"
                                                    class="fieldStyle fieldSplit alignRight"
                                                    placeholder="Phone no."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                    type="text"
                                                    name="email"
                                                    class="fieldStyle fieldFull"
                                                    placeholder="Email"
                                            />
                                        </li>
                                        <li>
                            <textarea
                                    name="address"
                                    class="fieldStyle"
                                    placeholder="Address"
                            ></textarea>
                                        </li>
                                        <li>
                                            <input type="submit" value="Submit Order"/>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                </div>`,
    methods: {
        hideOrderForm(){
            this.$emit('toggle-order-form');
        }
    }
})