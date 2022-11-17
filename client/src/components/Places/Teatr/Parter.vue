<template>
  <div class="largeLayout">
    <h4 @click="controls.selectedSector = ''"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do widoku sektorów</h4>
    <div class="scene">Scena</div>
    <div class="sectorContainer">
      <!-- Left column -->
      <div class="column">
        <div class="row">
          <span>I</span>
          <div class="treeSeatsFirst">
            <div
              class="seat"
              @click="handleClickSeat(667, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(667),
                occupied: event.occupiedSeatsId.includes(667),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(668, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(668),
                occupied: event.occupiedSeatsId.includes(668),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(669, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(669),
                occupied: event.occupiedSeatsId.includes(669),
              }"
            >
              3
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(670, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(670),
                occupied: event.occupiedSeatsId.includes(670),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(671, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(671),
                occupied: event.occupiedSeatsId.includes(671),
              }"
            >
              5
            </div>
            <div
              class="seat"
              @click="handleClickSeat(672, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(672),
                occupied: event.occupiedSeatsId.includes(672),
              }"
            >
              6
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(673, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(673),
                occupied: event.occupiedSeatsId.includes(673),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(674, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(674),
                occupied: event.occupiedSeatsId.includes(674),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(675, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(675),
                occupied: event.occupiedSeatsId.includes(675),
              }"
            >
              9
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(676, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(676),
                occupied: event.occupiedSeatsId.includes(676),
              }"
            >
              10
            </div>
            <div
              class="seat"
              @click="handleClickSeat(677, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(677),
                occupied: event.occupiedSeatsId.includes(677),
              }"
            >
              11
            </div>
            <div
              class="seat"
              @click="handleClickSeat(678, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(678),
                occupied: event.occupiedSeatsId.includes(678),
              }"
            >
              12
            </div>
          </div>
          <div class="treeSeatsLast">
            <div
              class="seat"
              @click="handleClickSeat(679, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(679),
                occupied: event.occupiedSeatsId.includes(679),
              }"
            >
              13
            </div>
            <div
              class="seat"
              @click="handleClickSeat(680, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(680),
                occupied: event.occupiedSeatsId.includes(680),
              }"
            >
              14
            </div>
            <div
              class="seat"
              @click="handleClickSeat(681, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(681),
                occupied: event.occupiedSeatsId.includes(681),
              }"
            >
              15
            </div>
          </div>
        </div>
        <div class="row">
          <span>II</span>
          <div class="treeSeatsFirst">
            <div
              class="seat"
              @click="handleClickSeat(682, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(682),
                occupied: event.occupiedSeatsId.includes(682),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(683, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(683),
                occupied: event.occupiedSeatsId.includes(683),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(684, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(684),
                occupied: event.occupiedSeatsId.includes(684),
              }"
            >
              3
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(685, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(685),
                occupied: event.occupiedSeatsId.includes(685),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(686, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(686),
                occupied: event.occupiedSeatsId.includes(686),
              }"
            >
              5
            </div>
            <div
              class="seat"
              @click="handleClickSeat(687, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(687),
                occupied: event.occupiedSeatsId.includes(687),
              }"
            >
              6
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(688, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(688),
                occupied: event.occupiedSeatsId.includes(688),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(689, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(689),
                occupied: event.occupiedSeatsId.includes(689),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(690, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(690),
                occupied: event.occupiedSeatsId.includes(690),
              }"
            >
              9
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(691, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(691),
                occupied: event.occupiedSeatsId.includes(691),
              }"
            >
              10
            </div>
            <div
              class="seat"
              @click="handleClickSeat(692, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(692),
                occupied: event.occupiedSeatsId.includes(692),
              }"
            >
              11
            </div>
            <div
              class="seat"
              @click="handleClickSeat(693, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(693),
                occupied: event.occupiedSeatsId.includes(693),
              }"
            >
              12
            </div>
          </div>
          <div class="treeSeatsLast">
            <div
              class="seat"
              @click="handleClickSeat(694, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(694),
                occupied: event.occupiedSeatsId.includes(694),
              }"
            >
              13
            </div>
            <div
              class="seat"
              @click="handleClickSeat(695, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(695),
                occupied: event.occupiedSeatsId.includes(695),
              }"
            >
              14
            </div>
            <div
              class="seat"
              @click="handleClickSeat(696, event.id, sectorPrice)"
              :class="{
                selected: selectedSeats.includes(696),
                occupied: event.occupiedSeatsId.includes(696),
              }"
            >
              15
            </div>
          </div>
        </div>
        <div class="row">
          <span>III</span>

          <div
            class="seat"
            @click="handleClickSeat(697, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(697),
              occupied: event.occupiedSeatsId.includes(697),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(698, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(698),
              occupied: event.occupiedSeatsId.includes(698),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(699, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(699),
              occupied: event.occupiedSeatsId.includes(699),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(700, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(700),
              occupied: event.occupiedSeatsId.includes(700),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(701, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(701),
              occupied: event.occupiedSeatsId.includes(701),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(702, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(702),
              occupied: event.occupiedSeatsId.includes(702),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(703, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(703),
              occupied: event.occupiedSeatsId.includes(703),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(704, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(704),
              occupied: event.occupiedSeatsId.includes(704),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(705, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(705),
              occupied: event.occupiedSeatsId.includes(705),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(706, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(706),
              occupied: event.occupiedSeatsId.includes(706),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(707, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(707),
              occupied: event.occupiedSeatsId.includes(707),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(708, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(708),
              occupied: event.occupiedSeatsId.includes(708),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(709, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(709),
              occupied: event.occupiedSeatsId.includes(709),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(710, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(710),
              occupied: event.occupiedSeatsId.includes(710),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(711, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(711),
              occupied: event.occupiedSeatsId.includes(711),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(712, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(712),
              occupied: event.occupiedSeatsId.includes(712),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>IV</span>
          <div
            class="seat"
            @click="handleClickSeat(713, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(713),
              occupied: event.occupiedSeatsId.includes(713),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(714, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(714),
              occupied: event.occupiedSeatsId.includes(714),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(715, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(715),
              occupied: event.occupiedSeatsId.includes(715),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(716, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(716),
              occupied: event.occupiedSeatsId.includes(716),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(717, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(717),
              occupied: event.occupiedSeatsId.includes(717),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(718, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(718),
              occupied: event.occupiedSeatsId.includes(718),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(719, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(719),
              occupied: event.occupiedSeatsId.includes(719),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(720, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(720),
              occupied: event.occupiedSeatsId.includes(720),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(721, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(721),
              occupied: event.occupiedSeatsId.includes(721),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(722, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(722),
              occupied: event.occupiedSeatsId.includes(722),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(723, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(723),
              occupied: event.occupiedSeatsId.includes(723),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(724, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(724),
              occupied: event.occupiedSeatsId.includes(724),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(725, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(725),
              occupied: event.occupiedSeatsId.includes(725),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(726, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(726),
              occupied: event.occupiedSeatsId.includes(726),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(727, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(727),
              occupied: event.occupiedSeatsId.includes(727),
            }"
          >
            15
          </div>
          <div class="seat empty"></div>
        </div>
        <div class="row">
          <span>V</span>
          <div
            class="seat"
            @click="handleClickSeat(728, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(728),
              occupied: event.occupiedSeatsId.includes(728),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(729, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(729),
              occupied: event.occupiedSeatsId.includes(729),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(730, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(730),
              occupied: event.occupiedSeatsId.includes(730),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(731, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(731),
              occupied: event.occupiedSeatsId.includes(731),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(732, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(732),
              occupied: event.occupiedSeatsId.includes(732),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(733, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(733),
              occupied: event.occupiedSeatsId.includes(733),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(734, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(734),
              occupied: event.occupiedSeatsId.includes(734),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(735, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(735),
              occupied: event.occupiedSeatsId.includes(735),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(736, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(736),
              occupied: event.occupiedSeatsId.includes(736),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(737, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(737),
              occupied: event.occupiedSeatsId.includes(737),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(738, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(738),
              occupied: event.occupiedSeatsId.includes(738),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(739, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(739),
              occupied: event.occupiedSeatsId.includes(739),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(740, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(740),
              occupied: event.occupiedSeatsId.includes(740),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(741, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(741),
              occupied: event.occupiedSeatsId.includes(741),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(742, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(742),
              occupied: event.occupiedSeatsId.includes(742),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(743, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(743),
              occupied: event.occupiedSeatsId.includes(743),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>VI</span>
          <div
            class="seat"
            @click="handleClickSeat(744, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(744),
              occupied: event.occupiedSeatsId.includes(744),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(745, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(745),
              occupied: event.occupiedSeatsId.includes(745),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(746, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(746),
              occupied: event.occupiedSeatsId.includes(746),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(747, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(747),
              occupied: event.occupiedSeatsId.includes(747),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(748, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(748),
              occupied: event.occupiedSeatsId.includes(748),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(749, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(749),
              occupied: event.occupiedSeatsId.includes(749),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(750, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(750),
              occupied: event.occupiedSeatsId.includes(750),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(751, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(751),
              occupied: event.occupiedSeatsId.includes(751),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(752, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(752),
              occupied: event.occupiedSeatsId.includes(752),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(753, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(753),
              occupied: event.occupiedSeatsId.includes(753),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(754, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(754),
              occupied: event.occupiedSeatsId.includes(754),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(755, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(755),
              occupied: event.occupiedSeatsId.includes(755),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(756, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(756),
              occupied: event.occupiedSeatsId.includes(756),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(757, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(757),
              occupied: event.occupiedSeatsId.includes(757),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(758, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(758),
              occupied: event.occupiedSeatsId.includes(758),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(759, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(759),
              occupied: event.occupiedSeatsId.includes(759),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>VII</span>
          <div
            class="seat"
            @click="handleClickSeat(760, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(760),
              occupied: event.occupiedSeatsId.includes(760),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(761, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(761),
              occupied: event.occupiedSeatsId.includes(761),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(762, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(762),
              occupied: event.occupiedSeatsId.includes(762),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(763, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(763),
              occupied: event.occupiedSeatsId.includes(763),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(764, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(764),
              occupied: event.occupiedSeatsId.includes(764),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(765, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(765),
              occupied: event.occupiedSeatsId.includes(765),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(766, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(766),
              occupied: event.occupiedSeatsId.includes(766),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(767, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(767),
              occupied: event.occupiedSeatsId.includes(767),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(768, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(768),
              occupied: event.occupiedSeatsId.includes(768),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(769, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(769),
              occupied: event.occupiedSeatsId.includes(769),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(770, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(770),
              occupied: event.occupiedSeatsId.includes(770),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(771, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(771),
              occupied: event.occupiedSeatsId.includes(771),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(772, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(772),
              occupied: event.occupiedSeatsId.includes(772),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(773, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(773),
              occupied: event.occupiedSeatsId.includes(773),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(774, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(774),
              occupied: event.occupiedSeatsId.includes(774),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(775, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(775),
              occupied: event.occupiedSeatsId.includes(775),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>VIII</span>
          <div
            class="seat"
            @click="handleClickSeat(776, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(776),
              occupied: event.occupiedSeatsId.includes(776),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(777, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(777),
              occupied: event.occupiedSeatsId.includes(777),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(778, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(778),
              occupied: event.occupiedSeatsId.includes(778),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(779, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(779),
              occupied: event.occupiedSeatsId.includes(779),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(780, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(780),
              occupied: event.occupiedSeatsId.includes(780),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(781, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(781),
              occupied: event.occupiedSeatsId.includes(781),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(782, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(782),
              occupied: event.occupiedSeatsId.includes(782),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(783, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(783),
              occupied: event.occupiedSeatsId.includes(783),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(784, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(784),
              occupied: event.occupiedSeatsId.includes(784),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(785, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(785),
              occupied: event.occupiedSeatsId.includes(785),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(786, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(786),
              occupied: event.occupiedSeatsId.includes(786),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(787, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(787),
              occupied: event.occupiedSeatsId.includes(787),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(788, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(788),
              occupied: event.occupiedSeatsId.includes(788),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(789, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(789),
              occupied: event.occupiedSeatsId.includes(789),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(790, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(790),
              occupied: event.occupiedSeatsId.includes(790),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(791, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(791),
              occupied: event.occupiedSeatsId.includes(791),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>IX</span>
          <div
            class="seat"
            @click="handleClickSeat(792, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(792),
              occupied: event.occupiedSeatsId.includes(792),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(793, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(793),
              occupied: event.occupiedSeatsId.includes(793),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(794, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(794),
              occupied: event.occupiedSeatsId.includes(794),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(795, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(795),
              occupied: event.occupiedSeatsId.includes(795),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(796, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(796),
              occupied: event.occupiedSeatsId.includes(796),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(797, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(797),
              occupied: event.occupiedSeatsId.includes(797),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(798, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(798),
              occupied: event.occupiedSeatsId.includes(798),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(799, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(799),
              occupied: event.occupiedSeatsId.includes(799),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(800, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(800),
              occupied: event.occupiedSeatsId.includes(800),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(801, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(801),
              occupied: event.occupiedSeatsId.includes(801),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(802, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(802),
              occupied: event.occupiedSeatsId.includes(802),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(803, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(803),
              occupied: event.occupiedSeatsId.includes(803),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(804, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(804),
              occupied: event.occupiedSeatsId.includes(804),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(805, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(805),
              occupied: event.occupiedSeatsId.includes(805),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(806, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(806),
              occupied: event.occupiedSeatsId.includes(806),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(807, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(807),
              occupied: event.occupiedSeatsId.includes(807),
            }"
          >
            16
          </div>
        </div>
        <div class="row mt-5">
          <span>X</span>
          <div
            class="seat"
            @click="handleClickSeat(808, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(808),
              occupied: event.occupiedSeatsId.includes(808),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(809, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(809),
              occupied: event.occupiedSeatsId.includes(809),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(810, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(810),
              occupied: event.occupiedSeatsId.includes(810),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(811, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(811),
              occupied: event.occupiedSeatsId.includes(811),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(812, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(812),
              occupied: event.occupiedSeatsId.includes(812),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(813, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(813),
              occupied: event.occupiedSeatsId.includes(813),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(814, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(814),
              occupied: event.occupiedSeatsId.includes(814),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(815, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(815),
              occupied: event.occupiedSeatsId.includes(815),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(816, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(816),
              occupied: event.occupiedSeatsId.includes(816),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(817, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(817),
              occupied: event.occupiedSeatsId.includes(817),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(818, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(818),
              occupied: event.occupiedSeatsId.includes(818),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(819, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(819),
              occupied: event.occupiedSeatsId.includes(819),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(820, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(820),
              occupied: event.occupiedSeatsId.includes(820),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(821, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(821),
              occupied: event.occupiedSeatsId.includes(821),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(822, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(822),
              occupied: event.occupiedSeatsId.includes(822),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(823, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(823),
              occupied: event.occupiedSeatsId.includes(823),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XI</span>
          <div
            class="seat"
            @click="handleClickSeat(824, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(824),
              occupied: event.occupiedSeatsId.includes(824),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(825, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(825),
              occupied: event.occupiedSeatsId.includes(825),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(826, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(826),
              occupied: event.occupiedSeatsId.includes(826),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(827, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(827),
              occupied: event.occupiedSeatsId.includes(827),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(828, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(828),
              occupied: event.occupiedSeatsId.includes(828),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(829, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(829),
              occupied: event.occupiedSeatsId.includes(829),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(830, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(830),
              occupied: event.occupiedSeatsId.includes(830),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(831, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(831),
              occupied: event.occupiedSeatsId.includes(831),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(832, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(832),
              occupied: event.occupiedSeatsId.includes(832),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(833, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(833),
              occupied: event.occupiedSeatsId.includes(833),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(834, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(834),
              occupied: event.occupiedSeatsId.includes(834),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(835, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(835),
              occupied: event.occupiedSeatsId.includes(835),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(836, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(836),
              occupied: event.occupiedSeatsId.includes(836),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(837, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(837),
              occupied: event.occupiedSeatsId.includes(837),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(838, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(838),
              occupied: event.occupiedSeatsId.includes(838),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(839, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(839),
              occupied: event.occupiedSeatsId.includes(839),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XII</span>
          <div
            class="seat"
            @click="handleClickSeat(840, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(840),
              occupied: event.occupiedSeatsId.includes(840),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(841, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(841),
              occupied: event.occupiedSeatsId.includes(841),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(842, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(842),
              occupied: event.occupiedSeatsId.includes(842),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(843, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(843),
              occupied: event.occupiedSeatsId.includes(843),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(844, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(844),
              occupied: event.occupiedSeatsId.includes(844),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(845, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(845),
              occupied: event.occupiedSeatsId.includes(845),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(846, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(846),
              occupied: event.occupiedSeatsId.includes(846),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(847, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(847),
              occupied: event.occupiedSeatsId.includes(847),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(848, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(848),
              occupied: event.occupiedSeatsId.includes(848),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(849, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(849),
              occupied: event.occupiedSeatsId.includes(849),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(850, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(850),
              occupied: event.occupiedSeatsId.includes(850),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(851, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(851),
              occupied: event.occupiedSeatsId.includes(851),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(852, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(852),
              occupied: event.occupiedSeatsId.includes(852),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(853, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(853),
              occupied: event.occupiedSeatsId.includes(853),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(854, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(854),
              occupied: event.occupiedSeatsId.includes(854),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(855, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(855),
              occupied: event.occupiedSeatsId.includes(855),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XIII</span>
          <div
            class="seat"
            @click="handleClickSeat(856, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(856),
              occupied: event.occupiedSeatsId.includes(856),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(857, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(857),
              occupied: event.occupiedSeatsId.includes(857),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(858, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(858),
              occupied: event.occupiedSeatsId.includes(858),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(859, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(859),
              occupied: event.occupiedSeatsId.includes(859),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(860, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(860),
              occupied: event.occupiedSeatsId.includes(860),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(861, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(861),
              occupied: event.occupiedSeatsId.includes(861),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(862, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(862),
              occupied: event.occupiedSeatsId.includes(862),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(863, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(863),
              occupied: event.occupiedSeatsId.includes(863),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(864, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(864),
              occupied: event.occupiedSeatsId.includes(864),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(865, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(865),
              occupied: event.occupiedSeatsId.includes(865),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(866, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(866),
              occupied: event.occupiedSeatsId.includes(866),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(867, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(867),
              occupied: event.occupiedSeatsId.includes(867),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(868, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(868),
              occupied: event.occupiedSeatsId.includes(868),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(869, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(869),
              occupied: event.occupiedSeatsId.includes(869),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(870, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(870),
              occupied: event.occupiedSeatsId.includes(870),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(871, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(871),
              occupied: event.occupiedSeatsId.includes(871),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XIV</span>
          <div
            class="seat"
            @click="handleClickSeat(872, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(872),
              occupied: event.occupiedSeatsId.includes(872),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(873, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(873),
              occupied: event.occupiedSeatsId.includes(873),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(874, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(874),
              occupied: event.occupiedSeatsId.includes(874),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(875, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(875),
              occupied: event.occupiedSeatsId.includes(875),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(876, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(876),
              occupied: event.occupiedSeatsId.includes(876),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(877, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(877),
              occupied: event.occupiedSeatsId.includes(877),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(878, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(878),
              occupied: event.occupiedSeatsId.includes(878),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(879, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(879),
              occupied: event.occupiedSeatsId.includes(879),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(880, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(880),
              occupied: event.occupiedSeatsId.includes(880),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(881, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(881),
              occupied: event.occupiedSeatsId.includes(881),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(882, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(882),
              occupied: event.occupiedSeatsId.includes(882),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(883, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(883),
              occupied: event.occupiedSeatsId.includes(883),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(884, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(884),
              occupied: event.occupiedSeatsId.includes(884),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(885, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(885),
              occupied: event.occupiedSeatsId.includes(885),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(886, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(886),
              occupied: event.occupiedSeatsId.includes(886),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(887, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(887),
              occupied: event.occupiedSeatsId.includes(887),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XV</span>
          <div
            class="seat"
            @click="handleClickSeat(888, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(888),
              occupied: event.occupiedSeatsId.includes(888),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(889, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(889),
              occupied: event.occupiedSeatsId.includes(889),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(890, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(890),
              occupied: event.occupiedSeatsId.includes(890),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(891, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(891),
              occupied: event.occupiedSeatsId.includes(891),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(892, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(892),
              occupied: event.occupiedSeatsId.includes(892),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(893, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(893),
              occupied: event.occupiedSeatsId.includes(893),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(894, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(894),
              occupied: event.occupiedSeatsId.includes(894),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(895, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(895),
              occupied: event.occupiedSeatsId.includes(895),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(896, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(896),
              occupied: event.occupiedSeatsId.includes(896),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(897, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(897),
              occupied: event.occupiedSeatsId.includes(897),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(898, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(898),
              occupied: event.occupiedSeatsId.includes(898),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(899, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(899),
              occupied: event.occupiedSeatsId.includes(899),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(900, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(900),
              occupied: event.occupiedSeatsId.includes(900),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(901, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(901),
              occupied: event.occupiedSeatsId.includes(901),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(902, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(902),
              occupied: event.occupiedSeatsId.includes(902),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(903, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(903),
              occupied: event.occupiedSeatsId.includes(903),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XVI</span>
          <div
            class="seat"
            @click="handleClickSeat(904, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(904),
              occupied: event.occupiedSeatsId.includes(904),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(905, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(905),
              occupied: event.occupiedSeatsId.includes(905),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(906, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(906),
              occupied: event.occupiedSeatsId.includes(906),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(907, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(907),
              occupied: event.occupiedSeatsId.includes(907),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(908, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(908),
              occupied: event.occupiedSeatsId.includes(908),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(909, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(909),
              occupied: event.occupiedSeatsId.includes(909),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(910, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(910),
              occupied: event.occupiedSeatsId.includes(910),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(911, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(911),
              occupied: event.occupiedSeatsId.includes(911),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(912, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(912),
              occupied: event.occupiedSeatsId.includes(912),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(913, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(913),
              occupied: event.occupiedSeatsId.includes(913),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(914, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(914),
              occupied: event.occupiedSeatsId.includes(914),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(915, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(915),
              occupied: event.occupiedSeatsId.includes(915),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(916, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(916),
              occupied: event.occupiedSeatsId.includes(916),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(917, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(917),
              occupied: event.occupiedSeatsId.includes(917),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(918, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(918),
              occupied: event.occupiedSeatsId.includes(918),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(919, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(919),
              occupied: event.occupiedSeatsId.includes(919),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XVII</span>
          <div
            class="seat"
            @click="handleClickSeat(920, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(920),
              occupied: event.occupiedSeatsId.includes(920),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(921, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(921),
              occupied: event.occupiedSeatsId.includes(921),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(922, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(922),
              occupied: event.occupiedSeatsId.includes(922),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(923, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(923),
              occupied: event.occupiedSeatsId.includes(923),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(924, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(924),
              occupied: event.occupiedSeatsId.includes(924),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(925, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(925),
              occupied: event.occupiedSeatsId.includes(925),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(926, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(926),
              occupied: event.occupiedSeatsId.includes(926),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(927, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(927),
              occupied: event.occupiedSeatsId.includes(927),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(928, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(928),
              occupied: event.occupiedSeatsId.includes(928),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(939, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(939),
              occupied: event.occupiedSeatsId.includes(939),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(930, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(930),
              occupied: event.occupiedSeatsId.includes(930),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(931, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(931),
              occupied: event.occupiedSeatsId.includes(931),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(932, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(932),
              occupied: event.occupiedSeatsId.includes(932),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(933, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(933),
              occupied: event.occupiedSeatsId.includes(933),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(934, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(934),
              occupied: event.occupiedSeatsId.includes(934),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(935, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(935),
              occupied: event.occupiedSeatsId.includes(935),
            }"
          >
            16
          </div>
          <div
            class="seat"
            @click="handleClickSeat(936, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(936),
              occupied: event.occupiedSeatsId.includes(936),
            }"
          >
            17
          </div>
          <div
            class="seat"
            @click="handleClickSeat(937, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(937),
              occupied: event.occupiedSeatsId.includes(937),
            }"
          >
            18
          </div>
          <div
            class="seat"
            @click="handleClickSeat(938, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(938),
              occupied: event.occupiedSeatsId.includes(938),
            }"
          >
            19
          </div>
          <div
            class="seat"
            @click="handleClickSeat(939, event.id, sectorPrice)"
            :class="{
              selected: selectedSeats.includes(939),
              occupied: event.occupiedSeatsId.includes(939),
            }"
          >
            20
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
  name: 'TeatrParter',
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
.treeSeatsFirst {
  display: flex;
  margin-right: 4px;
  padding: 0px;
  width: max-content;
}
.treeSeats {
  display: flex;
  margin: 0 4px;
  padding: 0px;
  width: max-content;
}
.treeSeatsLast {
  display: flex;
  margin-left: 4px;
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
  .row > span {
    width: 30px;
    font-size: 1.6vw;
    cursor: default;
  }
}
</style>
