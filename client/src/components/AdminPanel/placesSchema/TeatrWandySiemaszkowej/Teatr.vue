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
              place = 'Teatr Wandy Siemaszkowej';
              selectedSector = 7;
            "
          >
            <h5>Parter</h5>
          </div>
          <div
            class="sector sector2"
            data-bs-toggle="modal"
            data-bs-target="#sectorModal"
            @click="
              showModalSectorDetails = true;
              place = 'Teatr Wandy Siemaszkowej';
              selectedSector = 8;
            "
          >
            <h5>Balkon</h5>
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
  align-items: center;
  width: 100%;
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
  height: 300px;
  width: 40%;
}

.sector2 {
  height: 150px;
  width: 40%;
}

@media (max-width: 768px) {
  .sectorsLeftColumn {
    width: 70%;
    padding-right: 0px;
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
  .sector1 {
    height: 100px;
  }
  .sector2 {
    height: 150px;
    width: 80%;
    align-self: flex-end;
  }
  .sector1 > h5,
  .sector2 > h5 {
    font-size: 14px;
  }
}
</style>
