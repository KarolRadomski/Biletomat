<template>
  <div>
    <div class="pageBackground"></div>
    <div class="pageContainer">
      <h2>Kreator wydarzenia</h2>
      <div class="basicInfo">
        <h5 class="basicInfoTitle">Informacje podstawowe</h5>
        <!-- Nazwa -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control w-50" id="eventName" v-model="Event.event.name"
            placeholder="name@example.com" />
          <label for="eventName">Nazwa wydarzenia</label>
        </div>
        <!-- Data -->
        <div class="d-flex dateTimeContainer">
          <div class="form-floating mb-3">
            <input type="date" class="form-control w-100" id="eventDate" v-model="tempDate"
              @change="translateDate('date')" placeholder="23-12-322" />
            <label for="eventDate">Data wydarzenia</label>
          </div>
          <div class="form-floating d-flex mb-3 timeContainer">
            <input type="time" class="form-control w-100" id="eventTime" v-model="tempTime"
              @change="translateDate('date')" placeholder="23-12-322" />
            <label for="eventTime">Godzina</label>
          </div>
        </div>
        <!-- Miejsce -->
        <div class="form-floating mb-3">
          <select class="form-select w-50" id="floatingSelect" v-model="Event.event.placeID"
            @change="handleChangePlace()" aria-label="Floating label select example">
            <option :value="0" selected></option>
            <option :key="place.id" v-for="place in places" :value="place.id">{{ place.name }}</option>
          </select>
          <label for="floatingSelect">Miejsce wydarzenia</label>
        </div>
        <!-- Obraz -->
        <div class="mb-3">
          <label for="formFile" class="form-label">Wybierz obraz wydarzenia</label>
          <div class="d-flex">
            <input class="form-control w-50" type="file" id="formFile" name="cover" ref="coverRef"
              @change="() => fileChange()" />
            <div class="spinner-border spinner-border-sm mt-2 ms-2" v-if="uploadState === 1" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div v-if="uploadState === 2">
              <i class="bi bi-check-lg ms-2" style="font-size: 24px; position: relative; top: 2px; color: green" />
            </div>
          </div>
        </div>
        <!-- Opis -->
        <div class="form-floating mb-3">
          <textarea class="form-control" style="height: 120px" v-model="Event.event.description"
            placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="eventName">Opis wydarzenia</label>
        </div>
        <div class="dateTimeContainer">
          <h5 style="font-size: 1rem;">Początek sprzedaży</h5>
          <div class="d-flex">
            <div class="form-floating mb-3">
              <input type="date" class="form-control w-100" id="eventDate" v-model="tempDateStart"
                @change="translateDate('start')" placeholder="23-12-322" />
              <label for="eventDate">Data</label>
            </div>
            <div class="form-floating d-flex mb-3 timeContainer">
              <input type="time" class="form-control w-100" id="eventTime" v-model="tempTimeStart"
                @change="translateDate('start')" placeholder="23-12-322" />
              <label for="eventTime">Godzina</label>
            </div>
          </div>
        </div>
        <div class="dateTimeContainer">
          <h5 style="font-size: 1rem;">Koniec sprzedaży</h5>
          <div class="d-flex">
            <div class="form-floating mb-3">
              <input type="date" class="form-control w-100" id="eventDate" v-model="tempDateEnd"
                @change="translateDate('end')" placeholder="23-12-322" />
              <label for="eventDate">Data</label>
            </div>
            <div class="form-floating d-flex mb-3 timeContainer">
              <input type="time" class="form-control w-100" id="eventTime" v-model="tempTimeEnd"
                @change="translateDate('end')" placeholder="23-12-322" />
              <label for="eventTime">Godzina</label>
            </div>
          </div>
        </div>
      </div>
      <div class="sectorInfo" v-if="Event.event.placeID && Event.event.placeID !== 0">
        <h5 class="sectorInfoTitle">Ustawienia sektorów</h5>
        <FilharmoniaPodkarpacka v-if="Event.event.placeID === 1" />
        <TeatrWandySiemaszkowej v-if="Event.event.placeID === 2" />
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
      tempDateStart: '',
      tempTimeStart: '',
      tempDateEnd: '',
      tempTimeEnd: '',
      cover: '',
      uploadState: 0,
    };
  },
  methods: {
    ...mapActions(useEventStore, ['uploadCover', 'handleChangePlace']),
    async fileChange() {
      this.uploadState = 1;
      let file = this.$refs.coverRef.files[0];

      if (!file) {
        this.uploadState = 0;
        console.error('no file selected');
        return;
      }

      let formData = new FormData();

      formData.append('file', file);
      await this.uploadCover(formData);
      this.uploadState = 2;
    },
    translateDate(formType) {
      switch (formType) {
        case 'date':
          this.Event.event.date = `${this.tempDate}T${this.tempTime ? this.tempTime : '00:00'}:00.000Z`;
          break;
        case 'start':

          this.Event.event.startSellingDate = `${this.tempDateStart}T${this.tempTimeStart ? this.tempTimeStart : '00:00'}:00.000Z`;
          break;
        case 'end':
          this.Event.event.endSellingDate = `${this.tempDateEnd}T${this.tempTimeEnd ? this.tempTimeEnd : '00:00'}:00.000Z`;
          break;
      }
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
      if (this.Event.event.name === '' && this.Event.event.date === '' && this.Event.event.coverUrl === '' && this.Event.event.description === '') {
        console.log("Brak nazwy wydarzenia, daty, zdjęcia lub opisu");
        return 0;
      }
      let emptyFlag = false
      this.Event.sectorDetails.forEach((sector) => {
        if (sector.price === '') {
          console.log("Nie ustawiono ceny dla sektora ");
          emptyFlag = true;
          return 0;
        }
      })
      if (!emptyFlag) {
        console.log("Weryfikacja przebiegła pomyślnie");
        return 1;
      }
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

.timeContainer {
  margin-left: 20px;
}

@media (max-width: 768px) {

  #eventName,
  #eventDate,
  #eventTime,
  #floatingSelect,
  #formFile,
  label {
    width: 100% !important;
    font-size: 14px;
  }

  .basicInfoTitle,
  .sectorInfoTitle {
    padding: 10px 20px;
  }

  .sectorInfo {
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {

  .basicInfoTitle,
  .sectorInfoTitle {
    top: -32px;
    padding: 10px 0px;
    margin: 0px;
    font-size: 16px;
    margin: 0 auto;
  }

  .sectorInfo,
  .basicInfo {
    padding: 10px 20px;
  }

  .dateTimeContainer {
    flex-direction: column;
  }

  .timeContainer {
    margin-left: 0px;
  }
}
</style>
