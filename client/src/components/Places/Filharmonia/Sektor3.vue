<template>
  <div>
    <h4 @click="controls.selectedSector = ''"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do widoku sektorów</h4>
    <div class="scene">Scena</div>
    <div class="sectorContainer">
      <div class="column">
        <span>I</span>
        <div class="seat" @click="handleClickSeat(647, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(647), selected: selectedSeats.includes(647) }">1</div>
        <div class="seat" @click="handleClickSeat(648, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(648), selected: selectedSeats.includes(648) }">2</div>
      </div>
      <div class="column">
        <span>II</span>
        <div class="seat" @click="handleClickSeat(649, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(649), selected: selectedSeats.includes(649) }">3</div>
        <div class="seat" @click="handleClickSeat(650, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(650), selected: selectedSeats.includes(650) }">4</div>
        <div class="seat" @click="handleClickSeat(651, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(651), selected: selectedSeats.includes(651) }">5</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia';
import { useTicketsStore } from '../../../store/Tickets';
import { useEventsStore } from '../../../store/Events';

export default {
  name: 'FilharmoniaPodkarpackaSektor3',
  data() {
    return {
      sectorPrice: '',
    };
  },
  methods: {
    ...mapActions(useTicketsStore, ['handleClickSeat']),
  },
  computed: {
    ...mapWritableState(useTicketsStore, ['tickets', 'controls']),
    ...mapWritableState(useEventsStore, ['event']),
    selectedSeats() {
      let selectedSeats = [];
      this.tickets.forEach((ticket) => {
        if (ticket.eventID === this.event.id) selectedSeats.push(ticket.seatID);
      });
      return selectedSeats;
    },
  },
  created() {
    this.event.sectorDetails.forEach((sector) => {
      if (sector.sectorId === this.controls.selectedSector) this.sectorPrice = sector.price;
    });
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
