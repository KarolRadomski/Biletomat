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
      <pre>{{ order }}</pre>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from '../../store/Order';
import { useTicketsStore } from '../../store/Tickets';
import { useUserStore } from '../../store/User';

import { mapWritableState, mapActions } from 'pinia';
import axios from 'axios';

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
    ...mapActions(useOrderStore, ['resetOrderStore']),
    ...mapActions(useTicketsStore, ['resetTicketStore']),

    async buyTicket() {

      //Check  endSellingDate 
      var date = new Date();
      date.setTime(date.getTime() + 1 * 60 * 60 * 1000);
      date = date.toISOString();
      console.log(date);

      this.tickets.forEach(ticket => {
        if (ticket.endSellingDate < date) {
          //Flaga 
          // Co wtedy gdy na jedno wydarzenie można kupić a na drugie nie? 
        } else {
          //Flage

        }
      })

      // const response = await axios.post('http://localhost:5000/API/order/create', this.order)
      // this.checkoutControl.stateOfCheckout++;
    },
  },
  created() {
    //przygotowanie obiektu order
    this.order.details = {
      userID: this.user.id,

    }
    this.tickets.forEach(ticket => {
      this.order.seats.push({
        eventID: ticket.eventID,
        seatID: ticket.seatInSectorID,
      })
    })
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

.borderLabel>#borderTitle {
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

@media screen and (max-width: 767px) {}

@media screen and (max-width: 480px) {}
</style>
