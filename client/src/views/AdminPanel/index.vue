<template>
  <div>
    <AuthorNavBar />
    <div class="pageContainer">
      <AdminSideBar active="upcoming" />
      <div class="content">
        <h3>Nadchodzące wydarzenia</h3>
        <div class="d-flex justify-between mt-5">
          <div :key="event.id" v-for="event in events" class="card p-3 bg-white">
            <i class="fa fa-apple"></i>
            <div class="about-product text-center mt-2">
              <img class="eventCover" :src="event.coverUrl" />
              <div>
                <h5>{{ event.name }}</h5>
                <h6 class="mt-0 text-black-50">
                  {{ `${event.date.slice(8, 10)}.${event.date.slice(5, 7)}.${event.date.slice(0, 4)} ${event.date.slice(11, 16)}` }}
                </h6>
              </div>
            </div>
            <div class="stats mt-2">
              <div class="d-flex justify-content-between p-price">
                <span>Początek sprzedaży:</span
                ><span>{{
                  `${event.startSellingDate.slice(8, 10)}.${event.startSellingDate.slice(5, 7)}.${event.startSellingDate.slice(0, 4)} 
                  ${event.startSellingDate.slice(11, 16)}`
                }}</span>
              </div>
              <div class="d-flex justify-content-between p-price">
                <span>Koniec sprzedaży:</span
                ><span>{{
                  `${event.endSellingDate.slice(8, 10)}.${event.endSellingDate.slice(5, 7)}.${event.endSellingDate.slice(0, 4)} 
                  ${event.endSellingDate.slice(11, 16)}`
                }}</span>
              </div>
              <div class="d-flex justify-content-between p-price">
                <span>Miejsce:</span><span>{{ event.place.name }}</span>
              </div>
            </div>
            <div class="mt-4">
              <a :href="'/admin/edit/' + event.id">
                <button class="btn editButton w-100">Edytuj</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AuthorNavBar from '../../components/AuthorNavBar.vue';
import AdminSideBar from '../../components/AdminPanel/AdminSideBar.vue';
import { mapState } from 'pinia';
import { useUserStore } from '../../store/User';

export default {
  name: 'AdminView',
  data() {
    return {
      events: [],
    };
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    AuthorNavBar,
    AdminSideBar,
  },
  created() {
    axios.get('api/event/getall').then((response) => (this.events = response.data.events));
  },
};
</script>
<style scoped>
.pageContainer {
  display: flex;
  width: 100%;
}
.content {
  width: 95%;
  padding: 40px;
  margin-left: auto;
}

.card {
  width: 33%;
}
.eventCover {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.editButton {
  background-color: #f25757;
  color: white;
  font-weight: 600;
}
@media (max-width: 575px) {
  .pageContainer {
    flex-direction: column;
  }
  .content {
    margin-top: 0px;
    width: 100%;
  }
}
</style>
