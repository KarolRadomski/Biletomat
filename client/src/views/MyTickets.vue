<template>
  <div>
    <NavBar />
    <div class="pageContainer">
      <div class="contentContainer">
        <h1>Twoje bilety</h1>
        <div class="descriptionLabelContainer">
          <div class="heading">
            <div class="w-75">Numer zamówienia</div>
            <div>Data zamówienia</div>
          </div>
        </div>
        <div class="accordion" id="orderAccordion">
          <div class="accordion-item" :key="item.id" v-for="item in fetchedOrders.data?.orders">
            <h2 class="accordion-header" :id="'heading' + item.id">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + item.id" aria-expanded="false" :aria-controls="'collapse' + item.id">
                <div class="heading">
                  <div class="w-75">Zamówienie #{{ item.id }}</div>
                  <div>{{ item.createdAt.slice(0, 10) }} {{ item.createdAt.slice(11, 16) }}</div>
                </div>
              </button>
            </h2>
            <div :id="'collapse' + item.id" class="accordion-collapse collapse" :aria-labelledby="'heading' + item.id" data-bs-parent="#orderAccordion">
              <div class="accordion-body">
                <div class="ticketDetails" :key="ticket.id" v-for="ticket in item.tickets">
                  <div class="eventName">
                    <h5>{{ ticket.event.name }}</h5>
                  </div>
                  <div class="seatData">
                    <p>
                      Nazwa sektora: <strong>{{ ticket.seatInSector.seat.sector.name }}</strong>
                    </p>
                    <p>
                      Rząd: <strong>{{ ticket.seatInSector.seat.row }}</strong>
                    </p>
                    <p>
                      Numer: <strong>{{ ticket.seatInSector.seat.number }}</strong>
                    </p>
                  </div>
                  <div class="price">{{ ticket.seatInSector.sectorDetail.price }} zł</div>
                  <div class="download">
                    <a :href="'/ticket/bilet-' + ticket.id + '.pdf'" target="_blank">
                      <button class="previewButton">Podgląd<i class="bi bi-eye-fill"></i></button>
                    </a>
                    <a :href="'/download/Bilet-' + ticket.id + '.pdf'">
                      <button class="downloadButton">Pobierz bilet <i class="bi bi-download"></i></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import { mapWritableState } from 'pinia';
import { useUserStore } from '../store/User';
import axios from 'axios';

export default {
  name: 'koszyk',
  data() {
    return {
      fetchedOrders: [],
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ['user']),
  },
  components: {
    NavBar,
  },
  async created() {
    console.log(this.user.id);
    this.fetchedOrders = await axios.post('api/order/userOrders', { id: this.user.id });
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
.descriptionLabelContainer {
  width: 100%;
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
}
.heading {
  display: flex;
  width: 50%;
}
.ticketDetails {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;

  padding: 10px;
}
.ticketDetails:last-child {
  border-bottom: none;
}
.ticketDetails p {
  margin: 0px;
}
.downloadButton,
.previewButton {
  height: 40px;
  padding: 0px 10px;
  border: none;
  background-color: #f25757;
  color: white;
}
.downloadButton i,
.previewButton i {
  margin-left: 5px;
}
.previewButton {
  background-color: lightgray;
  margin: 10px;
  color: black;
}
.accordion-button:focus {
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  background-color: #f25757;
  color: white;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
