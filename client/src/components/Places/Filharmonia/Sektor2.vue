<template>
  <div>
    <div class="largeLayout">
      <h4 @click="controls.selectedSector = ''"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do widoku sektorów</h4>
      <div class="scene">Scena</div>
      <div class="sectorContainer">
        <!-- Left column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(277, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(277), selected: selectedSeats.includes(277) }">1</div>
            <div class="seat" @click="handleClickSeat(278, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(278), selected: selectedSeats.includes(278) }">2</div>
            <div class="seat" @click="handleClickSeat(279, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(279), selected: selectedSeats.includes(279) }">3</div>
            <div class="seat" @click="handleClickSeat(280, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(280), selected: selectedSeats.includes(280) }">4</div>
            <div class="seat" @click="handleClickSeat(281, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(281), selected: selectedSeats.includes(281) }">5</div>
            <div class="seat" @click="handleClickSeat(282, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(282), selected: selectedSeats.includes(282) }">6</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(312, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(312), selected: selectedSeats.includes(312) }">1</div>
            <div class="seat" @click="handleClickSeat(313, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(313), selected: selectedSeats.includes(313) }">2</div>
            <div class="seat" @click="handleClickSeat(314, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(314), selected: selectedSeats.includes(314) }">3</div>
            <div class="seat" @click="handleClickSeat(315, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(315), selected: selectedSeats.includes(315) }">4</div>
            <div class="seat" @click="handleClickSeat(316, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(316), selected: selectedSeats.includes(316) }">5</div>
            <div class="seat" @click="handleClickSeat(317, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(317), selected: selectedSeats.includes(317) }">6</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(347, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(347), selected: selectedSeats.includes(347) }">1</div>
            <div class="seat" @click="handleClickSeat(348, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(348), selected: selectedSeats.includes(348) }">2</div>
            <div class="seat" @click="handleClickSeat(349, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(349), selected: selectedSeats.includes(349) }">3</div>
            <div class="seat" @click="handleClickSeat(350, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(350), selected: selectedSeats.includes(350) }">4</div>
            <div class="seat" @click="handleClickSeat(351, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(351), selected: selectedSeats.includes(351) }">5</div>
            <div class="seat" @click="handleClickSeat(352, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(352), selected: selectedSeats.includes(352) }">6</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(383, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(383), selected: selectedSeats.includes(383) }">1</div>
            <div class="seat" @click="handleClickSeat(384, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(384), selected: selectedSeats.includes(384) }">2</div>
            <div class="seat" @click="handleClickSeat(385, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(385), selected: selectedSeats.includes(385) }">3</div>
            <div class="seat" @click="handleClickSeat(386, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(386), selected: selectedSeats.includes(386) }">4</div>
            <div class="seat" @click="handleClickSeat(387, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(387), selected: selectedSeats.includes(387) }">5</div>
            <div class="seat" @click="handleClickSeat(388, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(388), selected: selectedSeats.includes(388) }">6</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(419, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(419), selected: selectedSeats.includes(419) }">1</div>
            <div class="seat" @click="handleClickSeat(420, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(420), selected: selectedSeats.includes(420) }">2</div>
            <div class="seat" @click="handleClickSeat(421, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(421), selected: selectedSeats.includes(421) }">3</div>
            <div class="seat" @click="handleClickSeat(422, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(422), selected: selectedSeats.includes(422) }">4</div>
            <div class="seat" @click="handleClickSeat(423, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(423), selected: selectedSeats.includes(423) }">5</div>
            <div class="seat" @click="handleClickSeat(424, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(424), selected: selectedSeats.includes(424) }">6</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(456, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(456), selected: selectedSeats.includes(456) }">1</div>
            <div class="seat" @click="handleClickSeat(457, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(457), selected: selectedSeats.includes(457) }">2</div>
            <div class="seat" @click="handleClickSeat(458, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(458), selected: selectedSeats.includes(458) }">3</div>
            <div class="seat" @click="handleClickSeat(459, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(459), selected: selectedSeats.includes(459) }">4</div>
            <div class="seat" @click="handleClickSeat(460, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(460), selected: selectedSeats.includes(460) }">5</div>
            <div class="seat" @click="handleClickSeat(461, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(461), selected: selectedSeats.includes(461) }">6</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(493, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(493), selected: selectedSeats.includes(493) }">1</div>
            <div class="seat" @click="handleClickSeat(494, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(494), selected: selectedSeats.includes(494) }">2</div>
            <div class="seat" @click="handleClickSeat(495, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(495), selected: selectedSeats.includes(495) }">3</div>
            <div class="seat" @click="handleClickSeat(496, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(496), selected: selectedSeats.includes(496) }">4</div>
            <div class="seat" @click="handleClickSeat(497, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(497), selected: selectedSeats.includes(497) }">5</div>
            <div class="seat" @click="handleClickSeat(498, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(498), selected: selectedSeats.includes(498) }">6</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(531, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(531), selected: selectedSeats.includes(531) }">1</div>
            <div class="seat" @click="handleClickSeat(532, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(532), selected: selectedSeats.includes(532) }">2</div>
            <div class="seat" @click="handleClickSeat(533, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(533), selected: selectedSeats.includes(533) }">3</div>
            <div class="seat" @click="handleClickSeat(534, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(534), selected: selectedSeats.includes(534) }">4</div>
            <div class="seat" @click="handleClickSeat(535, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(535), selected: selectedSeats.includes(535) }">5</div>
            <div class="seat" @click="handleClickSeat(536, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(536), selected: selectedSeats.includes(536) }">6</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(569, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(569), selected: selectedSeats.includes(569) }">1</div>
            <div class="seat" @click="handleClickSeat(570, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(570), selected: selectedSeats.includes(570) }">2</div>
            <div class="seat" @click="handleClickSeat(571, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(571), selected: selectedSeats.includes(571) }">3</div>
            <div class="seat" @click="handleClickSeat(572, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(572), selected: selectedSeats.includes(572) }">4</div>
            <div class="seat" @click="handleClickSeat(573, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(573), selected: selectedSeats.includes(573) }">5</div>
            <div class="seat" @click="handleClickSeat(574, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(574), selected: selectedSeats.includes(574) }">6</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(608, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(608), selected: selectedSeats.includes(608) }">1</div>
            <div class="seat" @click="handleClickSeat(609, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(609), selected: selectedSeats.includes(609) }">2</div>
            <div class="seat" @click="handleClickSeat(610, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(610), selected: selectedSeats.includes(610) }">3</div>
            <div class="seat" @click="handleClickSeat(611, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(611), selected: selectedSeats.includes(611) }">4</div>
            <div class="seat" @click="handleClickSeat(612, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(612), selected: selectedSeats.includes(612) }">5</div>
            <div class="seat" @click="handleClickSeat(613, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(613), selected: selectedSeats.includes(613) }">6</div>
          </div>
        </div>
        <!-- Middle column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(250, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(250), selected: selectedSeats.includes(250) }">1</div>
            <div class="seat" @click="handleClickSeat(251, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(251), selected: selectedSeats.includes(251) }">2</div>
            <div class="seat" @click="handleClickSeat(252, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(252), selected: selectedSeats.includes(252) }">3</div>
            <div class="seat" @click="handleClickSeat(253, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(253), selected: selectedSeats.includes(253) }">4</div>
            <div class="seat" @click="handleClickSeat(254, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(254), selected: selectedSeats.includes(254) }">5</div>
            <div class="seat" @click="handleClickSeat(255, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(255), selected: selectedSeats.includes(255) }">6</div>
            <div class="seat" @click="handleClickSeat(256, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(256), selected: selectedSeats.includes(256) }">7</div>
            <div class="seat" @click="handleClickSeat(257, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(257), selected: selectedSeats.includes(257) }">8</div>
            <div class="seat" @click="handleClickSeat(258, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(258), selected: selectedSeats.includes(258) }">9</div>
            <div class="seat" @click="handleClickSeat(259, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(259), selected: selectedSeats.includes(259) }">10</div>
            <div class="seat" @click="handleClickSeat(260, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(260), selected: selectedSeats.includes(260) }">11</div>
            <div class="seat" @click="handleClickSeat(261, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(261), selected: selectedSeats.includes(261) }">12</div>
            <div class="seat" @click="handleClickSeat(262, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(262), selected: selectedSeats.includes(262) }">13</div>
            <div class="seat" @click="handleClickSeat(263, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(263), selected: selectedSeats.includes(263) }">14</div>
            <div class="seat" @click="handleClickSeat(264, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(264), selected: selectedSeats.includes(264) }">15</div>
            <div class="seat" @click="handleClickSeat(265, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(265), selected: selectedSeats.includes(265) }">16</div>
            <div class="seat" @click="handleClickSeat(266, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(266), selected: selectedSeats.includes(266) }">17</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(283, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(283), selected: selectedSeats.includes(283) }">7</div>
            <div class="seat" @click="handleClickSeat(284, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(284), selected: selectedSeats.includes(284) }">8</div>
            <div class="seat" @click="handleClickSeat(285, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(285), selected: selectedSeats.includes(285) }">9</div>
            <div class="seat" @click="handleClickSeat(286, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(286), selected: selectedSeats.includes(286) }">10</div>
            <div class="seat" @click="handleClickSeat(287, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(287), selected: selectedSeats.includes(287) }">11</div>
            <div class="seat" @click="handleClickSeat(288, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(288), selected: selectedSeats.includes(288) }">12</div>
            <div class="seat" @click="handleClickSeat(289, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(289), selected: selectedSeats.includes(289) }">13</div>
            <div class="seat" @click="handleClickSeat(290, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(290), selected: selectedSeats.includes(290) }">14</div>
            <div class="seat" @click="handleClickSeat(291, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(291), selected: selectedSeats.includes(291) }">15</div>
            <div class="seat" @click="handleClickSeat(292, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(292), selected: selectedSeats.includes(292) }">16</div>
            <div class="seat" @click="handleClickSeat(293, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(293), selected: selectedSeats.includes(293) }">17</div>
            <div class="seat" @click="handleClickSeat(294, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(294), selected: selectedSeats.includes(294) }">18</div>
            <div class="seat" @click="handleClickSeat(295, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(295), selected: selectedSeats.includes(295) }">19</div>
            <div class="seat" @click="handleClickSeat(296, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(296), selected: selectedSeats.includes(296) }">20</div>
            <div class="seat" @click="handleClickSeat(297, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(297), selected: selectedSeats.includes(297) }">21</div>
            <div class="seat" @click="handleClickSeat(298, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(298), selected: selectedSeats.includes(298) }">22</div>
            <div class="seat" @click="handleClickSeat(299, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(299), selected: selectedSeats.includes(299) }">23</div>
            <div class="seat" @click="handleClickSeat(300, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(300), selected: selectedSeats.includes(300) }">24</div>
            <div class="seat" @click="handleClickSeat(301, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(301), selected: selectedSeats.includes(301) }">25</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(318, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(318), selected: selectedSeats.includes(318) }">7</div>
            <div class="seat" @click="handleClickSeat(319, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(319), selected: selectedSeats.includes(319) }">8</div>
            <div class="seat" @click="handleClickSeat(320, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(320), selected: selectedSeats.includes(320) }">9</div>
            <div class="seat" @click="handleClickSeat(321, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(321), selected: selectedSeats.includes(321) }">10</div>
            <div class="seat" @click="handleClickSeat(322, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(322), selected: selectedSeats.includes(322) }">11</div>
            <div class="seat" @click="handleClickSeat(323, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(323), selected: selectedSeats.includes(323) }">12</div>
            <div class="seat" @click="handleClickSeat(324, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(324), selected: selectedSeats.includes(324) }">13</div>
            <div class="seat" @click="handleClickSeat(325, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(325), selected: selectedSeats.includes(325) }">14</div>
            <div class="seat" @click="handleClickSeat(326, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(326), selected: selectedSeats.includes(326) }">15</div>
            <div class="seat" @click="handleClickSeat(327, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(327), selected: selectedSeats.includes(327) }">16</div>
            <div class="seat" @click="handleClickSeat(328, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(328), selected: selectedSeats.includes(328) }">17</div>
            <div class="seat" @click="handleClickSeat(329, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(329), selected: selectedSeats.includes(329) }">18</div>
            <div class="seat" @click="handleClickSeat(330, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(330), selected: selectedSeats.includes(330) }">19</div>
            <div class="seat" @click="handleClickSeat(331, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(331), selected: selectedSeats.includes(331) }">20</div>
            <div class="seat" @click="handleClickSeat(332, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(332), selected: selectedSeats.includes(332) }">21</div>
            <div class="seat" @click="handleClickSeat(333, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(333), selected: selectedSeats.includes(333) }">22</div>
            <div class="seat" @click="handleClickSeat(334, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(334), selected: selectedSeats.includes(334) }">23</div>
            <div class="seat" @click="handleClickSeat(335, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(335), selected: selectedSeats.includes(335) }">24</div>
            <div class="seat" @click="handleClickSeat(336, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(336), selected: selectedSeats.includes(336) }">25</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(353, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(353), selected: selectedSeats.includes(353) }">7</div>
            <div class="seat" @click="handleClickSeat(354, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(354), selected: selectedSeats.includes(354) }">8</div>
            <div class="seat" @click="handleClickSeat(355, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(355), selected: selectedSeats.includes(355) }">9</div>
            <div class="seat" @click="handleClickSeat(356, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(356), selected: selectedSeats.includes(356) }">10</div>
            <div class="seat" @click="handleClickSeat(357, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(357), selected: selectedSeats.includes(357) }">11</div>
            <div class="seat" @click="handleClickSeat(358, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(358), selected: selectedSeats.includes(358) }">12</div>
            <div class="seat" @click="handleClickSeat(359, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(359), selected: selectedSeats.includes(359) }">13</div>
            <div class="seat" @click="handleClickSeat(360, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(360), selected: selectedSeats.includes(360) }">14</div>
            <div class="seat" @click="handleClickSeat(361, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(361), selected: selectedSeats.includes(361) }">15</div>
            <div class="seat" @click="handleClickSeat(362, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(362), selected: selectedSeats.includes(362) }">16</div>
            <div class="seat" @click="handleClickSeat(363, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(363), selected: selectedSeats.includes(363) }">17</div>
            <div class="seat" @click="handleClickSeat(364, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(364), selected: selectedSeats.includes(364) }">18</div>
            <div class="seat" @click="handleClickSeat(365, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(365), selected: selectedSeats.includes(365) }">19</div>
            <div class="seat" @click="handleClickSeat(366, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(366), selected: selectedSeats.includes(366) }">20</div>
            <div class="seat" @click="handleClickSeat(367, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(367), selected: selectedSeats.includes(367) }">21</div>
            <div class="seat" @click="handleClickSeat(368, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(368), selected: selectedSeats.includes(368) }">22</div>
            <div class="seat" @click="handleClickSeat(369, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(369), selected: selectedSeats.includes(369) }">23</div>
            <div class="seat" @click="handleClickSeat(370, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(370), selected: selectedSeats.includes(370) }">24</div>
            <div class="seat" @click="handleClickSeat(371, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(371), selected: selectedSeats.includes(371) }">25</div>
            <div class="seat" @click="handleClickSeat(372, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(372), selected: selectedSeats.includes(372) }">26</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(389, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(389), selected: selectedSeats.includes(389) }">7</div>
            <div class="seat" @click="handleClickSeat(390, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(390), selected: selectedSeats.includes(390) }">8</div>
            <div class="seat" @click="handleClickSeat(391, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(391), selected: selectedSeats.includes(391) }">9</div>
            <div class="seat" @click="handleClickSeat(392, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(392), selected: selectedSeats.includes(392) }">10</div>
            <div class="seat" @click="handleClickSeat(393, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(393), selected: selectedSeats.includes(393) }">11</div>
            <div class="seat" @click="handleClickSeat(394, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(394), selected: selectedSeats.includes(394) }">12</div>
            <div class="seat" @click="handleClickSeat(395, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(395), selected: selectedSeats.includes(395) }">13</div>
            <div class="seat" @click="handleClickSeat(396, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(396), selected: selectedSeats.includes(396) }">14</div>
            <div class="seat" @click="handleClickSeat(397, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(397), selected: selectedSeats.includes(397) }">15</div>
            <div class="seat" @click="handleClickSeat(398, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(398), selected: selectedSeats.includes(398) }">16</div>
            <div class="seat" @click="handleClickSeat(399, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(399), selected: selectedSeats.includes(399) }">17</div>
            <div class="seat" @click="handleClickSeat(400, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(400), selected: selectedSeats.includes(400) }">18</div>
            <div class="seat" @click="handleClickSeat(401, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(401), selected: selectedSeats.includes(401) }">19</div>
            <div class="seat" @click="handleClickSeat(402, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(402), selected: selectedSeats.includes(402) }">20</div>
            <div class="seat" @click="handleClickSeat(403, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(403), selected: selectedSeats.includes(403) }">21</div>
            <div class="seat" @click="handleClickSeat(404, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(404), selected: selectedSeats.includes(404) }">22</div>
            <div class="seat" @click="handleClickSeat(405, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(405), selected: selectedSeats.includes(405) }">23</div>
            <div class="seat" @click="handleClickSeat(406, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(406), selected: selectedSeats.includes(406) }">24</div>
            <div class="seat" @click="handleClickSeat(407, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(407), selected: selectedSeats.includes(407) }">25</div>
            <div class="seat" @click="handleClickSeat(408, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(408), selected: selectedSeats.includes(408) }">26</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(425, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(425), selected: selectedSeats.includes(425) }">7</div>
            <div class="seat" @click="handleClickSeat(426, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(426), selected: selectedSeats.includes(426) }">8</div>
            <div class="seat" @click="handleClickSeat(427, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(427), selected: selectedSeats.includes(427) }">9</div>
            <div class="seat" @click="handleClickSeat(428, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(428), selected: selectedSeats.includes(428) }">10</div>
            <div class="seat" @click="handleClickSeat(429, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(429), selected: selectedSeats.includes(429) }">11</div>
            <div class="seat" @click="handleClickSeat(430, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(430), selected: selectedSeats.includes(430) }">12</div>
            <div class="seat" @click="handleClickSeat(431, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(431), selected: selectedSeats.includes(431) }">13</div>
            <div class="seat" @click="handleClickSeat(432, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(432), selected: selectedSeats.includes(432) }">14</div>
            <div class="seat" @click="handleClickSeat(433, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(433), selected: selectedSeats.includes(433) }">15</div>
            <div class="seat" @click="handleClickSeat(434, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(434), selected: selectedSeats.includes(434) }">16</div>
            <div class="seat" @click="handleClickSeat(435, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(435), selected: selectedSeats.includes(435) }">17</div>
            <div class="seat" @click="handleClickSeat(436, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(436), selected: selectedSeats.includes(436) }">18</div>
            <div class="seat" @click="handleClickSeat(437, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(437), selected: selectedSeats.includes(437) }">19</div>
            <div class="seat" @click="handleClickSeat(438, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(438), selected: selectedSeats.includes(438) }">20</div>
            <div class="seat" @click="handleClickSeat(439, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(439), selected: selectedSeats.includes(439) }">21</div>
            <div class="seat" @click="handleClickSeat(440, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(440), selected: selectedSeats.includes(440) }">22</div>
            <div class="seat" @click="handleClickSeat(441, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(441), selected: selectedSeats.includes(441) }">23</div>
            <div class="seat" @click="handleClickSeat(442, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(442), selected: selectedSeats.includes(442) }">24</div>
            <div class="seat" @click="handleClickSeat(443, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(443), selected: selectedSeats.includes(443) }">25</div>
            <div class="seat" @click="handleClickSeat(444, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(444), selected: selectedSeats.includes(444) }">26</div>
            <div class="seat" @click="handleClickSeat(445, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(445), selected: selectedSeats.includes(445) }">27</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(462, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(462), selected: selectedSeats.includes(462) }">7</div>
            <div class="seat" @click="handleClickSeat(463, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(463), selected: selectedSeats.includes(463) }">8</div>
            <div class="seat" @click="handleClickSeat(464, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(464), selected: selectedSeats.includes(464) }">9</div>
            <div class="seat" @click="handleClickSeat(465, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(465), selected: selectedSeats.includes(465) }">10</div>
            <div class="seat" @click="handleClickSeat(466, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(466), selected: selectedSeats.includes(466) }">11</div>
            <div class="seat" @click="handleClickSeat(467, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(467), selected: selectedSeats.includes(467) }">12</div>
            <div class="seat" @click="handleClickSeat(468, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(468), selected: selectedSeats.includes(468) }">13</div>
            <div class="seat" @click="handleClickSeat(469, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(469), selected: selectedSeats.includes(469) }">14</div>
            <div class="seat" @click="handleClickSeat(470, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(470), selected: selectedSeats.includes(470) }">15</div>
            <div class="seat" @click="handleClickSeat(471, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(471), selected: selectedSeats.includes(471) }">16</div>
            <div class="seat" @click="handleClickSeat(472, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(472), selected: selectedSeats.includes(472) }">17</div>
            <div class="seat" @click="handleClickSeat(473, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(473), selected: selectedSeats.includes(473) }">18</div>
            <div class="seat" @click="handleClickSeat(474, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(474), selected: selectedSeats.includes(474) }">19</div>
            <div class="seat" @click="handleClickSeat(475, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(475), selected: selectedSeats.includes(475) }">20</div>
            <div class="seat" @click="handleClickSeat(476, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(476), selected: selectedSeats.includes(476) }">21</div>
            <div class="seat" @click="handleClickSeat(477, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(477), selected: selectedSeats.includes(477) }">22</div>
            <div class="seat" @click="handleClickSeat(478, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(478), selected: selectedSeats.includes(478) }">23</div>
            <div class="seat" @click="handleClickSeat(479, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(479), selected: selectedSeats.includes(479) }">24</div>
            <div class="seat" @click="handleClickSeat(480, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(480), selected: selectedSeats.includes(480) }">25</div>
            <div class="seat" @click="handleClickSeat(481, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(481), selected: selectedSeats.includes(481) }">26</div>
            <div class="seat" @click="handleClickSeat(482, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(482), selected: selectedSeats.includes(482) }">27</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(499, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(499), selected: selectedSeats.includes(499) }">7</div>
            <div class="seat" @click="handleClickSeat(500, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(500), selected: selectedSeats.includes(500) }">8</div>
            <div class="seat" @click="handleClickSeat(501, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(501), selected: selectedSeats.includes(501) }">9</div>
            <div class="seat" @click="handleClickSeat(502, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(502), selected: selectedSeats.includes(502) }">10</div>
            <div class="seat" @click="handleClickSeat(503, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(503), selected: selectedSeats.includes(503) }">11</div>
            <div class="seat" @click="handleClickSeat(504, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(504), selected: selectedSeats.includes(504) }">12</div>
            <div class="seat" @click="handleClickSeat(505, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(505), selected: selectedSeats.includes(505) }">13</div>
            <div class="seat" @click="handleClickSeat(506, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(506), selected: selectedSeats.includes(506) }">14</div>
            <div class="seat" @click="handleClickSeat(507, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(507), selected: selectedSeats.includes(507) }">15</div>
            <div class="seat" @click="handleClickSeat(508, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(508), selected: selectedSeats.includes(508) }">16</div>
            <div class="seat" @click="handleClickSeat(509, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(509), selected: selectedSeats.includes(509) }">17</div>
            <div class="seat" @click="handleClickSeat(510, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(510), selected: selectedSeats.includes(510) }">18</div>
            <div class="seat" @click="handleClickSeat(511, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(511), selected: selectedSeats.includes(511) }">19</div>
            <div class="seat" @click="handleClickSeat(512, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(512), selected: selectedSeats.includes(512) }">20</div>
            <div class="seat" @click="handleClickSeat(513, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(513), selected: selectedSeats.includes(513) }">21</div>
            <div class="seat" @click="handleClickSeat(514, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(514), selected: selectedSeats.includes(514) }">22</div>
            <div class="seat" @click="handleClickSeat(515, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(515), selected: selectedSeats.includes(515) }">23</div>
            <div class="seat" @click="handleClickSeat(516, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(516), selected: selectedSeats.includes(516) }">24</div>
            <div class="seat" @click="handleClickSeat(517, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(517), selected: selectedSeats.includes(517) }">25</div>
            <div class="seat" @click="handleClickSeat(518, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(518), selected: selectedSeats.includes(518) }">26</div>
            <div class="seat" @click="handleClickSeat(519, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(519), selected: selectedSeats.includes(519) }">27</div>
            <div class="seat" @click="handleClickSeat(520, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(520), selected: selectedSeats.includes(520) }">28</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(537, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(537), selected: selectedSeats.includes(537) }">7</div>
            <div class="seat" @click="handleClickSeat(538, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(538), selected: selectedSeats.includes(538) }">8</div>
            <div class="seat" @click="handleClickSeat(539, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(539), selected: selectedSeats.includes(539) }">9</div>
            <div class="seat" @click="handleClickSeat(540, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(540), selected: selectedSeats.includes(540) }">10</div>
            <div class="seat" @click="handleClickSeat(541, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(541), selected: selectedSeats.includes(541) }">11</div>
            <div class="seat" @click="handleClickSeat(542, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(542), selected: selectedSeats.includes(542) }">12</div>
            <div class="seat" @click="handleClickSeat(543, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(543), selected: selectedSeats.includes(543) }">13</div>
            <div class="seat" @click="handleClickSeat(544, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(544), selected: selectedSeats.includes(544) }">14</div>
            <div class="seat" @click="handleClickSeat(545, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(545), selected: selectedSeats.includes(545) }">15</div>
            <div class="seat" @click="handleClickSeat(546, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(546), selected: selectedSeats.includes(546) }">16</div>
            <div class="seat" @click="handleClickSeat(547, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(547), selected: selectedSeats.includes(547) }">17</div>
            <div class="seat" @click="handleClickSeat(548, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(548), selected: selectedSeats.includes(548) }">18</div>
            <div class="seat" @click="handleClickSeat(549, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(549), selected: selectedSeats.includes(549) }">19</div>
            <div class="seat" @click="handleClickSeat(550, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(550), selected: selectedSeats.includes(550) }">20</div>
            <div class="seat" @click="handleClickSeat(551, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(551), selected: selectedSeats.includes(551) }">21</div>
            <div class="seat" @click="handleClickSeat(552, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(552), selected: selectedSeats.includes(552) }">22</div>
            <div class="seat" @click="handleClickSeat(553, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(553), selected: selectedSeats.includes(553) }">23</div>
            <div class="seat" @click="handleClickSeat(554, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(554), selected: selectedSeats.includes(554) }">24</div>
            <div class="seat" @click="handleClickSeat(555, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(555), selected: selectedSeats.includes(555) }">25</div>
            <div class="seat" @click="handleClickSeat(556, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(556), selected: selectedSeats.includes(556) }">26</div>
            <div class="seat" @click="handleClickSeat(557, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(557), selected: selectedSeats.includes(557) }">27</div>
            <div class="seat" @click="handleClickSeat(558, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(558), selected: selectedSeats.includes(558) }">28</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(575, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(575), selected: selectedSeats.includes(575) }">7</div>
            <div class="seat" @click="handleClickSeat(576, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(576), selected: selectedSeats.includes(576) }">8</div>
            <div class="seat" @click="handleClickSeat(577, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(577), selected: selectedSeats.includes(577) }">9</div>
            <div class="seat" @click="handleClickSeat(578, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(578), selected: selectedSeats.includes(578) }">10</div>
            <div class="seat" @click="handleClickSeat(579, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(579), selected: selectedSeats.includes(579) }">11</div>
            <div class="seat" @click="handleClickSeat(580, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(580), selected: selectedSeats.includes(580) }">12</div>
            <div class="seat" @click="handleClickSeat(581, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(581), selected: selectedSeats.includes(581) }">13</div>
            <div class="seat" @click="handleClickSeat(582, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(582), selected: selectedSeats.includes(582) }">14</div>
            <div class="seat" @click="handleClickSeat(583, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(583), selected: selectedSeats.includes(583) }">15</div>
            <div class="seat" @click="handleClickSeat(584, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(584), selected: selectedSeats.includes(584) }">16</div>
            <div class="seat" @click="handleClickSeat(585, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(585), selected: selectedSeats.includes(585) }">17</div>
            <div class="seat" @click="handleClickSeat(586, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(586), selected: selectedSeats.includes(586) }">18</div>
            <div class="seat" @click="handleClickSeat(587, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(587), selected: selectedSeats.includes(587) }">19</div>
            <div class="seat" @click="handleClickSeat(588, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(588), selected: selectedSeats.includes(588) }">20</div>
            <div class="seat" @click="handleClickSeat(589, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(589), selected: selectedSeats.includes(589) }">21</div>
            <div class="seat" @click="handleClickSeat(590, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(590), selected: selectedSeats.includes(590) }">22</div>
            <div class="seat" @click="handleClickSeat(591, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(591), selected: selectedSeats.includes(591) }">23</div>
            <div class="seat" @click="handleClickSeat(592, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(592), selected: selectedSeats.includes(592) }">24</div>
            <div class="seat" @click="handleClickSeat(593, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(593), selected: selectedSeats.includes(593) }">25</div>
            <div class="seat" @click="handleClickSeat(594, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(594), selected: selectedSeats.includes(594) }">26</div>
            <div class="seat" @click="handleClickSeat(595, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(595), selected: selectedSeats.includes(595) }">27</div>
            <div class="seat" @click="handleClickSeat(596, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(596), selected: selectedSeats.includes(596) }">28</div>
            <div class="seat" @click="handleClickSeat(597, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(597), selected: selectedSeats.includes(597) }">29</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(614, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(614), selected: selectedSeats.includes(614) }">7</div>
            <div class="seat" @click="handleClickSeat(615, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(615), selected: selectedSeats.includes(615) }">8</div>
            <div class="seat" @click="handleClickSeat(616, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(616), selected: selectedSeats.includes(616) }">9</div>
            <div class="seat" @click="handleClickSeat(617, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(617), selected: selectedSeats.includes(617) }">10</div>
            <div class="seat" @click="handleClickSeat(618, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(618), selected: selectedSeats.includes(618) }">11</div>
            <div class="seat" @click="handleClickSeat(619, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(619), selected: selectedSeats.includes(619) }">12</div>
            <div class="seat" @click="handleClickSeat(620, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(620), selected: selectedSeats.includes(620) }">13</div>
            <div class="seat" @click="handleClickSeat(621, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(621), selected: selectedSeats.includes(621) }">14</div>
            <div class="seat" @click="handleClickSeat(622, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(622), selected: selectedSeats.includes(622) }">15</div>
            <div class="seat" @click="handleClickSeat(623, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(623), selected: selectedSeats.includes(623) }">16</div>
            <div class="seat" @click="handleClickSeat(624, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(624), selected: selectedSeats.includes(624) }">17</div>
            <div class="seat" @click="handleClickSeat(625, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(625), selected: selectedSeats.includes(625) }">18</div>
            <div class="seat" @click="handleClickSeat(626, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(626), selected: selectedSeats.includes(626) }">19</div>
            <div class="seat" @click="handleClickSeat(627, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(627), selected: selectedSeats.includes(627) }">20</div>
            <div class="seat" @click="handleClickSeat(628, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(628), selected: selectedSeats.includes(628) }">21</div>
            <div class="seat" @click="handleClickSeat(629, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(629), selected: selectedSeats.includes(629) }">22</div>
            <div class="seat" @click="handleClickSeat(630, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(630), selected: selectedSeats.includes(630) }">23</div>
            <div class="seat" @click="handleClickSeat(631, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(631), selected: selectedSeats.includes(631) }">24</div>
            <div class="seat" @click="handleClickSeat(632, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(632), selected: selectedSeats.includes(632) }">25</div>
            <div class="seat" @click="handleClickSeat(633, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(633), selected: selectedSeats.includes(633) }">26</div>
            <div class="seat" @click="handleClickSeat(634, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(634), selected: selectedSeats.includes(634) }">27</div>
            <div class="seat" @click="handleClickSeat(635, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(635), selected: selectedSeats.includes(635) }">28</div>
            <div class="seat" @click="handleClickSeat(636, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(636), selected: selectedSeats.includes(636) }">29</div>
          </div>
        </div>
        <!-- Right column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(267, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(267), selected: selectedSeats.includes(267) }">18</div>
            <div class="seat" @click="handleClickSeat(268, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(268), selected: selectedSeats.includes(268) }">19</div>
            <div class="seat" @click="handleClickSeat(269, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(269), selected: selectedSeats.includes(269) }">20</div>
            <div class="seat" @click="handleClickSeat(270, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(270), selected: selectedSeats.includes(270) }">21</div>
            <div class="seat" @click="handleClickSeat(271, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(271), selected: selectedSeats.includes(271) }">22</div>
            <div class="seat" @click="handleClickSeat(272, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(272), selected: selectedSeats.includes(272) }">23</div>
            <div class="seat" @click="handleClickSeat(273, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(273), selected: selectedSeats.includes(273) }">24</div>
            <div class="seat" @click="handleClickSeat(274, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(274), selected: selectedSeats.includes(274) }">25</div>
            <div class="seat" @click="handleClickSeat(275, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(275), selected: selectedSeats.includes(275) }">26</div>
            <div class="seat" @click="handleClickSeat(276, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(276), selected: selectedSeats.includes(276) }">27</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(302, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(302), selected: selectedSeats.includes(302) }">26</div>
            <div class="seat" @click="handleClickSeat(303, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(303), selected: selectedSeats.includes(303) }">27</div>
            <div class="seat" @click="handleClickSeat(304, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(304), selected: selectedSeats.includes(304) }">28</div>
            <div class="seat" @click="handleClickSeat(305, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(305), selected: selectedSeats.includes(305) }">29</div>
            <div class="seat" @click="handleClickSeat(306, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(306), selected: selectedSeats.includes(306) }">30</div>
            <div class="seat" @click="handleClickSeat(307, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(307), selected: selectedSeats.includes(307) }">31</div>
            <div class="seat" @click="handleClickSeat(308, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(308), selected: selectedSeats.includes(308) }">32</div>
            <div class="seat" @click="handleClickSeat(309, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(309), selected: selectedSeats.includes(309) }">33</div>
            <div class="seat" @click="handleClickSeat(310, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(310), selected: selectedSeats.includes(310) }">34</div>
            <div class="seat" @click="handleClickSeat(311, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(311), selected: selectedSeats.includes(311) }">35</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(337, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(337), selected: selectedSeats.includes(337) }">26</div>
            <div class="seat" @click="handleClickSeat(338, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(338), selected: selectedSeats.includes(338) }">27</div>
            <div class="seat" @click="handleClickSeat(339, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(339), selected: selectedSeats.includes(339) }">28</div>
            <div class="seat" @click="handleClickSeat(340, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(340), selected: selectedSeats.includes(340) }">29</div>
            <div class="seat" @click="handleClickSeat(341, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(341), selected: selectedSeats.includes(341) }">30</div>
            <div class="seat" @click="handleClickSeat(342, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(342), selected: selectedSeats.includes(342) }">31</div>
            <div class="seat" @click="handleClickSeat(343, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(343), selected: selectedSeats.includes(343) }">32</div>
            <div class="seat" @click="handleClickSeat(344, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(344), selected: selectedSeats.includes(344) }">33</div>
            <div class="seat" @click="handleClickSeat(345, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(345), selected: selectedSeats.includes(345) }">34</div>
            <div class="seat" @click="handleClickSeat(346, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(346), selected: selectedSeats.includes(346) }">35</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(373, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(373), selected: selectedSeats.includes(373) }">27</div>
            <div class="seat" @click="handleClickSeat(374, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(374), selected: selectedSeats.includes(374) }">28</div>
            <div class="seat" @click="handleClickSeat(375, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(375), selected: selectedSeats.includes(375) }">29</div>
            <div class="seat" @click="handleClickSeat(376, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(376), selected: selectedSeats.includes(376) }">30</div>
            <div class="seat" @click="handleClickSeat(377, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(377), selected: selectedSeats.includes(377) }">31</div>
            <div class="seat" @click="handleClickSeat(378, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(378), selected: selectedSeats.includes(378) }">32</div>
            <div class="seat" @click="handleClickSeat(379, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(379), selected: selectedSeats.includes(379) }">33</div>
            <div class="seat" @click="handleClickSeat(380, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(380), selected: selectedSeats.includes(380) }">34</div>
            <div class="seat" @click="handleClickSeat(381, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(381), selected: selectedSeats.includes(381) }">35</div>
            <div class="seat" @click="handleClickSeat(382, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(382), selected: selectedSeats.includes(382) }">36</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(409, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(409), selected: selectedSeats.includes(409) }">27</div>
            <div class="seat" @click="handleClickSeat(410, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(410), selected: selectedSeats.includes(410) }">28</div>
            <div class="seat" @click="handleClickSeat(411, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(411), selected: selectedSeats.includes(411) }">29</div>
            <div class="seat" @click="handleClickSeat(412, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(412), selected: selectedSeats.includes(412) }">30</div>
            <div class="seat" @click="handleClickSeat(413, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(413), selected: selectedSeats.includes(413) }">31</div>
            <div class="seat" @click="handleClickSeat(414, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(414), selected: selectedSeats.includes(414) }">32</div>
            <div class="seat" @click="handleClickSeat(415, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(415), selected: selectedSeats.includes(415) }">33</div>
            <div class="seat" @click="handleClickSeat(416, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(416), selected: selectedSeats.includes(416) }">34</div>
            <div class="seat" @click="handleClickSeat(417, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(417), selected: selectedSeats.includes(417) }">35</div>
            <div class="seat" @click="handleClickSeat(418, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(418), selected: selectedSeats.includes(418) }">36</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(446, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(446), selected: selectedSeats.includes(446) }">28</div>
            <div class="seat" @click="handleClickSeat(447, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(447), selected: selectedSeats.includes(447) }">29</div>
            <div class="seat" @click="handleClickSeat(448, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(448), selected: selectedSeats.includes(448) }">30</div>
            <div class="seat" @click="handleClickSeat(449, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(449), selected: selectedSeats.includes(449) }">31</div>
            <div class="seat" @click="handleClickSeat(450, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(450), selected: selectedSeats.includes(450) }">32</div>
            <div class="seat" @click="handleClickSeat(451, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(451), selected: selectedSeats.includes(451) }">33</div>
            <div class="seat" @click="handleClickSeat(452, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(452), selected: selectedSeats.includes(452) }">34</div>
            <div class="seat" @click="handleClickSeat(453, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(453), selected: selectedSeats.includes(453) }">35</div>
            <div class="seat" @click="handleClickSeat(454, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(454), selected: selectedSeats.includes(454) }">36</div>
            <div class="seat" @click="handleClickSeat(455, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(455), selected: selectedSeats.includes(455) }">37</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(483, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(483), selected: selectedSeats.includes(483) }">28</div>
            <div class="seat" @click="handleClickSeat(484, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(484), selected: selectedSeats.includes(484) }">29</div>
            <div class="seat" @click="handleClickSeat(485, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(485), selected: selectedSeats.includes(485) }">30</div>
            <div class="seat" @click="handleClickSeat(486, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(486), selected: selectedSeats.includes(486) }">31</div>
            <div class="seat" @click="handleClickSeat(487, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(487), selected: selectedSeats.includes(487) }">32</div>
            <div class="seat" @click="handleClickSeat(488, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(488), selected: selectedSeats.includes(488) }">33</div>
            <div class="seat" @click="handleClickSeat(489, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(489), selected: selectedSeats.includes(489) }">34</div>
            <div class="seat" @click="handleClickSeat(490, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(490), selected: selectedSeats.includes(490) }">35</div>
            <div class="seat" @click="handleClickSeat(491, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(491), selected: selectedSeats.includes(491) }">36</div>
            <div class="seat" @click="handleClickSeat(492, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(492), selected: selectedSeats.includes(492) }">37</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(521, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(521), selected: selectedSeats.includes(521) }">29</div>
            <div class="seat" @click="handleClickSeat(522, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(522), selected: selectedSeats.includes(522) }">30</div>
            <div class="seat" @click="handleClickSeat(523, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(523), selected: selectedSeats.includes(523) }">31</div>
            <div class="seat" @click="handleClickSeat(524, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(524), selected: selectedSeats.includes(524) }">32</div>
            <div class="seat" @click="handleClickSeat(525, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(525), selected: selectedSeats.includes(525) }">33</div>
            <div class="seat" @click="handleClickSeat(526, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(526), selected: selectedSeats.includes(526) }">34</div>
            <div class="seat" @click="handleClickSeat(527, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(527), selected: selectedSeats.includes(527) }">35</div>
            <div class="seat" @click="handleClickSeat(528, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(528), selected: selectedSeats.includes(528) }">36</div>
            <div class="seat" @click="handleClickSeat(529, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(529), selected: selectedSeats.includes(529) }">37</div>
            <div class="seat" @click="handleClickSeat(530, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(530), selected: selectedSeats.includes(530) }">38</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(559, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(559), selected: selectedSeats.includes(559) }">29</div>
            <div class="seat" @click="handleClickSeat(560, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(560), selected: selectedSeats.includes(560) }">30</div>
            <div class="seat" @click="handleClickSeat(561, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(561), selected: selectedSeats.includes(561) }">31</div>
            <div class="seat" @click="handleClickSeat(562, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(562), selected: selectedSeats.includes(562) }">32</div>
            <div class="seat" @click="handleClickSeat(563, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(563), selected: selectedSeats.includes(563) }">33</div>
            <div class="seat" @click="handleClickSeat(564, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(564), selected: selectedSeats.includes(564) }">34</div>
            <div class="seat" @click="handleClickSeat(565, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(565), selected: selectedSeats.includes(565) }">35</div>
            <div class="seat" @click="handleClickSeat(566, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(566), selected: selectedSeats.includes(566) }">36</div>
            <div class="seat" @click="handleClickSeat(567, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(567), selected: selectedSeats.includes(567) }">37</div>
            <div class="seat" @click="handleClickSeat(568, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(568), selected: selectedSeats.includes(568) }">38</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(588, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(588), selected: selectedSeats.includes(588) }">30</div>
            <div class="seat" @click="handleClickSeat(589, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(589), selected: selectedSeats.includes(589) }">31</div>
            <div class="seat" @click="handleClickSeat(600, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(600), selected: selectedSeats.includes(600) }">32</div>
            <div class="seat" @click="handleClickSeat(601, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(601), selected: selectedSeats.includes(601) }">33</div>
            <div class="seat" @click="handleClickSeat(602, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(602), selected: selectedSeats.includes(602) }">34</div>
            <div class="seat" @click="handleClickSeat(603, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(603), selected: selectedSeats.includes(603) }">35</div>
            <div class="seat" @click="handleClickSeat(604, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(604), selected: selectedSeats.includes(604) }">36</div>
            <div class="seat" @click="handleClickSeat(605, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(605), selected: selectedSeats.includes(605) }">37</div>
            <div class="seat" @click="handleClickSeat(606, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(606), selected: selectedSeats.includes(606) }">38</div>
            <div class="seat" @click="handleClickSeat(607, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(607), selected: selectedSeats.includes(607) }">39</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(637, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(637), selected: selectedSeats.includes(637) }">30</div>
            <div class="seat" @click="handleClickSeat(638, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(638), selected: selectedSeats.includes(638) }">31</div>
            <div class="seat" @click="handleClickSeat(639, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(639), selected: selectedSeats.includes(639) }">32</div>
            <div class="seat" @click="handleClickSeat(640, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(640), selected: selectedSeats.includes(640) }">33</div>
            <div class="seat" @click="handleClickSeat(641, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(641), selected: selectedSeats.includes(641) }">34</div>
            <div class="seat" @click="handleClickSeat(642, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(642), selected: selectedSeats.includes(642) }">35</div>
            <div class="seat" @click="handleClickSeat(643, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(643), selected: selectedSeats.includes(643) }">36</div>
            <div class="seat" @click="handleClickSeat(644, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(644), selected: selectedSeats.includes(644) }">37</div>
            <div class="seat" @click="handleClickSeat(645, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(645), selected: selectedSeats.includes(645) }">38</div>
            <div class="seat" @click="handleClickSeat(646, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(646), selected: selectedSeats.includes(646) }">39</div>
          </div>
        </div>
      </div>
    </div>
    <div class="smallLayout">
      <h4 @click="controls.selectedSector = ''"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do widoku sektorów</h4>
      <p v-if="selectedPart === 0">Wybierz część sektora do edycji</p>
      <div class="scene" v-if="selectedPart === 0">Scena</div>
      <div class="parts" v-if="selectedPart === 0">
        <div class="leftColumn" @click="selectedPart = 1"></div>
        <div class="middleColumn" @click="selectedPart = 2"></div>
        <div class="rightColumn" @click="selectedPart = 3"></div>
      </div>
      <!-- Left Column -->
      <div v-else-if="selectedPart === 1">
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
            <div class="seat empty"></div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(277, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(277), selected: selectedSeats.includes(277) }">1</div>
            <div class="seat" @click="handleClickSeat(278, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(278), selected: selectedSeats.includes(278) }">2</div>
            <div class="seat" @click="handleClickSeat(279, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(279), selected: selectedSeats.includes(279) }">3</div>
            <div class="seat" @click="handleClickSeat(280, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(280), selected: selectedSeats.includes(280) }">4</div>
            <div class="seat" @click="handleClickSeat(281, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(281), selected: selectedSeats.includes(281) }">5</div>
            <div class="seat" @click="handleClickSeat(282, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(282), selected: selectedSeats.includes(282) }">6</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(312, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(312), selected: selectedSeats.includes(312) }">1</div>
            <div class="seat" @click="handleClickSeat(313, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(313), selected: selectedSeats.includes(313) }">2</div>
            <div class="seat" @click="handleClickSeat(314, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(314), selected: selectedSeats.includes(314) }">3</div>
            <div class="seat" @click="handleClickSeat(315, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(315), selected: selectedSeats.includes(315) }">4</div>
            <div class="seat" @click="handleClickSeat(316, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(316), selected: selectedSeats.includes(316) }">5</div>
            <div class="seat" @click="handleClickSeat(317, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(317), selected: selectedSeats.includes(317) }">6</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(347, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(347), selected: selectedSeats.includes(347) }">1</div>
            <div class="seat" @click="handleClickSeat(348, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(348), selected: selectedSeats.includes(348) }">2</div>
            <div class="seat" @click="handleClickSeat(349, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(349), selected: selectedSeats.includes(349) }">3</div>
            <div class="seat" @click="handleClickSeat(350, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(350), selected: selectedSeats.includes(350) }">4</div>
            <div class="seat" @click="handleClickSeat(351, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(351), selected: selectedSeats.includes(351) }">5</div>
            <div class="seat" @click="handleClickSeat(352, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(352), selected: selectedSeats.includes(352) }">6</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(383, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(383), selected: selectedSeats.includes(383) }">1</div>
            <div class="seat" @click="handleClickSeat(384, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(384), selected: selectedSeats.includes(384) }">2</div>
            <div class="seat" @click="handleClickSeat(385, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(385), selected: selectedSeats.includes(385) }">3</div>
            <div class="seat" @click="handleClickSeat(386, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(386), selected: selectedSeats.includes(386) }">4</div>
            <div class="seat" @click="handleClickSeat(387, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(387), selected: selectedSeats.includes(387) }">5</div>
            <div class="seat" @click="handleClickSeat(388, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(388), selected: selectedSeats.includes(388) }">6</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(419, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(419), selected: selectedSeats.includes(419) }">1</div>
            <div class="seat" @click="handleClickSeat(420, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(420), selected: selectedSeats.includes(420) }">2</div>
            <div class="seat" @click="handleClickSeat(421, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(421), selected: selectedSeats.includes(421) }">3</div>
            <div class="seat" @click="handleClickSeat(422, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(422), selected: selectedSeats.includes(422) }">4</div>
            <div class="seat" @click="handleClickSeat(423, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(423), selected: selectedSeats.includes(423) }">5</div>
            <div class="seat" @click="handleClickSeat(424, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(424), selected: selectedSeats.includes(424) }">6</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(456, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(456), selected: selectedSeats.includes(456) }">1</div>
            <div class="seat" @click="handleClickSeat(457, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(457), selected: selectedSeats.includes(457) }">2</div>
            <div class="seat" @click="handleClickSeat(458, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(458), selected: selectedSeats.includes(458) }">3</div>
            <div class="seat" @click="handleClickSeat(459, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(459), selected: selectedSeats.includes(459) }">4</div>
            <div class="seat" @click="handleClickSeat(460, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(460), selected: selectedSeats.includes(460) }">5</div>
            <div class="seat" @click="handleClickSeat(461, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(461), selected: selectedSeats.includes(461) }">6</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(493, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(493), selected: selectedSeats.includes(493) }">1</div>
            <div class="seat" @click="handleClickSeat(494, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(494), selected: selectedSeats.includes(494) }">2</div>
            <div class="seat" @click="handleClickSeat(495, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(495), selected: selectedSeats.includes(495) }">3</div>
            <div class="seat" @click="handleClickSeat(496, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(496), selected: selectedSeats.includes(496) }">4</div>
            <div class="seat" @click="handleClickSeat(497, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(497), selected: selectedSeats.includes(497) }">5</div>
            <div class="seat" @click="handleClickSeat(498, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(498), selected: selectedSeats.includes(498) }">6</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(531, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(531), selected: selectedSeats.includes(531) }">1</div>
            <div class="seat" @click="handleClickSeat(532, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(532), selected: selectedSeats.includes(532) }">2</div>
            <div class="seat" @click="handleClickSeat(533, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(533), selected: selectedSeats.includes(533) }">3</div>
            <div class="seat" @click="handleClickSeat(534, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(534), selected: selectedSeats.includes(534) }">4</div>
            <div class="seat" @click="handleClickSeat(535, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(535), selected: selectedSeats.includes(535) }">5</div>
            <div class="seat" @click="handleClickSeat(536, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(536), selected: selectedSeats.includes(536) }">6</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(569, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(569), selected: selectedSeats.includes(569) }">1</div>
            <div class="seat" @click="handleClickSeat(570, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(570), selected: selectedSeats.includes(570) }">2</div>
            <div class="seat" @click="handleClickSeat(571, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(571), selected: selectedSeats.includes(571) }">3</div>
            <div class="seat" @click="handleClickSeat(572, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(572), selected: selectedSeats.includes(572) }">4</div>
            <div class="seat" @click="handleClickSeat(573, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(573), selected: selectedSeats.includes(573) }">5</div>
            <div class="seat" @click="handleClickSeat(574, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(574), selected: selectedSeats.includes(574) }">6</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(608, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(608), selected: selectedSeats.includes(608) }">1</div>
            <div class="seat" @click="handleClickSeat(609, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(609), selected: selectedSeats.includes(609) }">2</div>
            <div class="seat" @click="handleClickSeat(610, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(610), selected: selectedSeats.includes(610) }">3</div>
            <div class="seat" @click="handleClickSeat(611, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(611), selected: selectedSeats.includes(611) }">4</div>
            <div class="seat" @click="handleClickSeat(612, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(612), selected: selectedSeats.includes(612) }">5</div>
            <div class="seat" @click="handleClickSeat(613, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(613), selected: selectedSeats.includes(613) }">6</div>
          </div>
        </div>
      </div>
      <!-- Middle Column -->
      <div v-else-if="selectedPart === 2">
        <div class="column middle">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(250, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(250), selected: selectedSeats.includes(250) }">1</div>
            <div class="seat" @click="handleClickSeat(251, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(251), selected: selectedSeats.includes(251) }">2</div>
            <div class="seat" @click="handleClickSeat(252, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(252), selected: selectedSeats.includes(252) }">3</div>
            <div class="seat" @click="handleClickSeat(253, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(253), selected: selectedSeats.includes(253) }">4</div>
            <div class="seat" @click="handleClickSeat(254, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(254), selected: selectedSeats.includes(254) }">5</div>
            <div class="seat" @click="handleClickSeat(255, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(255), selected: selectedSeats.includes(255) }">6</div>
            <div class="seat" @click="handleClickSeat(256, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(256), selected: selectedSeats.includes(256) }">7</div>
            <div class="seat" @click="handleClickSeat(257, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(257), selected: selectedSeats.includes(257) }">8</div>
            <div class="seat" @click="handleClickSeat(258, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(258), selected: selectedSeats.includes(258) }">9</div>
            <div class="seat" @click="handleClickSeat(259, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(259), selected: selectedSeats.includes(259) }">10</div>
            <div class="seat" @click="handleClickSeat(260, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(260), selected: selectedSeats.includes(260) }">11</div>
            <div class="seat" @click="handleClickSeat(261, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(261), selected: selectedSeats.includes(261) }">12</div>
            <div class="seat" @click="handleClickSeat(262, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(262), selected: selectedSeats.includes(262) }">13</div>
            <div class="seat" @click="handleClickSeat(263, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(263), selected: selectedSeats.includes(263) }">14</div>
            <div class="seat" @click="handleClickSeat(264, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(264), selected: selectedSeats.includes(264) }">15</div>
            <div class="seat" @click="handleClickSeat(265, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(265), selected: selectedSeats.includes(265) }">16</div>
            <div class="seat" @click="handleClickSeat(266, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(266), selected: selectedSeats.includes(266) }">17</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(283, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(283), selected: selectedSeats.includes(283) }">7</div>
            <div class="seat" @click="handleClickSeat(284, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(284), selected: selectedSeats.includes(284) }">8</div>
            <div class="seat" @click="handleClickSeat(285, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(285), selected: selectedSeats.includes(285) }">9</div>
            <div class="seat" @click="handleClickSeat(286, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(286), selected: selectedSeats.includes(286) }">10</div>
            <div class="seat" @click="handleClickSeat(287, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(287), selected: selectedSeats.includes(287) }">11</div>
            <div class="seat" @click="handleClickSeat(288, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(288), selected: selectedSeats.includes(288) }">12</div>
            <div class="seat" @click="handleClickSeat(289, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(289), selected: selectedSeats.includes(289) }">13</div>
            <div class="seat" @click="handleClickSeat(290, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(290), selected: selectedSeats.includes(290) }">14</div>
            <div class="seat" @click="handleClickSeat(291, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(291), selected: selectedSeats.includes(291) }">15</div>
            <div class="seat" @click="handleClickSeat(292, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(292), selected: selectedSeats.includes(292) }">16</div>
            <div class="seat" @click="handleClickSeat(293, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(293), selected: selectedSeats.includes(293) }">17</div>
            <div class="seat" @click="handleClickSeat(294, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(294), selected: selectedSeats.includes(294) }">18</div>
            <div class="seat" @click="handleClickSeat(295, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(295), selected: selectedSeats.includes(295) }">19</div>
            <div class="seat" @click="handleClickSeat(296, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(296), selected: selectedSeats.includes(296) }">20</div>
            <div class="seat" @click="handleClickSeat(297, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(297), selected: selectedSeats.includes(297) }">21</div>
            <div class="seat" @click="handleClickSeat(298, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(298), selected: selectedSeats.includes(298) }">22</div>
            <div class="seat" @click="handleClickSeat(299, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(299), selected: selectedSeats.includes(299) }">23</div>
            <div class="seat" @click="handleClickSeat(300, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(300), selected: selectedSeats.includes(300) }">24</div>
            <div class="seat" @click="handleClickSeat(301, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(301), selected: selectedSeats.includes(301) }">25</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(318, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(318), selected: selectedSeats.includes(318) }">7</div>
            <div class="seat" @click="handleClickSeat(319, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(319), selected: selectedSeats.includes(319) }">8</div>
            <div class="seat" @click="handleClickSeat(320, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(320), selected: selectedSeats.includes(320) }">9</div>
            <div class="seat" @click="handleClickSeat(321, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(321), selected: selectedSeats.includes(321) }">10</div>
            <div class="seat" @click="handleClickSeat(322, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(322), selected: selectedSeats.includes(322) }">11</div>
            <div class="seat" @click="handleClickSeat(323, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(323), selected: selectedSeats.includes(323) }">12</div>
            <div class="seat" @click="handleClickSeat(324, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(324), selected: selectedSeats.includes(324) }">13</div>
            <div class="seat" @click="handleClickSeat(325, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(325), selected: selectedSeats.includes(325) }">14</div>
            <div class="seat" @click="handleClickSeat(326, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(326), selected: selectedSeats.includes(326) }">15</div>
            <div class="seat" @click="handleClickSeat(327, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(327), selected: selectedSeats.includes(327) }">16</div>
            <div class="seat" @click="handleClickSeat(328, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(328), selected: selectedSeats.includes(328) }">17</div>
            <div class="seat" @click="handleClickSeat(329, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(329), selected: selectedSeats.includes(329) }">18</div>
            <div class="seat" @click="handleClickSeat(330, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(330), selected: selectedSeats.includes(330) }">19</div>
            <div class="seat" @click="handleClickSeat(331, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(331), selected: selectedSeats.includes(331) }">20</div>
            <div class="seat" @click="handleClickSeat(332, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(332), selected: selectedSeats.includes(332) }">21</div>
            <div class="seat" @click="handleClickSeat(333, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(333), selected: selectedSeats.includes(333) }">22</div>
            <div class="seat" @click="handleClickSeat(334, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(334), selected: selectedSeats.includes(334) }">23</div>
            <div class="seat" @click="handleClickSeat(335, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(335), selected: selectedSeats.includes(335) }">24</div>
            <div class="seat" @click="handleClickSeat(336, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(336), selected: selectedSeats.includes(336) }">25</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(353, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(353), selected: selectedSeats.includes(353) }">7</div>
            <div class="seat" @click="handleClickSeat(354, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(354), selected: selectedSeats.includes(354) }">8</div>
            <div class="seat" @click="handleClickSeat(355, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(355), selected: selectedSeats.includes(355) }">9</div>
            <div class="seat" @click="handleClickSeat(356, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(356), selected: selectedSeats.includes(356) }">10</div>
            <div class="seat" @click="handleClickSeat(357, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(357), selected: selectedSeats.includes(357) }">11</div>
            <div class="seat" @click="handleClickSeat(358, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(358), selected: selectedSeats.includes(358) }">12</div>
            <div class="seat" @click="handleClickSeat(359, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(359), selected: selectedSeats.includes(359) }">13</div>
            <div class="seat" @click="handleClickSeat(360, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(360), selected: selectedSeats.includes(360) }">14</div>
            <div class="seat" @click="handleClickSeat(361, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(361), selected: selectedSeats.includes(361) }">15</div>
            <div class="seat" @click="handleClickSeat(362, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(362), selected: selectedSeats.includes(362) }">16</div>
            <div class="seat" @click="handleClickSeat(363, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(363), selected: selectedSeats.includes(363) }">17</div>
            <div class="seat" @click="handleClickSeat(364, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(364), selected: selectedSeats.includes(364) }">18</div>
            <div class="seat" @click="handleClickSeat(365, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(365), selected: selectedSeats.includes(365) }">19</div>
            <div class="seat" @click="handleClickSeat(366, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(366), selected: selectedSeats.includes(366) }">20</div>
            <div class="seat" @click="handleClickSeat(367, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(367), selected: selectedSeats.includes(367) }">21</div>
            <div class="seat" @click="handleClickSeat(368, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(368), selected: selectedSeats.includes(368) }">22</div>
            <div class="seat" @click="handleClickSeat(369, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(369), selected: selectedSeats.includes(369) }">23</div>
            <div class="seat" @click="handleClickSeat(370, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(370), selected: selectedSeats.includes(370) }">24</div>
            <div class="seat" @click="handleClickSeat(371, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(371), selected: selectedSeats.includes(371) }">25</div>
            <div class="seat" @click="handleClickSeat(372, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(372), selected: selectedSeats.includes(372) }">26</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(389, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(389), selected: selectedSeats.includes(389) }">7</div>
            <div class="seat" @click="handleClickSeat(390, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(390), selected: selectedSeats.includes(390) }">8</div>
            <div class="seat" @click="handleClickSeat(391, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(391), selected: selectedSeats.includes(391) }">9</div>
            <div class="seat" @click="handleClickSeat(392, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(392), selected: selectedSeats.includes(392) }">10</div>
            <div class="seat" @click="handleClickSeat(393, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(393), selected: selectedSeats.includes(393) }">11</div>
            <div class="seat" @click="handleClickSeat(394, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(394), selected: selectedSeats.includes(394) }">12</div>
            <div class="seat" @click="handleClickSeat(395, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(395), selected: selectedSeats.includes(395) }">13</div>
            <div class="seat" @click="handleClickSeat(396, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(396), selected: selectedSeats.includes(396) }">14</div>
            <div class="seat" @click="handleClickSeat(397, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(397), selected: selectedSeats.includes(397) }">15</div>
            <div class="seat" @click="handleClickSeat(398, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(398), selected: selectedSeats.includes(398) }">16</div>
            <div class="seat" @click="handleClickSeat(399, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(399), selected: selectedSeats.includes(399) }">17</div>
            <div class="seat" @click="handleClickSeat(400, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(400), selected: selectedSeats.includes(400) }">18</div>
            <div class="seat" @click="handleClickSeat(401, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(401), selected: selectedSeats.includes(401) }">19</div>
            <div class="seat" @click="handleClickSeat(402, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(402), selected: selectedSeats.includes(402) }">20</div>
            <div class="seat" @click="handleClickSeat(403, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(403), selected: selectedSeats.includes(403) }">21</div>
            <div class="seat" @click="handleClickSeat(404, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(404), selected: selectedSeats.includes(404) }">22</div>
            <div class="seat" @click="handleClickSeat(405, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(405), selected: selectedSeats.includes(405) }">23</div>
            <div class="seat" @click="handleClickSeat(406, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(406), selected: selectedSeats.includes(406) }">24</div>
            <div class="seat" @click="handleClickSeat(407, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(407), selected: selectedSeats.includes(407) }">25</div>
            <div class="seat" @click="handleClickSeat(408, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(408), selected: selectedSeats.includes(408) }">26</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(425, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(425), selected: selectedSeats.includes(425) }">7</div>
            <div class="seat" @click="handleClickSeat(426, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(426), selected: selectedSeats.includes(426) }">8</div>
            <div class="seat" @click="handleClickSeat(427, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(427), selected: selectedSeats.includes(427) }">9</div>
            <div class="seat" @click="handleClickSeat(428, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(428), selected: selectedSeats.includes(428) }">10</div>
            <div class="seat" @click="handleClickSeat(429, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(429), selected: selectedSeats.includes(429) }">11</div>
            <div class="seat" @click="handleClickSeat(430, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(430), selected: selectedSeats.includes(430) }">12</div>
            <div class="seat" @click="handleClickSeat(431, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(431), selected: selectedSeats.includes(431) }">13</div>
            <div class="seat" @click="handleClickSeat(432, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(432), selected: selectedSeats.includes(432) }">14</div>
            <div class="seat" @click="handleClickSeat(433, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(433), selected: selectedSeats.includes(433) }">15</div>
            <div class="seat" @click="handleClickSeat(434, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(434), selected: selectedSeats.includes(434) }">16</div>
            <div class="seat" @click="handleClickSeat(435, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(435), selected: selectedSeats.includes(435) }">17</div>
            <div class="seat" @click="handleClickSeat(436, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(436), selected: selectedSeats.includes(436) }">18</div>
            <div class="seat" @click="handleClickSeat(437, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(437), selected: selectedSeats.includes(437) }">19</div>
            <div class="seat" @click="handleClickSeat(438, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(438), selected: selectedSeats.includes(438) }">20</div>
            <div class="seat" @click="handleClickSeat(439, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(439), selected: selectedSeats.includes(439) }">21</div>
            <div class="seat" @click="handleClickSeat(440, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(440), selected: selectedSeats.includes(440) }">22</div>
            <div class="seat" @click="handleClickSeat(441, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(441), selected: selectedSeats.includes(441) }">23</div>
            <div class="seat" @click="handleClickSeat(442, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(442), selected: selectedSeats.includes(442) }">24</div>
            <div class="seat" @click="handleClickSeat(443, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(443), selected: selectedSeats.includes(443) }">25</div>
            <div class="seat" @click="handleClickSeat(444, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(444), selected: selectedSeats.includes(444) }">26</div>
            <div class="seat" @click="handleClickSeat(445, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(445), selected: selectedSeats.includes(445) }">27</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(462, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(462), selected: selectedSeats.includes(462) }">7</div>
            <div class="seat" @click="handleClickSeat(463, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(463), selected: selectedSeats.includes(463) }">8</div>
            <div class="seat" @click="handleClickSeat(464, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(464), selected: selectedSeats.includes(464) }">9</div>
            <div class="seat" @click="handleClickSeat(465, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(465), selected: selectedSeats.includes(465) }">10</div>
            <div class="seat" @click="handleClickSeat(466, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(466), selected: selectedSeats.includes(466) }">11</div>
            <div class="seat" @click="handleClickSeat(467, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(467), selected: selectedSeats.includes(467) }">12</div>
            <div class="seat" @click="handleClickSeat(468, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(468), selected: selectedSeats.includes(468) }">13</div>
            <div class="seat" @click="handleClickSeat(469, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(469), selected: selectedSeats.includes(469) }">14</div>
            <div class="seat" @click="handleClickSeat(470, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(470), selected: selectedSeats.includes(470) }">15</div>
            <div class="seat" @click="handleClickSeat(471, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(471), selected: selectedSeats.includes(471) }">16</div>
            <div class="seat" @click="handleClickSeat(472, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(472), selected: selectedSeats.includes(472) }">17</div>
            <div class="seat" @click="handleClickSeat(473, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(473), selected: selectedSeats.includes(473) }">18</div>
            <div class="seat" @click="handleClickSeat(474, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(474), selected: selectedSeats.includes(474) }">19</div>
            <div class="seat" @click="handleClickSeat(475, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(475), selected: selectedSeats.includes(475) }">20</div>
            <div class="seat" @click="handleClickSeat(476, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(476), selected: selectedSeats.includes(476) }">21</div>
            <div class="seat" @click="handleClickSeat(477, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(477), selected: selectedSeats.includes(477) }">22</div>
            <div class="seat" @click="handleClickSeat(478, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(478), selected: selectedSeats.includes(478) }">23</div>
            <div class="seat" @click="handleClickSeat(479, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(479), selected: selectedSeats.includes(479) }">24</div>
            <div class="seat" @click="handleClickSeat(480, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(480), selected: selectedSeats.includes(480) }">25</div>
            <div class="seat" @click="handleClickSeat(481, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(481), selected: selectedSeats.includes(481) }">26</div>
            <div class="seat" @click="handleClickSeat(482, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(482), selected: selectedSeats.includes(482) }">27</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(499, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(499), selected: selectedSeats.includes(499) }">7</div>
            <div class="seat" @click="handleClickSeat(500, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(500), selected: selectedSeats.includes(500) }">8</div>
            <div class="seat" @click="handleClickSeat(501, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(501), selected: selectedSeats.includes(501) }">9</div>
            <div class="seat" @click="handleClickSeat(502, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(502), selected: selectedSeats.includes(502) }">10</div>
            <div class="seat" @click="handleClickSeat(503, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(503), selected: selectedSeats.includes(503) }">11</div>
            <div class="seat" @click="handleClickSeat(504, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(504), selected: selectedSeats.includes(504) }">12</div>
            <div class="seat" @click="handleClickSeat(505, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(505), selected: selectedSeats.includes(505) }">13</div>
            <div class="seat" @click="handleClickSeat(506, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(506), selected: selectedSeats.includes(506) }">14</div>
            <div class="seat" @click="handleClickSeat(507, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(507), selected: selectedSeats.includes(507) }">15</div>
            <div class="seat" @click="handleClickSeat(508, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(508), selected: selectedSeats.includes(508) }">16</div>
            <div class="seat" @click="handleClickSeat(509, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(509), selected: selectedSeats.includes(509) }">17</div>
            <div class="seat" @click="handleClickSeat(510, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(510), selected: selectedSeats.includes(510) }">18</div>
            <div class="seat" @click="handleClickSeat(511, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(511), selected: selectedSeats.includes(511) }">19</div>
            <div class="seat" @click="handleClickSeat(512, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(512), selected: selectedSeats.includes(512) }">20</div>
            <div class="seat" @click="handleClickSeat(513, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(513), selected: selectedSeats.includes(513) }">21</div>
            <div class="seat" @click="handleClickSeat(514, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(514), selected: selectedSeats.includes(514) }">22</div>
            <div class="seat" @click="handleClickSeat(515, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(515), selected: selectedSeats.includes(515) }">23</div>
            <div class="seat" @click="handleClickSeat(516, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(516), selected: selectedSeats.includes(516) }">24</div>
            <div class="seat" @click="handleClickSeat(517, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(517), selected: selectedSeats.includes(517) }">25</div>
            <div class="seat" @click="handleClickSeat(518, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(518), selected: selectedSeats.includes(518) }">26</div>
            <div class="seat" @click="handleClickSeat(519, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(519), selected: selectedSeats.includes(519) }">27</div>
            <div class="seat" @click="handleClickSeat(520, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(520), selected: selectedSeats.includes(520) }">28</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(537, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(537), selected: selectedSeats.includes(537) }">7</div>
            <div class="seat" @click="handleClickSeat(538, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(538), selected: selectedSeats.includes(538) }">8</div>
            <div class="seat" @click="handleClickSeat(539, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(539), selected: selectedSeats.includes(539) }">9</div>
            <div class="seat" @click="handleClickSeat(540, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(540), selected: selectedSeats.includes(540) }">10</div>
            <div class="seat" @click="handleClickSeat(541, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(541), selected: selectedSeats.includes(541) }">11</div>
            <div class="seat" @click="handleClickSeat(542, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(542), selected: selectedSeats.includes(542) }">12</div>
            <div class="seat" @click="handleClickSeat(543, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(543), selected: selectedSeats.includes(543) }">13</div>
            <div class="seat" @click="handleClickSeat(544, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(544), selected: selectedSeats.includes(544) }">14</div>
            <div class="seat" @click="handleClickSeat(545, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(545), selected: selectedSeats.includes(545) }">15</div>
            <div class="seat" @click="handleClickSeat(546, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(546), selected: selectedSeats.includes(546) }">16</div>
            <div class="seat" @click="handleClickSeat(547, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(547), selected: selectedSeats.includes(547) }">17</div>
            <div class="seat" @click="handleClickSeat(548, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(548), selected: selectedSeats.includes(548) }">18</div>
            <div class="seat" @click="handleClickSeat(549, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(549), selected: selectedSeats.includes(549) }">19</div>
            <div class="seat" @click="handleClickSeat(550, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(550), selected: selectedSeats.includes(550) }">20</div>
            <div class="seat" @click="handleClickSeat(551, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(551), selected: selectedSeats.includes(551) }">21</div>
            <div class="seat" @click="handleClickSeat(552, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(552), selected: selectedSeats.includes(552) }">22</div>
            <div class="seat" @click="handleClickSeat(553, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(553), selected: selectedSeats.includes(553) }">23</div>
            <div class="seat" @click="handleClickSeat(554, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(554), selected: selectedSeats.includes(554) }">24</div>
            <div class="seat" @click="handleClickSeat(555, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(555), selected: selectedSeats.includes(555) }">25</div>
            <div class="seat" @click="handleClickSeat(556, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(556), selected: selectedSeats.includes(556) }">26</div>
            <div class="seat" @click="handleClickSeat(557, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(557), selected: selectedSeats.includes(557) }">27</div>
            <div class="seat" @click="handleClickSeat(558, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(558), selected: selectedSeats.includes(558) }">28</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(575, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(575), selected: selectedSeats.includes(575) }">7</div>
            <div class="seat" @click="handleClickSeat(576, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(576), selected: selectedSeats.includes(576) }">8</div>
            <div class="seat" @click="handleClickSeat(577, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(577), selected: selectedSeats.includes(577) }">9</div>
            <div class="seat" @click="handleClickSeat(578, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(578), selected: selectedSeats.includes(578) }">10</div>
            <div class="seat" @click="handleClickSeat(579, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(579), selected: selectedSeats.includes(579) }">11</div>
            <div class="seat" @click="handleClickSeat(580, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(580), selected: selectedSeats.includes(580) }">12</div>
            <div class="seat" @click="handleClickSeat(581, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(581), selected: selectedSeats.includes(581) }">13</div>
            <div class="seat" @click="handleClickSeat(582, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(582), selected: selectedSeats.includes(582) }">14</div>
            <div class="seat" @click="handleClickSeat(583, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(583), selected: selectedSeats.includes(583) }">15</div>
            <div class="seat" @click="handleClickSeat(584, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(584), selected: selectedSeats.includes(584) }">16</div>
            <div class="seat" @click="handleClickSeat(585, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(585), selected: selectedSeats.includes(585) }">17</div>
            <div class="seat" @click="handleClickSeat(586, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(586), selected: selectedSeats.includes(586) }">18</div>
            <div class="seat" @click="handleClickSeat(587, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(587), selected: selectedSeats.includes(587) }">19</div>
            <div class="seat" @click="handleClickSeat(588, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(588), selected: selectedSeats.includes(588) }">20</div>
            <div class="seat" @click="handleClickSeat(589, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(589), selected: selectedSeats.includes(589) }">21</div>
            <div class="seat" @click="handleClickSeat(590, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(590), selected: selectedSeats.includes(590) }">22</div>
            <div class="seat" @click="handleClickSeat(591, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(591), selected: selectedSeats.includes(591) }">23</div>
            <div class="seat" @click="handleClickSeat(592, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(592), selected: selectedSeats.includes(592) }">24</div>
            <div class="seat" @click="handleClickSeat(593, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(593), selected: selectedSeats.includes(593) }">25</div>
            <div class="seat" @click="handleClickSeat(594, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(594), selected: selectedSeats.includes(594) }">26</div>
            <div class="seat" @click="handleClickSeat(595, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(595), selected: selectedSeats.includes(595) }">27</div>
            <div class="seat" @click="handleClickSeat(596, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(596), selected: selectedSeats.includes(596) }">28</div>
            <div class="seat" @click="handleClickSeat(597, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(597), selected: selectedSeats.includes(597) }">29</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(614, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(614), selected: selectedSeats.includes(614) }">7</div>
            <div class="seat" @click="handleClickSeat(615, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(615), selected: selectedSeats.includes(615) }">8</div>
            <div class="seat" @click="handleClickSeat(616, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(616), selected: selectedSeats.includes(616) }">9</div>
            <div class="seat" @click="handleClickSeat(617, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(617), selected: selectedSeats.includes(617) }">10</div>
            <div class="seat" @click="handleClickSeat(618, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(618), selected: selectedSeats.includes(618) }">11</div>
            <div class="seat" @click="handleClickSeat(619, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(619), selected: selectedSeats.includes(619) }">12</div>
            <div class="seat" @click="handleClickSeat(620, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(620), selected: selectedSeats.includes(620) }">13</div>
            <div class="seat" @click="handleClickSeat(621, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(621), selected: selectedSeats.includes(621) }">14</div>
            <div class="seat" @click="handleClickSeat(622, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(622), selected: selectedSeats.includes(622) }">15</div>
            <div class="seat" @click="handleClickSeat(623, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(623), selected: selectedSeats.includes(623) }">16</div>
            <div class="seat" @click="handleClickSeat(624, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(624), selected: selectedSeats.includes(624) }">17</div>
            <div class="seat" @click="handleClickSeat(625, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(625), selected: selectedSeats.includes(625) }">18</div>
            <div class="seat" @click="handleClickSeat(626, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(626), selected: selectedSeats.includes(626) }">19</div>
            <div class="seat" @click="handleClickSeat(627, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(627), selected: selectedSeats.includes(627) }">20</div>
            <div class="seat" @click="handleClickSeat(628, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(628), selected: selectedSeats.includes(628) }">21</div>
            <div class="seat" @click="handleClickSeat(629, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(629), selected: selectedSeats.includes(629) }">22</div>
            <div class="seat" @click="handleClickSeat(630, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(630), selected: selectedSeats.includes(630) }">23</div>
            <div class="seat" @click="handleClickSeat(631, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(631), selected: selectedSeats.includes(631) }">24</div>
            <div class="seat" @click="handleClickSeat(632, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(632), selected: selectedSeats.includes(632) }">25</div>
            <div class="seat" @click="handleClickSeat(633, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(633), selected: selectedSeats.includes(633) }">26</div>
            <div class="seat" @click="handleClickSeat(634, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(634), selected: selectedSeats.includes(634) }">27</div>
            <div class="seat" @click="handleClickSeat(635, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(635), selected: selectedSeats.includes(635) }">28</div>
            <div class="seat" @click="handleClickSeat(636, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(636), selected: selectedSeats.includes(636) }">29</div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div v-else-if="selectedPart === 3">
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(267, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(267), selected: selectedSeats.includes(267) }">18</div>
            <div class="seat" @click="handleClickSeat(268, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(268), selected: selectedSeats.includes(268) }">19</div>
            <div class="seat" @click="handleClickSeat(269, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(269), selected: selectedSeats.includes(269) }">20</div>
            <div class="seat" @click="handleClickSeat(270, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(270), selected: selectedSeats.includes(270) }">21</div>
            <div class="seat" @click="handleClickSeat(271, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(271), selected: selectedSeats.includes(271) }">22</div>
            <div class="seat" @click="handleClickSeat(272, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(272), selected: selectedSeats.includes(272) }">23</div>
            <div class="seat" @click="handleClickSeat(273, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(273), selected: selectedSeats.includes(273) }">24</div>
            <div class="seat" @click="handleClickSeat(274, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(274), selected: selectedSeats.includes(274) }">25</div>
            <div class="seat" @click="handleClickSeat(275, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(275), selected: selectedSeats.includes(275) }">26</div>
            <div class="seat" @click="handleClickSeat(276, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(276), selected: selectedSeats.includes(276) }">27</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(302, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(302), selected: selectedSeats.includes(302) }">26</div>
            <div class="seat" @click="handleClickSeat(303, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(303), selected: selectedSeats.includes(303) }">27</div>
            <div class="seat" @click="handleClickSeat(304, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(304), selected: selectedSeats.includes(304) }">28</div>
            <div class="seat" @click="handleClickSeat(305, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(305), selected: selectedSeats.includes(305) }">29</div>
            <div class="seat" @click="handleClickSeat(306, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(306), selected: selectedSeats.includes(306) }">30</div>
            <div class="seat" @click="handleClickSeat(307, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(307), selected: selectedSeats.includes(307) }">31</div>
            <div class="seat" @click="handleClickSeat(308, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(308), selected: selectedSeats.includes(308) }">32</div>
            <div class="seat" @click="handleClickSeat(309, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(309), selected: selectedSeats.includes(309) }">33</div>
            <div class="seat" @click="handleClickSeat(310, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(310), selected: selectedSeats.includes(310) }">34</div>
            <div class="seat" @click="handleClickSeat(311, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(311), selected: selectedSeats.includes(311) }">35</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(337, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(337), selected: selectedSeats.includes(337) }">26</div>
            <div class="seat" @click="handleClickSeat(338, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(338), selected: selectedSeats.includes(338) }">27</div>
            <div class="seat" @click="handleClickSeat(339, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(339), selected: selectedSeats.includes(339) }">28</div>
            <div class="seat" @click="handleClickSeat(340, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(340), selected: selectedSeats.includes(340) }">29</div>
            <div class="seat" @click="handleClickSeat(341, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(341), selected: selectedSeats.includes(341) }">30</div>
            <div class="seat" @click="handleClickSeat(342, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(342), selected: selectedSeats.includes(342) }">31</div>
            <div class="seat" @click="handleClickSeat(343, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(343), selected: selectedSeats.includes(343) }">32</div>
            <div class="seat" @click="handleClickSeat(344, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(344), selected: selectedSeats.includes(344) }">33</div>
            <div class="seat" @click="handleClickSeat(345, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(345), selected: selectedSeats.includes(345) }">34</div>
            <div class="seat" @click="handleClickSeat(346, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(346), selected: selectedSeats.includes(346) }">35</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(373, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(373), selected: selectedSeats.includes(373) }">27</div>
            <div class="seat" @click="handleClickSeat(374, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(374), selected: selectedSeats.includes(374) }">28</div>
            <div class="seat" @click="handleClickSeat(375, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(375), selected: selectedSeats.includes(375) }">29</div>
            <div class="seat" @click="handleClickSeat(376, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(376), selected: selectedSeats.includes(376) }">30</div>
            <div class="seat" @click="handleClickSeat(377, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(377), selected: selectedSeats.includes(377) }">31</div>
            <div class="seat" @click="handleClickSeat(378, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(378), selected: selectedSeats.includes(378) }">32</div>
            <div class="seat" @click="handleClickSeat(379, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(379), selected: selectedSeats.includes(379) }">33</div>
            <div class="seat" @click="handleClickSeat(380, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(380), selected: selectedSeats.includes(380) }">34</div>
            <div class="seat" @click="handleClickSeat(381, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(381), selected: selectedSeats.includes(381) }">35</div>
            <div class="seat" @click="handleClickSeat(382, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(382), selected: selectedSeats.includes(382) }">36</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(409, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(409), selected: selectedSeats.includes(409) }">27</div>
            <div class="seat" @click="handleClickSeat(410, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(410), selected: selectedSeats.includes(410) }">28</div>
            <div class="seat" @click="handleClickSeat(411, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(411), selected: selectedSeats.includes(411) }">29</div>
            <div class="seat" @click="handleClickSeat(412, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(412), selected: selectedSeats.includes(412) }">30</div>
            <div class="seat" @click="handleClickSeat(413, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(413), selected: selectedSeats.includes(413) }">31</div>
            <div class="seat" @click="handleClickSeat(414, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(414), selected: selectedSeats.includes(414) }">32</div>
            <div class="seat" @click="handleClickSeat(415, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(415), selected: selectedSeats.includes(415) }">33</div>
            <div class="seat" @click="handleClickSeat(416, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(416), selected: selectedSeats.includes(416) }">34</div>
            <div class="seat" @click="handleClickSeat(417, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(417), selected: selectedSeats.includes(417) }">35</div>
            <div class="seat" @click="handleClickSeat(418, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(418), selected: selectedSeats.includes(418) }">36</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(446, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(446), selected: selectedSeats.includes(446) }">28</div>
            <div class="seat" @click="handleClickSeat(447, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(447), selected: selectedSeats.includes(447) }">29</div>
            <div class="seat" @click="handleClickSeat(448, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(448), selected: selectedSeats.includes(448) }">30</div>
            <div class="seat" @click="handleClickSeat(449, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(449), selected: selectedSeats.includes(449) }">31</div>
            <div class="seat" @click="handleClickSeat(450, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(450), selected: selectedSeats.includes(450) }">32</div>
            <div class="seat" @click="handleClickSeat(451, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(451), selected: selectedSeats.includes(451) }">33</div>
            <div class="seat" @click="handleClickSeat(452, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(452), selected: selectedSeats.includes(452) }">34</div>
            <div class="seat" @click="handleClickSeat(453, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(453), selected: selectedSeats.includes(453) }">35</div>
            <div class="seat" @click="handleClickSeat(454, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(454), selected: selectedSeats.includes(454) }">36</div>
            <div class="seat" @click="handleClickSeat(455, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(455), selected: selectedSeats.includes(455) }">37</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(483, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(483), selected: selectedSeats.includes(483) }">28</div>
            <div class="seat" @click="handleClickSeat(484, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(484), selected: selectedSeats.includes(484) }">29</div>
            <div class="seat" @click="handleClickSeat(485, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(485), selected: selectedSeats.includes(485) }">30</div>
            <div class="seat" @click="handleClickSeat(486, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(486), selected: selectedSeats.includes(486) }">31</div>
            <div class="seat" @click="handleClickSeat(487, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(487), selected: selectedSeats.includes(487) }">32</div>
            <div class="seat" @click="handleClickSeat(488, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(488), selected: selectedSeats.includes(488) }">33</div>
            <div class="seat" @click="handleClickSeat(489, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(489), selected: selectedSeats.includes(489) }">34</div>
            <div class="seat" @click="handleClickSeat(490, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(490), selected: selectedSeats.includes(490) }">35</div>
            <div class="seat" @click="handleClickSeat(491, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(491), selected: selectedSeats.includes(491) }">36</div>
            <div class="seat" @click="handleClickSeat(492, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(492), selected: selectedSeats.includes(492) }">37</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(521, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(521), selected: selectedSeats.includes(521) }">29</div>
            <div class="seat" @click="handleClickSeat(522, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(522), selected: selectedSeats.includes(522) }">30</div>
            <div class="seat" @click="handleClickSeat(523, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(523), selected: selectedSeats.includes(523) }">31</div>
            <div class="seat" @click="handleClickSeat(524, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(524), selected: selectedSeats.includes(524) }">32</div>
            <div class="seat" @click="handleClickSeat(525, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(525), selected: selectedSeats.includes(525) }">33</div>
            <div class="seat" @click="handleClickSeat(526, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(526), selected: selectedSeats.includes(526) }">34</div>
            <div class="seat" @click="handleClickSeat(527, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(527), selected: selectedSeats.includes(527) }">35</div>
            <div class="seat" @click="handleClickSeat(528, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(528), selected: selectedSeats.includes(528) }">36</div>
            <div class="seat" @click="handleClickSeat(529, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(529), selected: selectedSeats.includes(529) }">37</div>
            <div class="seat" @click="handleClickSeat(530, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(530), selected: selectedSeats.includes(530) }">38</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(559, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(559), selected: selectedSeats.includes(559) }">29</div>
            <div class="seat" @click="handleClickSeat(560, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(560), selected: selectedSeats.includes(560) }">30</div>
            <div class="seat" @click="handleClickSeat(561, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(561), selected: selectedSeats.includes(561) }">31</div>
            <div class="seat" @click="handleClickSeat(562, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(562), selected: selectedSeats.includes(562) }">32</div>
            <div class="seat" @click="handleClickSeat(563, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(563), selected: selectedSeats.includes(563) }">33</div>
            <div class="seat" @click="handleClickSeat(564, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(564), selected: selectedSeats.includes(564) }">34</div>
            <div class="seat" @click="handleClickSeat(565, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(565), selected: selectedSeats.includes(565) }">35</div>
            <div class="seat" @click="handleClickSeat(566, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(566), selected: selectedSeats.includes(566) }">36</div>
            <div class="seat" @click="handleClickSeat(567, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(567), selected: selectedSeats.includes(567) }">37</div>
            <div class="seat" @click="handleClickSeat(568, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(568), selected: selectedSeats.includes(568) }">38</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(588, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(588), selected: selectedSeats.includes(588) }">30</div>
            <div class="seat" @click="handleClickSeat(589, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(589), selected: selectedSeats.includes(589) }">31</div>
            <div class="seat" @click="handleClickSeat(600, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(600), selected: selectedSeats.includes(600) }">32</div>
            <div class="seat" @click="handleClickSeat(601, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(601), selected: selectedSeats.includes(601) }">33</div>
            <div class="seat" @click="handleClickSeat(602, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(602), selected: selectedSeats.includes(602) }">34</div>
            <div class="seat" @click="handleClickSeat(603, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(603), selected: selectedSeats.includes(603) }">35</div>
            <div class="seat" @click="handleClickSeat(604, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(604), selected: selectedSeats.includes(604) }">36</div>
            <div class="seat" @click="handleClickSeat(605, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(605), selected: selectedSeats.includes(605) }">37</div>
            <div class="seat" @click="handleClickSeat(606, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(606), selected: selectedSeats.includes(606) }">38</div>
            <div class="seat" @click="handleClickSeat(607, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(607), selected: selectedSeats.includes(607) }">39</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(637, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(637), selected: selectedSeats.includes(637) }">30</div>
            <div class="seat" @click="handleClickSeat(638, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(638), selected: selectedSeats.includes(638) }">31</div>
            <div class="seat" @click="handleClickSeat(639, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(639), selected: selectedSeats.includes(639) }">32</div>
            <div class="seat" @click="handleClickSeat(640, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(640), selected: selectedSeats.includes(640) }">33</div>
            <div class="seat" @click="handleClickSeat(641, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(641), selected: selectedSeats.includes(641) }">34</div>
            <div class="seat" @click="handleClickSeat(642, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(642), selected: selectedSeats.includes(642) }">35</div>
            <div class="seat" @click="handleClickSeat(643, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(643), selected: selectedSeats.includes(643) }">36</div>
            <div class="seat" @click="handleClickSeat(644, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(644), selected: selectedSeats.includes(644) }">37</div>
            <div class="seat" @click="handleClickSeat(645, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(645), selected: selectedSeats.includes(645) }">38</div>
            <div class="seat" @click="handleClickSeat(646, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(646), selected: selectedSeats.includes(646) }">39</div>
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
  name: 'FilharmoniaPodkarpackaSektor3',
  data() {
    return {
      sectorPrice: '',
      selectedPart: 0,
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
  width: 70%;
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
  justify-content: flex-end;
  flex-direction: row;
}
.row > span {
  width: min-content;
  font-size: 1.1vw;
  cursor: default;
}
.seat {
  width: 1.6vw;
  height: 1.6vw;
  margin: 2px;
  background: lightgray;
  text-align: center;
  padding: 0px;
  font-size: 1.1vw;
  cursor: pointer;
}
.empty {
  background: none;
  cursor: default;
}
.selected {
  background: green;
}
.smallLayout {
  display: none;
}
.occupied {
  background: rgb(182, 19, 19);
  pointer-events: none;
}

@media (max-width: 1980px) {
  .largeLayout {
    display: none;
  }
  .smallLayout {
    display: block;
  }
  .parts {
    display: flex;
    margin-top: 40px;
    justify-content: space-around;
  }
  .leftColumn,
  .middleColumn,
  .rightColumn {
    width: 20%;
    height: 200px;
    background: lightgray;
  }
  .middleColumn,
  .rightColumn {
    width: 35%;
  }

  .column {
    margin: 40px auto;
  }

  .row > span {
    font-size: 1.5vw;
  }
  .seat {
    width: 2vw;
    height: 2vw;
    margin: 2px;
    font-size: 1.5vw;
  }

  .middle > .row > span {
    font-size: 1.5vw;
  }
  .middle > .row > .seat {
    width: 2vw;
    height: 2vw;
    margin: 2px;
    font-size: 1.5vw;
  }
}
</style>
