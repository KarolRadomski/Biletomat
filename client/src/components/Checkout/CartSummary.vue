<template>
  <div class="container">
    <div class="borderLabel">
      <label style="font-size: 24px">Bilety w koszyku</label>
      <div :key="product.id" v-for="product in tickets" class="oneProduct">
        <!-- productName -->
        <div class="contentContainer">
          <div class="productName">
            <h5>{{ product.eventName }}</h5>
          </div>
          <div class="text">
            <!-- seatData -->
            <div class="productSeat">
              <p>
                Sektor: <strong>{{ product.sectorName }}</strong>
              </p>
              <p>
                Rząd: <strong>{{ product.row }}</strong>
              </p>
              <p>
                Numer: <strong>{{ product.number }}</strong>
              </p>
            </div>
            <!-- price -->
            <div class="productPrice">
              <p>{{ Math.round(product.price * 100) / 100 }} zł</p>
            </div>
            <!-- delete -->
            <div class="deleteButton">
              <i class="bi bi-trash-fill" @click="handleClickSeat(product.seatID, product.eventID)"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="w3-container w3-cell-row">
        <div class="summary">
          <h3>Razem: {{ calcMoneySum }} zł</h3>
          <button class="buyButton" @click="this.checkoutControl.stateOfCheckout++">Kup bilety</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTicketsStore } from '../../store/Tickets';
import { useOrderStore } from '../../store/Order';
import { mapWritableState, mapActions } from 'pinia';
export default {
  name: 'CartSummary',
  methods: {
    ...mapActions(useTicketsStore, ['handleClickSeat']),
  },

  computed: {
    ...mapWritableState(useTicketsStore, ['tickets']),
    ...mapWritableState(useOrderStore, ['order', 'checkoutControl']),

    calcMoneySum() {
      let sum = 0;
      this.tickets?.forEach((ticket) => {
        sum += ticket.price;
      });

      return Math.round(sum * 100) / 100;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 5px;
}
.oneProduct {
  padding: 10px;
  border-bottom: 1px solid lightgray;
  margin: 10px 0px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.productName {
  font-weight: 600;
  display: flex;
  align-items: center;
}

.borderLabel {
  padding: 10px;
  border: 1px solid #f25757;
  margin: 10px 0px;
}

.borderLabel > label {
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  top: -28px;
  left: 20px;
  background-color: white;
}

.contentContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  text-align: center;
}

.text {
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
}
.productSeat p {
  margin: 0px;
  text-align: start;
}

.summary {
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: flex-end;
  margin-left: auto;
}
.buyButton {
  width: 75%;
  height: 40px;
  border: none;
  background-color: #f25757;
  color: white;
}

@media screen and (max-width: 767px) {
  .oneProduct {
    padding: 10px 0px;
    margin-top: 0px;
  }

  .contentContainer {
    width: 75%;
    display: block;
    padding: 0px;
  }

  .productName {
    width: 100%;
    font-size: 5vw;
  }

  .productName p {
    width: 100%;
    margin: 0 auto;
  }

  .text {
    width: 100%;
    padding: 0px 10px;
  }

  .text * {
    margin: auto;
  }
}
</style>
