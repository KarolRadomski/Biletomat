<template>
  <div>
    <div class="pageContainer">
      <NavBar />
      <div class="d-flex justify-content-evenly">
        <div class="contentContainer">
          <div class="imageAndDescription">
            <img :src="event.coverUrl" class="eventCover" />
            <div>
              <h1>{{ event.name }}</h1>
              <p>{{ event.description }}</p>
            </div>
          </div>
          <div class="details">
            <div class="box where">
              <!-- <h3 class="boxTitle">Gdzie?</h3> -->
              <div class="infoContainer">
                <div class="icon"><i class="bi bi-geo-alt-fill"></i></div>
                <div class="content">
                  <p>
                    <strong>{{ event.placeName }}</strong>
                  </p>
                  <p style="margin-top: 10px">{{ event.placeAddress }}</p>
                </div>
              </div>
            </div>
            <div class="box when">
              <div class="infoContainer">
                <div class="icon"><i class="bi bi-calendar-event-fill"></i></div>
                <div class="content">
                  <p>
                    <strong>{{ event.date?.slice(0, 10) }} {{ event.date?.slice(11, 16) }}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="box price">
              <div class="infoContainer">
                <div class="icon"><i class="bi bi-cash-coin"></i></div>
                <div class="content">
                  <p>
                    Już od <strong>{{ returnTicketPrice }}</strong> zł
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-4" />
          <div class="placePlan" v-if="!controls.selectedSector">
            <Filharmonia v-if="event.placeID === 1" />
            <Teatr v-if="event.placeID === 2" />
          </div>
          <div class="sectorPlan" v-else>
            <Sector1 v-if="event.placeID === 1 && controls.selectedSector === 1" />
            <Sector2 v-if="event.placeID === 1 && controls.selectedSector === 2" />
            <Sector3 v-if="event.placeID === 1 && controls.selectedSector === 3" />
            <Sector4 v-if="event.placeID === 1 && controls.selectedSector === 4" />
            <Sector5 v-if="event.placeID === 1 && controls.selectedSector === 5" />
            <Sector6 v-if="event.placeID === 1 && controls.selectedSector === 6" />
            <Parter v-if="event.placeID === 2 && controls.selectedSector === 7" />
            <Balkon v-if="event.placeID === 2 && controls.selectedSector === 8" />
          </div>
        </div>
        <Cart />
      </div>
      <!-- <pre>{{ tickets }}</pre> -->
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import { mapState, mapWritableState, mapActions } from 'pinia';
import { useEventsStore } from '../store/Events';
import { useTicketsStore } from '../store/Tickets';
import Teatr from '../components/Places/Teatr/Teatr';
import Parter from '../components/Places/Teatr/Parter.vue';
import Balkon from '../components/Places/Teatr/Balkon.vue';
import Sector1 from '../components/Places/Filharmonia/Sektor1.vue';
import Sector2 from '../components/Places/Filharmonia/Sektor2.vue';
import Sector3 from '../components/Places/Filharmonia/Sektor3.vue';
import Sector4 from '../components/Places/Filharmonia/Sektor4.vue';
import Sector5 from '../components/Places/Filharmonia/Sektor5.vue';
import Sector6 from '../components/Places/Filharmonia/Sektor6.vue';
import Filharmonia from '../components/Places/Filharmonia/Filharmonia.vue';
import Cart from '../components/CartSide.vue';
export default {
  name: 'wydarzenie',
  data() {
    return {};
  },
  methods: {
    ...mapActions(useEventsStore, ['fetchEventDetails']),
  },
  computed: {
    ...mapState(useEventsStore, ['event']),
    ...mapWritableState(useTicketsStore, ['tickets']),
    ...mapWritableState(useTicketsStore, ['controls']),
    returnTicketPrice() {
      let min = 100000;
      this.event.sectorDetails?.forEach((sector) => {
        if (sector.price < min) {
          min = sector.price;
        }
      });
      return min;
    },
  },
  created() {
    this.fetchEventDetails(this.$route.params.id);
    this.controls.selectedSector = '';
  },
  components: {
    NavBar,
    Teatr,
    Parter,
    Balkon,
    Filharmonia,
    Sector1,
    Sector2,
    Sector3,
    Sector4,
    Sector5,
    Sector6,
    Cart,
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
  bottom: -470px;
  z-index: 1;
}
.contentContainer {
  width: 70%;
  margin-right: auto;
  margin-left: 20px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 120px;
}

.eventCover {
  width: 40%;
  margin-right: 30px;
}
.imageAndDescription {
  display: flex;
}

.details {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
}
.box {
  width: 30%;
  border: 6px dotted lightcoral;
  border-radius: 10px;
  height: 150px;
  text-align: center;
}
.boxTitle {
  height: 20%;
}
.infoContainer {
  display: flex;
  height: 100%;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 3vw;
}
.content {
  padding: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  line-height: 0.9;
  align-items: center;
  justify-content: center;
  width: 70%;
}
.content p {
  margin: 0;
}
.when p,
.price p {
  font-size: 18px;
}
</style>
