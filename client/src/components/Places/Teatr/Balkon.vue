<template>
  <div class="largeLayout">
    <h4 @click="controls.selectedSector = ''"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do widoku sektorów</h4>
    <div class="scene">Scena</div>
    <div class="sectorContainer">
      <!-- Left column -->
      <div class="column">
        <div class="row">
          <span>I</span>
          <div
            class="seat"
            @click="handleClickSeat(940, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(940),
              occupied: event.occupiedSeatsId.includes(940),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(941, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(941),
              occupied: event.occupiedSeatsId.includes(941),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(942, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(942),
              occupied: event.occupiedSeatsId.includes(942),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(943, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(943),
              occupied: event.occupiedSeatsId.includes(943),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(944, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(944),
              occupied: event.occupiedSeatsId.includes(944),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(945, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(945),
              occupied: event.occupiedSeatsId.includes(945),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(946, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(946),
              occupied: event.occupiedSeatsId.includes(946),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(947, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(947),
              occupied: event.occupiedSeatsId.includes(947),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(948, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(948),
              occupied: event.occupiedSeatsId.includes(948),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(949, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(949),
              occupied: event.occupiedSeatsId.includes(949),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(950, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(950),
              occupied: event.occupiedSeatsId.includes(950),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(951, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(951),
              occupied: event.occupiedSeatsId.includes(951),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(952, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(952),
              occupied: event.occupiedSeatsId.includes(952),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(953, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(953),
              occupied: event.occupiedSeatsId.includes(953),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(954, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(954),
              occupied: event.occupiedSeatsId.includes(954),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(955, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(955),
              occupied: event.occupiedSeatsId.includes(955),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>II</span>
          <div
            class="seat"
            @click="handleClickSeat(956, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(956),
              occupied: event.occupiedSeatsId.includes(956),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(957, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(957),
              occupied: event.occupiedSeatsId.includes(957),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(958, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(958),
              occupied: event.occupiedSeatsId.includes(958),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(959, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(959),
              occupied: event.occupiedSeatsId.includes(959),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(960, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(960),
              occupied: event.occupiedSeatsId.includes(960),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(961, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(961),
              occupied: event.occupiedSeatsId.includes(961),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(962, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(962),
              occupied: event.occupiedSeatsId.includes(962),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(963, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(963),
              occupied: event.occupiedSeatsId.includes(963),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(964, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(964),
              occupied: event.occupiedSeatsId.includes(964),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(965, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(965),
              occupied: event.occupiedSeatsId.includes(965),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(966, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(966),
              occupied: event.occupiedSeatsId.includes(966),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(967, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(967),
              occupied: event.occupiedSeatsId.includes(967),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(968, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(968),
              occupied: event.occupiedSeatsId.includes(968),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(969, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(969),
              occupied: event.occupiedSeatsId.includes(969),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(970, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(970),
              occupied: event.occupiedSeatsId.includes(970),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(971, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(971),
              occupied: event.occupiedSeatsId.includes(971),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>III</span>

          <div
            class="seat"
            @click="handleClickSeat(972, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(972),
              occupied: event.occupiedSeatsId.includes(972),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(973, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(973),
              occupied: event.occupiedSeatsId.includes(973),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(974, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(974),
              occupied: event.occupiedSeatsId.includes(974),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(975, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(975),
              occupied: event.occupiedSeatsId.includes(975),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(976, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(976),
              occupied: event.occupiedSeatsId.includes(976),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(977, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(977),
              occupied: event.occupiedSeatsId.includes(977),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(978, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(978),
              occupied: event.occupiedSeatsId.includes(978),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(979, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(979),
              occupied: event.occupiedSeatsId.includes(979),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(980, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(980),
              occupied: event.occupiedSeatsId.includes(980),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(981, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(981),
              occupied: event.occupiedSeatsId.includes(981),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(982, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(982),
              occupied: event.occupiedSeatsId.includes(982),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(983, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(983),
              occupied: event.occupiedSeatsId.includes(983),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(984, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(984),
              occupied: event.occupiedSeatsId.includes(984),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(985, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(985),
              occupied: event.occupiedSeatsId.includes(985),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(986, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(986),
              occupied: event.occupiedSeatsId.includes(986),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(987, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(987),
              occupied: event.occupiedSeatsId.includes(987),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>IV</span>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(988, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(988),
                occupied: event.occupiedSeatsId.includes(988),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(989, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(989),
                occupied: event.occupiedSeatsId.includes(989),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(990, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(990),
                occupied: event.occupiedSeatsId.includes(990),
              }"
            >
              3
            </div>
            <div
              class="seat"
              @click="handleClickSeat(991, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(991),
                occupied: event.occupiedSeatsId.includes(991),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(992, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(992),
                occupied: event.occupiedSeatsId.includes(992),
              }"
            >
              5
            </div>
          </div>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(993, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(993),
                occupied: event.occupiedSeatsId.includes(993),
              }"
            >
              6
            </div>
            <div
              class="seat"
              @click="handleClickSeat(994, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(994),
                occupied: event.occupiedSeatsId.includes(994),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(995, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(995),
                occupied: event.occupiedSeatsId.includes(995),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(996, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(996),
                occupied: event.occupiedSeatsId.includes(996),
              }"
            >
              9
            </div>
            <div
              class="seat"
              @click="handleClickSeat(997, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(997),
                occupied: event.occupiedSeatsId.includes(997),
              }"
            >
              10
            </div>
          </div>
        </div>
        <div class="row">
          <span>V</span>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(998, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(998),
                occupied: event.occupiedSeatsId.includes(998),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(999, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(999),
                occupied: event.occupiedSeatsId.includes(999),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1000, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1000),
                occupied: event.occupiedSeatsId.includes(1000),
              }"
            >
              3
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1001, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1001),
                occupied: event.occupiedSeatsId.includes(1001),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1002, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1002),
                occupied: event.occupiedSeatsId.includes(1002),
              }"
            >
              5
            </div>
          </div>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(1003, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1003),
                occupied: event.occupiedSeatsId.includes(1003),
              }"
            >
              6
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1004, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1004),
                occupied: event.occupiedSeatsId.includes(1004),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1005, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1005),
                occupied: event.occupiedSeatsId.includes(1005),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1006, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1006),
                occupied: event.occupiedSeatsId.includes(1006),
              }"
            >
              9
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1007, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1007),
                occupied: event.occupiedSeatsId.includes(1007),
              }"
            >
              10
            </div>
          </div>
        </div>
        <div class="row">
          <span>VI</span>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(1008, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1008),
                occupied: event.occupiedSeatsId.includes(1008),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1009, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1009),
                occupied: event.occupiedSeatsId.includes(1009),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1010, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1010),
                occupied: event.occupiedSeatsId.includes(1010),
              }"
            >
              3
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1011, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1011),
                occupied: event.occupiedSeatsId.includes(1011),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1012, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1012),
                occupied: event.occupiedSeatsId.includes(1012),
              }"
            >
              5
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1013, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1013),
                occupied: event.occupiedSeatsId.includes(1013),
              }"
            >
              6
            </div>
          </div>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(1014, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1014),
                occupied: event.occupiedSeatsId.includes(1014),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1015, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1015),
                occupied: event.occupiedSeatsId.includes(1015),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1016, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1016),
                occupied: event.occupiedSeatsId.includes(1016),
              }"
            >
              9
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1017, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1017),
                occupied: event.occupiedSeatsId.includes(1017),
              }"
            >
              10
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1018, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1018),
                occupied: event.occupiedSeatsId.includes(1018),
              }"
            >
              11
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1019, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(1019),
                occupied: event.occupiedSeatsId.includes(1019),
              }"
            >
              12
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia';
import { useTicketsStore } from '../../../store/Tickets';
import { useEventsStore } from '../../../store/Events';

export default {
  name: 'TeatrBalkon',
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
      this.tickets?.forEach((ticket) => {
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
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border-bottom: 3px solid black;
}
.sectorContainer {
  width: 100% !important;
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
}
.column {
  display: flex;
  flex-direction: column;
  width: max-content;
}
.row {
  display: flex;
  justify-content: center;
}
.row > span {
  width: 50px;
  font-size: 1.3vw;
  cursor: default;
}
.seatGroup {
  display: flex;
  margin: 0 5px;
  padding: 0px;
  width: max-content;
}

.seat {
  width: 2vw;
  height: 2vw;
  margin: 2px;
  background: lightgray;
  text-align: center;
  padding: 0px;
  font-size: 1.3vw;
  cursor: pointer;
}
.empty {
  background: none;
  cursor: default;
}
.selected {
  background: green;
}
.occupied {
  background: rgb(182, 19, 19);
  pointer-events: none;
}
@media (max-width: 1023px) {
  .seat {
    width: 3vw;
    height: 3vw;
    margin: 2px;

    text-align: center;
    padding: 0px;
    font-size: 1.6vw;
    cursor: pointer;
  }
  .row > span {
    width: 50px;
    font-size: 1.6vw;
    cursor: default;
  }
}
@media (max-width: 767px) {
  .seat {
    width: 4vw;
    height: 4vw;
    margin: 2px;

    text-align: center;
    padding: 0px;
    font-size: 1.8vw;
    cursor: pointer;
  }
  .row > span {
    width: 30px;
    font-size: 1.8vw;
    cursor: default;
  }
}
</style>
