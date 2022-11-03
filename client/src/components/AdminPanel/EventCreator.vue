<template>
  <div>
    <div class="pageBackground"></div>
    <div class="pageContainer">
      <h2>Kreator wydarzenia</h2>
      <div class="basicInfo">
        <h5 class="basicInfoTitle">Informacje podstawowe</h5>
        <!-- Nazwa -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control w-50" id="eventName" v-model="Event.event.name" placeholder="name@example.com" />
          <label for="eventName">Nazwa wydarzenia</label>
        </div>
        <!-- Data -->
        <div class="d-flex">
          <div class="form-floating mb-3">
            <input type="date" class="form-control w-100" id="eventDate" v-model="tempDate" @change="translateDate()" placeholder="23-12-322" />
            <label for="eventDate">Data wydarzenia</label>
          </div>
          <div class="form-floating d-flex mb-3 ms-3">
            <input type="time" class="form-control w-100" id="eventTime" v-model="tempTime" @change="translateDate()" placeholder="23-12-322" />
            <label for="eventTime">Godzina</label>
          </div>
        </div>
        <!-- Miejsce -->
        <div class="form-floating mb-3">
          <select
            class="form-select w-50"
            id="floatingSelect"
            v-model="Event.event.placeID"
            @change="placeChange()"
            aria-label="Floating label select example"
          >
            <option :value="0" selected></option>
            <option :key="place.id" v-for="place in places" :value="{ id: place.id, name: place.name }">{{ place.name }}</option>
          </select>
          <label for="floatingSelect">Miejsce wydarzenia</label>
        </div>
        <!-- Obraz -->
        <div class="mb-3">
          <label for="formFile" class="form-label">Wybierz obraz wydarzenia</label>
          <input class="form-control w-50" type="file" id="formFile" name="cover" ref="coverRef" />
        </div>
        <!-- Opis -->
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            style="height: 120px"
            v-model="Event.event.description"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="eventName">Opis wydarzenia</label>
        </div>
      </div>
      <div class="sectorInfo" v-if="Event.event.placeID && Event.event.placeID !== 0">
        <h5 class="sectorInfoTitle">Ustawienia sektorów</h5>
        <FilharmoniaPodkarpacka v-if="Event.event.placeID.name === 'Filharmonia Podkarpacka'" />
        <TeatrWandySiemaszkowej v-if="Event.event.placeID.name === 'Teatr Wandy Siemaszkowej'" />
      </div>
      <div class="w-50 mx-auto">
        <button class="btn btn-primary w-100" @click="handleCreateEvent()">Utwórz wydarzenie</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FilharmoniaPodkarpacka from './placesSchema/FilharmoniaPodkarpacka/Filharmonia.vue';
import TeatrWandySiemaszkowej from './placesSchema/TeatrWandySiemaszkowej/Teatr.vue';
import { mapWritableState, mapActions } from 'pinia';
import { useEventStore } from '../../store/Event';

export default {
  name: 'EventCreator',
  data() {
    return {
      places: [],
      tempDate: '',
      tempTime: '',
      cover: '',
    };
  },
  methods: {
    ...mapActions(useEventStore, ['uploadCover']),
    placeChange() {
      console.log(this.Event.event.placeID);
    },
    translateDate() {
      this.Event.event.date = `${this.tempDate}T${this.tempTime ? this.tempTime : '00:00'}:00.000Z`;
    },
    async sendImage() {
      let file = this.$refs.coverRef.files[0];

      if (!file) {
        console.error('no file selected');
        return;
      }

      let formData = new FormData();

      formData.append('file', file);
      await this.uploadCover(formData);
    },
    handleCreateEvent() {
      console.log(this.Event);
    },
  },
  computed: {
    ...mapWritableState(useEventStore, ['Event']),
  },
  created() {
    axios.get('/api/place/getplaces').then((response) => (this.places = response.data.places));
  },
  components: {
    FilharmoniaPodkarpacka,
    TeatrWandySiemaszkowej,
  },
};
</script>

<style scoped>
.pageBackground {
  background-image: url('../../assets/tlo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: top;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -95vh;
  z-index: -1;
}

.pageContainer {
  width: 90%;
  margin: 20px auto;
  margin-top: 60px;
  background: white;
  padding: 20px;
  box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
}

.basicInfo,
.sectorInfo {
  margin: 40px 0;
  padding: 10px 40px;
  border: 4px dotted #f25757;
}

.basicInfoTitle,
.sectorInfoTitle {
  position: relative;
  top: -25px;
  padding: 0 20px;
  background: white;
  width: max-content;
}
@media (max-width: 768px) {
  .sectorInfo {
    padding: 10px 20px;
  }
}
</style>
