<template>
  <div>
    <NavBar />
    <div class="pageContainer">
      <div class="contentContainer">
        <ProgressBar />
        <CartSummary v-if="checkoutControl.stateOfCheckout === 1" />
        <Payment v-if="checkoutControl.stateOfCheckout == 2" />
        <OrderSummary v-if="checkoutControl.stateOfCheckout == 3" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import { mapWritableState } from 'pinia';
import { useTicketsStore } from '../store/Tickets';
import { useOrderStore } from '../store/Order';

import ProgressBar from '../components/Checkout/ProgressBar.vue';
import CartSummary from '../components/Checkout/CartSummary.vue';
import Payment from '../components/Checkout/Payment.vue';
import OrderSummary from '../components/Checkout/OrderSummary.vue';

export default {
  name: 'koszyk',
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapWritableState(useTicketsStore, ['tickets']),
    ...mapWritableState(useOrderStore, ['order', 'checkoutControl']),
  },
  components: {
    NavBar,
    ProgressBar,
    CartSummary,
    Payment,
    OrderSummary,
  },
};
</script>

<style scoped>
.pageContainer {
  background-image: url('../assets/tlo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: top;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;
}
.contentContainer {
  background-color: white;
  padding: 30px;
  width: 80%;
  margin: 0 auto;
  height: min-content;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 120px;
}
</style>
