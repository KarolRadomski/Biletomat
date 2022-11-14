<template>
  <div class="largeLayout">
    <div class="scene">Scena</div>
    <div class="sectorContainer">
      <!-- Left column -->
      <div class="column">
        <div class="row">
          <span>I</span>
          <div
            class="seat"
            @click="handleClickSeat(940)"
            :class="{
              selected: Event.reservedSeatsId.includes(940),
              occupied: Event.occupiedSeatsId.includes(940),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(941)"
            :class="{
              selected: Event.reservedSeatsId.includes(941),
              occupied: Event.occupiedSeatsId.includes(941),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(942)"
            :class="{
              selected: Event.reservedSeatsId.includes(942),
              occupied: Event.occupiedSeatsId.includes(942),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(943)"
            :class="{
              selected: Event.reservedSeatsId.includes(943),
              occupied: Event.occupiedSeatsId.includes(943),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(944)"
            :class="{
              selected: Event.reservedSeatsId.includes(944),
              occupied: Event.occupiedSeatsId.includes(944),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(945)"
            :class="{
              selected: Event.reservedSeatsId.includes(945),
              occupied: Event.occupiedSeatsId.includes(945),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(946)"
            :class="{
              selected: Event.reservedSeatsId.includes(946),
              occupied: Event.occupiedSeatsId.includes(946),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(947)"
            :class="{
              selected: Event.reservedSeatsId.includes(947),
              occupied: Event.occupiedSeatsId.includes(947),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(948)"
            :class="{
              selected: Event.reservedSeatsId.includes(948),
              occupied: Event.occupiedSeatsId.includes(948),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(949)"
            :class="{
              selected: Event.reservedSeatsId.includes(949),
              occupied: Event.occupiedSeatsId.includes(949),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(950)"
            :class="{
              selected: Event.reservedSeatsId.includes(950),
              occupied: Event.occupiedSeatsId.includes(950),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(951)"
            :class="{
              selected: Event.reservedSeatsId.includes(951),
              occupied: Event.occupiedSeatsId.includes(951),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(952)"
            :class="{
              selected: Event.reservedSeatsId.includes(952),
              occupied: Event.occupiedSeatsId.includes(952),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(953)"
            :class="{
              selected: Event.reservedSeatsId.includes(953),
              occupied: Event.occupiedSeatsId.includes(953),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(954)"
            :class="{
              selected: Event.reservedSeatsId.includes(954),
              occupied: Event.occupiedSeatsId.includes(954),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(955)"
            :class="{
              selected: Event.reservedSeatsId.includes(955),
              occupied: Event.occupiedSeatsId.includes(955),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>II</span>
          <div
            class="seat"
            @click="handleClickSeat(956)"
            :class="{
              selected: Event.reservedSeatsId.includes(956),
              occupied: Event.occupiedSeatsId.includes(956),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(957)"
            :class="{
              selected: Event.reservedSeatsId.includes(957),
              occupied: Event.occupiedSeatsId.includes(957),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(958)"
            :class="{
              selected: Event.reservedSeatsId.includes(958),
              occupied: Event.occupiedSeatsId.includes(958),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(959)"
            :class="{
              selected: Event.reservedSeatsId.includes(959),
              occupied: Event.occupiedSeatsId.includes(959),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(960)"
            :class="{
              selected: Event.reservedSeatsId.includes(960),
              occupied: Event.occupiedSeatsId.includes(960),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(961)"
            :class="{
              selected: Event.reservedSeatsId.includes(961),
              occupied: Event.occupiedSeatsId.includes(961),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(962)"
            :class="{
              selected: Event.reservedSeatsId.includes(962),
              occupied: Event.occupiedSeatsId.includes(962),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(963)"
            :class="{
              selected: Event.reservedSeatsId.includes(963),
              occupied: Event.occupiedSeatsId.includes(963),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(964)"
            :class="{
              selected: Event.reservedSeatsId.includes(964),
              occupied: Event.occupiedSeatsId.includes(964),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(965)"
            :class="{
              selected: Event.reservedSeatsId.includes(965),
              occupied: Event.occupiedSeatsId.includes(965),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(966)"
            :class="{
              selected: Event.reservedSeatsId.includes(966),
              occupied: Event.occupiedSeatsId.includes(966),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(967)"
            :class="{
              selected: Event.reservedSeatsId.includes(967),
              occupied: Event.occupiedSeatsId.includes(967),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(968)"
            :class="{
              selected: Event.reservedSeatsId.includes(968),
              occupied: Event.occupiedSeatsId.includes(968),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(969)"
            :class="{
              selected: Event.reservedSeatsId.includes(969),
              occupied: Event.occupiedSeatsId.includes(969),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(970)"
            :class="{
              selected: Event.reservedSeatsId.includes(970),
              occupied: Event.occupiedSeatsId.includes(970),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(971)"
            :class="{
              selected: Event.reservedSeatsId.includes(971),
              occupied: Event.occupiedSeatsId.includes(971),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>III</span>

          <div
            class="seat"
            @click="handleClickSeat(972)"
            :class="{
              selected: Event.reservedSeatsId.includes(972),
              occupied: Event.occupiedSeatsId.includes(972),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(973)"
            :class="{
              selected: Event.reservedSeatsId.includes(973),
              occupied: Event.occupiedSeatsId.includes(973),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(974)"
            :class="{
              selected: Event.reservedSeatsId.includes(974),
              occupied: Event.occupiedSeatsId.includes(974),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(975)"
            :class="{
              selected: Event.reservedSeatsId.includes(975),
              occupied: Event.occupiedSeatsId.includes(975),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(976)"
            :class="{
              selected: Event.reservedSeatsId.includes(976),
              occupied: Event.occupiedSeatsId.includes(976),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(977)"
            :class="{
              selected: Event.reservedSeatsId.includes(977),
              occupied: Event.occupiedSeatsId.includes(977),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(978)"
            :class="{
              selected: Event.reservedSeatsId.includes(978),
              occupied: Event.occupiedSeatsId.includes(978),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(979)"
            :class="{
              selected: Event.reservedSeatsId.includes(979),
              occupied: Event.occupiedSeatsId.includes(979),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(980)"
            :class="{
              selected: Event.reservedSeatsId.includes(980),
              occupied: Event.occupiedSeatsId.includes(980),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(981)"
            :class="{
              selected: Event.reservedSeatsId.includes(981),
              occupied: Event.occupiedSeatsId.includes(981),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(982)"
            :class="{
              selected: Event.reservedSeatsId.includes(982),
              occupied: Event.occupiedSeatsId.includes(982),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(983)"
            :class="{
              selected: Event.reservedSeatsId.includes(983),
              occupied: Event.occupiedSeatsId.includes(983),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(984)"
            :class="{
              selected: Event.reservedSeatsId.includes(984),
              occupied: Event.occupiedSeatsId.includes(984),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(985)"
            :class="{
              selected: Event.reservedSeatsId.includes(985),
              occupied: Event.occupiedSeatsId.includes(985),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(986)"
            :class="{
              selected: Event.reservedSeatsId.includes(986),
              occupied: Event.occupiedSeatsId.includes(986),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(987)"
            :class="{
              selected: Event.reservedSeatsId.includes(987),
              occupied: Event.occupiedSeatsId.includes(987),
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
              @click="handleClickSeat(988)"
              :class="{
                selected: Event.reservedSeatsId.includes(988),
                occupied: Event.occupiedSeatsId.includes(988),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(989)"
              :class="{
                selected: Event.reservedSeatsId.includes(989),
                occupied: Event.occupiedSeatsId.includes(989),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(990)"
              :class="{
                selected: Event.reservedSeatsId.includes(990),
                occupied: Event.occupiedSeatsId.includes(990),
              }"
            >
              3
            </div>
            <div
              class="seat"
              @click="handleClickSeat(991)"
              :class="{
                selected: Event.reservedSeatsId.includes(991),
                occupied: Event.occupiedSeatsId.includes(991),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(992)"
              :class="{
                selected: Event.reservedSeatsId.includes(992),
                occupied: Event.occupiedSeatsId.includes(992),
              }"
            >
              5
            </div>
          </div>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(993)"
              :class="{
                selected: Event.reservedSeatsId.includes(993),
                occupied: Event.occupiedSeatsId.includes(993),
              }"
            >
              6
            </div>
            <div
              class="seat"
              @click="handleClickSeat(994)"
              :class="{
                selected: Event.reservedSeatsId.includes(994),
                occupied: Event.occupiedSeatsId.includes(994),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(995)"
              :class="{
                selected: Event.reservedSeatsId.includes(995),
                occupied: Event.occupiedSeatsId.includes(995),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(996)"
              :class="{
                selected: Event.reservedSeatsId.includes(996),
                occupied: Event.occupiedSeatsId.includes(996),
              }"
            >
              9
            </div>
            <div
              class="seat"
              @click="handleClickSeat(997)"
              :class="{
                selected: Event.reservedSeatsId.includes(997),
                occupied: Event.occupiedSeatsId.includes(997),
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
              @click="handleClickSeat(998)"
              :class="{
                selected: Event.reservedSeatsId.includes(998),
                occupied: Event.occupiedSeatsId.includes(998),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(999)"
              :class="{
                selected: Event.reservedSeatsId.includes(999),
                occupied: Event.occupiedSeatsId.includes(999),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1000)"
              :class="{
                selected: Event.reservedSeatsId.includes(1000),
                occupied: Event.occupiedSeatsId.includes(1000),
              }"
            >
              3
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1001)"
              :class="{
                selected: Event.reservedSeatsId.includes(1001),
                occupied: Event.occupiedSeatsId.includes(1001),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1002)"
              :class="{
                selected: Event.reservedSeatsId.includes(1002),
                occupied: Event.occupiedSeatsId.includes(1002),
              }"
            >
              5
            </div>
          </div>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(1003)"
              :class="{
                selected: Event.reservedSeatsId.includes(1003),
                occupied: Event.occupiedSeatsId.includes(1003),
              }"
            >
              6
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1004)"
              :class="{
                selected: Event.reservedSeatsId.includes(1004),
                occupied: Event.occupiedSeatsId.includes(1004),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1005)"
              :class="{
                selected: Event.reservedSeatsId.includes(1005),
                occupied: Event.occupiedSeatsId.includes(1005),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1006)"
              :class="{
                selected: Event.reservedSeatsId.includes(1006),
                occupied: Event.occupiedSeatsId.includes(1006),
              }"
            >
              9
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1007)"
              :class="{
                selected: Event.reservedSeatsId.includes(1007),
                occupied: Event.occupiedSeatsId.includes(1007),
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
              @click="handleClickSeat(1008)"
              :class="{
                selected: Event.reservedSeatsId.includes(1008),
                occupied: Event.occupiedSeatsId.includes(1008),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1009)"
              :class="{
                selected: Event.reservedSeatsId.includes(1009),
                occupied: Event.occupiedSeatsId.includes(1009),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1010)"
              :class="{
                selected: Event.reservedSeatsId.includes(1010),
                occupied: Event.occupiedSeatsId.includes(1010),
              }"
            >
              3
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1011)"
              :class="{
                selected: Event.reservedSeatsId.includes(1011),
                occupied: Event.occupiedSeatsId.includes(1011),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1012)"
              :class="{
                selected: Event.reservedSeatsId.includes(1012),
                occupied: Event.occupiedSeatsId.includes(1012),
              }"
            >
              5
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1013)"
              :class="{
                selected: Event.reservedSeatsId.includes(1013),
                occupied: Event.occupiedSeatsId.includes(1013),
              }"
            >
              6
            </div>
          </div>
          <div class="seatGroup">
            <div
              class="seat"
              @click="handleClickSeat(1014)"
              :class="{
                selected: Event.reservedSeatsId.includes(1014),
                occupied: Event.occupiedSeatsId.includes(1014),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1015)"
              :class="{
                selected: Event.reservedSeatsId.includes(1015),
                occupied: Event.occupiedSeatsId.includes(1015),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1016)"
              :class="{
                selected: Event.reservedSeatsId.includes(1016),
                occupied: Event.occupiedSeatsId.includes(1016),
              }"
            >
              9
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1017)"
              :class="{
                selected: Event.reservedSeatsId.includes(1017),
                occupied: Event.occupiedSeatsId.includes(1017),
              }"
            >
              10
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1018)"
              :class="{
                selected: Event.reservedSeatsId.includes(1018),
                occupied: Event.occupiedSeatsId.includes(1018),
              }"
            >
              11
            </div>
            <div
              class="seat"
              @click="handleClickSeat(1019)"
              :class="{
                selected: Event.reservedSeatsId.includes(1019),
                occupied: Event.occupiedSeatsId.includes(1019),
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
import { mapState, mapActions } from 'pinia';
import { useEventStore } from '../../../../store/Event';

export default {
  name: 'Balkon',
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
