<template>
  <div class="sectionContainer">
    <h1>Nadchodzące wydarzenia</h1>
    <div class="events">
      <!-- <div class="eventCard" :key="event.id" v-for="event in events"> -->
      <div class="container d-flex">
        <div class="card eventCard" :key="event.id" v-for="event in events">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img :src="event.coverUrl" class="img-fluid eventCover" />
          </div>
          <div class="card-body bodyContainer">
            <div>
              <h5 class="card-title">{{ event.name }}</h5>
            </div>
            <div>
              <p class="card-text">
                <i class="bi bi-calendar-event me-2"></i>{{ event.date.slice(0, 10) }} {{ event.date.slice(11, 16) }}<br />
                <i class="bi bi-bank2"></i> {{ event.placeName }}
              </p>

              <!-- <button class="buyButton" @click="buyClicked"><i class="bi bi-cart2 me-2"></i>Kup bilet</button> -->
              <router-link :to="{ path: `/wydarzenie/${event.id}` }">
                <button class="buyButton"><i class="bi bi-cart2 me-2"></i>Kup bilet</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ event }}
  </div>
</template>

<script>
import { useEventsStore } from '../store/Events';
import { mapWritableState, mapActions } from 'pinia';
export default {
  name: 'UpcomingEvents',
  data() {
    return {};
  },
  methods: {
    buyClicked() {
      console.log('test');
    },
  },
  computed: {
    ...mapWritableState(useEventsStore, ['events']),
  },
};
</script>

<style scoped>
.sectionContainer {
  width: 80%;
  margin: 40px auto 0 auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  margin-top: 120px;
}

.events {
  display: flex;
  margin: 0 2%;
  /* justify-content: space-between; */
}

.eventCard {
  width: 30%;
  margin: 0 1%;
  border: 1px solid lightgray;
}

.eventCover {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-title {
  font-size: 1.2aem;
  font-weight: 600;
}

.bodyContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

hr {
  margin: 2px;
}

.buyButton {
  width: 100%;
  border: none;
  height: 50px;
  color: white;
  font-size: large;
  background: #f25757;
  margin-top: 20px;
}
</style>
