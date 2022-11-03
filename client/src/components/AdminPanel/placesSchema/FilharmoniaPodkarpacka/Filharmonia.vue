<template>
  <div class="componentContainer">
    <p>Wybierz sektor aby ustalić jego szczegóły</p>
    <div class="borderContainer">
      <div class="scene">Scena</div>
      <div class="sectorsContainer">
        <div class="sectorsLeftColumn">
          <div
            class="sector sector1"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Filharmonia Podkarpacka';
              selectedSector = 1;
            "
          >
            <h5>Sektor 1</h5>
          </div>
          <div
            class="sector sector2"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Filharmonia Podkarpacka';
              selectedSector = 2;
            "
          >
            <h5>Sektor 2</h5>
          </div>
        </div>
        <div class="sectorsRightColumn">
          <div
            class="sector sector3"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Filharmonia Podkarpacka';
              selectedSector = 3;
            "
          >
            <h5>Sektor 3</h5>
          </div>
          <div
            class="sector sector4"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Filharmonia Podkarpacka';
              selectedSector = 4;
            "
          >
            <h5>Sektor 4</h5>
          </div>
          <div
            class="sector sector5"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Filharmonia Podkarpacka';
              selectedSector = 5;
            "
          >
            <h5>Sektor 5</h5>
          </div>
          <div
            class="sector sector6"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Filharmonia Podkarpacka';
              selectedSector = 6;
            "
          >
            <h5>Sektor 6</h5>
          </div>
        </div>
      </div>
    </div>
    <SectorDetailsModal v-if="true" :place="place" :selectedSector="selectedSector" />
  </div>
</template>

<script>
import axios from 'axios';
import SectorDetailsModal from '../../SectorDetailsModal.vue';
export default {
  name: 'FilharmoniaPodkarpacka',
  data() {
    return {
      showModalSectorDetails: false,
      place: '',
      selectedSector: '',
    };
  },
  components: {
    SectorDetailsModal,
  },
};
</script>

<style scoped>
.scene {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border-bottom: 3px solid black;
}
.borderContainer {
  border: 1px solid black;
}
.sectorsContainer {
  display: flex;
  margin-top: 20px;
}

.sectorsLeftColumn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  padding-right: 5%;
}

.sectorsRightColumn {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px 0px;
  width: 20%;
}

.sector {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  margin: 20px;
  border-radius: 8px;
  cursor: pointer;
}

.sector1 {
  height: 200px;
  /* margin-right: 20%; */
  align-self: flex-end;
  width: 70%;
}

.sector2 {
  height: 300px;
  width: 90%;
  align-self: flex-end;
}

.sector3,
.sector4,
.sector5,
.sector6 {
  height: 80px;
  width: 60%;
}

@media (max-width: 768px) {
  .sectorsLeftColumn {
    width: 70%;
    padding-right: 0px;
  }

  .sectorsRightColumn {
    width: 30%;
  }
  .sector3,
  .sector4,
  .sector5,
  .sector6 {
    height: 80px;
    width: 80%;
  }

  .sector3 > h5,
  .sector4 > h5,
  .sector5 > h5,
  .sector6 > h5 {
    font-size: 16px;
  }
}
@media (max-width: 425px) {
  .sector {
    margin: 10px;
  }
  .sectorsLeftColumn {
    width: 70%;
    padding-right: 0px;
  }
  .sectorsRightColumn {
    width: 30%;
  }
  .sector1 {
    height: 100px;
  }
  .sector2 {
    height: 150px;
    width: 80%;
    align-self: flex-end;
  }
  .sector3,
  .sector4,
  .sector5,
  .sector6 {
    height: 50px;
    width: 80%;
  }
  .sector1 > h5,
  .sector2 > h5,
  .sector3 > h5,
  .sector4 > h5,
  .sector5 > h5,
  .sector6 > h5 {
    font-size: 14px;
  }
}
</style>
