<template>
  <div class="largeLayout">
    <div class="scene">Scena</div>
    <div class="sectorContainer">
      <!-- Left column -->
      <div class="column">
        <div class="row">
          <span>I</span>
          <div class="treeSeatsFirst">
            <div
              class="seat"
              @click="handleClickSeat(667)"
              :class="{
                selected: Event.reservedSeatsId.includes(667),
                occupied: Event.occupiedSeatsId.includes(667),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(668)"
              :class="{
                selected: Event.reservedSeatsId.includes(668),
                occupied: Event.occupiedSeatsId.includes(668),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(669)"
              :class="{
                selected: Event.reservedSeatsId.includes(669),
                occupied: Event.occupiedSeatsId.includes(669),
              }"
            >
              3
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(670)"
              :class="{
                selected: Event.reservedSeatsId.includes(670),
                occupied: Event.occupiedSeatsId.includes(670),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(671)"
              :class="{
                selected: Event.reservedSeatsId.includes(671),
                occupied: Event.occupiedSeatsId.includes(671),
              }"
            >
              5
            </div>
            <div
              class="seat"
              @click="handleClickSeat(672)"
              :class="{
                selected: Event.reservedSeatsId.includes(672),
                occupied: Event.occupiedSeatsId.includes(672),
              }"
            >
              6
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(673)"
              :class="{
                selected: Event.reservedSeatsId.includes(673),
                occupied: Event.occupiedSeatsId.includes(673),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(674)"
              :class="{
                selected: Event.reservedSeatsId.includes(674),
                occupied: Event.occupiedSeatsId.includes(674),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(675)"
              :class="{
                selected: Event.reservedSeatsId.includes(675),
                occupied: Event.occupiedSeatsId.includes(675),
              }"
            >
              9
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(676)"
              :class="{
                selected: Event.reservedSeatsId.includes(676),
                occupied: Event.occupiedSeatsId.includes(676),
              }"
            >
              10
            </div>
            <div
              class="seat"
              @click="handleClickSeat(677)"
              :class="{
                selected: Event.reservedSeatsId.includes(677),
                occupied: Event.occupiedSeatsId.includes(677),
              }"
            >
              11
            </div>
            <div
              class="seat"
              @click="handleClickSeat(678)"
              :class="{
                selected: Event.reservedSeatsId.includes(678),
                occupied: Event.occupiedSeatsId.includes(678),
              }"
            >
              12
            </div>
          </div>
          <div class="treeSeatsLast">
            <div
              class="seat"
              @click="handleClickSeat(679)"
              :class="{
                selected: Event.reservedSeatsId.includes(679),
                occupied: Event.occupiedSeatsId.includes(679),
              }"
            >
              13
            </div>
            <div
              class="seat"
              @click="handleClickSeat(680)"
              :class="{
                selected: Event.reservedSeatsId.includes(680),
                occupied: Event.occupiedSeatsId.includes(680),
              }"
            >
              14
            </div>
            <div
              class="seat"
              @click="handleClickSeat(681)"
              :class="{
                selected: Event.reservedSeatsId.includes(681),
                occupied: Event.occupiedSeatsId.includes(681),
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
              @click="handleClickSeat(682)"
              :class="{
                selected: Event.reservedSeatsId.includes(682),
                occupied: Event.occupiedSeatsId.includes(682),
              }"
            >
              1
            </div>
            <div
              class="seat"
              @click="handleClickSeat(683)"
              :class="{
                selected: Event.reservedSeatsId.includes(683),
                occupied: Event.occupiedSeatsId.includes(683),
              }"
            >
              2
            </div>
            <div
              class="seat"
              @click="handleClickSeat(684)"
              :class="{
                selected: Event.reservedSeatsId.includes(684),
                occupied: Event.occupiedSeatsId.includes(684),
              }"
            >
              3
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(685)"
              :class="{
                selected: Event.reservedSeatsId.includes(685),
                occupied: Event.occupiedSeatsId.includes(685),
              }"
            >
              4
            </div>
            <div
              class="seat"
              @click="handleClickSeat(686)"
              :class="{
                selected: Event.reservedSeatsId.includes(686),
                occupied: Event.occupiedSeatsId.includes(686),
              }"
            >
              5
            </div>
            <div
              class="seat"
              @click="handleClickSeat(687)"
              :class="{
                selected: Event.reservedSeatsId.includes(687),
                occupied: Event.occupiedSeatsId.includes(687),
              }"
            >
              6
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(688)"
              :class="{
                selected: Event.reservedSeatsId.includes(688),
                occupied: Event.occupiedSeatsId.includes(688),
              }"
            >
              7
            </div>
            <div
              class="seat"
              @click="handleClickSeat(689)"
              :class="{
                selected: Event.reservedSeatsId.includes(689),
                occupied: Event.occupiedSeatsId.includes(689),
              }"
            >
              8
            </div>
            <div
              class="seat"
              @click="handleClickSeat(690)"
              :class="{
                selected: Event.reservedSeatsId.includes(690),
                occupied: Event.occupiedSeatsId.includes(690),
              }"
            >
              9
            </div>
          </div>
          <div class="treeSeats">
            <div
              class="seat"
              @click="handleClickSeat(691)"
              :class="{
                selected: Event.reservedSeatsId.includes(691),
                occupied: Event.occupiedSeatsId.includes(691),
              }"
            >
              10
            </div>
            <div
              class="seat"
              @click="handleClickSeat(692)"
              :class="{
                selected: Event.reservedSeatsId.includes(692),
                occupied: Event.occupiedSeatsId.includes(692),
              }"
            >
              11
            </div>
            <div
              class="seat"
              @click="handleClickSeat(693)"
              :class="{
                selected: Event.reservedSeatsId.includes(693),
                occupied: Event.occupiedSeatsId.includes(693),
              }"
            >
              12
            </div>
          </div>
          <div class="treeSeatsLast">
            <div
              class="seat"
              @click="handleClickSeat(694)"
              :class="{
                selected: Event.reservedSeatsId.includes(694),
                occupied: Event.occupiedSeatsId.includes(694),
              }"
            >
              13
            </div>
            <div
              class="seat"
              @click="handleClickSeat(695)"
              :class="{
                selected: Event.reservedSeatsId.includes(695),
                occupied: Event.occupiedSeatsId.includes(695),
              }"
            >
              14
            </div>
            <div
              class="seat"
              @click="handleClickSeat(696)"
              :class="{
                selected: Event.reservedSeatsId.includes(696),
                occupied: Event.occupiedSeatsId.includes(696),
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
            @click="handleClickSeat(697)"
            :class="{
              selected: Event.reservedSeatsId.includes(697),
              occupied: Event.occupiedSeatsId.includes(697),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(698)"
            :class="{
              selected: Event.reservedSeatsId.includes(698),
              occupied: Event.occupiedSeatsId.includes(698),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(699)"
            :class="{
              selected: Event.reservedSeatsId.includes(699),
              occupied: Event.occupiedSeatsId.includes(699),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(700)"
            :class="{
              selected: Event.reservedSeatsId.includes(700),
              occupied: Event.occupiedSeatsId.includes(700),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(701)"
            :class="{
              selected: Event.reservedSeatsId.includes(701),
              occupied: Event.occupiedSeatsId.includes(701),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(702)"
            :class="{
              selected: Event.reservedSeatsId.includes(702),
              occupied: Event.occupiedSeatsId.includes(702),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(703)"
            :class="{
              selected: Event.reservedSeatsId.includes(703),
              occupied: Event.occupiedSeatsId.includes(703),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(704)"
            :class="{
              selected: Event.reservedSeatsId.includes(704),
              occupied: Event.occupiedSeatsId.includes(704),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(705)"
            :class="{
              selected: Event.reservedSeatsId.includes(705),
              occupied: Event.occupiedSeatsId.includes(705),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(706)"
            :class="{
              selected: Event.reservedSeatsId.includes(706),
              occupied: Event.occupiedSeatsId.includes(706),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(707)"
            :class="{
              selected: Event.reservedSeatsId.includes(707),
              occupied: Event.occupiedSeatsId.includes(707),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(708)"
            :class="{
              selected: Event.reservedSeatsId.includes(708),
              occupied: Event.occupiedSeatsId.includes(708),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(709)"
            :class="{
              selected: Event.reservedSeatsId.includes(709),
              occupied: Event.occupiedSeatsId.includes(709),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(710)"
            :class="{
              selected: Event.reservedSeatsId.includes(710),
              occupied: Event.occupiedSeatsId.includes(710),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(711)"
            :class="{
              selected: Event.reservedSeatsId.includes(711),
              occupied: Event.occupiedSeatsId.includes(711),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(712)"
            :class="{
              selected: Event.reservedSeatsId.includes(712),
              occupied: Event.occupiedSeatsId.includes(712),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>IV</span>
          <div
            class="seat"
            @click="handleClickSeat(713)"
            :class="{
              selected: Event.reservedSeatsId.includes(713),
              occupied: Event.occupiedSeatsId.includes(713),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(714)"
            :class="{
              selected: Event.reservedSeatsId.includes(714),
              occupied: Event.occupiedSeatsId.includes(714),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(715)"
            :class="{
              selected: Event.reservedSeatsId.includes(715),
              occupied: Event.occupiedSeatsId.includes(715),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(716)"
            :class="{
              selected: Event.reservedSeatsId.includes(716),
              occupied: Event.occupiedSeatsId.includes(716),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(717)"
            :class="{
              selected: Event.reservedSeatsId.includes(717),
              occupied: Event.occupiedSeatsId.includes(717),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(718)"
            :class="{
              selected: Event.reservedSeatsId.includes(718),
              occupied: Event.occupiedSeatsId.includes(718),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(719)"
            :class="{
              selected: Event.reservedSeatsId.includes(719),
              occupied: Event.occupiedSeatsId.includes(719),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(720)"
            :class="{
              selected: Event.reservedSeatsId.includes(720),
              occupied: Event.occupiedSeatsId.includes(720),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(721)"
            :class="{
              selected: Event.reservedSeatsId.includes(721),
              occupied: Event.occupiedSeatsId.includes(721),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(722)"
            :class="{
              selected: Event.reservedSeatsId.includes(722),
              occupied: Event.occupiedSeatsId.includes(722),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(723)"
            :class="{
              selected: Event.reservedSeatsId.includes(723),
              occupied: Event.occupiedSeatsId.includes(723),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(724)"
            :class="{
              selected: Event.reservedSeatsId.includes(724),
              occupied: Event.occupiedSeatsId.includes(724),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(725)"
            :class="{
              selected: Event.reservedSeatsId.includes(725),
              occupied: Event.occupiedSeatsId.includes(725),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(726)"
            :class="{
              selected: Event.reservedSeatsId.includes(726),
              occupied: Event.occupiedSeatsId.includes(726),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(727)"
            :class="{
              selected: Event.reservedSeatsId.includes(727),
              occupied: Event.occupiedSeatsId.includes(727),
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
            @click="handleClickSeat(728)"
            :class="{
              selected: Event.reservedSeatsId.includes(728),
              occupied: Event.occupiedSeatsId.includes(728),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(729)"
            :class="{
              selected: Event.reservedSeatsId.includes(729),
              occupied: Event.occupiedSeatsId.includes(729),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(730)"
            :class="{
              selected: Event.reservedSeatsId.includes(730),
              occupied: Event.occupiedSeatsId.includes(730),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(731)"
            :class="{
              selected: Event.reservedSeatsId.includes(731),
              occupied: Event.occupiedSeatsId.includes(731),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(732)"
            :class="{
              selected: Event.reservedSeatsId.includes(732),
              occupied: Event.occupiedSeatsId.includes(732),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(733)"
            :class="{
              selected: Event.reservedSeatsId.includes(733),
              occupied: Event.occupiedSeatsId.includes(733),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(734)"
            :class="{
              selected: Event.reservedSeatsId.includes(734),
              occupied: Event.occupiedSeatsId.includes(734),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(735)"
            :class="{
              selected: Event.reservedSeatsId.includes(735),
              occupied: Event.occupiedSeatsId.includes(735),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(736)"
            :class="{
              selected: Event.reservedSeatsId.includes(736),
              occupied: Event.occupiedSeatsId.includes(736),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(737)"
            :class="{
              selected: Event.reservedSeatsId.includes(737),
              occupied: Event.occupiedSeatsId.includes(737),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(738)"
            :class="{
              selected: Event.reservedSeatsId.includes(738),
              occupied: Event.occupiedSeatsId.includes(738),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(739)"
            :class="{
              selected: Event.reservedSeatsId.includes(739),
              occupied: Event.occupiedSeatsId.includes(739),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(740)"
            :class="{
              selected: Event.reservedSeatsId.includes(740),
              occupied: Event.occupiedSeatsId.includes(740),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(741)"
            :class="{
              selected: Event.reservedSeatsId.includes(741),
              occupied: Event.occupiedSeatsId.includes(741),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(742)"
            :class="{
              selected: Event.reservedSeatsId.includes(742),
              occupied: Event.occupiedSeatsId.includes(742),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(743)"
            :class="{
              selected: Event.reservedSeatsId.includes(743),
              occupied: Event.occupiedSeatsId.includes(743),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>VI</span>
          <div
            class="seat"
            @click="handleClickSeat(744)"
            :class="{
              selected: Event.reservedSeatsId.includes(744),
              occupied: Event.occupiedSeatsId.includes(744),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(745)"
            :class="{
              selected: Event.reservedSeatsId.includes(745),
              occupied: Event.occupiedSeatsId.includes(745),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(746)"
            :class="{
              selected: Event.reservedSeatsId.includes(746),
              occupied: Event.occupiedSeatsId.includes(746),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(747)"
            :class="{
              selected: Event.reservedSeatsId.includes(747),
              occupied: Event.occupiedSeatsId.includes(747),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(748)"
            :class="{
              selected: Event.reservedSeatsId.includes(748),
              occupied: Event.occupiedSeatsId.includes(748),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(749)"
            :class="{
              selected: Event.reservedSeatsId.includes(749),
              occupied: Event.occupiedSeatsId.includes(749),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(750)"
            :class="{
              selected: Event.reservedSeatsId.includes(750),
              occupied: Event.occupiedSeatsId.includes(750),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(751)"
            :class="{
              selected: Event.reservedSeatsId.includes(751),
              occupied: Event.occupiedSeatsId.includes(751),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(752)"
            :class="{
              selected: Event.reservedSeatsId.includes(752),
              occupied: Event.occupiedSeatsId.includes(752),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(753)"
            :class="{
              selected: Event.reservedSeatsId.includes(753),
              occupied: Event.occupiedSeatsId.includes(753),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(754)"
            :class="{
              selected: Event.reservedSeatsId.includes(754),
              occupied: Event.occupiedSeatsId.includes(754),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(755)"
            :class="{
              selected: Event.reservedSeatsId.includes(755),
              occupied: Event.occupiedSeatsId.includes(755),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(756)"
            :class="{
              selected: Event.reservedSeatsId.includes(756),
              occupied: Event.occupiedSeatsId.includes(756),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(757)"
            :class="{
              selected: Event.reservedSeatsId.includes(757),
              occupied: Event.occupiedSeatsId.includes(757),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(758)"
            :class="{
              selected: Event.reservedSeatsId.includes(758),
              occupied: Event.occupiedSeatsId.includes(758),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(759)"
            :class="{
              selected: Event.reservedSeatsId.includes(759),
              occupied: Event.occupiedSeatsId.includes(759),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>VII</span>
          <div
            class="seat"
            @click="handleClickSeat(760)"
            :class="{
              selected: Event.reservedSeatsId.includes(760),
              occupied: Event.occupiedSeatsId.includes(760),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(761)"
            :class="{
              selected: Event.reservedSeatsId.includes(761),
              occupied: Event.occupiedSeatsId.includes(761),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(762)"
            :class="{
              selected: Event.reservedSeatsId.includes(762),
              occupied: Event.occupiedSeatsId.includes(762),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(763)"
            :class="{
              selected: Event.reservedSeatsId.includes(763),
              occupied: Event.occupiedSeatsId.includes(763),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(764)"
            :class="{
              selected: Event.reservedSeatsId.includes(764),
              occupied: Event.occupiedSeatsId.includes(764),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(765)"
            :class="{
              selected: Event.reservedSeatsId.includes(765),
              occupied: Event.occupiedSeatsId.includes(765),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(766)"
            :class="{
              selected: Event.reservedSeatsId.includes(766),
              occupied: Event.occupiedSeatsId.includes(766),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(767)"
            :class="{
              selected: Event.reservedSeatsId.includes(767),
              occupied: Event.occupiedSeatsId.includes(767),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(768)"
            :class="{
              selected: Event.reservedSeatsId.includes(768),
              occupied: Event.occupiedSeatsId.includes(768),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(769)"
            :class="{
              selected: Event.reservedSeatsId.includes(769),
              occupied: Event.occupiedSeatsId.includes(769),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(770)"
            :class="{
              selected: Event.reservedSeatsId.includes(770),
              occupied: Event.occupiedSeatsId.includes(770),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(771)"
            :class="{
              selected: Event.reservedSeatsId.includes(771),
              occupied: Event.occupiedSeatsId.includes(771),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(772)"
            :class="{
              selected: Event.reservedSeatsId.includes(772),
              occupied: Event.occupiedSeatsId.includes(772),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(773)"
            :class="{
              selected: Event.reservedSeatsId.includes(773),
              occupied: Event.occupiedSeatsId.includes(773),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(774)"
            :class="{
              selected: Event.reservedSeatsId.includes(774),
              occupied: Event.occupiedSeatsId.includes(774),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(775)"
            :class="{
              selected: Event.reservedSeatsId.includes(775),
              occupied: Event.occupiedSeatsId.includes(775),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>VIII</span>
          <div
            class="seat"
            @click="handleClickSeat(776)"
            :class="{
              selected: Event.reservedSeatsId.includes(776),
              occupied: Event.occupiedSeatsId.includes(776),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(777)"
            :class="{
              selected: Event.reservedSeatsId.includes(777),
              occupied: Event.occupiedSeatsId.includes(777),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(778)"
            :class="{
              selected: Event.reservedSeatsId.includes(778),
              occupied: Event.occupiedSeatsId.includes(778),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(779)"
            :class="{
              selected: Event.reservedSeatsId.includes(779),
              occupied: Event.occupiedSeatsId.includes(779),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(780)"
            :class="{
              selected: Event.reservedSeatsId.includes(780),
              occupied: Event.occupiedSeatsId.includes(780),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(781)"
            :class="{
              selected: Event.reservedSeatsId.includes(781),
              occupied: Event.occupiedSeatsId.includes(781),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(782)"
            :class="{
              selected: Event.reservedSeatsId.includes(782),
              occupied: Event.occupiedSeatsId.includes(782),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(783)"
            :class="{
              selected: Event.reservedSeatsId.includes(783),
              occupied: Event.occupiedSeatsId.includes(783),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(784)"
            :class="{
              selected: Event.reservedSeatsId.includes(784),
              occupied: Event.occupiedSeatsId.includes(784),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(785)"
            :class="{
              selected: Event.reservedSeatsId.includes(785),
              occupied: Event.occupiedSeatsId.includes(785),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(786)"
            :class="{
              selected: Event.reservedSeatsId.includes(786),
              occupied: Event.occupiedSeatsId.includes(786),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(787)"
            :class="{
              selected: Event.reservedSeatsId.includes(787),
              occupied: Event.occupiedSeatsId.includes(787),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(788)"
            :class="{
              selected: Event.reservedSeatsId.includes(788),
              occupied: Event.occupiedSeatsId.includes(788),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(789)"
            :class="{
              selected: Event.reservedSeatsId.includes(789),
              occupied: Event.occupiedSeatsId.includes(789),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(790)"
            :class="{
              selected: Event.reservedSeatsId.includes(790),
              occupied: Event.occupiedSeatsId.includes(790),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(791)"
            :class="{
              selected: Event.reservedSeatsId.includes(791),
              occupied: Event.occupiedSeatsId.includes(791),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>IX</span>
          <div
            class="seat"
            @click="handleClickSeat(792)"
            :class="{
              selected: Event.reservedSeatsId.includes(792),
              occupied: Event.occupiedSeatsId.includes(792),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(793)"
            :class="{
              selected: Event.reservedSeatsId.includes(793),
              occupied: Event.occupiedSeatsId.includes(793),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(794)"
            :class="{
              selected: Event.reservedSeatsId.includes(794),
              occupied: Event.occupiedSeatsId.includes(794),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(795)"
            :class="{
              selected: Event.reservedSeatsId.includes(795),
              occupied: Event.occupiedSeatsId.includes(795),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(796)"
            :class="{
              selected: Event.reservedSeatsId.includes(796),
              occupied: Event.occupiedSeatsId.includes(796),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(797)"
            :class="{
              selected: Event.reservedSeatsId.includes(797),
              occupied: Event.occupiedSeatsId.includes(797),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(798)"
            :class="{
              selected: Event.reservedSeatsId.includes(798),
              occupied: Event.occupiedSeatsId.includes(798),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(799)"
            :class="{
              selected: Event.reservedSeatsId.includes(799),
              occupied: Event.occupiedSeatsId.includes(799),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(800)"
            :class="{
              selected: Event.reservedSeatsId.includes(800),
              occupied: Event.occupiedSeatsId.includes(800),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(801)"
            :class="{
              selected: Event.reservedSeatsId.includes(801),
              occupied: Event.occupiedSeatsId.includes(801),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(802)"
            :class="{
              selected: Event.reservedSeatsId.includes(802),
              occupied: Event.occupiedSeatsId.includes(802),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(803)"
            :class="{
              selected: Event.reservedSeatsId.includes(803),
              occupied: Event.occupiedSeatsId.includes(803),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(804)"
            :class="{
              selected: Event.reservedSeatsId.includes(804),
              occupied: Event.occupiedSeatsId.includes(804),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(805)"
            :class="{
              selected: Event.reservedSeatsId.includes(805),
              occupied: Event.occupiedSeatsId.includes(805),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(806)"
            :class="{
              selected: Event.reservedSeatsId.includes(806),
              occupied: Event.occupiedSeatsId.includes(806),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(807)"
            :class="{
              selected: Event.reservedSeatsId.includes(807),
              occupied: Event.occupiedSeatsId.includes(807),
            }"
          >
            16
          </div>
        </div>
        <div class="row mt-5">
          <span>X</span>
          <div
            class="seat"
            @click="handleClickSeat(808)"
            :class="{
              selected: Event.reservedSeatsId.includes(808),
              occupied: Event.occupiedSeatsId.includes(808),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(809)"
            :class="{
              selected: Event.reservedSeatsId.includes(809),
              occupied: Event.occupiedSeatsId.includes(809),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(810)"
            :class="{
              selected: Event.reservedSeatsId.includes(810),
              occupied: Event.occupiedSeatsId.includes(810),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(811)"
            :class="{
              selected: Event.reservedSeatsId.includes(811),
              occupied: Event.occupiedSeatsId.includes(811),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(812)"
            :class="{
              selected: Event.reservedSeatsId.includes(812),
              occupied: Event.occupiedSeatsId.includes(812),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(813)"
            :class="{
              selected: Event.reservedSeatsId.includes(813),
              occupied: Event.occupiedSeatsId.includes(813),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(814)"
            :class="{
              selected: Event.reservedSeatsId.includes(814),
              occupied: Event.occupiedSeatsId.includes(814),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(815)"
            :class="{
              selected: Event.reservedSeatsId.includes(815),
              occupied: Event.occupiedSeatsId.includes(815),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(816)"
            :class="{
              selected: Event.reservedSeatsId.includes(816),
              occupied: Event.occupiedSeatsId.includes(816),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(817)"
            :class="{
              selected: Event.reservedSeatsId.includes(817),
              occupied: Event.occupiedSeatsId.includes(817),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(818)"
            :class="{
              selected: Event.reservedSeatsId.includes(818),
              occupied: Event.occupiedSeatsId.includes(818),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(819)"
            :class="{
              selected: Event.reservedSeatsId.includes(819),
              occupied: Event.occupiedSeatsId.includes(819),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(820)"
            :class="{
              selected: Event.reservedSeatsId.includes(820),
              occupied: Event.occupiedSeatsId.includes(820),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(821)"
            :class="{
              selected: Event.reservedSeatsId.includes(821),
              occupied: Event.occupiedSeatsId.includes(821),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(822)"
            :class="{
              selected: Event.reservedSeatsId.includes(822),
              occupied: Event.occupiedSeatsId.includes(822),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(823)"
            :class="{
              selected: Event.reservedSeatsId.includes(823),
              occupied: Event.occupiedSeatsId.includes(823),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XI</span>
          <div
            class="seat"
            @click="handleClickSeat(824)"
            :class="{
              selected: Event.reservedSeatsId.includes(824),
              occupied: Event.occupiedSeatsId.includes(824),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(825)"
            :class="{
              selected: Event.reservedSeatsId.includes(825),
              occupied: Event.occupiedSeatsId.includes(825),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(826)"
            :class="{
              selected: Event.reservedSeatsId.includes(826),
              occupied: Event.occupiedSeatsId.includes(826),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(827)"
            :class="{
              selected: Event.reservedSeatsId.includes(827),
              occupied: Event.occupiedSeatsId.includes(827),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(828)"
            :class="{
              selected: Event.reservedSeatsId.includes(828),
              occupied: Event.occupiedSeatsId.includes(828),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(829)"
            :class="{
              selected: Event.reservedSeatsId.includes(829),
              occupied: Event.occupiedSeatsId.includes(829),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(830)"
            :class="{
              selected: Event.reservedSeatsId.includes(830),
              occupied: Event.occupiedSeatsId.includes(830),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(831)"
            :class="{
              selected: Event.reservedSeatsId.includes(831),
              occupied: Event.occupiedSeatsId.includes(831),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(832)"
            :class="{
              selected: Event.reservedSeatsId.includes(832),
              occupied: Event.occupiedSeatsId.includes(832),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(833)"
            :class="{
              selected: Event.reservedSeatsId.includes(833),
              occupied: Event.occupiedSeatsId.includes(833),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(834)"
            :class="{
              selected: Event.reservedSeatsId.includes(834),
              occupied: Event.occupiedSeatsId.includes(834),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(835)"
            :class="{
              selected: Event.reservedSeatsId.includes(835),
              occupied: Event.occupiedSeatsId.includes(835),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(836)"
            :class="{
              selected: Event.reservedSeatsId.includes(836),
              occupied: Event.occupiedSeatsId.includes(836),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(837)"
            :class="{
              selected: Event.reservedSeatsId.includes(837),
              occupied: Event.occupiedSeatsId.includes(837),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(838)"
            :class="{
              selected: Event.reservedSeatsId.includes(838),
              occupied: Event.occupiedSeatsId.includes(838),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(839)"
            :class="{
              selected: Event.reservedSeatsId.includes(839),
              occupied: Event.occupiedSeatsId.includes(839),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XII</span>
          <div
            class="seat"
            @click="handleClickSeat(840)"
            :class="{
              selected: Event.reservedSeatsId.includes(840),
              occupied: Event.occupiedSeatsId.includes(840),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(841)"
            :class="{
              selected: Event.reservedSeatsId.includes(841),
              occupied: Event.occupiedSeatsId.includes(841),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(842)"
            :class="{
              selected: Event.reservedSeatsId.includes(842),
              occupied: Event.occupiedSeatsId.includes(842),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(843)"
            :class="{
              selected: Event.reservedSeatsId.includes(843),
              occupied: Event.occupiedSeatsId.includes(843),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(844)"
            :class="{
              selected: Event.reservedSeatsId.includes(844),
              occupied: Event.occupiedSeatsId.includes(844),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(845)"
            :class="{
              selected: Event.reservedSeatsId.includes(845),
              occupied: Event.occupiedSeatsId.includes(845),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(846)"
            :class="{
              selected: Event.reservedSeatsId.includes(846),
              occupied: Event.occupiedSeatsId.includes(846),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(847)"
            :class="{
              selected: Event.reservedSeatsId.includes(847),
              occupied: Event.occupiedSeatsId.includes(847),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(848)"
            :class="{
              selected: Event.reservedSeatsId.includes(848),
              occupied: Event.occupiedSeatsId.includes(848),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(849)"
            :class="{
              selected: Event.reservedSeatsId.includes(849),
              occupied: Event.occupiedSeatsId.includes(849),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(850)"
            :class="{
              selected: Event.reservedSeatsId.includes(850),
              occupied: Event.occupiedSeatsId.includes(850),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(851)"
            :class="{
              selected: Event.reservedSeatsId.includes(851),
              occupied: Event.occupiedSeatsId.includes(851),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(852)"
            :class="{
              selected: Event.reservedSeatsId.includes(852),
              occupied: Event.occupiedSeatsId.includes(852),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(853)"
            :class="{
              selected: Event.reservedSeatsId.includes(853),
              occupied: Event.occupiedSeatsId.includes(853),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(854)"
            :class="{
              selected: Event.reservedSeatsId.includes(854),
              occupied: Event.occupiedSeatsId.includes(854),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(855)"
            :class="{
              selected: Event.reservedSeatsId.includes(855),
              occupied: Event.occupiedSeatsId.includes(855),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XIII</span>
          <div
            class="seat"
            @click="handleClickSeat(856)"
            :class="{
              selected: Event.reservedSeatsId.includes(856),
              occupied: Event.occupiedSeatsId.includes(856),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(857)"
            :class="{
              selected: Event.reservedSeatsId.includes(857),
              occupied: Event.occupiedSeatsId.includes(857),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(858)"
            :class="{
              selected: Event.reservedSeatsId.includes(858),
              occupied: Event.occupiedSeatsId.includes(858),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(859)"
            :class="{
              selected: Event.reservedSeatsId.includes(859),
              occupied: Event.occupiedSeatsId.includes(859),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(860)"
            :class="{
              selected: Event.reservedSeatsId.includes(860),
              occupied: Event.occupiedSeatsId.includes(860),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(861)"
            :class="{
              selected: Event.reservedSeatsId.includes(861),
              occupied: Event.occupiedSeatsId.includes(861),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(862)"
            :class="{
              selected: Event.reservedSeatsId.includes(862),
              occupied: Event.occupiedSeatsId.includes(862),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(863)"
            :class="{
              selected: Event.reservedSeatsId.includes(863),
              occupied: Event.occupiedSeatsId.includes(863),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(864)"
            :class="{
              selected: Event.reservedSeatsId.includes(864),
              occupied: Event.occupiedSeatsId.includes(864),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(865)"
            :class="{
              selected: Event.reservedSeatsId.includes(865),
              occupied: Event.occupiedSeatsId.includes(865),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(866)"
            :class="{
              selected: Event.reservedSeatsId.includes(866),
              occupied: Event.occupiedSeatsId.includes(866),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(867)"
            :class="{
              selected: Event.reservedSeatsId.includes(867),
              occupied: Event.occupiedSeatsId.includes(867),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(868)"
            :class="{
              selected: Event.reservedSeatsId.includes(868),
              occupied: Event.occupiedSeatsId.includes(868),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(869)"
            :class="{
              selected: Event.reservedSeatsId.includes(869),
              occupied: Event.occupiedSeatsId.includes(869),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(870)"
            :class="{
              selected: Event.reservedSeatsId.includes(870),
              occupied: Event.occupiedSeatsId.includes(870),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(871)"
            :class="{
              selected: Event.reservedSeatsId.includes(871),
              occupied: Event.occupiedSeatsId.includes(871),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XIV</span>
          <div
            class="seat"
            @click="handleClickSeat(872)"
            :class="{
              selected: Event.reservedSeatsId.includes(872),
              occupied: Event.occupiedSeatsId.includes(872),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(873)"
            :class="{
              selected: Event.reservedSeatsId.includes(873),
              occupied: Event.occupiedSeatsId.includes(873),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(874)"
            :class="{
              selected: Event.reservedSeatsId.includes(874),
              occupied: Event.occupiedSeatsId.includes(874),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(875)"
            :class="{
              selected: Event.reservedSeatsId.includes(875),
              occupied: Event.occupiedSeatsId.includes(875),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(876)"
            :class="{
              selected: Event.reservedSeatsId.includes(876),
              occupied: Event.occupiedSeatsId.includes(876),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(877)"
            :class="{
              selected: Event.reservedSeatsId.includes(877),
              occupied: Event.occupiedSeatsId.includes(877),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(878)"
            :class="{
              selected: Event.reservedSeatsId.includes(878),
              occupied: Event.occupiedSeatsId.includes(878),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(879)"
            :class="{
              selected: Event.reservedSeatsId.includes(879),
              occupied: Event.occupiedSeatsId.includes(879),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(880)"
            :class="{
              selected: Event.reservedSeatsId.includes(880),
              occupied: Event.occupiedSeatsId.includes(880),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(881)"
            :class="{
              selected: Event.reservedSeatsId.includes(881),
              occupied: Event.occupiedSeatsId.includes(881),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(882)"
            :class="{
              selected: Event.reservedSeatsId.includes(882),
              occupied: Event.occupiedSeatsId.includes(882),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(883)"
            :class="{
              selected: Event.reservedSeatsId.includes(883),
              occupied: Event.occupiedSeatsId.includes(883),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(884)"
            :class="{
              selected: Event.reservedSeatsId.includes(884),
              occupied: Event.occupiedSeatsId.includes(884),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(885)"
            :class="{
              selected: Event.reservedSeatsId.includes(885),
              occupied: Event.occupiedSeatsId.includes(885),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(886)"
            :class="{
              selected: Event.reservedSeatsId.includes(886),
              occupied: Event.occupiedSeatsId.includes(886),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(887)"
            :class="{
              selected: Event.reservedSeatsId.includes(887),
              occupied: Event.occupiedSeatsId.includes(887),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XV</span>
          <div
            class="seat"
            @click="handleClickSeat(888)"
            :class="{
              selected: Event.reservedSeatsId.includes(888),
              occupied: Event.occupiedSeatsId.includes(888),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(889)"
            :class="{
              selected: Event.reservedSeatsId.includes(889),
              occupied: Event.occupiedSeatsId.includes(889),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(890)"
            :class="{
              selected: Event.reservedSeatsId.includes(890),
              occupied: Event.occupiedSeatsId.includes(890),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(891)"
            :class="{
              selected: Event.reservedSeatsId.includes(891),
              occupied: Event.occupiedSeatsId.includes(891),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(892)"
            :class="{
              selected: Event.reservedSeatsId.includes(892),
              occupied: Event.occupiedSeatsId.includes(892),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(893)"
            :class="{
              selected: Event.reservedSeatsId.includes(893),
              occupied: Event.occupiedSeatsId.includes(893),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(894)"
            :class="{
              selected: Event.reservedSeatsId.includes(894),
              occupied: Event.occupiedSeatsId.includes(894),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(895)"
            :class="{
              selected: Event.reservedSeatsId.includes(895),
              occupied: Event.occupiedSeatsId.includes(895),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(896)"
            :class="{
              selected: Event.reservedSeatsId.includes(896),
              occupied: Event.occupiedSeatsId.includes(896),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(897)"
            :class="{
              selected: Event.reservedSeatsId.includes(897),
              occupied: Event.occupiedSeatsId.includes(897),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(898)"
            :class="{
              selected: Event.reservedSeatsId.includes(898),
              occupied: Event.occupiedSeatsId.includes(898),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(899)"
            :class="{
              selected: Event.reservedSeatsId.includes(899),
              occupied: Event.occupiedSeatsId.includes(899),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(900)"
            :class="{
              selected: Event.reservedSeatsId.includes(900),
              occupied: Event.occupiedSeatsId.includes(900),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(901)"
            :class="{
              selected: Event.reservedSeatsId.includes(901),
              occupied: Event.occupiedSeatsId.includes(901),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(902)"
            :class="{
              selected: Event.reservedSeatsId.includes(902),
              occupied: Event.occupiedSeatsId.includes(902),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(903)"
            :class="{
              selected: Event.reservedSeatsId.includes(903),
              occupied: Event.occupiedSeatsId.includes(903),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XVI</span>
          <div
            class="seat"
            @click="handleClickSeat(904)"
            :class="{
              selected: Event.reservedSeatsId.includes(904),
              occupied: Event.occupiedSeatsId.includes(904),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(905)"
            :class="{
              selected: Event.reservedSeatsId.includes(905),
              occupied: Event.occupiedSeatsId.includes(905),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(906)"
            :class="{
              selected: Event.reservedSeatsId.includes(906),
              occupied: Event.occupiedSeatsId.includes(906),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(907)"
            :class="{
              selected: Event.reservedSeatsId.includes(907),
              occupied: Event.occupiedSeatsId.includes(907),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(908)"
            :class="{
              selected: Event.reservedSeatsId.includes(908),
              occupied: Event.occupiedSeatsId.includes(908),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(909)"
            :class="{
              selected: Event.reservedSeatsId.includes(909),
              occupied: Event.occupiedSeatsId.includes(909),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(910)"
            :class="{
              selected: Event.reservedSeatsId.includes(910),
              occupied: Event.occupiedSeatsId.includes(910),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(911)"
            :class="{
              selected: Event.reservedSeatsId.includes(911),
              occupied: Event.occupiedSeatsId.includes(911),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(912)"
            :class="{
              selected: Event.reservedSeatsId.includes(912),
              occupied: Event.occupiedSeatsId.includes(912),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(913)"
            :class="{
              selected: Event.reservedSeatsId.includes(913),
              occupied: Event.occupiedSeatsId.includes(913),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(914)"
            :class="{
              selected: Event.reservedSeatsId.includes(914),
              occupied: Event.occupiedSeatsId.includes(914),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(915)"
            :class="{
              selected: Event.reservedSeatsId.includes(915),
              occupied: Event.occupiedSeatsId.includes(915),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(916)"
            :class="{
              selected: Event.reservedSeatsId.includes(916),
              occupied: Event.occupiedSeatsId.includes(916),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(917)"
            :class="{
              selected: Event.reservedSeatsId.includes(917),
              occupied: Event.occupiedSeatsId.includes(917),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(918)"
            :class="{
              selected: Event.reservedSeatsId.includes(918),
              occupied: Event.occupiedSeatsId.includes(918),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(919)"
            :class="{
              selected: Event.reservedSeatsId.includes(919),
              occupied: Event.occupiedSeatsId.includes(919),
            }"
          >
            16
          </div>
        </div>
        <div class="row">
          <span>XVII</span>
          <div
            class="seat"
            @click="handleClickSeat(920)"
            :class="{
              selected: Event.reservedSeatsId.includes(920),
              occupied: Event.occupiedSeatsId.includes(920),
            }"
          >
            1
          </div>
          <div
            class="seat"
            @click="handleClickSeat(921)"
            :class="{
              selected: Event.reservedSeatsId.includes(921),
              occupied: Event.occupiedSeatsId.includes(921),
            }"
          >
            2
          </div>
          <div
            class="seat"
            @click="handleClickSeat(922)"
            :class="{
              selected: Event.reservedSeatsId.includes(922),
              occupied: Event.occupiedSeatsId.includes(922),
            }"
          >
            3
          </div>
          <div
            class="seat"
            @click="handleClickSeat(923)"
            :class="{
              selected: Event.reservedSeatsId.includes(923),
              occupied: Event.occupiedSeatsId.includes(923),
            }"
          >
            4
          </div>
          <div
            class="seat"
            @click="handleClickSeat(924)"
            :class="{
              selected: Event.reservedSeatsId.includes(924),
              occupied: Event.occupiedSeatsId.includes(924),
            }"
          >
            5
          </div>
          <div
            class="seat"
            @click="handleClickSeat(925)"
            :class="{
              selected: Event.reservedSeatsId.includes(925),
              occupied: Event.occupiedSeatsId.includes(925),
            }"
          >
            6
          </div>
          <div
            class="seat"
            @click="handleClickSeat(926)"
            :class="{
              selected: Event.reservedSeatsId.includes(926),
              occupied: Event.occupiedSeatsId.includes(926),
            }"
          >
            7
          </div>
          <div
            class="seat"
            @click="handleClickSeat(927)"
            :class="{
              selected: Event.reservedSeatsId.includes(927),
              occupied: Event.occupiedSeatsId.includes(927),
            }"
          >
            8
          </div>
          <div
            class="seat"
            @click="handleClickSeat(928)"
            :class="{
              selected: Event.reservedSeatsId.includes(928),
              occupied: Event.occupiedSeatsId.includes(928),
            }"
          >
            9
          </div>
          <div
            class="seat"
            @click="handleClickSeat(939)"
            :class="{
              selected: Event.reservedSeatsId.includes(939),
              occupied: Event.occupiedSeatsId.includes(939),
            }"
          >
            10
          </div>
          <div
            class="seat"
            @click="handleClickSeat(930)"
            :class="{
              selected: Event.reservedSeatsId.includes(930),
              occupied: Event.occupiedSeatsId.includes(930),
            }"
          >
            11
          </div>
          <div
            class="seat"
            @click="handleClickSeat(931)"
            :class="{
              selected: Event.reservedSeatsId.includes(931),
              occupied: Event.occupiedSeatsId.includes(931),
            }"
          >
            12
          </div>
          <div
            class="seat"
            @click="handleClickSeat(932)"
            :class="{
              selected: Event.reservedSeatsId.includes(932),
              occupied: Event.occupiedSeatsId.includes(932),
            }"
          >
            13
          </div>
          <div
            class="seat"
            @click="handleClickSeat(933)"
            :class="{
              selected: Event.reservedSeatsId.includes(933),
              occupied: Event.occupiedSeatsId.includes(933),
            }"
          >
            14
          </div>
          <div
            class="seat"
            @click="handleClickSeat(934)"
            :class="{
              selected: Event.reservedSeatsId.includes(934),
              occupied: Event.occupiedSeatsId.includes(934),
            }"
          >
            15
          </div>
          <div
            class="seat"
            @click="handleClickSeat(935)"
            :class="{
              selected: Event.reservedSeatsId.includes(935),
              occupied: Event.occupiedSeatsId.includes(935),
            }"
          >
            16
          </div>
          <div
            class="seat"
            @click="handleClickSeat(936)"
            :class="{
              selected: Event.reservedSeatsId.includes(936),
              occupied: Event.occupiedSeatsId.includes(936),
            }"
          >
            17
          </div>
          <div
            class="seat"
            @click="handleClickSeat(937)"
            :class="{
              selected: Event.reservedSeatsId.includes(937),
              occupied: Event.occupiedSeatsId.includes(937),
            }"
          >
            18
          </div>
          <div
            class="seat"
            @click="handleClickSeat(938)"
            :class="{
              selected: Event.reservedSeatsId.includes(938),
              occupied: Event.occupiedSeatsId.includes(938),
            }"
          >
            19
          </div>
          <div
            class="seat"
            @click="handleClickSeat(939)"
            :class="{
              selected: Event.reservedSeatsId.includes(939),
              occupied: Event.occupiedSeatsId.includes(939),
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
import { mapState, mapActions } from 'pinia';
import { useEventStore } from '../../../../store/Event';

export default {
  name: 'Parter',
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
