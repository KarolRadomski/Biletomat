<template>
  <div class="container">
    <div class="borderLabel">
      <label style="font-size: 24px" id="borderTitle">Płatność</label>
      <h3 style="text-align: center">Symulacja płatności</h3>
      <h5 style="text-align: center">Naciśnij "Dalej" aby kontynuować zakup</h5>
      <div class="navButtons">
        <button class="prevButton" @click="this.checkoutControl.stateOfCheckout--">Powrót</button>
        <button class="nextButton" @click="buyTicket()">Dalej</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from '../../store/Order';
import { useTicketsStore } from '../../store/Tickets';
import { useUserStore } from '../../store/User';

import { mapWritableState } from 'pinia';

export default {
  name: 'Payment',
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useOrderStore, ['order', 'checkoutControl']),
    ...mapWritableState(useTicketsStore, ['tickets']),
    ...mapWritableState(useUserStore, ['user']),
  },
  methods: {
    buyTicket() {
      console.log('Kupuję');

      this.checkoutControl.stateOfCheckout++;
    },
  },
  created() {
    //przygotowanie obiektu order
  },
};
</script>
<style scoped>
.container {
  padding: 5px;
}
.borderLabel {
  padding: 10px;
  border: 1px solid lightgray;
  margin: 10px 0px;
}

.borderLabel > #borderTitle {
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  top: -28px;
  left: 20px;
  background-color: white;
}

.navButtons {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
}
.prevButton,
.nextButton {
  width: 25%;
  border: none;
  height: 40px;
  color: white;
}
.prevButton {
  background-color: rgb(189, 15, 15);
}
.nextButton {
  background-color: green;
}

@media screen and (max-width: 767px) {
}
@media screen and (max-width: 480px) {
}
</style>
