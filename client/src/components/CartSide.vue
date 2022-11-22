<template>
  <div class="cartContainer">
    <h3 class="title">Koszyk</h3>
    <hr />
    <h5 v-if="tickets?.length === 0">Wybierz miejsca</h5>
    <div v-else class="listAndSummary">
      <div class="listOfSeats overflow-auto">
        <div :key="seat.seatID" v-for="seat in tickets" class="listElement">
          <div class="eventName">
            <strong>{{ seat.eventName }}</strong>
            <i class="bi bi-trash-fill" @click="handleClickSeat(seat.seatID, seat.eventID)"></i>
          </div>
          <div class="listElementDetails">
            <div class="seatDetails">
              <p>
                Sektor: <strong>{{ seat.sectorName }}</strong>
              </p>
              <p>
                Rząd: <strong>{{ seat.row }}</strong>
              </p>
              <p>
                Numer: <strong>{{ seat.number }}</strong>
              </p>
            </div>
            <div class="pricing">
              <strong>{{ seat.price }} zł</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="summary">
        <p>
          Razem: <strong>{{ calcMoneySum }}</strong> zł
        </p>

        <router-link class="w-100" :to="{ path: '/koszyk' }">
          <button class="checkoutButton">Zapłać</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia';
import { useEventsStore } from '../store/Events';
import { useTicketsStore } from '../store/Tickets';

export default {
  name: 'wydarzenie',
  data() {
    return {};
  },
  methods: {
    ...mapActions(useTicketsStore, ['handleClickSeat']),
  },
  computed: {
    ...mapState(useEventsStore, ['event']),
    ...mapWritableState(useTicketsStore, ['tickets']),
    calcMoneySum() {
      let sum = 0;
      this.tickets?.forEach((ticket) => {
        sum += ticket.price;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.cartContainer {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 25%;
  height: 85vh;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
}

.listAndSummary {
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
}
.listOfSeats {
  padding-right: 20px;
}
.title {
  text-align: center;
}
.listElement {
  border: 1px solid lightcoral;
  margin-bottom: 5px;
  background-color: rgb(248, 247, 247);
  padding: 10px;
}
.listElement p {
  margin-bottom: 0;
}
.eventName {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.listElementDetails {
  display: flex;
  justify-content: space-between;
}
.pricing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.summary {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 1px solid lightgray;
  margin-top: 5px;
  align-items: flex-end;
}
.checkoutButton {
  background-color: #f25757;
  border: none;
  color: white;
  height: 40px;
  width: 100%;
}
</style>
