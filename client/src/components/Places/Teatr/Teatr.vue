<template>
  <div class="componentContainer mt-2">
    <h3>Wybierz sektor</h3>
    <div class="borderContainer">
      <div class="scene">Scena</div>
      <div class="sectorsContainer">
        <div class="sectorsLeftColumn">
          <div class="sector sector1" @click="controls.selectedSector = 7">
            <h5>Parter</h5>
          </div>
          <div class="sector sector2" @click="controls.selectedSector = 8">
            <h5>Balkon</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useTicketsStore } from '../../../store/Tickets';
export default {
  name: 'TeatrWandySiemaszkowej',
  data() {
    return {
      place: '',
      selectedSector: '',
    };
  },
  computed: {
    ...mapWritableState(useTicketsStore, ['controls']),
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
  margin: 0 auto;
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
  .sector1 {
    height: 300px;
    width: 80%;
  }

  .sector2 {
    height: 150px;
    width: 80%;
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
    width: 90%;
  }
  .sector2 {
    height: 150px;
    width: 90%;
  }
  .sector1 > h5,
  .sector2 > h5 {
    font-size: 14px;
  }
}
</style>
