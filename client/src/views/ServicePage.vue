<template>
  <div>
    <div class="pageContainer">
      <div class="contentContainer">
        <h4 class="text-center">Dane biletu</h4>
        <div class="sectionBorder">
          <h6 class="sectionBorderTitle text-center">Dane kupującego</h6>
          <p class="m-1">
            Imię: <strong>{{ ticketData.data.order.user.fname }}</strong>
          </p>
          <p class="m-1">
            Nazwisko: <strong>{{ ticketData.data.order.user.lname }}</strong>
          </p>
        </div>
        <div class="sectionBorder">
          <h6 class="sectionBorderTitle text-center">Dane wydarzenia</h6>
          <p class="m-1">
            Nazwa wydarzenia: <strong>{{ ticketData.data.event.name }}</strong>
          </p>
          <p class="m-1">
            Data: <strong>{{ ticketData.data.event.date.slice(0, 10) }} {{ ticketData.data.event.date.slice(11, 16) }}</strong>
          </p>
        </div>
        <div class="sectionBorder">
          <h6 class="sectionBorderTitle text-center">Dane biletu</h6>
          <p class="m-1">
            Sektor: <strong>{{ ticketData.data.seatInSector.seat.sector.name }}</strong>
          </p>
          <p class="m-1">
            Rząd: <strong>{{ ticketData.data.seatInSector.seat.row }}</strong>
          </p>
          <p class="m-1">
            Numer: <strong>{{ ticketData.data.seatInSector.seat.number }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ServicePage',
  data() {
    return {
      ticketData: {},
    };
  },
  methods: {},
  computed: {},

  async created() {
    console.log(this.$route.params.id);
    this.ticketData = await axios.post('/api/order/service', { id: this.$route.params.id });
  },
};
</script>

<style scoped>
.pageContainer {
  background-image: url('../assets/tlo.png');
  /* background-size: fill; */
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: top;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 1;
}
.contentContainer {
  width: 95%;
  margin: 50px auto;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
}
.sectionBorder {
  margin: 30px 0;
  padding: 0px 10px;
  border: 4px dotted #f25757;
}

.sectionBorderTitle {
  position: relative;
  top: -13px;
  padding: 0 10px;
  background: white;
  width: max-content;
}
</style>
