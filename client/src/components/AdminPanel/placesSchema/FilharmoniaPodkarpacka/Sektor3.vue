<template>
  <div>
    <div class="scene">Scena</div>
    <div class="sectorContainer">
      <div class="column">
        <span>I</span>
        <div class="seat" @click="handleClickSeat(647)" :class="{ occupied: Event.occupiedSeatsId.includes(647), selected: Event.reservedSeatsId.includes(647) }">1</div>
        <div class="seat" @click="handleClickSeat(648)" :class="{ occupied: Event.occupiedSeatsId.includes(648), selected: Event.reservedSeatsId.includes(648) }">2</div>
      </div>
      <div class="column">
        <span>II</span>
        <div class="seat" @click="handleClickSeat(649)" :class="{ occupied: Event.occupiedSeatsId.includes(649), selected: Event.reservedSeatsId.includes(649) }">3</div>
        <div class="seat" @click="handleClickSeat(650)" :class="{ occupied: Event.occupiedSeatsId.includes(650), selected: Event.reservedSeatsId.includes(650) }">4</div>
        <div class="seat" @click="handleClickSeat(651)" :class="{ occupied: Event.occupiedSeatsId.includes(651), selected: Event.reservedSeatsId.includes(651) }">5</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useEventStore } from '../../../../store/Event';

export default {
  name: 'FilharmoniaPodkarpackaSektor3',
  data() {
    return {};
  },
  methods: {
    ...mapActions(useEventStore, ['handleClickSeat']),
  },
  computed: {
    ...mapState(useEventStore, ['Event']),
  },
};
</script>

<style scoped>
.scene {
  width: 60%;
  /* margin: 0 auto; */
  margin-left: 15%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border-bottom: 3px solid black;
}

.sectorContainer {
  width: 100% !important;
  display: flex;
  justify-content: flex-end;
  margin: 50px auto;
  padding-right: 15%;
}

.column {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.column > span {
  font-size: 1.6vw;
  text-align: center;
  cursor: default;
}

.seat {
  width: 4vw;
  height: 4vw;
  margin: 3px;
  background: lightgray;
  text-align: center;
  padding: 0px;
  font-size: 1.6vw;
  padding: 0.7vw;
  cursor: pointer;
}

.selected {
  background: green;
}
.occupied {
  background: rgb(182, 19, 19);
  pointer-events: none;
}

@media (max-width: 768px) {
  .column > span {
    font-size: 1.8vw;
  }

  .seat {
    width: 5vw;
    height: 5vw;
    margin: 3px;
    background: lightgray;
    text-align: center;
    padding: 0px;
    font-size: 1.8vw;
    padding: 0.9vw;
  }
}

@media (max-width: 450px) {
  .column > span {
    font-size: 2.2vw;
  }

  .seat {
    width: 7vw;
    height: 7vw;
    margin: 3px;
    background: lightgray;
    text-align: center;
    padding: 0px;
    font-size: 2.2vw;
    padding: 1.2vw;
  }
}
</style>
