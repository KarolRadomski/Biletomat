<template>
  <div>
    <div class="largeLayout">
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
            <div class="seat" @click="handleClickSeat(277)" :class="{ occupied: Event.occupiedSeatsId.includes(277), selected: Event.reservedSeatsId.includes(277) }">1</div>
            <div class="seat" @click="handleClickSeat(278)" :class="{ occupied: Event.occupiedSeatsId.includes(278), selected: Event.reservedSeatsId.includes(278) }">2</div>
            <div class="seat" @click="handleClickSeat(279)" :class="{ occupied: Event.occupiedSeatsId.includes(279), selected: Event.reservedSeatsId.includes(279) }">3</div>
            <div class="seat" @click="handleClickSeat(280)" :class="{ occupied: Event.occupiedSeatsId.includes(280), selected: Event.reservedSeatsId.includes(280) }">4</div>
            <div class="seat" @click="handleClickSeat(281)" :class="{ occupied: Event.occupiedSeatsId.includes(281), selected: Event.reservedSeatsId.includes(281) }">5</div>
            <div class="seat" @click="handleClickSeat(282)" :class="{ occupied: Event.occupiedSeatsId.includes(282), selected: Event.reservedSeatsId.includes(282) }">6</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(312)" :class="{ occupied: Event.occupiedSeatsId.includes(312), selected: Event.reservedSeatsId.includes(312) }">1</div>
            <div class="seat" @click="handleClickSeat(313)" :class="{ occupied: Event.occupiedSeatsId.includes(313), selected: Event.reservedSeatsId.includes(313) }">2</div>
            <div class="seat" @click="handleClickSeat(314)" :class="{ occupied: Event.occupiedSeatsId.includes(314), selected: Event.reservedSeatsId.includes(314) }">3</div>
            <div class="seat" @click="handleClickSeat(315)" :class="{ occupied: Event.occupiedSeatsId.includes(315), selected: Event.reservedSeatsId.includes(315) }">4</div>
            <div class="seat" @click="handleClickSeat(316)" :class="{ occupied: Event.occupiedSeatsId.includes(316), selected: Event.reservedSeatsId.includes(316) }">5</div>
            <div class="seat" @click="handleClickSeat(317)" :class="{ occupied: Event.occupiedSeatsId.includes(317), selected: Event.reservedSeatsId.includes(317) }">6</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(347)" :class="{ occupied: Event.occupiedSeatsId.includes(347), selected: Event.reservedSeatsId.includes(347) }">1</div>
            <div class="seat" @click="handleClickSeat(348)" :class="{ occupied: Event.occupiedSeatsId.includes(348), selected: Event.reservedSeatsId.includes(348) }">2</div>
            <div class="seat" @click="handleClickSeat(349)" :class="{ occupied: Event.occupiedSeatsId.includes(349), selected: Event.reservedSeatsId.includes(349) }">3</div>
            <div class="seat" @click="handleClickSeat(350)" :class="{ occupied: Event.occupiedSeatsId.includes(350), selected: Event.reservedSeatsId.includes(350) }">4</div>
            <div class="seat" @click="handleClickSeat(351)" :class="{ occupied: Event.occupiedSeatsId.includes(351), selected: Event.reservedSeatsId.includes(351) }">5</div>
            <div class="seat" @click="handleClickSeat(352)" :class="{ occupied: Event.occupiedSeatsId.includes(352), selected: Event.reservedSeatsId.includes(352) }">6</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(383)" :class="{ occupied: Event.occupiedSeatsId.includes(383), selected: Event.reservedSeatsId.includes(383) }">1</div>
            <div class="seat" @click="handleClickSeat(384)" :class="{ occupied: Event.occupiedSeatsId.includes(384), selected: Event.reservedSeatsId.includes(384) }">2</div>
            <div class="seat" @click="handleClickSeat(385)" :class="{ occupied: Event.occupiedSeatsId.includes(385), selected: Event.reservedSeatsId.includes(385) }">3</div>
            <div class="seat" @click="handleClickSeat(386)" :class="{ occupied: Event.occupiedSeatsId.includes(386), selected: Event.reservedSeatsId.includes(386) }">4</div>
            <div class="seat" @click="handleClickSeat(387)" :class="{ occupied: Event.occupiedSeatsId.includes(387), selected: Event.reservedSeatsId.includes(387) }">5</div>
            <div class="seat" @click="handleClickSeat(388)" :class="{ occupied: Event.occupiedSeatsId.includes(388), selected: Event.reservedSeatsId.includes(388) }">6</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(419)" :class="{ occupied: Event.occupiedSeatsId.includes(419), selected: Event.reservedSeatsId.includes(419) }">1</div>
            <div class="seat" @click="handleClickSeat(420)" :class="{ occupied: Event.occupiedSeatsId.includes(420), selected: Event.reservedSeatsId.includes(420) }">2</div>
            <div class="seat" @click="handleClickSeat(421)" :class="{ occupied: Event.occupiedSeatsId.includes(421), selected: Event.reservedSeatsId.includes(421) }">3</div>
            <div class="seat" @click="handleClickSeat(422)" :class="{ occupied: Event.occupiedSeatsId.includes(422), selected: Event.reservedSeatsId.includes(422) }">4</div>
            <div class="seat" @click="handleClickSeat(423)" :class="{ occupied: Event.occupiedSeatsId.includes(423), selected: Event.reservedSeatsId.includes(423) }">5</div>
            <div class="seat" @click="handleClickSeat(424)" :class="{ occupied: Event.occupiedSeatsId.includes(424), selected: Event.reservedSeatsId.includes(424) }">6</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(456)" :class="{ occupied: Event.occupiedSeatsId.includes(456), selected: Event.reservedSeatsId.includes(456) }">1</div>
            <div class="seat" @click="handleClickSeat(457)" :class="{ occupied: Event.occupiedSeatsId.includes(457), selected: Event.reservedSeatsId.includes(457) }">2</div>
            <div class="seat" @click="handleClickSeat(458)" :class="{ occupied: Event.occupiedSeatsId.includes(458), selected: Event.reservedSeatsId.includes(458) }">3</div>
            <div class="seat" @click="handleClickSeat(459)" :class="{ occupied: Event.occupiedSeatsId.includes(459), selected: Event.reservedSeatsId.includes(459) }">4</div>
            <div class="seat" @click="handleClickSeat(460)" :class="{ occupied: Event.occupiedSeatsId.includes(460), selected: Event.reservedSeatsId.includes(460) }">5</div>
            <div class="seat" @click="handleClickSeat(461)" :class="{ occupied: Event.occupiedSeatsId.includes(461), selected: Event.reservedSeatsId.includes(461) }">6</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(493)" :class="{ occupied: Event.occupiedSeatsId.includes(493), selected: Event.reservedSeatsId.includes(493) }">1</div>
            <div class="seat" @click="handleClickSeat(494)" :class="{ occupied: Event.occupiedSeatsId.includes(494), selected: Event.reservedSeatsId.includes(494) }">2</div>
            <div class="seat" @click="handleClickSeat(495)" :class="{ occupied: Event.occupiedSeatsId.includes(495), selected: Event.reservedSeatsId.includes(495) }">3</div>
            <div class="seat" @click="handleClickSeat(496)" :class="{ occupied: Event.occupiedSeatsId.includes(496), selected: Event.reservedSeatsId.includes(496) }">4</div>
            <div class="seat" @click="handleClickSeat(497)" :class="{ occupied: Event.occupiedSeatsId.includes(497), selected: Event.reservedSeatsId.includes(497) }">5</div>
            <div class="seat" @click="handleClickSeat(498)" :class="{ occupied: Event.occupiedSeatsId.includes(498), selected: Event.reservedSeatsId.includes(498) }">6</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(531)" :class="{ occupied: Event.occupiedSeatsId.includes(531), selected: Event.reservedSeatsId.includes(531) }">1</div>
            <div class="seat" @click="handleClickSeat(532)" :class="{ occupied: Event.occupiedSeatsId.includes(532), selected: Event.reservedSeatsId.includes(532) }">2</div>
            <div class="seat" @click="handleClickSeat(533)" :class="{ occupied: Event.occupiedSeatsId.includes(533), selected: Event.reservedSeatsId.includes(533) }">3</div>
            <div class="seat" @click="handleClickSeat(534)" :class="{ occupied: Event.occupiedSeatsId.includes(534), selected: Event.reservedSeatsId.includes(534) }">4</div>
            <div class="seat" @click="handleClickSeat(535)" :class="{ occupied: Event.occupiedSeatsId.includes(535), selected: Event.reservedSeatsId.includes(535) }">5</div>
            <div class="seat" @click="handleClickSeat(536)" :class="{ occupied: Event.occupiedSeatsId.includes(536), selected: Event.reservedSeatsId.includes(536) }">6</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(569)" :class="{ occupied: Event.occupiedSeatsId.includes(569), selected: Event.reservedSeatsId.includes(569) }">1</div>
            <div class="seat" @click="handleClickSeat(570)" :class="{ occupied: Event.occupiedSeatsId.includes(570), selected: Event.reservedSeatsId.includes(570) }">2</div>
            <div class="seat" @click="handleClickSeat(571)" :class="{ occupied: Event.occupiedSeatsId.includes(571), selected: Event.reservedSeatsId.includes(571) }">3</div>
            <div class="seat" @click="handleClickSeat(572)" :class="{ occupied: Event.occupiedSeatsId.includes(572), selected: Event.reservedSeatsId.includes(572) }">4</div>
            <div class="seat" @click="handleClickSeat(573)" :class="{ occupied: Event.occupiedSeatsId.includes(573), selected: Event.reservedSeatsId.includes(573) }">5</div>
            <div class="seat" @click="handleClickSeat(574)" :class="{ occupied: Event.occupiedSeatsId.includes(574), selected: Event.reservedSeatsId.includes(574) }">6</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(608)" :class="{ occupied: Event.occupiedSeatsId.includes(608), selected: Event.reservedSeatsId.includes(608) }">1</div>
            <div class="seat" @click="handleClickSeat(609)" :class="{ occupied: Event.occupiedSeatsId.includes(609), selected: Event.reservedSeatsId.includes(609) }">2</div>
            <div class="seat" @click="handleClickSeat(610)" :class="{ occupied: Event.occupiedSeatsId.includes(610), selected: Event.reservedSeatsId.includes(610) }">3</div>
            <div class="seat" @click="handleClickSeat(611)" :class="{ occupied: Event.occupiedSeatsId.includes(611), selected: Event.reservedSeatsId.includes(611) }">4</div>
            <div class="seat" @click="handleClickSeat(612)" :class="{ occupied: Event.occupiedSeatsId.includes(612), selected: Event.reservedSeatsId.includes(612) }">5</div>
            <div class="seat" @click="handleClickSeat(613)" :class="{ occupied: Event.occupiedSeatsId.includes(613), selected: Event.reservedSeatsId.includes(613) }">6</div>
          </div>
        </div>
        <!-- Middle column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(250)" :class="{ occupied: Event.occupiedSeatsId.includes(250), selected: Event.reservedSeatsId.includes(250) }">1</div>
            <div class="seat" @click="handleClickSeat(251)" :class="{ occupied: Event.occupiedSeatsId.includes(251), selected: Event.reservedSeatsId.includes(251) }">2</div>
            <div class="seat" @click="handleClickSeat(252)" :class="{ occupied: Event.occupiedSeatsId.includes(252), selected: Event.reservedSeatsId.includes(252) }">3</div>
            <div class="seat" @click="handleClickSeat(253)" :class="{ occupied: Event.occupiedSeatsId.includes(253), selected: Event.reservedSeatsId.includes(253) }">4</div>
            <div class="seat" @click="handleClickSeat(254)" :class="{ occupied: Event.occupiedSeatsId.includes(254), selected: Event.reservedSeatsId.includes(254) }">5</div>
            <div class="seat" @click="handleClickSeat(255)" :class="{ occupied: Event.occupiedSeatsId.includes(255), selected: Event.reservedSeatsId.includes(255) }">6</div>
            <div class="seat" @click="handleClickSeat(256)" :class="{ occupied: Event.occupiedSeatsId.includes(256), selected: Event.reservedSeatsId.includes(256) }">7</div>
            <div class="seat" @click="handleClickSeat(257)" :class="{ occupied: Event.occupiedSeatsId.includes(257), selected: Event.reservedSeatsId.includes(257) }">8</div>
            <div class="seat" @click="handleClickSeat(258)" :class="{ occupied: Event.occupiedSeatsId.includes(258), selected: Event.reservedSeatsId.includes(258) }">9</div>
            <div class="seat" @click="handleClickSeat(259)" :class="{ occupied: Event.occupiedSeatsId.includes(259), selected: Event.reservedSeatsId.includes(259) }">10</div>
            <div class="seat" @click="handleClickSeat(260)" :class="{ occupied: Event.occupiedSeatsId.includes(260), selected: Event.reservedSeatsId.includes(260) }">11</div>
            <div class="seat" @click="handleClickSeat(261)" :class="{ occupied: Event.occupiedSeatsId.includes(261), selected: Event.reservedSeatsId.includes(261) }">12</div>
            <div class="seat" @click="handleClickSeat(262)" :class="{ occupied: Event.occupiedSeatsId.includes(262), selected: Event.reservedSeatsId.includes(262) }">13</div>
            <div class="seat" @click="handleClickSeat(263)" :class="{ occupied: Event.occupiedSeatsId.includes(263), selected: Event.reservedSeatsId.includes(263) }">14</div>
            <div class="seat" @click="handleClickSeat(264)" :class="{ occupied: Event.occupiedSeatsId.includes(264), selected: Event.reservedSeatsId.includes(264) }">15</div>
            <div class="seat" @click="handleClickSeat(265)" :class="{ occupied: Event.occupiedSeatsId.includes(265), selected: Event.reservedSeatsId.includes(265) }">16</div>
            <div class="seat" @click="handleClickSeat(266)" :class="{ occupied: Event.occupiedSeatsId.includes(266), selected: Event.reservedSeatsId.includes(266) }">17</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(283)" :class="{ occupied: Event.occupiedSeatsId.includes(283), selected: Event.reservedSeatsId.includes(283) }">7</div>
            <div class="seat" @click="handleClickSeat(284)" :class="{ occupied: Event.occupiedSeatsId.includes(284), selected: Event.reservedSeatsId.includes(284) }">8</div>
            <div class="seat" @click="handleClickSeat(285)" :class="{ occupied: Event.occupiedSeatsId.includes(285), selected: Event.reservedSeatsId.includes(285) }">9</div>
            <div class="seat" @click="handleClickSeat(286)" :class="{ occupied: Event.occupiedSeatsId.includes(286), selected: Event.reservedSeatsId.includes(286) }">10</div>
            <div class="seat" @click="handleClickSeat(287)" :class="{ occupied: Event.occupiedSeatsId.includes(287), selected: Event.reservedSeatsId.includes(287) }">11</div>
            <div class="seat" @click="handleClickSeat(288)" :class="{ occupied: Event.occupiedSeatsId.includes(288), selected: Event.reservedSeatsId.includes(288) }">12</div>
            <div class="seat" @click="handleClickSeat(289)" :class="{ occupied: Event.occupiedSeatsId.includes(289), selected: Event.reservedSeatsId.includes(289) }">13</div>
            <div class="seat" @click="handleClickSeat(290)" :class="{ occupied: Event.occupiedSeatsId.includes(290), selected: Event.reservedSeatsId.includes(290) }">14</div>
            <div class="seat" @click="handleClickSeat(291)" :class="{ occupied: Event.occupiedSeatsId.includes(291), selected: Event.reservedSeatsId.includes(291) }">15</div>
            <div class="seat" @click="handleClickSeat(292)" :class="{ occupied: Event.occupiedSeatsId.includes(292), selected: Event.reservedSeatsId.includes(292) }">16</div>
            <div class="seat" @click="handleClickSeat(293)" :class="{ occupied: Event.occupiedSeatsId.includes(293), selected: Event.reservedSeatsId.includes(293) }">17</div>
            <div class="seat" @click="handleClickSeat(294)" :class="{ occupied: Event.occupiedSeatsId.includes(294), selected: Event.reservedSeatsId.includes(294) }">18</div>
            <div class="seat" @click="handleClickSeat(295)" :class="{ occupied: Event.occupiedSeatsId.includes(295), selected: Event.reservedSeatsId.includes(295) }">19</div>
            <div class="seat" @click="handleClickSeat(296)" :class="{ occupied: Event.occupiedSeatsId.includes(296), selected: Event.reservedSeatsId.includes(296) }">20</div>
            <div class="seat" @click="handleClickSeat(297)" :class="{ occupied: Event.occupiedSeatsId.includes(297), selected: Event.reservedSeatsId.includes(297) }">21</div>
            <div class="seat" @click="handleClickSeat(298)" :class="{ occupied: Event.occupiedSeatsId.includes(298), selected: Event.reservedSeatsId.includes(298) }">22</div>
            <div class="seat" @click="handleClickSeat(299)" :class="{ occupied: Event.occupiedSeatsId.includes(299), selected: Event.reservedSeatsId.includes(299) }">23</div>
            <div class="seat" @click="handleClickSeat(300)" :class="{ occupied: Event.occupiedSeatsId.includes(300), selected: Event.reservedSeatsId.includes(300) }">24</div>
            <div class="seat" @click="handleClickSeat(301)" :class="{ occupied: Event.occupiedSeatsId.includes(301), selected: Event.reservedSeatsId.includes(301) }">25</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(318)" :class="{ occupied: Event.occupiedSeatsId.includes(318), selected: Event.reservedSeatsId.includes(318) }">7</div>
            <div class="seat" @click="handleClickSeat(319)" :class="{ occupied: Event.occupiedSeatsId.includes(319), selected: Event.reservedSeatsId.includes(319) }">8</div>
            <div class="seat" @click="handleClickSeat(320)" :class="{ occupied: Event.occupiedSeatsId.includes(320), selected: Event.reservedSeatsId.includes(320) }">9</div>
            <div class="seat" @click="handleClickSeat(321)" :class="{ occupied: Event.occupiedSeatsId.includes(321), selected: Event.reservedSeatsId.includes(321) }">10</div>
            <div class="seat" @click="handleClickSeat(322)" :class="{ occupied: Event.occupiedSeatsId.includes(322), selected: Event.reservedSeatsId.includes(322) }">11</div>
            <div class="seat" @click="handleClickSeat(323)" :class="{ occupied: Event.occupiedSeatsId.includes(323), selected: Event.reservedSeatsId.includes(323) }">12</div>
            <div class="seat" @click="handleClickSeat(324)" :class="{ occupied: Event.occupiedSeatsId.includes(324), selected: Event.reservedSeatsId.includes(324) }">13</div>
            <div class="seat" @click="handleClickSeat(325)" :class="{ occupied: Event.occupiedSeatsId.includes(325), selected: Event.reservedSeatsId.includes(325) }">14</div>
            <div class="seat" @click="handleClickSeat(326)" :class="{ occupied: Event.occupiedSeatsId.includes(326), selected: Event.reservedSeatsId.includes(326) }">15</div>
            <div class="seat" @click="handleClickSeat(327)" :class="{ occupied: Event.occupiedSeatsId.includes(327), selected: Event.reservedSeatsId.includes(327) }">16</div>
            <div class="seat" @click="handleClickSeat(328)" :class="{ occupied: Event.occupiedSeatsId.includes(328), selected: Event.reservedSeatsId.includes(328) }">17</div>
            <div class="seat" @click="handleClickSeat(329)" :class="{ occupied: Event.occupiedSeatsId.includes(329), selected: Event.reservedSeatsId.includes(329) }">18</div>
            <div class="seat" @click="handleClickSeat(330)" :class="{ occupied: Event.occupiedSeatsId.includes(330), selected: Event.reservedSeatsId.includes(330) }">19</div>
            <div class="seat" @click="handleClickSeat(331)" :class="{ occupied: Event.occupiedSeatsId.includes(331), selected: Event.reservedSeatsId.includes(331) }">20</div>
            <div class="seat" @click="handleClickSeat(332)" :class="{ occupied: Event.occupiedSeatsId.includes(332), selected: Event.reservedSeatsId.includes(332) }">21</div>
            <div class="seat" @click="handleClickSeat(333)" :class="{ occupied: Event.occupiedSeatsId.includes(333), selected: Event.reservedSeatsId.includes(333) }">22</div>
            <div class="seat" @click="handleClickSeat(334)" :class="{ occupied: Event.occupiedSeatsId.includes(334), selected: Event.reservedSeatsId.includes(334) }">23</div>
            <div class="seat" @click="handleClickSeat(335)" :class="{ occupied: Event.occupiedSeatsId.includes(335), selected: Event.reservedSeatsId.includes(335) }">24</div>
            <div class="seat" @click="handleClickSeat(336)" :class="{ occupied: Event.occupiedSeatsId.includes(336), selected: Event.reservedSeatsId.includes(336) }">25</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(353)" :class="{ occupied: Event.occupiedSeatsId.includes(353), selected: Event.reservedSeatsId.includes(353) }">7</div>
            <div class="seat" @click="handleClickSeat(354)" :class="{ occupied: Event.occupiedSeatsId.includes(354), selected: Event.reservedSeatsId.includes(354) }">8</div>
            <div class="seat" @click="handleClickSeat(355)" :class="{ occupied: Event.occupiedSeatsId.includes(355), selected: Event.reservedSeatsId.includes(355) }">9</div>
            <div class="seat" @click="handleClickSeat(356)" :class="{ occupied: Event.occupiedSeatsId.includes(356), selected: Event.reservedSeatsId.includes(356) }">10</div>
            <div class="seat" @click="handleClickSeat(357)" :class="{ occupied: Event.occupiedSeatsId.includes(357), selected: Event.reservedSeatsId.includes(357) }">11</div>
            <div class="seat" @click="handleClickSeat(358)" :class="{ occupied: Event.occupiedSeatsId.includes(358), selected: Event.reservedSeatsId.includes(358) }">12</div>
            <div class="seat" @click="handleClickSeat(359)" :class="{ occupied: Event.occupiedSeatsId.includes(359), selected: Event.reservedSeatsId.includes(359) }">13</div>
            <div class="seat" @click="handleClickSeat(360)" :class="{ occupied: Event.occupiedSeatsId.includes(360), selected: Event.reservedSeatsId.includes(360) }">14</div>
            <div class="seat" @click="handleClickSeat(361)" :class="{ occupied: Event.occupiedSeatsId.includes(361), selected: Event.reservedSeatsId.includes(361) }">15</div>
            <div class="seat" @click="handleClickSeat(362)" :class="{ occupied: Event.occupiedSeatsId.includes(362), selected: Event.reservedSeatsId.includes(362) }">16</div>
            <div class="seat" @click="handleClickSeat(363)" :class="{ occupied: Event.occupiedSeatsId.includes(363), selected: Event.reservedSeatsId.includes(363) }">17</div>
            <div class="seat" @click="handleClickSeat(364)" :class="{ occupied: Event.occupiedSeatsId.includes(364), selected: Event.reservedSeatsId.includes(364) }">18</div>
            <div class="seat" @click="handleClickSeat(365)" :class="{ occupied: Event.occupiedSeatsId.includes(365), selected: Event.reservedSeatsId.includes(365) }">19</div>
            <div class="seat" @click="handleClickSeat(366)" :class="{ occupied: Event.occupiedSeatsId.includes(366), selected: Event.reservedSeatsId.includes(366) }">20</div>
            <div class="seat" @click="handleClickSeat(367)" :class="{ occupied: Event.occupiedSeatsId.includes(367), selected: Event.reservedSeatsId.includes(367) }">21</div>
            <div class="seat" @click="handleClickSeat(368)" :class="{ occupied: Event.occupiedSeatsId.includes(368), selected: Event.reservedSeatsId.includes(368) }">22</div>
            <div class="seat" @click="handleClickSeat(369)" :class="{ occupied: Event.occupiedSeatsId.includes(369), selected: Event.reservedSeatsId.includes(369) }">23</div>
            <div class="seat" @click="handleClickSeat(370)" :class="{ occupied: Event.occupiedSeatsId.includes(370), selected: Event.reservedSeatsId.includes(370) }">24</div>
            <div class="seat" @click="handleClickSeat(371)" :class="{ occupied: Event.occupiedSeatsId.includes(371), selected: Event.reservedSeatsId.includes(371) }">25</div>
            <div class="seat" @click="handleClickSeat(372)" :class="{ occupied: Event.occupiedSeatsId.includes(372), selected: Event.reservedSeatsId.includes(372) }">26</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(389)" :class="{ occupied: Event.occupiedSeatsId.includes(389), selected: Event.reservedSeatsId.includes(389) }">7</div>
            <div class="seat" @click="handleClickSeat(390)" :class="{ occupied: Event.occupiedSeatsId.includes(390), selected: Event.reservedSeatsId.includes(390) }">8</div>
            <div class="seat" @click="handleClickSeat(391)" :class="{ occupied: Event.occupiedSeatsId.includes(391), selected: Event.reservedSeatsId.includes(391) }">9</div>
            <div class="seat" @click="handleClickSeat(392)" :class="{ occupied: Event.occupiedSeatsId.includes(392), selected: Event.reservedSeatsId.includes(392) }">10</div>
            <div class="seat" @click="handleClickSeat(393)" :class="{ occupied: Event.occupiedSeatsId.includes(393), selected: Event.reservedSeatsId.includes(393) }">11</div>
            <div class="seat" @click="handleClickSeat(394)" :class="{ occupied: Event.occupiedSeatsId.includes(394), selected: Event.reservedSeatsId.includes(394) }">12</div>
            <div class="seat" @click="handleClickSeat(395)" :class="{ occupied: Event.occupiedSeatsId.includes(395), selected: Event.reservedSeatsId.includes(395) }">13</div>
            <div class="seat" @click="handleClickSeat(396)" :class="{ occupied: Event.occupiedSeatsId.includes(396), selected: Event.reservedSeatsId.includes(396) }">14</div>
            <div class="seat" @click="handleClickSeat(397)" :class="{ occupied: Event.occupiedSeatsId.includes(397), selected: Event.reservedSeatsId.includes(397) }">15</div>
            <div class="seat" @click="handleClickSeat(398)" :class="{ occupied: Event.occupiedSeatsId.includes(398), selected: Event.reservedSeatsId.includes(398) }">16</div>
            <div class="seat" @click="handleClickSeat(399)" :class="{ occupied: Event.occupiedSeatsId.includes(399), selected: Event.reservedSeatsId.includes(399) }">17</div>
            <div class="seat" @click="handleClickSeat(400)" :class="{ occupied: Event.occupiedSeatsId.includes(400), selected: Event.reservedSeatsId.includes(400) }">18</div>
            <div class="seat" @click="handleClickSeat(401)" :class="{ occupied: Event.occupiedSeatsId.includes(401), selected: Event.reservedSeatsId.includes(401) }">19</div>
            <div class="seat" @click="handleClickSeat(402)" :class="{ occupied: Event.occupiedSeatsId.includes(402), selected: Event.reservedSeatsId.includes(402) }">20</div>
            <div class="seat" @click="handleClickSeat(403)" :class="{ occupied: Event.occupiedSeatsId.includes(403), selected: Event.reservedSeatsId.includes(403) }">21</div>
            <div class="seat" @click="handleClickSeat(404)" :class="{ occupied: Event.occupiedSeatsId.includes(404), selected: Event.reservedSeatsId.includes(404) }">22</div>
            <div class="seat" @click="handleClickSeat(405)" :class="{ occupied: Event.occupiedSeatsId.includes(405), selected: Event.reservedSeatsId.includes(405) }">23</div>
            <div class="seat" @click="handleClickSeat(406)" :class="{ occupied: Event.occupiedSeatsId.includes(406), selected: Event.reservedSeatsId.includes(406) }">24</div>
            <div class="seat" @click="handleClickSeat(407)" :class="{ occupied: Event.occupiedSeatsId.includes(407), selected: Event.reservedSeatsId.includes(407) }">25</div>
            <div class="seat" @click="handleClickSeat(408)" :class="{ occupied: Event.occupiedSeatsId.includes(408), selected: Event.reservedSeatsId.includes(408) }">26</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(425)" :class="{ occupied: Event.occupiedSeatsId.includes(425), selected: Event.reservedSeatsId.includes(425) }">7</div>
            <div class="seat" @click="handleClickSeat(426)" :class="{ occupied: Event.occupiedSeatsId.includes(426), selected: Event.reservedSeatsId.includes(426) }">8</div>
            <div class="seat" @click="handleClickSeat(427)" :class="{ occupied: Event.occupiedSeatsId.includes(427), selected: Event.reservedSeatsId.includes(427) }">9</div>
            <div class="seat" @click="handleClickSeat(428)" :class="{ occupied: Event.occupiedSeatsId.includes(428), selected: Event.reservedSeatsId.includes(428) }">10</div>
            <div class="seat" @click="handleClickSeat(429)" :class="{ occupied: Event.occupiedSeatsId.includes(429), selected: Event.reservedSeatsId.includes(429) }">11</div>
            <div class="seat" @click="handleClickSeat(430)" :class="{ occupied: Event.occupiedSeatsId.includes(430), selected: Event.reservedSeatsId.includes(430) }">12</div>
            <div class="seat" @click="handleClickSeat(431)" :class="{ occupied: Event.occupiedSeatsId.includes(431), selected: Event.reservedSeatsId.includes(431) }">13</div>
            <div class="seat" @click="handleClickSeat(432)" :class="{ occupied: Event.occupiedSeatsId.includes(432), selected: Event.reservedSeatsId.includes(432) }">14</div>
            <div class="seat" @click="handleClickSeat(433)" :class="{ occupied: Event.occupiedSeatsId.includes(433), selected: Event.reservedSeatsId.includes(433) }">15</div>
            <div class="seat" @click="handleClickSeat(434)" :class="{ occupied: Event.occupiedSeatsId.includes(434), selected: Event.reservedSeatsId.includes(434) }">16</div>
            <div class="seat" @click="handleClickSeat(435)" :class="{ occupied: Event.occupiedSeatsId.includes(435), selected: Event.reservedSeatsId.includes(435) }">17</div>
            <div class="seat" @click="handleClickSeat(436)" :class="{ occupied: Event.occupiedSeatsId.includes(436), selected: Event.reservedSeatsId.includes(436) }">18</div>
            <div class="seat" @click="handleClickSeat(437)" :class="{ occupied: Event.occupiedSeatsId.includes(437), selected: Event.reservedSeatsId.includes(437) }">19</div>
            <div class="seat" @click="handleClickSeat(438)" :class="{ occupied: Event.occupiedSeatsId.includes(438), selected: Event.reservedSeatsId.includes(438) }">20</div>
            <div class="seat" @click="handleClickSeat(439)" :class="{ occupied: Event.occupiedSeatsId.includes(439), selected: Event.reservedSeatsId.includes(439) }">21</div>
            <div class="seat" @click="handleClickSeat(440)" :class="{ occupied: Event.occupiedSeatsId.includes(440), selected: Event.reservedSeatsId.includes(440) }">22</div>
            <div class="seat" @click="handleClickSeat(441)" :class="{ occupied: Event.occupiedSeatsId.includes(441), selected: Event.reservedSeatsId.includes(441) }">23</div>
            <div class="seat" @click="handleClickSeat(442)" :class="{ occupied: Event.occupiedSeatsId.includes(442), selected: Event.reservedSeatsId.includes(442) }">24</div>
            <div class="seat" @click="handleClickSeat(443)" :class="{ occupied: Event.occupiedSeatsId.includes(443), selected: Event.reservedSeatsId.includes(443) }">25</div>
            <div class="seat" @click="handleClickSeat(444)" :class="{ occupied: Event.occupiedSeatsId.includes(444), selected: Event.reservedSeatsId.includes(444) }">26</div>
            <div class="seat" @click="handleClickSeat(445)" :class="{ occupied: Event.occupiedSeatsId.includes(445), selected: Event.reservedSeatsId.includes(445) }">27</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(462)" :class="{ occupied: Event.occupiedSeatsId.includes(462), selected: Event.reservedSeatsId.includes(462) }">7</div>
            <div class="seat" @click="handleClickSeat(463)" :class="{ occupied: Event.occupiedSeatsId.includes(463), selected: Event.reservedSeatsId.includes(463) }">8</div>
            <div class="seat" @click="handleClickSeat(464)" :class="{ occupied: Event.occupiedSeatsId.includes(464), selected: Event.reservedSeatsId.includes(464) }">9</div>
            <div class="seat" @click="handleClickSeat(465)" :class="{ occupied: Event.occupiedSeatsId.includes(465), selected: Event.reservedSeatsId.includes(465) }">10</div>
            <div class="seat" @click="handleClickSeat(466)" :class="{ occupied: Event.occupiedSeatsId.includes(466), selected: Event.reservedSeatsId.includes(466) }">11</div>
            <div class="seat" @click="handleClickSeat(467)" :class="{ occupied: Event.occupiedSeatsId.includes(467), selected: Event.reservedSeatsId.includes(467) }">12</div>
            <div class="seat" @click="handleClickSeat(468)" :class="{ occupied: Event.occupiedSeatsId.includes(468), selected: Event.reservedSeatsId.includes(468) }">13</div>
            <div class="seat" @click="handleClickSeat(469)" :class="{ occupied: Event.occupiedSeatsId.includes(469), selected: Event.reservedSeatsId.includes(469) }">14</div>
            <div class="seat" @click="handleClickSeat(470)" :class="{ occupied: Event.occupiedSeatsId.includes(470), selected: Event.reservedSeatsId.includes(470) }">15</div>
            <div class="seat" @click="handleClickSeat(471)" :class="{ occupied: Event.occupiedSeatsId.includes(471), selected: Event.reservedSeatsId.includes(471) }">16</div>
            <div class="seat" @click="handleClickSeat(472)" :class="{ occupied: Event.occupiedSeatsId.includes(472), selected: Event.reservedSeatsId.includes(472) }">17</div>
            <div class="seat" @click="handleClickSeat(473)" :class="{ occupied: Event.occupiedSeatsId.includes(473), selected: Event.reservedSeatsId.includes(473) }">18</div>
            <div class="seat" @click="handleClickSeat(474)" :class="{ occupied: Event.occupiedSeatsId.includes(474), selected: Event.reservedSeatsId.includes(474) }">19</div>
            <div class="seat" @click="handleClickSeat(475)" :class="{ occupied: Event.occupiedSeatsId.includes(475), selected: Event.reservedSeatsId.includes(475) }">20</div>
            <div class="seat" @click="handleClickSeat(476)" :class="{ occupied: Event.occupiedSeatsId.includes(476), selected: Event.reservedSeatsId.includes(476) }">21</div>
            <div class="seat" @click="handleClickSeat(477)" :class="{ occupied: Event.occupiedSeatsId.includes(477), selected: Event.reservedSeatsId.includes(477) }">22</div>
            <div class="seat" @click="handleClickSeat(478)" :class="{ occupied: Event.occupiedSeatsId.includes(478), selected: Event.reservedSeatsId.includes(478) }">23</div>
            <div class="seat" @click="handleClickSeat(479)" :class="{ occupied: Event.occupiedSeatsId.includes(479), selected: Event.reservedSeatsId.includes(479) }">24</div>
            <div class="seat" @click="handleClickSeat(480)" :class="{ occupied: Event.occupiedSeatsId.includes(480), selected: Event.reservedSeatsId.includes(480) }">25</div>
            <div class="seat" @click="handleClickSeat(481)" :class="{ occupied: Event.occupiedSeatsId.includes(481), selected: Event.reservedSeatsId.includes(481) }">26</div>
            <div class="seat" @click="handleClickSeat(482)" :class="{ occupied: Event.occupiedSeatsId.includes(482), selected: Event.reservedSeatsId.includes(482) }">27</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(499)" :class="{ occupied: Event.occupiedSeatsId.includes(499), selected: Event.reservedSeatsId.includes(499) }">7</div>
            <div class="seat" @click="handleClickSeat(500)" :class="{ occupied: Event.occupiedSeatsId.includes(500), selected: Event.reservedSeatsId.includes(500) }">8</div>
            <div class="seat" @click="handleClickSeat(501)" :class="{ occupied: Event.occupiedSeatsId.includes(501), selected: Event.reservedSeatsId.includes(501) }">9</div>
            <div class="seat" @click="handleClickSeat(502)" :class="{ occupied: Event.occupiedSeatsId.includes(502), selected: Event.reservedSeatsId.includes(502) }">10</div>
            <div class="seat" @click="handleClickSeat(503)" :class="{ occupied: Event.occupiedSeatsId.includes(503), selected: Event.reservedSeatsId.includes(503) }">11</div>
            <div class="seat" @click="handleClickSeat(504)" :class="{ occupied: Event.occupiedSeatsId.includes(504), selected: Event.reservedSeatsId.includes(504) }">12</div>
            <div class="seat" @click="handleClickSeat(505)" :class="{ occupied: Event.occupiedSeatsId.includes(505), selected: Event.reservedSeatsId.includes(505) }">13</div>
            <div class="seat" @click="handleClickSeat(506)" :class="{ occupied: Event.occupiedSeatsId.includes(506), selected: Event.reservedSeatsId.includes(506) }">14</div>
            <div class="seat" @click="handleClickSeat(507)" :class="{ occupied: Event.occupiedSeatsId.includes(507), selected: Event.reservedSeatsId.includes(507) }">15</div>
            <div class="seat" @click="handleClickSeat(508)" :class="{ occupied: Event.occupiedSeatsId.includes(508), selected: Event.reservedSeatsId.includes(508) }">16</div>
            <div class="seat" @click="handleClickSeat(509)" :class="{ occupied: Event.occupiedSeatsId.includes(509), selected: Event.reservedSeatsId.includes(509) }">17</div>
            <div class="seat" @click="handleClickSeat(510)" :class="{ occupied: Event.occupiedSeatsId.includes(510), selected: Event.reservedSeatsId.includes(510) }">18</div>
            <div class="seat" @click="handleClickSeat(511)" :class="{ occupied: Event.occupiedSeatsId.includes(511), selected: Event.reservedSeatsId.includes(511) }">19</div>
            <div class="seat" @click="handleClickSeat(512)" :class="{ occupied: Event.occupiedSeatsId.includes(512), selected: Event.reservedSeatsId.includes(512) }">20</div>
            <div class="seat" @click="handleClickSeat(513)" :class="{ occupied: Event.occupiedSeatsId.includes(513), selected: Event.reservedSeatsId.includes(513) }">21</div>
            <div class="seat" @click="handleClickSeat(514)" :class="{ occupied: Event.occupiedSeatsId.includes(514), selected: Event.reservedSeatsId.includes(514) }">22</div>
            <div class="seat" @click="handleClickSeat(515)" :class="{ occupied: Event.occupiedSeatsId.includes(515), selected: Event.reservedSeatsId.includes(515) }">23</div>
            <div class="seat" @click="handleClickSeat(516)" :class="{ occupied: Event.occupiedSeatsId.includes(516), selected: Event.reservedSeatsId.includes(516) }">24</div>
            <div class="seat" @click="handleClickSeat(517)" :class="{ occupied: Event.occupiedSeatsId.includes(517), selected: Event.reservedSeatsId.includes(517) }">25</div>
            <div class="seat" @click="handleClickSeat(518)" :class="{ occupied: Event.occupiedSeatsId.includes(518), selected: Event.reservedSeatsId.includes(518) }">26</div>
            <div class="seat" @click="handleClickSeat(519)" :class="{ occupied: Event.occupiedSeatsId.includes(519), selected: Event.reservedSeatsId.includes(519) }">27</div>
            <div class="seat" @click="handleClickSeat(520)" :class="{ occupied: Event.occupiedSeatsId.includes(520), selected: Event.reservedSeatsId.includes(520) }">28</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(537)" :class="{ occupied: Event.occupiedSeatsId.includes(537), selected: Event.reservedSeatsId.includes(537) }">7</div>
            <div class="seat" @click="handleClickSeat(538)" :class="{ occupied: Event.occupiedSeatsId.includes(538), selected: Event.reservedSeatsId.includes(538) }">8</div>
            <div class="seat" @click="handleClickSeat(539)" :class="{ occupied: Event.occupiedSeatsId.includes(539), selected: Event.reservedSeatsId.includes(539) }">9</div>
            <div class="seat" @click="handleClickSeat(540)" :class="{ occupied: Event.occupiedSeatsId.includes(540), selected: Event.reservedSeatsId.includes(540) }">10</div>
            <div class="seat" @click="handleClickSeat(541)" :class="{ occupied: Event.occupiedSeatsId.includes(541), selected: Event.reservedSeatsId.includes(541) }">11</div>
            <div class="seat" @click="handleClickSeat(542)" :class="{ occupied: Event.occupiedSeatsId.includes(542), selected: Event.reservedSeatsId.includes(542) }">12</div>
            <div class="seat" @click="handleClickSeat(543)" :class="{ occupied: Event.occupiedSeatsId.includes(543), selected: Event.reservedSeatsId.includes(543) }">13</div>
            <div class="seat" @click="handleClickSeat(544)" :class="{ occupied: Event.occupiedSeatsId.includes(544), selected: Event.reservedSeatsId.includes(544) }">14</div>
            <div class="seat" @click="handleClickSeat(545)" :class="{ occupied: Event.occupiedSeatsId.includes(545), selected: Event.reservedSeatsId.includes(545) }">15</div>
            <div class="seat" @click="handleClickSeat(546)" :class="{ occupied: Event.occupiedSeatsId.includes(546), selected: Event.reservedSeatsId.includes(546) }">16</div>
            <div class="seat" @click="handleClickSeat(547)" :class="{ occupied: Event.occupiedSeatsId.includes(547), selected: Event.reservedSeatsId.includes(547) }">17</div>
            <div class="seat" @click="handleClickSeat(548)" :class="{ occupied: Event.occupiedSeatsId.includes(548), selected: Event.reservedSeatsId.includes(548) }">18</div>
            <div class="seat" @click="handleClickSeat(549)" :class="{ occupied: Event.occupiedSeatsId.includes(549), selected: Event.reservedSeatsId.includes(549) }">19</div>
            <div class="seat" @click="handleClickSeat(550)" :class="{ occupied: Event.occupiedSeatsId.includes(550), selected: Event.reservedSeatsId.includes(550) }">20</div>
            <div class="seat" @click="handleClickSeat(551)" :class="{ occupied: Event.occupiedSeatsId.includes(551), selected: Event.reservedSeatsId.includes(551) }">21</div>
            <div class="seat" @click="handleClickSeat(552)" :class="{ occupied: Event.occupiedSeatsId.includes(552), selected: Event.reservedSeatsId.includes(552) }">22</div>
            <div class="seat" @click="handleClickSeat(553)" :class="{ occupied: Event.occupiedSeatsId.includes(553), selected: Event.reservedSeatsId.includes(553) }">23</div>
            <div class="seat" @click="handleClickSeat(554)" :class="{ occupied: Event.occupiedSeatsId.includes(554), selected: Event.reservedSeatsId.includes(554) }">24</div>
            <div class="seat" @click="handleClickSeat(555)" :class="{ occupied: Event.occupiedSeatsId.includes(555), selected: Event.reservedSeatsId.includes(555) }">25</div>
            <div class="seat" @click="handleClickSeat(556)" :class="{ occupied: Event.occupiedSeatsId.includes(556), selected: Event.reservedSeatsId.includes(556) }">26</div>
            <div class="seat" @click="handleClickSeat(557)" :class="{ occupied: Event.occupiedSeatsId.includes(557), selected: Event.reservedSeatsId.includes(557) }">27</div>
            <div class="seat" @click="handleClickSeat(558)" :class="{ occupied: Event.occupiedSeatsId.includes(558), selected: Event.reservedSeatsId.includes(558) }">28</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(575)" :class="{ occupied: Event.occupiedSeatsId.includes(575), selected: Event.reservedSeatsId.includes(575) }">7</div>
            <div class="seat" @click="handleClickSeat(576)" :class="{ occupied: Event.occupiedSeatsId.includes(576), selected: Event.reservedSeatsId.includes(576) }">8</div>
            <div class="seat" @click="handleClickSeat(577)" :class="{ occupied: Event.occupiedSeatsId.includes(577), selected: Event.reservedSeatsId.includes(577) }">9</div>
            <div class="seat" @click="handleClickSeat(578)" :class="{ occupied: Event.occupiedSeatsId.includes(578), selected: Event.reservedSeatsId.includes(578) }">10</div>
            <div class="seat" @click="handleClickSeat(579)" :class="{ occupied: Event.occupiedSeatsId.includes(579), selected: Event.reservedSeatsId.includes(579) }">11</div>
            <div class="seat" @click="handleClickSeat(580)" :class="{ occupied: Event.occupiedSeatsId.includes(580), selected: Event.reservedSeatsId.includes(580) }">12</div>
            <div class="seat" @click="handleClickSeat(581)" :class="{ occupied: Event.occupiedSeatsId.includes(581), selected: Event.reservedSeatsId.includes(581) }">13</div>
            <div class="seat" @click="handleClickSeat(582)" :class="{ occupied: Event.occupiedSeatsId.includes(582), selected: Event.reservedSeatsId.includes(582) }">14</div>
            <div class="seat" @click="handleClickSeat(583)" :class="{ occupied: Event.occupiedSeatsId.includes(583), selected: Event.reservedSeatsId.includes(583) }">15</div>
            <div class="seat" @click="handleClickSeat(584)" :class="{ occupied: Event.occupiedSeatsId.includes(584), selected: Event.reservedSeatsId.includes(584) }">16</div>
            <div class="seat" @click="handleClickSeat(585)" :class="{ occupied: Event.occupiedSeatsId.includes(585), selected: Event.reservedSeatsId.includes(585) }">17</div>
            <div class="seat" @click="handleClickSeat(586)" :class="{ occupied: Event.occupiedSeatsId.includes(586), selected: Event.reservedSeatsId.includes(586) }">18</div>
            <div class="seat" @click="handleClickSeat(587)" :class="{ occupied: Event.occupiedSeatsId.includes(587), selected: Event.reservedSeatsId.includes(587) }">19</div>
            <div class="seat" @click="handleClickSeat(588)" :class="{ occupied: Event.occupiedSeatsId.includes(588), selected: Event.reservedSeatsId.includes(588) }">20</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ occupied: Event.occupiedSeatsId.includes(589), selected: Event.reservedSeatsId.includes(589) }">21</div>
            <div class="seat" @click="handleClickSeat(590)" :class="{ occupied: Event.occupiedSeatsId.includes(590), selected: Event.reservedSeatsId.includes(590) }">22</div>
            <div class="seat" @click="handleClickSeat(591)" :class="{ occupied: Event.occupiedSeatsId.includes(591), selected: Event.reservedSeatsId.includes(591) }">23</div>
            <div class="seat" @click="handleClickSeat(592)" :class="{ occupied: Event.occupiedSeatsId.includes(592), selected: Event.reservedSeatsId.includes(592) }">24</div>
            <div class="seat" @click="handleClickSeat(593)" :class="{ occupied: Event.occupiedSeatsId.includes(593), selected: Event.reservedSeatsId.includes(593) }">25</div>
            <div class="seat" @click="handleClickSeat(594)" :class="{ occupied: Event.occupiedSeatsId.includes(594), selected: Event.reservedSeatsId.includes(594) }">26</div>
            <div class="seat" @click="handleClickSeat(595)" :class="{ occupied: Event.occupiedSeatsId.includes(595), selected: Event.reservedSeatsId.includes(595) }">27</div>
            <div class="seat" @click="handleClickSeat(596)" :class="{ occupied: Event.occupiedSeatsId.includes(596), selected: Event.reservedSeatsId.includes(596) }">28</div>
            <div class="seat" @click="handleClickSeat(597)" :class="{ occupied: Event.occupiedSeatsId.includes(597), selected: Event.reservedSeatsId.includes(597) }">29</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(614)" :class="{ occupied: Event.occupiedSeatsId.includes(614), selected: Event.reservedSeatsId.includes(614) }">7</div>
            <div class="seat" @click="handleClickSeat(615)" :class="{ occupied: Event.occupiedSeatsId.includes(615), selected: Event.reservedSeatsId.includes(615) }">8</div>
            <div class="seat" @click="handleClickSeat(616)" :class="{ occupied: Event.occupiedSeatsId.includes(616), selected: Event.reservedSeatsId.includes(616) }">9</div>
            <div class="seat" @click="handleClickSeat(617)" :class="{ occupied: Event.occupiedSeatsId.includes(617), selected: Event.reservedSeatsId.includes(617) }">10</div>
            <div class="seat" @click="handleClickSeat(618)" :class="{ occupied: Event.occupiedSeatsId.includes(618), selected: Event.reservedSeatsId.includes(618) }">11</div>
            <div class="seat" @click="handleClickSeat(619)" :class="{ occupied: Event.occupiedSeatsId.includes(619), selected: Event.reservedSeatsId.includes(619) }">12</div>
            <div class="seat" @click="handleClickSeat(620)" :class="{ occupied: Event.occupiedSeatsId.includes(620), selected: Event.reservedSeatsId.includes(620) }">13</div>
            <div class="seat" @click="handleClickSeat(621)" :class="{ occupied: Event.occupiedSeatsId.includes(621), selected: Event.reservedSeatsId.includes(621) }">14</div>
            <div class="seat" @click="handleClickSeat(622)" :class="{ occupied: Event.occupiedSeatsId.includes(622), selected: Event.reservedSeatsId.includes(622) }">15</div>
            <div class="seat" @click="handleClickSeat(623)" :class="{ occupied: Event.occupiedSeatsId.includes(623), selected: Event.reservedSeatsId.includes(623) }">16</div>
            <div class="seat" @click="handleClickSeat(624)" :class="{ occupied: Event.occupiedSeatsId.includes(624), selected: Event.reservedSeatsId.includes(624) }">17</div>
            <div class="seat" @click="handleClickSeat(625)" :class="{ occupied: Event.occupiedSeatsId.includes(625), selected: Event.reservedSeatsId.includes(625) }">18</div>
            <div class="seat" @click="handleClickSeat(626)" :class="{ occupied: Event.occupiedSeatsId.includes(626), selected: Event.reservedSeatsId.includes(626) }">19</div>
            <div class="seat" @click="handleClickSeat(627)" :class="{ occupied: Event.occupiedSeatsId.includes(627), selected: Event.reservedSeatsId.includes(627) }">20</div>
            <div class="seat" @click="handleClickSeat(628)" :class="{ occupied: Event.occupiedSeatsId.includes(628), selected: Event.reservedSeatsId.includes(628) }">21</div>
            <div class="seat" @click="handleClickSeat(629)" :class="{ occupied: Event.occupiedSeatsId.includes(629), selected: Event.reservedSeatsId.includes(629) }">22</div>
            <div class="seat" @click="handleClickSeat(630)" :class="{ occupied: Event.occupiedSeatsId.includes(630), selected: Event.reservedSeatsId.includes(630) }">23</div>
            <div class="seat" @click="handleClickSeat(631)" :class="{ occupied: Event.occupiedSeatsId.includes(631), selected: Event.reservedSeatsId.includes(631) }">24</div>
            <div class="seat" @click="handleClickSeat(632)" :class="{ occupied: Event.occupiedSeatsId.includes(632), selected: Event.reservedSeatsId.includes(632) }">25</div>
            <div class="seat" @click="handleClickSeat(633)" :class="{ occupied: Event.occupiedSeatsId.includes(633), selected: Event.reservedSeatsId.includes(633) }">26</div>
            <div class="seat" @click="handleClickSeat(634)" :class="{ occupied: Event.occupiedSeatsId.includes(634), selected: Event.reservedSeatsId.includes(634) }">27</div>
            <div class="seat" @click="handleClickSeat(635)" :class="{ occupied: Event.occupiedSeatsId.includes(635), selected: Event.reservedSeatsId.includes(635) }">28</div>
            <div class="seat" @click="handleClickSeat(636)" :class="{ occupied: Event.occupiedSeatsId.includes(636), selected: Event.reservedSeatsId.includes(636) }">29</div>
          </div>
        </div>
        <!-- Right column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(267)" :class="{ occupied: Event.occupiedSeatsId.includes(267), selected: Event.reservedSeatsId.includes(267) }">18</div>
            <div class="seat" @click="handleClickSeat(268)" :class="{ occupied: Event.occupiedSeatsId.includes(268), selected: Event.reservedSeatsId.includes(268) }">19</div>
            <div class="seat" @click="handleClickSeat(269)" :class="{ occupied: Event.occupiedSeatsId.includes(269), selected: Event.reservedSeatsId.includes(269) }">20</div>
            <div class="seat" @click="handleClickSeat(270)" :class="{ occupied: Event.occupiedSeatsId.includes(270), selected: Event.reservedSeatsId.includes(270) }">21</div>
            <div class="seat" @click="handleClickSeat(271)" :class="{ occupied: Event.occupiedSeatsId.includes(271), selected: Event.reservedSeatsId.includes(271) }">22</div>
            <div class="seat" @click="handleClickSeat(272)" :class="{ occupied: Event.occupiedSeatsId.includes(272), selected: Event.reservedSeatsId.includes(272) }">23</div>
            <div class="seat" @click="handleClickSeat(273)" :class="{ occupied: Event.occupiedSeatsId.includes(273), selected: Event.reservedSeatsId.includes(273) }">24</div>
            <div class="seat" @click="handleClickSeat(274)" :class="{ occupied: Event.occupiedSeatsId.includes(274), selected: Event.reservedSeatsId.includes(274) }">25</div>
            <div class="seat" @click="handleClickSeat(275)" :class="{ occupied: Event.occupiedSeatsId.includes(275), selected: Event.reservedSeatsId.includes(275) }">26</div>
            <div class="seat" @click="handleClickSeat(276)" :class="{ occupied: Event.occupiedSeatsId.includes(276), selected: Event.reservedSeatsId.includes(276) }">27</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(302)" :class="{ occupied: Event.occupiedSeatsId.includes(302), selected: Event.reservedSeatsId.includes(302) }">26</div>
            <div class="seat" @click="handleClickSeat(303)" :class="{ occupied: Event.occupiedSeatsId.includes(303), selected: Event.reservedSeatsId.includes(303) }">27</div>
            <div class="seat" @click="handleClickSeat(304)" :class="{ occupied: Event.occupiedSeatsId.includes(304), selected: Event.reservedSeatsId.includes(304) }">28</div>
            <div class="seat" @click="handleClickSeat(305)" :class="{ occupied: Event.occupiedSeatsId.includes(305), selected: Event.reservedSeatsId.includes(305) }">29</div>
            <div class="seat" @click="handleClickSeat(306)" :class="{ occupied: Event.occupiedSeatsId.includes(306), selected: Event.reservedSeatsId.includes(306) }">30</div>
            <div class="seat" @click="handleClickSeat(307)" :class="{ occupied: Event.occupiedSeatsId.includes(307), selected: Event.reservedSeatsId.includes(307) }">31</div>
            <div class="seat" @click="handleClickSeat(308)" :class="{ occupied: Event.occupiedSeatsId.includes(308), selected: Event.reservedSeatsId.includes(308) }">32</div>
            <div class="seat" @click="handleClickSeat(309)" :class="{ occupied: Event.occupiedSeatsId.includes(309), selected: Event.reservedSeatsId.includes(309) }">33</div>
            <div class="seat" @click="handleClickSeat(310)" :class="{ occupied: Event.occupiedSeatsId.includes(310), selected: Event.reservedSeatsId.includes(310) }">34</div>
            <div class="seat" @click="handleClickSeat(311)" :class="{ occupied: Event.occupiedSeatsId.includes(311), selected: Event.reservedSeatsId.includes(311) }">35</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(337)" :class="{ occupied: Event.occupiedSeatsId.includes(337), selected: Event.reservedSeatsId.includes(337) }">26</div>
            <div class="seat" @click="handleClickSeat(338)" :class="{ occupied: Event.occupiedSeatsId.includes(338), selected: Event.reservedSeatsId.includes(338) }">27</div>
            <div class="seat" @click="handleClickSeat(339)" :class="{ occupied: Event.occupiedSeatsId.includes(339), selected: Event.reservedSeatsId.includes(339) }">28</div>
            <div class="seat" @click="handleClickSeat(340)" :class="{ occupied: Event.occupiedSeatsId.includes(340), selected: Event.reservedSeatsId.includes(340) }">29</div>
            <div class="seat" @click="handleClickSeat(341)" :class="{ occupied: Event.occupiedSeatsId.includes(341), selected: Event.reservedSeatsId.includes(341) }">30</div>
            <div class="seat" @click="handleClickSeat(342)" :class="{ occupied: Event.occupiedSeatsId.includes(342), selected: Event.reservedSeatsId.includes(342) }">31</div>
            <div class="seat" @click="handleClickSeat(343)" :class="{ occupied: Event.occupiedSeatsId.includes(343), selected: Event.reservedSeatsId.includes(343) }">32</div>
            <div class="seat" @click="handleClickSeat(344)" :class="{ occupied: Event.occupiedSeatsId.includes(344), selected: Event.reservedSeatsId.includes(344) }">33</div>
            <div class="seat" @click="handleClickSeat(345)" :class="{ occupied: Event.occupiedSeatsId.includes(345), selected: Event.reservedSeatsId.includes(345) }">34</div>
            <div class="seat" @click="handleClickSeat(346)" :class="{ occupied: Event.occupiedSeatsId.includes(346), selected: Event.reservedSeatsId.includes(346) }">35</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(373)" :class="{ occupied: Event.occupiedSeatsId.includes(373), selected: Event.reservedSeatsId.includes(373) }">27</div>
            <div class="seat" @click="handleClickSeat(374)" :class="{ occupied: Event.occupiedSeatsId.includes(374), selected: Event.reservedSeatsId.includes(374) }">28</div>
            <div class="seat" @click="handleClickSeat(375)" :class="{ occupied: Event.occupiedSeatsId.includes(375), selected: Event.reservedSeatsId.includes(375) }">29</div>
            <div class="seat" @click="handleClickSeat(376)" :class="{ occupied: Event.occupiedSeatsId.includes(376), selected: Event.reservedSeatsId.includes(376) }">30</div>
            <div class="seat" @click="handleClickSeat(377)" :class="{ occupied: Event.occupiedSeatsId.includes(377), selected: Event.reservedSeatsId.includes(377) }">31</div>
            <div class="seat" @click="handleClickSeat(378)" :class="{ occupied: Event.occupiedSeatsId.includes(378), selected: Event.reservedSeatsId.includes(378) }">32</div>
            <div class="seat" @click="handleClickSeat(379)" :class="{ occupied: Event.occupiedSeatsId.includes(379), selected: Event.reservedSeatsId.includes(379) }">33</div>
            <div class="seat" @click="handleClickSeat(380)" :class="{ occupied: Event.occupiedSeatsId.includes(380), selected: Event.reservedSeatsId.includes(380) }">34</div>
            <div class="seat" @click="handleClickSeat(381)" :class="{ occupied: Event.occupiedSeatsId.includes(381), selected: Event.reservedSeatsId.includes(381) }">35</div>
            <div class="seat" @click="handleClickSeat(382)" :class="{ occupied: Event.occupiedSeatsId.includes(382), selected: Event.reservedSeatsId.includes(382) }">36</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(409)" :class="{ occupied: Event.occupiedSeatsId.includes(409), selected: Event.reservedSeatsId.includes(409) }">27</div>
            <div class="seat" @click="handleClickSeat(410)" :class="{ occupied: Event.occupiedSeatsId.includes(410), selected: Event.reservedSeatsId.includes(410) }">28</div>
            <div class="seat" @click="handleClickSeat(411)" :class="{ occupied: Event.occupiedSeatsId.includes(411), selected: Event.reservedSeatsId.includes(411) }">29</div>
            <div class="seat" @click="handleClickSeat(412)" :class="{ occupied: Event.occupiedSeatsId.includes(412), selected: Event.reservedSeatsId.includes(412) }">30</div>
            <div class="seat" @click="handleClickSeat(413)" :class="{ occupied: Event.occupiedSeatsId.includes(413), selected: Event.reservedSeatsId.includes(413) }">31</div>
            <div class="seat" @click="handleClickSeat(414)" :class="{ occupied: Event.occupiedSeatsId.includes(414), selected: Event.reservedSeatsId.includes(414) }">32</div>
            <div class="seat" @click="handleClickSeat(415)" :class="{ occupied: Event.occupiedSeatsId.includes(415), selected: Event.reservedSeatsId.includes(415) }">33</div>
            <div class="seat" @click="handleClickSeat(416)" :class="{ occupied: Event.occupiedSeatsId.includes(416), selected: Event.reservedSeatsId.includes(416) }">34</div>
            <div class="seat" @click="handleClickSeat(417)" :class="{ occupied: Event.occupiedSeatsId.includes(417), selected: Event.reservedSeatsId.includes(417) }">35</div>
            <div class="seat" @click="handleClickSeat(418)" :class="{ occupied: Event.occupiedSeatsId.includes(418), selected: Event.reservedSeatsId.includes(418) }">36</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(446)" :class="{ occupied: Event.occupiedSeatsId.includes(446), selected: Event.reservedSeatsId.includes(446) }">28</div>
            <div class="seat" @click="handleClickSeat(447)" :class="{ occupied: Event.occupiedSeatsId.includes(447), selected: Event.reservedSeatsId.includes(447) }">29</div>
            <div class="seat" @click="handleClickSeat(448)" :class="{ occupied: Event.occupiedSeatsId.includes(448), selected: Event.reservedSeatsId.includes(448) }">30</div>
            <div class="seat" @click="handleClickSeat(449)" :class="{ occupied: Event.occupiedSeatsId.includes(449), selected: Event.reservedSeatsId.includes(449) }">31</div>
            <div class="seat" @click="handleClickSeat(450)" :class="{ occupied: Event.occupiedSeatsId.includes(450), selected: Event.reservedSeatsId.includes(450) }">32</div>
            <div class="seat" @click="handleClickSeat(451)" :class="{ occupied: Event.occupiedSeatsId.includes(451), selected: Event.reservedSeatsId.includes(451) }">33</div>
            <div class="seat" @click="handleClickSeat(452)" :class="{ occupied: Event.occupiedSeatsId.includes(452), selected: Event.reservedSeatsId.includes(452) }">34</div>
            <div class="seat" @click="handleClickSeat(453)" :class="{ occupied: Event.occupiedSeatsId.includes(453), selected: Event.reservedSeatsId.includes(453) }">35</div>
            <div class="seat" @click="handleClickSeat(454)" :class="{ occupied: Event.occupiedSeatsId.includes(454), selected: Event.reservedSeatsId.includes(454) }">36</div>
            <div class="seat" @click="handleClickSeat(455)" :class="{ occupied: Event.occupiedSeatsId.includes(455), selected: Event.reservedSeatsId.includes(455) }">37</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(483)" :class="{ occupied: Event.occupiedSeatsId.includes(483), selected: Event.reservedSeatsId.includes(483) }">28</div>
            <div class="seat" @click="handleClickSeat(484)" :class="{ occupied: Event.occupiedSeatsId.includes(484), selected: Event.reservedSeatsId.includes(484) }">29</div>
            <div class="seat" @click="handleClickSeat(485)" :class="{ occupied: Event.occupiedSeatsId.includes(485), selected: Event.reservedSeatsId.includes(485) }">30</div>
            <div class="seat" @click="handleClickSeat(486)" :class="{ occupied: Event.occupiedSeatsId.includes(486), selected: Event.reservedSeatsId.includes(486) }">31</div>
            <div class="seat" @click="handleClickSeat(487)" :class="{ occupied: Event.occupiedSeatsId.includes(487), selected: Event.reservedSeatsId.includes(487) }">32</div>
            <div class="seat" @click="handleClickSeat(488)" :class="{ occupied: Event.occupiedSeatsId.includes(488), selected: Event.reservedSeatsId.includes(488) }">33</div>
            <div class="seat" @click="handleClickSeat(489)" :class="{ occupied: Event.occupiedSeatsId.includes(489), selected: Event.reservedSeatsId.includes(489) }">34</div>
            <div class="seat" @click="handleClickSeat(490)" :class="{ occupied: Event.occupiedSeatsId.includes(490), selected: Event.reservedSeatsId.includes(490) }">35</div>
            <div class="seat" @click="handleClickSeat(491)" :class="{ occupied: Event.occupiedSeatsId.includes(491), selected: Event.reservedSeatsId.includes(491) }">36</div>
            <div class="seat" @click="handleClickSeat(492)" :class="{ occupied: Event.occupiedSeatsId.includes(492), selected: Event.reservedSeatsId.includes(492) }">37</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(521)" :class="{ occupied: Event.occupiedSeatsId.includes(521), selected: Event.reservedSeatsId.includes(521) }">29</div>
            <div class="seat" @click="handleClickSeat(522)" :class="{ occupied: Event.occupiedSeatsId.includes(522), selected: Event.reservedSeatsId.includes(522) }">30</div>
            <div class="seat" @click="handleClickSeat(523)" :class="{ occupied: Event.occupiedSeatsId.includes(523), selected: Event.reservedSeatsId.includes(523) }">31</div>
            <div class="seat" @click="handleClickSeat(524)" :class="{ occupied: Event.occupiedSeatsId.includes(524), selected: Event.reservedSeatsId.includes(524) }">32</div>
            <div class="seat" @click="handleClickSeat(525)" :class="{ occupied: Event.occupiedSeatsId.includes(525), selected: Event.reservedSeatsId.includes(525) }">33</div>
            <div class="seat" @click="handleClickSeat(526)" :class="{ occupied: Event.occupiedSeatsId.includes(526), selected: Event.reservedSeatsId.includes(526) }">34</div>
            <div class="seat" @click="handleClickSeat(527)" :class="{ occupied: Event.occupiedSeatsId.includes(527), selected: Event.reservedSeatsId.includes(527) }">35</div>
            <div class="seat" @click="handleClickSeat(528)" :class="{ occupied: Event.occupiedSeatsId.includes(528), selected: Event.reservedSeatsId.includes(528) }">36</div>
            <div class="seat" @click="handleClickSeat(529)" :class="{ occupied: Event.occupiedSeatsId.includes(529), selected: Event.reservedSeatsId.includes(529) }">37</div>
            <div class="seat" @click="handleClickSeat(530)" :class="{ occupied: Event.occupiedSeatsId.includes(530), selected: Event.reservedSeatsId.includes(530) }">38</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(559)" :class="{ occupied: Event.occupiedSeatsId.includes(559), selected: Event.reservedSeatsId.includes(559) }">29</div>
            <div class="seat" @click="handleClickSeat(560)" :class="{ occupied: Event.occupiedSeatsId.includes(560), selected: Event.reservedSeatsId.includes(560) }">30</div>
            <div class="seat" @click="handleClickSeat(561)" :class="{ occupied: Event.occupiedSeatsId.includes(561), selected: Event.reservedSeatsId.includes(561) }">31</div>
            <div class="seat" @click="handleClickSeat(562)" :class="{ occupied: Event.occupiedSeatsId.includes(562), selected: Event.reservedSeatsId.includes(562) }">32</div>
            <div class="seat" @click="handleClickSeat(563)" :class="{ occupied: Event.occupiedSeatsId.includes(563), selected: Event.reservedSeatsId.includes(563) }">33</div>
            <div class="seat" @click="handleClickSeat(564)" :class="{ occupied: Event.occupiedSeatsId.includes(564), selected: Event.reservedSeatsId.includes(564) }">34</div>
            <div class="seat" @click="handleClickSeat(565)" :class="{ occupied: Event.occupiedSeatsId.includes(565), selected: Event.reservedSeatsId.includes(565) }">35</div>
            <div class="seat" @click="handleClickSeat(566)" :class="{ occupied: Event.occupiedSeatsId.includes(566), selected: Event.reservedSeatsId.includes(566) }">36</div>
            <div class="seat" @click="handleClickSeat(567)" :class="{ occupied: Event.occupiedSeatsId.includes(567), selected: Event.reservedSeatsId.includes(567) }">37</div>
            <div class="seat" @click="handleClickSeat(568)" :class="{ occupied: Event.occupiedSeatsId.includes(568), selected: Event.reservedSeatsId.includes(568) }">38</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(588)" :class="{ occupied: Event.occupiedSeatsId.includes(588), selected: Event.reservedSeatsId.includes(588) }">30</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ occupied: Event.occupiedSeatsId.includes(589), selected: Event.reservedSeatsId.includes(589) }">31</div>
            <div class="seat" @click="handleClickSeat(600)" :class="{ occupied: Event.occupiedSeatsId.includes(600), selected: Event.reservedSeatsId.includes(600) }">32</div>
            <div class="seat" @click="handleClickSeat(601)" :class="{ occupied: Event.occupiedSeatsId.includes(601), selected: Event.reservedSeatsId.includes(601) }">33</div>
            <div class="seat" @click="handleClickSeat(602)" :class="{ occupied: Event.occupiedSeatsId.includes(602), selected: Event.reservedSeatsId.includes(602) }">34</div>
            <div class="seat" @click="handleClickSeat(603)" :class="{ occupied: Event.occupiedSeatsId.includes(603), selected: Event.reservedSeatsId.includes(603) }">35</div>
            <div class="seat" @click="handleClickSeat(604)" :class="{ occupied: Event.occupiedSeatsId.includes(604), selected: Event.reservedSeatsId.includes(604) }">36</div>
            <div class="seat" @click="handleClickSeat(605)" :class="{ occupied: Event.occupiedSeatsId.includes(605), selected: Event.reservedSeatsId.includes(605) }">37</div>
            <div class="seat" @click="handleClickSeat(606)" :class="{ occupied: Event.occupiedSeatsId.includes(606), selected: Event.reservedSeatsId.includes(606) }">38</div>
            <div class="seat" @click="handleClickSeat(607)" :class="{ occupied: Event.occupiedSeatsId.includes(607), selected: Event.reservedSeatsId.includes(607) }">39</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(637)" :class="{ occupied: Event.occupiedSeatsId.includes(637), selected: Event.reservedSeatsId.includes(637) }">30</div>
            <div class="seat" @click="handleClickSeat(638)" :class="{ occupied: Event.occupiedSeatsId.includes(638), selected: Event.reservedSeatsId.includes(638) }">31</div>
            <div class="seat" @click="handleClickSeat(639)" :class="{ occupied: Event.occupiedSeatsId.includes(639), selected: Event.reservedSeatsId.includes(639) }">32</div>
            <div class="seat" @click="handleClickSeat(640)" :class="{ occupied: Event.occupiedSeatsId.includes(640), selected: Event.reservedSeatsId.includes(640) }">33</div>
            <div class="seat" @click="handleClickSeat(641)" :class="{ occupied: Event.occupiedSeatsId.includes(641), selected: Event.reservedSeatsId.includes(641) }">34</div>
            <div class="seat" @click="handleClickSeat(642)" :class="{ occupied: Event.occupiedSeatsId.includes(642), selected: Event.reservedSeatsId.includes(642) }">35</div>
            <div class="seat" @click="handleClickSeat(643)" :class="{ occupied: Event.occupiedSeatsId.includes(643), selected: Event.reservedSeatsId.includes(643) }">36</div>
            <div class="seat" @click="handleClickSeat(644)" :class="{ occupied: Event.occupiedSeatsId.includes(644), selected: Event.reservedSeatsId.includes(644) }">37</div>
            <div class="seat" @click="handleClickSeat(645)" :class="{ occupied: Event.occupiedSeatsId.includes(645), selected: Event.reservedSeatsId.includes(645) }">38</div>
            <div class="seat" @click="handleClickSeat(646)" :class="{ occupied: Event.occupiedSeatsId.includes(646), selected: Event.reservedSeatsId.includes(646) }">39</div>
          </div>
        </div>
      </div>
    </div>
    <div class="smallLayout">
      <p v-if="selectedPart === 0">Wybierz część sektora do edycji</p>
      <div class="scene" v-if="selectedPart === 0">Scena</div>
      <div class="parts" v-if="selectedPart === 0">
        <div class="leftColumn" @click="selectedPart = 1"></div>
        <div class="middleColumn" @click="selectedPart = 2"></div>
        <div class="rightColumn" @click="selectedPart = 3"></div>
      </div>
      <!-- Left Column -->
      <div v-else-if="selectedPart === 1">
        <h5 class="returnButton" @click="selectedPart = 0"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót</h5>
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
            <div class="seat" @click="handleClickSeat(277)" :class="{ occupied: Event.occupiedSeatsId.includes(277), selected: Event.reservedSeatsId.includes(277) }">1</div>
            <div class="seat" @click="handleClickSeat(278)" :class="{ occupied: Event.occupiedSeatsId.includes(278), selected: Event.reservedSeatsId.includes(278) }">2</div>
            <div class="seat" @click="handleClickSeat(279)" :class="{ occupied: Event.occupiedSeatsId.includes(279), selected: Event.reservedSeatsId.includes(279) }">3</div>
            <div class="seat" @click="handleClickSeat(280)" :class="{ occupied: Event.occupiedSeatsId.includes(280), selected: Event.reservedSeatsId.includes(280) }">4</div>
            <div class="seat" @click="handleClickSeat(281)" :class="{ occupied: Event.occupiedSeatsId.includes(281), selected: Event.reservedSeatsId.includes(281) }">5</div>
            <div class="seat" @click="handleClickSeat(282)" :class="{ occupied: Event.occupiedSeatsId.includes(282), selected: Event.reservedSeatsId.includes(282) }">6</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(312)" :class="{ occupied: Event.occupiedSeatsId.includes(312), selected: Event.reservedSeatsId.includes(312) }">1</div>
            <div class="seat" @click="handleClickSeat(313)" :class="{ occupied: Event.occupiedSeatsId.includes(313), selected: Event.reservedSeatsId.includes(313) }">2</div>
            <div class="seat" @click="handleClickSeat(314)" :class="{ occupied: Event.occupiedSeatsId.includes(314), selected: Event.reservedSeatsId.includes(314) }">3</div>
            <div class="seat" @click="handleClickSeat(315)" :class="{ occupied: Event.occupiedSeatsId.includes(315), selected: Event.reservedSeatsId.includes(315) }">4</div>
            <div class="seat" @click="handleClickSeat(316)" :class="{ occupied: Event.occupiedSeatsId.includes(316), selected: Event.reservedSeatsId.includes(316) }">5</div>
            <div class="seat" @click="handleClickSeat(317)" :class="{ occupied: Event.occupiedSeatsId.includes(317), selected: Event.reservedSeatsId.includes(317) }">6</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(347)" :class="{ occupied: Event.occupiedSeatsId.includes(347), selected: Event.reservedSeatsId.includes(347) }">1</div>
            <div class="seat" @click="handleClickSeat(348)" :class="{ occupied: Event.occupiedSeatsId.includes(348), selected: Event.reservedSeatsId.includes(348) }">2</div>
            <div class="seat" @click="handleClickSeat(349)" :class="{ occupied: Event.occupiedSeatsId.includes(349), selected: Event.reservedSeatsId.includes(349) }">3</div>
            <div class="seat" @click="handleClickSeat(350)" :class="{ occupied: Event.occupiedSeatsId.includes(350), selected: Event.reservedSeatsId.includes(350) }">4</div>
            <div class="seat" @click="handleClickSeat(351)" :class="{ occupied: Event.occupiedSeatsId.includes(351), selected: Event.reservedSeatsId.includes(351) }">5</div>
            <div class="seat" @click="handleClickSeat(352)" :class="{ occupied: Event.occupiedSeatsId.includes(352), selected: Event.reservedSeatsId.includes(352) }">6</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(383)" :class="{ occupied: Event.occupiedSeatsId.includes(383), selected: Event.reservedSeatsId.includes(383) }">1</div>
            <div class="seat" @click="handleClickSeat(384)" :class="{ occupied: Event.occupiedSeatsId.includes(384), selected: Event.reservedSeatsId.includes(384) }">2</div>
            <div class="seat" @click="handleClickSeat(385)" :class="{ occupied: Event.occupiedSeatsId.includes(385), selected: Event.reservedSeatsId.includes(385) }">3</div>
            <div class="seat" @click="handleClickSeat(386)" :class="{ occupied: Event.occupiedSeatsId.includes(386), selected: Event.reservedSeatsId.includes(386) }">4</div>
            <div class="seat" @click="handleClickSeat(387)" :class="{ occupied: Event.occupiedSeatsId.includes(387), selected: Event.reservedSeatsId.includes(387) }">5</div>
            <div class="seat" @click="handleClickSeat(388)" :class="{ occupied: Event.occupiedSeatsId.includes(388), selected: Event.reservedSeatsId.includes(388) }">6</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(419)" :class="{ occupied: Event.occupiedSeatsId.includes(419), selected: Event.reservedSeatsId.includes(419) }">1</div>
            <div class="seat" @click="handleClickSeat(420)" :class="{ occupied: Event.occupiedSeatsId.includes(420), selected: Event.reservedSeatsId.includes(420) }">2</div>
            <div class="seat" @click="handleClickSeat(421)" :class="{ occupied: Event.occupiedSeatsId.includes(421), selected: Event.reservedSeatsId.includes(421) }">3</div>
            <div class="seat" @click="handleClickSeat(422)" :class="{ occupied: Event.occupiedSeatsId.includes(422), selected: Event.reservedSeatsId.includes(422) }">4</div>
            <div class="seat" @click="handleClickSeat(423)" :class="{ occupied: Event.occupiedSeatsId.includes(423), selected: Event.reservedSeatsId.includes(423) }">5</div>
            <div class="seat" @click="handleClickSeat(424)" :class="{ occupied: Event.occupiedSeatsId.includes(424), selected: Event.reservedSeatsId.includes(424) }">6</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(456)" :class="{ occupied: Event.occupiedSeatsId.includes(456), selected: Event.reservedSeatsId.includes(456) }">1</div>
            <div class="seat" @click="handleClickSeat(457)" :class="{ occupied: Event.occupiedSeatsId.includes(457), selected: Event.reservedSeatsId.includes(457) }">2</div>
            <div class="seat" @click="handleClickSeat(458)" :class="{ occupied: Event.occupiedSeatsId.includes(458), selected: Event.reservedSeatsId.includes(458) }">3</div>
            <div class="seat" @click="handleClickSeat(459)" :class="{ occupied: Event.occupiedSeatsId.includes(459), selected: Event.reservedSeatsId.includes(459) }">4</div>
            <div class="seat" @click="handleClickSeat(460)" :class="{ occupied: Event.occupiedSeatsId.includes(460), selected: Event.reservedSeatsId.includes(460) }">5</div>
            <div class="seat" @click="handleClickSeat(461)" :class="{ occupied: Event.occupiedSeatsId.includes(461), selected: Event.reservedSeatsId.includes(461) }">6</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(493)" :class="{ occupied: Event.occupiedSeatsId.includes(493), selected: Event.reservedSeatsId.includes(493) }">1</div>
            <div class="seat" @click="handleClickSeat(494)" :class="{ occupied: Event.occupiedSeatsId.includes(494), selected: Event.reservedSeatsId.includes(494) }">2</div>
            <div class="seat" @click="handleClickSeat(495)" :class="{ occupied: Event.occupiedSeatsId.includes(495), selected: Event.reservedSeatsId.includes(495) }">3</div>
            <div class="seat" @click="handleClickSeat(496)" :class="{ occupied: Event.occupiedSeatsId.includes(496), selected: Event.reservedSeatsId.includes(496) }">4</div>
            <div class="seat" @click="handleClickSeat(497)" :class="{ occupied: Event.occupiedSeatsId.includes(497), selected: Event.reservedSeatsId.includes(497) }">5</div>
            <div class="seat" @click="handleClickSeat(498)" :class="{ occupied: Event.occupiedSeatsId.includes(498), selected: Event.reservedSeatsId.includes(498) }">6</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(531)" :class="{ occupied: Event.occupiedSeatsId.includes(531), selected: Event.reservedSeatsId.includes(531) }">1</div>
            <div class="seat" @click="handleClickSeat(532)" :class="{ occupied: Event.occupiedSeatsId.includes(532), selected: Event.reservedSeatsId.includes(532) }">2</div>
            <div class="seat" @click="handleClickSeat(533)" :class="{ occupied: Event.occupiedSeatsId.includes(533), selected: Event.reservedSeatsId.includes(533) }">3</div>
            <div class="seat" @click="handleClickSeat(534)" :class="{ occupied: Event.occupiedSeatsId.includes(534), selected: Event.reservedSeatsId.includes(534) }">4</div>
            <div class="seat" @click="handleClickSeat(535)" :class="{ occupied: Event.occupiedSeatsId.includes(535), selected: Event.reservedSeatsId.includes(535) }">5</div>
            <div class="seat" @click="handleClickSeat(536)" :class="{ occupied: Event.occupiedSeatsId.includes(536), selected: Event.reservedSeatsId.includes(536) }">6</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(569)" :class="{ occupied: Event.occupiedSeatsId.includes(569), selected: Event.reservedSeatsId.includes(569) }">1</div>
            <div class="seat" @click="handleClickSeat(570)" :class="{ occupied: Event.occupiedSeatsId.includes(570), selected: Event.reservedSeatsId.includes(570) }">2</div>
            <div class="seat" @click="handleClickSeat(571)" :class="{ occupied: Event.occupiedSeatsId.includes(571), selected: Event.reservedSeatsId.includes(571) }">3</div>
            <div class="seat" @click="handleClickSeat(572)" :class="{ occupied: Event.occupiedSeatsId.includes(572), selected: Event.reservedSeatsId.includes(572) }">4</div>
            <div class="seat" @click="handleClickSeat(573)" :class="{ occupied: Event.occupiedSeatsId.includes(573), selected: Event.reservedSeatsId.includes(573) }">5</div>
            <div class="seat" @click="handleClickSeat(574)" :class="{ occupied: Event.occupiedSeatsId.includes(574), selected: Event.reservedSeatsId.includes(574) }">6</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(608)" :class="{ occupied: Event.occupiedSeatsId.includes(608), selected: Event.reservedSeatsId.includes(608) }">1</div>
            <div class="seat" @click="handleClickSeat(609)" :class="{ occupied: Event.occupiedSeatsId.includes(609), selected: Event.reservedSeatsId.includes(609) }">2</div>
            <div class="seat" @click="handleClickSeat(610)" :class="{ occupied: Event.occupiedSeatsId.includes(610), selected: Event.reservedSeatsId.includes(610) }">3</div>
            <div class="seat" @click="handleClickSeat(611)" :class="{ occupied: Event.occupiedSeatsId.includes(611), selected: Event.reservedSeatsId.includes(611) }">4</div>
            <div class="seat" @click="handleClickSeat(612)" :class="{ occupied: Event.occupiedSeatsId.includes(612), selected: Event.reservedSeatsId.includes(612) }">5</div>
            <div class="seat" @click="handleClickSeat(613)" :class="{ occupied: Event.occupiedSeatsId.includes(613), selected: Event.reservedSeatsId.includes(613) }">6</div>
          </div>
        </div>
      </div>
      <!-- Middle Column -->
      <div v-else-if="selectedPart === 2">
        <h5 class="returnButton" @click="selectedPart = 0"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót</h5>
        <div class="column middle">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(250)" :class="{ occupied: Event.occupiedSeatsId.includes(250), selected: Event.reservedSeatsId.includes(250) }">1</div>
            <div class="seat" @click="handleClickSeat(251)" :class="{ occupied: Event.occupiedSeatsId.includes(251), selected: Event.reservedSeatsId.includes(251) }">2</div>
            <div class="seat" @click="handleClickSeat(252)" :class="{ occupied: Event.occupiedSeatsId.includes(252), selected: Event.reservedSeatsId.includes(252) }">3</div>
            <div class="seat" @click="handleClickSeat(253)" :class="{ occupied: Event.occupiedSeatsId.includes(253), selected: Event.reservedSeatsId.includes(253) }">4</div>
            <div class="seat" @click="handleClickSeat(254)" :class="{ occupied: Event.occupiedSeatsId.includes(254), selected: Event.reservedSeatsId.includes(254) }">5</div>
            <div class="seat" @click="handleClickSeat(255)" :class="{ occupied: Event.occupiedSeatsId.includes(255), selected: Event.reservedSeatsId.includes(255) }">6</div>
            <div class="seat" @click="handleClickSeat(256)" :class="{ occupied: Event.occupiedSeatsId.includes(256), selected: Event.reservedSeatsId.includes(256) }">7</div>
            <div class="seat" @click="handleClickSeat(257)" :class="{ occupied: Event.occupiedSeatsId.includes(257), selected: Event.reservedSeatsId.includes(257) }">8</div>
            <div class="seat" @click="handleClickSeat(258)" :class="{ occupied: Event.occupiedSeatsId.includes(258), selected: Event.reservedSeatsId.includes(258) }">9</div>
            <div class="seat" @click="handleClickSeat(259)" :class="{ occupied: Event.occupiedSeatsId.includes(259), selected: Event.reservedSeatsId.includes(259) }">10</div>
            <div class="seat" @click="handleClickSeat(260)" :class="{ occupied: Event.occupiedSeatsId.includes(260), selected: Event.reservedSeatsId.includes(260) }">11</div>
            <div class="seat" @click="handleClickSeat(261)" :class="{ occupied: Event.occupiedSeatsId.includes(261), selected: Event.reservedSeatsId.includes(261) }">12</div>
            <div class="seat" @click="handleClickSeat(262)" :class="{ occupied: Event.occupiedSeatsId.includes(262), selected: Event.reservedSeatsId.includes(262) }">13</div>
            <div class="seat" @click="handleClickSeat(263)" :class="{ occupied: Event.occupiedSeatsId.includes(263), selected: Event.reservedSeatsId.includes(263) }">14</div>
            <div class="seat" @click="handleClickSeat(264)" :class="{ occupied: Event.occupiedSeatsId.includes(264), selected: Event.reservedSeatsId.includes(264) }">15</div>
            <div class="seat" @click="handleClickSeat(265)" :class="{ occupied: Event.occupiedSeatsId.includes(265), selected: Event.reservedSeatsId.includes(265) }">16</div>
            <div class="seat" @click="handleClickSeat(266)" :class="{ occupied: Event.occupiedSeatsId.includes(266), selected: Event.reservedSeatsId.includes(266) }">17</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(283)" :class="{ occupied: Event.occupiedSeatsId.includes(283), selected: Event.reservedSeatsId.includes(283) }">7</div>
            <div class="seat" @click="handleClickSeat(284)" :class="{ occupied: Event.occupiedSeatsId.includes(284), selected: Event.reservedSeatsId.includes(284) }">8</div>
            <div class="seat" @click="handleClickSeat(285)" :class="{ occupied: Event.occupiedSeatsId.includes(285), selected: Event.reservedSeatsId.includes(285) }">9</div>
            <div class="seat" @click="handleClickSeat(286)" :class="{ occupied: Event.occupiedSeatsId.includes(286), selected: Event.reservedSeatsId.includes(286) }">10</div>
            <div class="seat" @click="handleClickSeat(287)" :class="{ occupied: Event.occupiedSeatsId.includes(287), selected: Event.reservedSeatsId.includes(287) }">11</div>
            <div class="seat" @click="handleClickSeat(288)" :class="{ occupied: Event.occupiedSeatsId.includes(288), selected: Event.reservedSeatsId.includes(288) }">12</div>
            <div class="seat" @click="handleClickSeat(289)" :class="{ occupied: Event.occupiedSeatsId.includes(289), selected: Event.reservedSeatsId.includes(289) }">13</div>
            <div class="seat" @click="handleClickSeat(290)" :class="{ occupied: Event.occupiedSeatsId.includes(290), selected: Event.reservedSeatsId.includes(290) }">14</div>
            <div class="seat" @click="handleClickSeat(291)" :class="{ occupied: Event.occupiedSeatsId.includes(291), selected: Event.reservedSeatsId.includes(291) }">15</div>
            <div class="seat" @click="handleClickSeat(292)" :class="{ occupied: Event.occupiedSeatsId.includes(292), selected: Event.reservedSeatsId.includes(292) }">16</div>
            <div class="seat" @click="handleClickSeat(293)" :class="{ occupied: Event.occupiedSeatsId.includes(293), selected: Event.reservedSeatsId.includes(293) }">17</div>
            <div class="seat" @click="handleClickSeat(294)" :class="{ occupied: Event.occupiedSeatsId.includes(294), selected: Event.reservedSeatsId.includes(294) }">18</div>
            <div class="seat" @click="handleClickSeat(295)" :class="{ occupied: Event.occupiedSeatsId.includes(295), selected: Event.reservedSeatsId.includes(295) }">19</div>
            <div class="seat" @click="handleClickSeat(296)" :class="{ occupied: Event.occupiedSeatsId.includes(296), selected: Event.reservedSeatsId.includes(296) }">20</div>
            <div class="seat" @click="handleClickSeat(297)" :class="{ occupied: Event.occupiedSeatsId.includes(297), selected: Event.reservedSeatsId.includes(297) }">21</div>
            <div class="seat" @click="handleClickSeat(298)" :class="{ occupied: Event.occupiedSeatsId.includes(298), selected: Event.reservedSeatsId.includes(298) }">22</div>
            <div class="seat" @click="handleClickSeat(299)" :class="{ occupied: Event.occupiedSeatsId.includes(299), selected: Event.reservedSeatsId.includes(299) }">23</div>
            <div class="seat" @click="handleClickSeat(300)" :class="{ occupied: Event.occupiedSeatsId.includes(300), selected: Event.reservedSeatsId.includes(300) }">24</div>
            <div class="seat" @click="handleClickSeat(301)" :class="{ occupied: Event.occupiedSeatsId.includes(301), selected: Event.reservedSeatsId.includes(301) }">25</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(318)" :class="{ occupied: Event.occupiedSeatsId.includes(318), selected: Event.reservedSeatsId.includes(318) }">7</div>
            <div class="seat" @click="handleClickSeat(319)" :class="{ occupied: Event.occupiedSeatsId.includes(319), selected: Event.reservedSeatsId.includes(319) }">8</div>
            <div class="seat" @click="handleClickSeat(320)" :class="{ occupied: Event.occupiedSeatsId.includes(320), selected: Event.reservedSeatsId.includes(320) }">9</div>
            <div class="seat" @click="handleClickSeat(321)" :class="{ occupied: Event.occupiedSeatsId.includes(321), selected: Event.reservedSeatsId.includes(321) }">10</div>
            <div class="seat" @click="handleClickSeat(322)" :class="{ occupied: Event.occupiedSeatsId.includes(322), selected: Event.reservedSeatsId.includes(322) }">11</div>
            <div class="seat" @click="handleClickSeat(323)" :class="{ occupied: Event.occupiedSeatsId.includes(323), selected: Event.reservedSeatsId.includes(323) }">12</div>
            <div class="seat" @click="handleClickSeat(324)" :class="{ occupied: Event.occupiedSeatsId.includes(324), selected: Event.reservedSeatsId.includes(324) }">13</div>
            <div class="seat" @click="handleClickSeat(325)" :class="{ occupied: Event.occupiedSeatsId.includes(325), selected: Event.reservedSeatsId.includes(325) }">14</div>
            <div class="seat" @click="handleClickSeat(326)" :class="{ occupied: Event.occupiedSeatsId.includes(326), selected: Event.reservedSeatsId.includes(326) }">15</div>
            <div class="seat" @click="handleClickSeat(327)" :class="{ occupied: Event.occupiedSeatsId.includes(327), selected: Event.reservedSeatsId.includes(327) }">16</div>
            <div class="seat" @click="handleClickSeat(328)" :class="{ occupied: Event.occupiedSeatsId.includes(328), selected: Event.reservedSeatsId.includes(328) }">17</div>
            <div class="seat" @click="handleClickSeat(329)" :class="{ occupied: Event.occupiedSeatsId.includes(329), selected: Event.reservedSeatsId.includes(329) }">18</div>
            <div class="seat" @click="handleClickSeat(330)" :class="{ occupied: Event.occupiedSeatsId.includes(330), selected: Event.reservedSeatsId.includes(330) }">19</div>
            <div class="seat" @click="handleClickSeat(331)" :class="{ occupied: Event.occupiedSeatsId.includes(331), selected: Event.reservedSeatsId.includes(331) }">20</div>
            <div class="seat" @click="handleClickSeat(332)" :class="{ occupied: Event.occupiedSeatsId.includes(332), selected: Event.reservedSeatsId.includes(332) }">21</div>
            <div class="seat" @click="handleClickSeat(333)" :class="{ occupied: Event.occupiedSeatsId.includes(333), selected: Event.reservedSeatsId.includes(333) }">22</div>
            <div class="seat" @click="handleClickSeat(334)" :class="{ occupied: Event.occupiedSeatsId.includes(334), selected: Event.reservedSeatsId.includes(334) }">23</div>
            <div class="seat" @click="handleClickSeat(335)" :class="{ occupied: Event.occupiedSeatsId.includes(335), selected: Event.reservedSeatsId.includes(335) }">24</div>
            <div class="seat" @click="handleClickSeat(336)" :class="{ occupied: Event.occupiedSeatsId.includes(336), selected: Event.reservedSeatsId.includes(336) }">25</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(353)" :class="{ occupied: Event.occupiedSeatsId.includes(353), selected: Event.reservedSeatsId.includes(353) }">7</div>
            <div class="seat" @click="handleClickSeat(354)" :class="{ occupied: Event.occupiedSeatsId.includes(354), selected: Event.reservedSeatsId.includes(354) }">8</div>
            <div class="seat" @click="handleClickSeat(355)" :class="{ occupied: Event.occupiedSeatsId.includes(355), selected: Event.reservedSeatsId.includes(355) }">9</div>
            <div class="seat" @click="handleClickSeat(356)" :class="{ occupied: Event.occupiedSeatsId.includes(356), selected: Event.reservedSeatsId.includes(356) }">10</div>
            <div class="seat" @click="handleClickSeat(357)" :class="{ occupied: Event.occupiedSeatsId.includes(357), selected: Event.reservedSeatsId.includes(357) }">11</div>
            <div class="seat" @click="handleClickSeat(358)" :class="{ occupied: Event.occupiedSeatsId.includes(358), selected: Event.reservedSeatsId.includes(358) }">12</div>
            <div class="seat" @click="handleClickSeat(359)" :class="{ occupied: Event.occupiedSeatsId.includes(359), selected: Event.reservedSeatsId.includes(359) }">13</div>
            <div class="seat" @click="handleClickSeat(360)" :class="{ occupied: Event.occupiedSeatsId.includes(360), selected: Event.reservedSeatsId.includes(360) }">14</div>
            <div class="seat" @click="handleClickSeat(361)" :class="{ occupied: Event.occupiedSeatsId.includes(361), selected: Event.reservedSeatsId.includes(361) }">15</div>
            <div class="seat" @click="handleClickSeat(362)" :class="{ occupied: Event.occupiedSeatsId.includes(362), selected: Event.reservedSeatsId.includes(362) }">16</div>
            <div class="seat" @click="handleClickSeat(363)" :class="{ occupied: Event.occupiedSeatsId.includes(363), selected: Event.reservedSeatsId.includes(363) }">17</div>
            <div class="seat" @click="handleClickSeat(364)" :class="{ occupied: Event.occupiedSeatsId.includes(364), selected: Event.reservedSeatsId.includes(364) }">18</div>
            <div class="seat" @click="handleClickSeat(365)" :class="{ occupied: Event.occupiedSeatsId.includes(365), selected: Event.reservedSeatsId.includes(365) }">19</div>
            <div class="seat" @click="handleClickSeat(366)" :class="{ occupied: Event.occupiedSeatsId.includes(366), selected: Event.reservedSeatsId.includes(366) }">20</div>
            <div class="seat" @click="handleClickSeat(367)" :class="{ occupied: Event.occupiedSeatsId.includes(367), selected: Event.reservedSeatsId.includes(367) }">21</div>
            <div class="seat" @click="handleClickSeat(368)" :class="{ occupied: Event.occupiedSeatsId.includes(368), selected: Event.reservedSeatsId.includes(368) }">22</div>
            <div class="seat" @click="handleClickSeat(369)" :class="{ occupied: Event.occupiedSeatsId.includes(369), selected: Event.reservedSeatsId.includes(369) }">23</div>
            <div class="seat" @click="handleClickSeat(370)" :class="{ occupied: Event.occupiedSeatsId.includes(370), selected: Event.reservedSeatsId.includes(370) }">24</div>
            <div class="seat" @click="handleClickSeat(371)" :class="{ occupied: Event.occupiedSeatsId.includes(371), selected: Event.reservedSeatsId.includes(371) }">25</div>
            <div class="seat" @click="handleClickSeat(372)" :class="{ occupied: Event.occupiedSeatsId.includes(372), selected: Event.reservedSeatsId.includes(372) }">26</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(389)" :class="{ occupied: Event.occupiedSeatsId.includes(389), selected: Event.reservedSeatsId.includes(389) }">7</div>
            <div class="seat" @click="handleClickSeat(390)" :class="{ occupied: Event.occupiedSeatsId.includes(390), selected: Event.reservedSeatsId.includes(390) }">8</div>
            <div class="seat" @click="handleClickSeat(391)" :class="{ occupied: Event.occupiedSeatsId.includes(391), selected: Event.reservedSeatsId.includes(391) }">9</div>
            <div class="seat" @click="handleClickSeat(392)" :class="{ occupied: Event.occupiedSeatsId.includes(392), selected: Event.reservedSeatsId.includes(392) }">10</div>
            <div class="seat" @click="handleClickSeat(393)" :class="{ occupied: Event.occupiedSeatsId.includes(393), selected: Event.reservedSeatsId.includes(393) }">11</div>
            <div class="seat" @click="handleClickSeat(394)" :class="{ occupied: Event.occupiedSeatsId.includes(394), selected: Event.reservedSeatsId.includes(394) }">12</div>
            <div class="seat" @click="handleClickSeat(395)" :class="{ occupied: Event.occupiedSeatsId.includes(395), selected: Event.reservedSeatsId.includes(395) }">13</div>
            <div class="seat" @click="handleClickSeat(396)" :class="{ occupied: Event.occupiedSeatsId.includes(396), selected: Event.reservedSeatsId.includes(396) }">14</div>
            <div class="seat" @click="handleClickSeat(397)" :class="{ occupied: Event.occupiedSeatsId.includes(397), selected: Event.reservedSeatsId.includes(397) }">15</div>
            <div class="seat" @click="handleClickSeat(398)" :class="{ occupied: Event.occupiedSeatsId.includes(398), selected: Event.reservedSeatsId.includes(398) }">16</div>
            <div class="seat" @click="handleClickSeat(399)" :class="{ occupied: Event.occupiedSeatsId.includes(399), selected: Event.reservedSeatsId.includes(399) }">17</div>
            <div class="seat" @click="handleClickSeat(400)" :class="{ occupied: Event.occupiedSeatsId.includes(400), selected: Event.reservedSeatsId.includes(400) }">18</div>
            <div class="seat" @click="handleClickSeat(401)" :class="{ occupied: Event.occupiedSeatsId.includes(401), selected: Event.reservedSeatsId.includes(401) }">19</div>
            <div class="seat" @click="handleClickSeat(402)" :class="{ occupied: Event.occupiedSeatsId.includes(402), selected: Event.reservedSeatsId.includes(402) }">20</div>
            <div class="seat" @click="handleClickSeat(403)" :class="{ occupied: Event.occupiedSeatsId.includes(403), selected: Event.reservedSeatsId.includes(403) }">21</div>
            <div class="seat" @click="handleClickSeat(404)" :class="{ occupied: Event.occupiedSeatsId.includes(404), selected: Event.reservedSeatsId.includes(404) }">22</div>
            <div class="seat" @click="handleClickSeat(405)" :class="{ occupied: Event.occupiedSeatsId.includes(405), selected: Event.reservedSeatsId.includes(405) }">23</div>
            <div class="seat" @click="handleClickSeat(406)" :class="{ occupied: Event.occupiedSeatsId.includes(406), selected: Event.reservedSeatsId.includes(406) }">24</div>
            <div class="seat" @click="handleClickSeat(407)" :class="{ occupied: Event.occupiedSeatsId.includes(407), selected: Event.reservedSeatsId.includes(407) }">25</div>
            <div class="seat" @click="handleClickSeat(408)" :class="{ occupied: Event.occupiedSeatsId.includes(408), selected: Event.reservedSeatsId.includes(408) }">26</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(425)" :class="{ occupied: Event.occupiedSeatsId.includes(425), selected: Event.reservedSeatsId.includes(425) }">7</div>
            <div class="seat" @click="handleClickSeat(426)" :class="{ occupied: Event.occupiedSeatsId.includes(426), selected: Event.reservedSeatsId.includes(426) }">8</div>
            <div class="seat" @click="handleClickSeat(427)" :class="{ occupied: Event.occupiedSeatsId.includes(427), selected: Event.reservedSeatsId.includes(427) }">9</div>
            <div class="seat" @click="handleClickSeat(428)" :class="{ occupied: Event.occupiedSeatsId.includes(428), selected: Event.reservedSeatsId.includes(428) }">10</div>
            <div class="seat" @click="handleClickSeat(429)" :class="{ occupied: Event.occupiedSeatsId.includes(429), selected: Event.reservedSeatsId.includes(429) }">11</div>
            <div class="seat" @click="handleClickSeat(430)" :class="{ occupied: Event.occupiedSeatsId.includes(430), selected: Event.reservedSeatsId.includes(430) }">12</div>
            <div class="seat" @click="handleClickSeat(431)" :class="{ occupied: Event.occupiedSeatsId.includes(431), selected: Event.reservedSeatsId.includes(431) }">13</div>
            <div class="seat" @click="handleClickSeat(432)" :class="{ occupied: Event.occupiedSeatsId.includes(432), selected: Event.reservedSeatsId.includes(432) }">14</div>
            <div class="seat" @click="handleClickSeat(433)" :class="{ occupied: Event.occupiedSeatsId.includes(433), selected: Event.reservedSeatsId.includes(433) }">15</div>
            <div class="seat" @click="handleClickSeat(434)" :class="{ occupied: Event.occupiedSeatsId.includes(434), selected: Event.reservedSeatsId.includes(434) }">16</div>
            <div class="seat" @click="handleClickSeat(435)" :class="{ occupied: Event.occupiedSeatsId.includes(435), selected: Event.reservedSeatsId.includes(435) }">17</div>
            <div class="seat" @click="handleClickSeat(436)" :class="{ occupied: Event.occupiedSeatsId.includes(436), selected: Event.reservedSeatsId.includes(436) }">18</div>
            <div class="seat" @click="handleClickSeat(437)" :class="{ occupied: Event.occupiedSeatsId.includes(437), selected: Event.reservedSeatsId.includes(437) }">19</div>
            <div class="seat" @click="handleClickSeat(438)" :class="{ occupied: Event.occupiedSeatsId.includes(438), selected: Event.reservedSeatsId.includes(438) }">20</div>
            <div class="seat" @click="handleClickSeat(439)" :class="{ occupied: Event.occupiedSeatsId.includes(439), selected: Event.reservedSeatsId.includes(439) }">21</div>
            <div class="seat" @click="handleClickSeat(440)" :class="{ occupied: Event.occupiedSeatsId.includes(440), selected: Event.reservedSeatsId.includes(440) }">22</div>
            <div class="seat" @click="handleClickSeat(441)" :class="{ occupied: Event.occupiedSeatsId.includes(441), selected: Event.reservedSeatsId.includes(441) }">23</div>
            <div class="seat" @click="handleClickSeat(442)" :class="{ occupied: Event.occupiedSeatsId.includes(442), selected: Event.reservedSeatsId.includes(442) }">24</div>
            <div class="seat" @click="handleClickSeat(443)" :class="{ occupied: Event.occupiedSeatsId.includes(443), selected: Event.reservedSeatsId.includes(443) }">25</div>
            <div class="seat" @click="handleClickSeat(444)" :class="{ occupied: Event.occupiedSeatsId.includes(444), selected: Event.reservedSeatsId.includes(444) }">26</div>
            <div class="seat" @click="handleClickSeat(445)" :class="{ occupied: Event.occupiedSeatsId.includes(445), selected: Event.reservedSeatsId.includes(445) }">27</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(462)" :class="{ occupied: Event.occupiedSeatsId.includes(462), selected: Event.reservedSeatsId.includes(462) }">7</div>
            <div class="seat" @click="handleClickSeat(463)" :class="{ occupied: Event.occupiedSeatsId.includes(463), selected: Event.reservedSeatsId.includes(463) }">8</div>
            <div class="seat" @click="handleClickSeat(464)" :class="{ occupied: Event.occupiedSeatsId.includes(464), selected: Event.reservedSeatsId.includes(464) }">9</div>
            <div class="seat" @click="handleClickSeat(465)" :class="{ occupied: Event.occupiedSeatsId.includes(465), selected: Event.reservedSeatsId.includes(465) }">10</div>
            <div class="seat" @click="handleClickSeat(466)" :class="{ occupied: Event.occupiedSeatsId.includes(466), selected: Event.reservedSeatsId.includes(466) }">11</div>
            <div class="seat" @click="handleClickSeat(467)" :class="{ occupied: Event.occupiedSeatsId.includes(467), selected: Event.reservedSeatsId.includes(467) }">12</div>
            <div class="seat" @click="handleClickSeat(468)" :class="{ occupied: Event.occupiedSeatsId.includes(468), selected: Event.reservedSeatsId.includes(468) }">13</div>
            <div class="seat" @click="handleClickSeat(469)" :class="{ occupied: Event.occupiedSeatsId.includes(469), selected: Event.reservedSeatsId.includes(469) }">14</div>
            <div class="seat" @click="handleClickSeat(470)" :class="{ occupied: Event.occupiedSeatsId.includes(470), selected: Event.reservedSeatsId.includes(470) }">15</div>
            <div class="seat" @click="handleClickSeat(471)" :class="{ occupied: Event.occupiedSeatsId.includes(471), selected: Event.reservedSeatsId.includes(471) }">16</div>
            <div class="seat" @click="handleClickSeat(472)" :class="{ occupied: Event.occupiedSeatsId.includes(472), selected: Event.reservedSeatsId.includes(472) }">17</div>
            <div class="seat" @click="handleClickSeat(473)" :class="{ occupied: Event.occupiedSeatsId.includes(473), selected: Event.reservedSeatsId.includes(473) }">18</div>
            <div class="seat" @click="handleClickSeat(474)" :class="{ occupied: Event.occupiedSeatsId.includes(474), selected: Event.reservedSeatsId.includes(474) }">19</div>
            <div class="seat" @click="handleClickSeat(475)" :class="{ occupied: Event.occupiedSeatsId.includes(475), selected: Event.reservedSeatsId.includes(475) }">20</div>
            <div class="seat" @click="handleClickSeat(476)" :class="{ occupied: Event.occupiedSeatsId.includes(476), selected: Event.reservedSeatsId.includes(476) }">21</div>
            <div class="seat" @click="handleClickSeat(477)" :class="{ occupied: Event.occupiedSeatsId.includes(477), selected: Event.reservedSeatsId.includes(477) }">22</div>
            <div class="seat" @click="handleClickSeat(478)" :class="{ occupied: Event.occupiedSeatsId.includes(478), selected: Event.reservedSeatsId.includes(478) }">23</div>
            <div class="seat" @click="handleClickSeat(479)" :class="{ occupied: Event.occupiedSeatsId.includes(479), selected: Event.reservedSeatsId.includes(479) }">24</div>
            <div class="seat" @click="handleClickSeat(480)" :class="{ occupied: Event.occupiedSeatsId.includes(480), selected: Event.reservedSeatsId.includes(480) }">25</div>
            <div class="seat" @click="handleClickSeat(481)" :class="{ occupied: Event.occupiedSeatsId.includes(481), selected: Event.reservedSeatsId.includes(481) }">26</div>
            <div class="seat" @click="handleClickSeat(482)" :class="{ occupied: Event.occupiedSeatsId.includes(482), selected: Event.reservedSeatsId.includes(482) }">27</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(499)" :class="{ occupied: Event.occupiedSeatsId.includes(499), selected: Event.reservedSeatsId.includes(499) }">7</div>
            <div class="seat" @click="handleClickSeat(500)" :class="{ occupied: Event.occupiedSeatsId.includes(500), selected: Event.reservedSeatsId.includes(500) }">8</div>
            <div class="seat" @click="handleClickSeat(501)" :class="{ occupied: Event.occupiedSeatsId.includes(501), selected: Event.reservedSeatsId.includes(501) }">9</div>
            <div class="seat" @click="handleClickSeat(502)" :class="{ occupied: Event.occupiedSeatsId.includes(502), selected: Event.reservedSeatsId.includes(502) }">10</div>
            <div class="seat" @click="handleClickSeat(503)" :class="{ occupied: Event.occupiedSeatsId.includes(503), selected: Event.reservedSeatsId.includes(503) }">11</div>
            <div class="seat" @click="handleClickSeat(504)" :class="{ occupied: Event.occupiedSeatsId.includes(504), selected: Event.reservedSeatsId.includes(504) }">12</div>
            <div class="seat" @click="handleClickSeat(505)" :class="{ occupied: Event.occupiedSeatsId.includes(505), selected: Event.reservedSeatsId.includes(505) }">13</div>
            <div class="seat" @click="handleClickSeat(506)" :class="{ occupied: Event.occupiedSeatsId.includes(506), selected: Event.reservedSeatsId.includes(506) }">14</div>
            <div class="seat" @click="handleClickSeat(507)" :class="{ occupied: Event.occupiedSeatsId.includes(507), selected: Event.reservedSeatsId.includes(507) }">15</div>
            <div class="seat" @click="handleClickSeat(508)" :class="{ occupied: Event.occupiedSeatsId.includes(508), selected: Event.reservedSeatsId.includes(508) }">16</div>
            <div class="seat" @click="handleClickSeat(509)" :class="{ occupied: Event.occupiedSeatsId.includes(509), selected: Event.reservedSeatsId.includes(509) }">17</div>
            <div class="seat" @click="handleClickSeat(510)" :class="{ occupied: Event.occupiedSeatsId.includes(510), selected: Event.reservedSeatsId.includes(510) }">18</div>
            <div class="seat" @click="handleClickSeat(511)" :class="{ occupied: Event.occupiedSeatsId.includes(511), selected: Event.reservedSeatsId.includes(511) }">19</div>
            <div class="seat" @click="handleClickSeat(512)" :class="{ occupied: Event.occupiedSeatsId.includes(512), selected: Event.reservedSeatsId.includes(512) }">20</div>
            <div class="seat" @click="handleClickSeat(513)" :class="{ occupied: Event.occupiedSeatsId.includes(513), selected: Event.reservedSeatsId.includes(513) }">21</div>
            <div class="seat" @click="handleClickSeat(514)" :class="{ occupied: Event.occupiedSeatsId.includes(514), selected: Event.reservedSeatsId.includes(514) }">22</div>
            <div class="seat" @click="handleClickSeat(515)" :class="{ occupied: Event.occupiedSeatsId.includes(515), selected: Event.reservedSeatsId.includes(515) }">23</div>
            <div class="seat" @click="handleClickSeat(516)" :class="{ occupied: Event.occupiedSeatsId.includes(516), selected: Event.reservedSeatsId.includes(516) }">24</div>
            <div class="seat" @click="handleClickSeat(517)" :class="{ occupied: Event.occupiedSeatsId.includes(517), selected: Event.reservedSeatsId.includes(517) }">25</div>
            <div class="seat" @click="handleClickSeat(518)" :class="{ occupied: Event.occupiedSeatsId.includes(518), selected: Event.reservedSeatsId.includes(518) }">26</div>
            <div class="seat" @click="handleClickSeat(519)" :class="{ occupied: Event.occupiedSeatsId.includes(519), selected: Event.reservedSeatsId.includes(519) }">27</div>
            <div class="seat" @click="handleClickSeat(520)" :class="{ occupied: Event.occupiedSeatsId.includes(520), selected: Event.reservedSeatsId.includes(520) }">28</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(537)" :class="{ occupied: Event.occupiedSeatsId.includes(537), selected: Event.reservedSeatsId.includes(537) }">7</div>
            <div class="seat" @click="handleClickSeat(538)" :class="{ occupied: Event.occupiedSeatsId.includes(538), selected: Event.reservedSeatsId.includes(538) }">8</div>
            <div class="seat" @click="handleClickSeat(539)" :class="{ occupied: Event.occupiedSeatsId.includes(539), selected: Event.reservedSeatsId.includes(539) }">9</div>
            <div class="seat" @click="handleClickSeat(540)" :class="{ occupied: Event.occupiedSeatsId.includes(540), selected: Event.reservedSeatsId.includes(540) }">10</div>
            <div class="seat" @click="handleClickSeat(541)" :class="{ occupied: Event.occupiedSeatsId.includes(541), selected: Event.reservedSeatsId.includes(541) }">11</div>
            <div class="seat" @click="handleClickSeat(542)" :class="{ occupied: Event.occupiedSeatsId.includes(542), selected: Event.reservedSeatsId.includes(542) }">12</div>
            <div class="seat" @click="handleClickSeat(543)" :class="{ occupied: Event.occupiedSeatsId.includes(543), selected: Event.reservedSeatsId.includes(543) }">13</div>
            <div class="seat" @click="handleClickSeat(544)" :class="{ occupied: Event.occupiedSeatsId.includes(544), selected: Event.reservedSeatsId.includes(544) }">14</div>
            <div class="seat" @click="handleClickSeat(545)" :class="{ occupied: Event.occupiedSeatsId.includes(545), selected: Event.reservedSeatsId.includes(545) }">15</div>
            <div class="seat" @click="handleClickSeat(546)" :class="{ occupied: Event.occupiedSeatsId.includes(546), selected: Event.reservedSeatsId.includes(546) }">16</div>
            <div class="seat" @click="handleClickSeat(547)" :class="{ occupied: Event.occupiedSeatsId.includes(547), selected: Event.reservedSeatsId.includes(547) }">17</div>
            <div class="seat" @click="handleClickSeat(548)" :class="{ occupied: Event.occupiedSeatsId.includes(548), selected: Event.reservedSeatsId.includes(548) }">18</div>
            <div class="seat" @click="handleClickSeat(549)" :class="{ occupied: Event.occupiedSeatsId.includes(549), selected: Event.reservedSeatsId.includes(549) }">19</div>
            <div class="seat" @click="handleClickSeat(550)" :class="{ occupied: Event.occupiedSeatsId.includes(550), selected: Event.reservedSeatsId.includes(550) }">20</div>
            <div class="seat" @click="handleClickSeat(551)" :class="{ occupied: Event.occupiedSeatsId.includes(551), selected: Event.reservedSeatsId.includes(551) }">21</div>
            <div class="seat" @click="handleClickSeat(552)" :class="{ occupied: Event.occupiedSeatsId.includes(552), selected: Event.reservedSeatsId.includes(552) }">22</div>
            <div class="seat" @click="handleClickSeat(553)" :class="{ occupied: Event.occupiedSeatsId.includes(553), selected: Event.reservedSeatsId.includes(553) }">23</div>
            <div class="seat" @click="handleClickSeat(554)" :class="{ occupied: Event.occupiedSeatsId.includes(554), selected: Event.reservedSeatsId.includes(554) }">24</div>
            <div class="seat" @click="handleClickSeat(555)" :class="{ occupied: Event.occupiedSeatsId.includes(555), selected: Event.reservedSeatsId.includes(555) }">25</div>
            <div class="seat" @click="handleClickSeat(556)" :class="{ occupied: Event.occupiedSeatsId.includes(556), selected: Event.reservedSeatsId.includes(556) }">26</div>
            <div class="seat" @click="handleClickSeat(557)" :class="{ occupied: Event.occupiedSeatsId.includes(557), selected: Event.reservedSeatsId.includes(557) }">27</div>
            <div class="seat" @click="handleClickSeat(558)" :class="{ occupied: Event.occupiedSeatsId.includes(558), selected: Event.reservedSeatsId.includes(558) }">28</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(575)" :class="{ occupied: Event.occupiedSeatsId.includes(575), selected: Event.reservedSeatsId.includes(575) }">7</div>
            <div class="seat" @click="handleClickSeat(576)" :class="{ occupied: Event.occupiedSeatsId.includes(576), selected: Event.reservedSeatsId.includes(576) }">8</div>
            <div class="seat" @click="handleClickSeat(577)" :class="{ occupied: Event.occupiedSeatsId.includes(577), selected: Event.reservedSeatsId.includes(577) }">9</div>
            <div class="seat" @click="handleClickSeat(578)" :class="{ occupied: Event.occupiedSeatsId.includes(578), selected: Event.reservedSeatsId.includes(578) }">10</div>
            <div class="seat" @click="handleClickSeat(579)" :class="{ occupied: Event.occupiedSeatsId.includes(579), selected: Event.reservedSeatsId.includes(579) }">11</div>
            <div class="seat" @click="handleClickSeat(580)" :class="{ occupied: Event.occupiedSeatsId.includes(580), selected: Event.reservedSeatsId.includes(580) }">12</div>
            <div class="seat" @click="handleClickSeat(581)" :class="{ occupied: Event.occupiedSeatsId.includes(581), selected: Event.reservedSeatsId.includes(581) }">13</div>
            <div class="seat" @click="handleClickSeat(582)" :class="{ occupied: Event.occupiedSeatsId.includes(582), selected: Event.reservedSeatsId.includes(582) }">14</div>
            <div class="seat" @click="handleClickSeat(583)" :class="{ occupied: Event.occupiedSeatsId.includes(583), selected: Event.reservedSeatsId.includes(583) }">15</div>
            <div class="seat" @click="handleClickSeat(584)" :class="{ occupied: Event.occupiedSeatsId.includes(584), selected: Event.reservedSeatsId.includes(584) }">16</div>
            <div class="seat" @click="handleClickSeat(585)" :class="{ occupied: Event.occupiedSeatsId.includes(585), selected: Event.reservedSeatsId.includes(585) }">17</div>
            <div class="seat" @click="handleClickSeat(586)" :class="{ occupied: Event.occupiedSeatsId.includes(586), selected: Event.reservedSeatsId.includes(586) }">18</div>
            <div class="seat" @click="handleClickSeat(587)" :class="{ occupied: Event.occupiedSeatsId.includes(587), selected: Event.reservedSeatsId.includes(587) }">19</div>
            <div class="seat" @click="handleClickSeat(588)" :class="{ occupied: Event.occupiedSeatsId.includes(588), selected: Event.reservedSeatsId.includes(588) }">20</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ occupied: Event.occupiedSeatsId.includes(589), selected: Event.reservedSeatsId.includes(589) }">21</div>
            <div class="seat" @click="handleClickSeat(590)" :class="{ occupied: Event.occupiedSeatsId.includes(590), selected: Event.reservedSeatsId.includes(590) }">22</div>
            <div class="seat" @click="handleClickSeat(591)" :class="{ occupied: Event.occupiedSeatsId.includes(591), selected: Event.reservedSeatsId.includes(591) }">23</div>
            <div class="seat" @click="handleClickSeat(592)" :class="{ occupied: Event.occupiedSeatsId.includes(592), selected: Event.reservedSeatsId.includes(592) }">24</div>
            <div class="seat" @click="handleClickSeat(593)" :class="{ occupied: Event.occupiedSeatsId.includes(593), selected: Event.reservedSeatsId.includes(593) }">25</div>
            <div class="seat" @click="handleClickSeat(594)" :class="{ occupied: Event.occupiedSeatsId.includes(594), selected: Event.reservedSeatsId.includes(594) }">26</div>
            <div class="seat" @click="handleClickSeat(595)" :class="{ occupied: Event.occupiedSeatsId.includes(595), selected: Event.reservedSeatsId.includes(595) }">27</div>
            <div class="seat" @click="handleClickSeat(596)" :class="{ occupied: Event.occupiedSeatsId.includes(596), selected: Event.reservedSeatsId.includes(596) }">28</div>
            <div class="seat" @click="handleClickSeat(597)" :class="{ occupied: Event.occupiedSeatsId.includes(597), selected: Event.reservedSeatsId.includes(597) }">29</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(614)" :class="{ occupied: Event.occupiedSeatsId.includes(614), selected: Event.reservedSeatsId.includes(614) }">7</div>
            <div class="seat" @click="handleClickSeat(615)" :class="{ occupied: Event.occupiedSeatsId.includes(615), selected: Event.reservedSeatsId.includes(615) }">8</div>
            <div class="seat" @click="handleClickSeat(616)" :class="{ occupied: Event.occupiedSeatsId.includes(616), selected: Event.reservedSeatsId.includes(616) }">9</div>
            <div class="seat" @click="handleClickSeat(617)" :class="{ occupied: Event.occupiedSeatsId.includes(617), selected: Event.reservedSeatsId.includes(617) }">10</div>
            <div class="seat" @click="handleClickSeat(618)" :class="{ occupied: Event.occupiedSeatsId.includes(618), selected: Event.reservedSeatsId.includes(618) }">11</div>
            <div class="seat" @click="handleClickSeat(619)" :class="{ occupied: Event.occupiedSeatsId.includes(619), selected: Event.reservedSeatsId.includes(619) }">12</div>
            <div class="seat" @click="handleClickSeat(620)" :class="{ occupied: Event.occupiedSeatsId.includes(620), selected: Event.reservedSeatsId.includes(620) }">13</div>
            <div class="seat" @click="handleClickSeat(621)" :class="{ occupied: Event.occupiedSeatsId.includes(621), selected: Event.reservedSeatsId.includes(621) }">14</div>
            <div class="seat" @click="handleClickSeat(622)" :class="{ occupied: Event.occupiedSeatsId.includes(622), selected: Event.reservedSeatsId.includes(622) }">15</div>
            <div class="seat" @click="handleClickSeat(623)" :class="{ occupied: Event.occupiedSeatsId.includes(623), selected: Event.reservedSeatsId.includes(623) }">16</div>
            <div class="seat" @click="handleClickSeat(624)" :class="{ occupied: Event.occupiedSeatsId.includes(624), selected: Event.reservedSeatsId.includes(624) }">17</div>
            <div class="seat" @click="handleClickSeat(625)" :class="{ occupied: Event.occupiedSeatsId.includes(625), selected: Event.reservedSeatsId.includes(625) }">18</div>
            <div class="seat" @click="handleClickSeat(626)" :class="{ occupied: Event.occupiedSeatsId.includes(626), selected: Event.reservedSeatsId.includes(626) }">19</div>
            <div class="seat" @click="handleClickSeat(627)" :class="{ occupied: Event.occupiedSeatsId.includes(627), selected: Event.reservedSeatsId.includes(627) }">20</div>
            <div class="seat" @click="handleClickSeat(628)" :class="{ occupied: Event.occupiedSeatsId.includes(628), selected: Event.reservedSeatsId.includes(628) }">21</div>
            <div class="seat" @click="handleClickSeat(629)" :class="{ occupied: Event.occupiedSeatsId.includes(629), selected: Event.reservedSeatsId.includes(629) }">22</div>
            <div class="seat" @click="handleClickSeat(630)" :class="{ occupied: Event.occupiedSeatsId.includes(630), selected: Event.reservedSeatsId.includes(630) }">23</div>
            <div class="seat" @click="handleClickSeat(631)" :class="{ occupied: Event.occupiedSeatsId.includes(631), selected: Event.reservedSeatsId.includes(631) }">24</div>
            <div class="seat" @click="handleClickSeat(632)" :class="{ occupied: Event.occupiedSeatsId.includes(632), selected: Event.reservedSeatsId.includes(632) }">25</div>
            <div class="seat" @click="handleClickSeat(633)" :class="{ occupied: Event.occupiedSeatsId.includes(633), selected: Event.reservedSeatsId.includes(633) }">26</div>
            <div class="seat" @click="handleClickSeat(634)" :class="{ occupied: Event.occupiedSeatsId.includes(634), selected: Event.reservedSeatsId.includes(634) }">27</div>
            <div class="seat" @click="handleClickSeat(635)" :class="{ occupied: Event.occupiedSeatsId.includes(635), selected: Event.reservedSeatsId.includes(635) }">28</div>
            <div class="seat" @click="handleClickSeat(636)" :class="{ occupied: Event.occupiedSeatsId.includes(636), selected: Event.reservedSeatsId.includes(636) }">29</div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div v-else-if="selectedPart === 3">
        <h5 class="returnButton" @click="selectedPart = 0"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót</h5>
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(267)" :class="{ occupied: Event.occupiedSeatsId.includes(267), selected: Event.reservedSeatsId.includes(267) }">18</div>
            <div class="seat" @click="handleClickSeat(268)" :class="{ occupied: Event.occupiedSeatsId.includes(268), selected: Event.reservedSeatsId.includes(268) }">19</div>
            <div class="seat" @click="handleClickSeat(269)" :class="{ occupied: Event.occupiedSeatsId.includes(269), selected: Event.reservedSeatsId.includes(269) }">20</div>
            <div class="seat" @click="handleClickSeat(270)" :class="{ occupied: Event.occupiedSeatsId.includes(270), selected: Event.reservedSeatsId.includes(270) }">21</div>
            <div class="seat" @click="handleClickSeat(271)" :class="{ occupied: Event.occupiedSeatsId.includes(271), selected: Event.reservedSeatsId.includes(271) }">22</div>
            <div class="seat" @click="handleClickSeat(272)" :class="{ occupied: Event.occupiedSeatsId.includes(272), selected: Event.reservedSeatsId.includes(272) }">23</div>
            <div class="seat" @click="handleClickSeat(273)" :class="{ occupied: Event.occupiedSeatsId.includes(273), selected: Event.reservedSeatsId.includes(273) }">24</div>
            <div class="seat" @click="handleClickSeat(274)" :class="{ occupied: Event.occupiedSeatsId.includes(274), selected: Event.reservedSeatsId.includes(274) }">25</div>
            <div class="seat" @click="handleClickSeat(275)" :class="{ occupied: Event.occupiedSeatsId.includes(275), selected: Event.reservedSeatsId.includes(275) }">26</div>
            <div class="seat" @click="handleClickSeat(276)" :class="{ occupied: Event.occupiedSeatsId.includes(276), selected: Event.reservedSeatsId.includes(276) }">27</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(302)" :class="{ occupied: Event.occupiedSeatsId.includes(302), selected: Event.reservedSeatsId.includes(302) }">26</div>
            <div class="seat" @click="handleClickSeat(303)" :class="{ occupied: Event.occupiedSeatsId.includes(303), selected: Event.reservedSeatsId.includes(303) }">27</div>
            <div class="seat" @click="handleClickSeat(304)" :class="{ occupied: Event.occupiedSeatsId.includes(304), selected: Event.reservedSeatsId.includes(304) }">28</div>
            <div class="seat" @click="handleClickSeat(305)" :class="{ occupied: Event.occupiedSeatsId.includes(305), selected: Event.reservedSeatsId.includes(305) }">29</div>
            <div class="seat" @click="handleClickSeat(306)" :class="{ occupied: Event.occupiedSeatsId.includes(306), selected: Event.reservedSeatsId.includes(306) }">30</div>
            <div class="seat" @click="handleClickSeat(307)" :class="{ occupied: Event.occupiedSeatsId.includes(307), selected: Event.reservedSeatsId.includes(307) }">31</div>
            <div class="seat" @click="handleClickSeat(308)" :class="{ occupied: Event.occupiedSeatsId.includes(308), selected: Event.reservedSeatsId.includes(308) }">32</div>
            <div class="seat" @click="handleClickSeat(309)" :class="{ occupied: Event.occupiedSeatsId.includes(309), selected: Event.reservedSeatsId.includes(309) }">33</div>
            <div class="seat" @click="handleClickSeat(310)" :class="{ occupied: Event.occupiedSeatsId.includes(310), selected: Event.reservedSeatsId.includes(310) }">34</div>
            <div class="seat" @click="handleClickSeat(311)" :class="{ occupied: Event.occupiedSeatsId.includes(311), selected: Event.reservedSeatsId.includes(311) }">35</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(337)" :class="{ occupied: Event.occupiedSeatsId.includes(337), selected: Event.reservedSeatsId.includes(337) }">26</div>
            <div class="seat" @click="handleClickSeat(338)" :class="{ occupied: Event.occupiedSeatsId.includes(338), selected: Event.reservedSeatsId.includes(338) }">27</div>
            <div class="seat" @click="handleClickSeat(339)" :class="{ occupied: Event.occupiedSeatsId.includes(339), selected: Event.reservedSeatsId.includes(339) }">28</div>
            <div class="seat" @click="handleClickSeat(340)" :class="{ occupied: Event.occupiedSeatsId.includes(340), selected: Event.reservedSeatsId.includes(340) }">29</div>
            <div class="seat" @click="handleClickSeat(341)" :class="{ occupied: Event.occupiedSeatsId.includes(341), selected: Event.reservedSeatsId.includes(341) }">30</div>
            <div class="seat" @click="handleClickSeat(342)" :class="{ occupied: Event.occupiedSeatsId.includes(342), selected: Event.reservedSeatsId.includes(342) }">31</div>
            <div class="seat" @click="handleClickSeat(343)" :class="{ occupied: Event.occupiedSeatsId.includes(343), selected: Event.reservedSeatsId.includes(343) }">32</div>
            <div class="seat" @click="handleClickSeat(344)" :class="{ occupied: Event.occupiedSeatsId.includes(344), selected: Event.reservedSeatsId.includes(344) }">33</div>
            <div class="seat" @click="handleClickSeat(345)" :class="{ occupied: Event.occupiedSeatsId.includes(345), selected: Event.reservedSeatsId.includes(345) }">34</div>
            <div class="seat" @click="handleClickSeat(346)" :class="{ occupied: Event.occupiedSeatsId.includes(346), selected: Event.reservedSeatsId.includes(346) }">35</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(373)" :class="{ occupied: Event.occupiedSeatsId.includes(373), selected: Event.reservedSeatsId.includes(373) }">27</div>
            <div class="seat" @click="handleClickSeat(374)" :class="{ occupied: Event.occupiedSeatsId.includes(374), selected: Event.reservedSeatsId.includes(374) }">28</div>
            <div class="seat" @click="handleClickSeat(375)" :class="{ occupied: Event.occupiedSeatsId.includes(375), selected: Event.reservedSeatsId.includes(375) }">29</div>
            <div class="seat" @click="handleClickSeat(376)" :class="{ occupied: Event.occupiedSeatsId.includes(376), selected: Event.reservedSeatsId.includes(376) }">30</div>
            <div class="seat" @click="handleClickSeat(377)" :class="{ occupied: Event.occupiedSeatsId.includes(377), selected: Event.reservedSeatsId.includes(377) }">31</div>
            <div class="seat" @click="handleClickSeat(378)" :class="{ occupied: Event.occupiedSeatsId.includes(378), selected: Event.reservedSeatsId.includes(378) }">32</div>
            <div class="seat" @click="handleClickSeat(379)" :class="{ occupied: Event.occupiedSeatsId.includes(379), selected: Event.reservedSeatsId.includes(379) }">33</div>
            <div class="seat" @click="handleClickSeat(380)" :class="{ occupied: Event.occupiedSeatsId.includes(380), selected: Event.reservedSeatsId.includes(380) }">34</div>
            <div class="seat" @click="handleClickSeat(381)" :class="{ occupied: Event.occupiedSeatsId.includes(381), selected: Event.reservedSeatsId.includes(381) }">35</div>
            <div class="seat" @click="handleClickSeat(382)" :class="{ occupied: Event.occupiedSeatsId.includes(382), selected: Event.reservedSeatsId.includes(382) }">36</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(409)" :class="{ occupied: Event.occupiedSeatsId.includes(409), selected: Event.reservedSeatsId.includes(409) }">27</div>
            <div class="seat" @click="handleClickSeat(410)" :class="{ occupied: Event.occupiedSeatsId.includes(410), selected: Event.reservedSeatsId.includes(410) }">28</div>
            <div class="seat" @click="handleClickSeat(411)" :class="{ occupied: Event.occupiedSeatsId.includes(411), selected: Event.reservedSeatsId.includes(411) }">29</div>
            <div class="seat" @click="handleClickSeat(412)" :class="{ occupied: Event.occupiedSeatsId.includes(412), selected: Event.reservedSeatsId.includes(412) }">30</div>
            <div class="seat" @click="handleClickSeat(413)" :class="{ occupied: Event.occupiedSeatsId.includes(413), selected: Event.reservedSeatsId.includes(413) }">31</div>
            <div class="seat" @click="handleClickSeat(414)" :class="{ occupied: Event.occupiedSeatsId.includes(414), selected: Event.reservedSeatsId.includes(414) }">32</div>
            <div class="seat" @click="handleClickSeat(415)" :class="{ occupied: Event.occupiedSeatsId.includes(415), selected: Event.reservedSeatsId.includes(415) }">33</div>
            <div class="seat" @click="handleClickSeat(416)" :class="{ occupied: Event.occupiedSeatsId.includes(416), selected: Event.reservedSeatsId.includes(416) }">34</div>
            <div class="seat" @click="handleClickSeat(417)" :class="{ occupied: Event.occupiedSeatsId.includes(417), selected: Event.reservedSeatsId.includes(417) }">35</div>
            <div class="seat" @click="handleClickSeat(418)" :class="{ occupied: Event.occupiedSeatsId.includes(418), selected: Event.reservedSeatsId.includes(418) }">36</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(446)" :class="{ occupied: Event.occupiedSeatsId.includes(446), selected: Event.reservedSeatsId.includes(446) }">28</div>
            <div class="seat" @click="handleClickSeat(447)" :class="{ occupied: Event.occupiedSeatsId.includes(447), selected: Event.reservedSeatsId.includes(447) }">29</div>
            <div class="seat" @click="handleClickSeat(448)" :class="{ occupied: Event.occupiedSeatsId.includes(448), selected: Event.reservedSeatsId.includes(448) }">30</div>
            <div class="seat" @click="handleClickSeat(449)" :class="{ occupied: Event.occupiedSeatsId.includes(449), selected: Event.reservedSeatsId.includes(449) }">31</div>
            <div class="seat" @click="handleClickSeat(450)" :class="{ occupied: Event.occupiedSeatsId.includes(450), selected: Event.reservedSeatsId.includes(450) }">32</div>
            <div class="seat" @click="handleClickSeat(451)" :class="{ occupied: Event.occupiedSeatsId.includes(451), selected: Event.reservedSeatsId.includes(451) }">33</div>
            <div class="seat" @click="handleClickSeat(452)" :class="{ occupied: Event.occupiedSeatsId.includes(452), selected: Event.reservedSeatsId.includes(452) }">34</div>
            <div class="seat" @click="handleClickSeat(453)" :class="{ occupied: Event.occupiedSeatsId.includes(453), selected: Event.reservedSeatsId.includes(453) }">35</div>
            <div class="seat" @click="handleClickSeat(454)" :class="{ occupied: Event.occupiedSeatsId.includes(454), selected: Event.reservedSeatsId.includes(454) }">36</div>
            <div class="seat" @click="handleClickSeat(455)" :class="{ occupied: Event.occupiedSeatsId.includes(455), selected: Event.reservedSeatsId.includes(455) }">37</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(483)" :class="{ occupied: Event.occupiedSeatsId.includes(483), selected: Event.reservedSeatsId.includes(483) }">28</div>
            <div class="seat" @click="handleClickSeat(484)" :class="{ occupied: Event.occupiedSeatsId.includes(484), selected: Event.reservedSeatsId.includes(484) }">29</div>
            <div class="seat" @click="handleClickSeat(485)" :class="{ occupied: Event.occupiedSeatsId.includes(485), selected: Event.reservedSeatsId.includes(485) }">30</div>
            <div class="seat" @click="handleClickSeat(486)" :class="{ occupied: Event.occupiedSeatsId.includes(486), selected: Event.reservedSeatsId.includes(486) }">31</div>
            <div class="seat" @click="handleClickSeat(487)" :class="{ occupied: Event.occupiedSeatsId.includes(487), selected: Event.reservedSeatsId.includes(487) }">32</div>
            <div class="seat" @click="handleClickSeat(488)" :class="{ occupied: Event.occupiedSeatsId.includes(488), selected: Event.reservedSeatsId.includes(488) }">33</div>
            <div class="seat" @click="handleClickSeat(489)" :class="{ occupied: Event.occupiedSeatsId.includes(489), selected: Event.reservedSeatsId.includes(489) }">34</div>
            <div class="seat" @click="handleClickSeat(490)" :class="{ occupied: Event.occupiedSeatsId.includes(490), selected: Event.reservedSeatsId.includes(490) }">35</div>
            <div class="seat" @click="handleClickSeat(491)" :class="{ occupied: Event.occupiedSeatsId.includes(491), selected: Event.reservedSeatsId.includes(491) }">36</div>
            <div class="seat" @click="handleClickSeat(492)" :class="{ occupied: Event.occupiedSeatsId.includes(492), selected: Event.reservedSeatsId.includes(492) }">37</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(521)" :class="{ occupied: Event.occupiedSeatsId.includes(521), selected: Event.reservedSeatsId.includes(521) }">29</div>
            <div class="seat" @click="handleClickSeat(522)" :class="{ occupied: Event.occupiedSeatsId.includes(522), selected: Event.reservedSeatsId.includes(522) }">30</div>
            <div class="seat" @click="handleClickSeat(523)" :class="{ occupied: Event.occupiedSeatsId.includes(523), selected: Event.reservedSeatsId.includes(523) }">31</div>
            <div class="seat" @click="handleClickSeat(524)" :class="{ occupied: Event.occupiedSeatsId.includes(524), selected: Event.reservedSeatsId.includes(524) }">32</div>
            <div class="seat" @click="handleClickSeat(525)" :class="{ occupied: Event.occupiedSeatsId.includes(525), selected: Event.reservedSeatsId.includes(525) }">33</div>
            <div class="seat" @click="handleClickSeat(526)" :class="{ occupied: Event.occupiedSeatsId.includes(526), selected: Event.reservedSeatsId.includes(526) }">34</div>
            <div class="seat" @click="handleClickSeat(527)" :class="{ occupied: Event.occupiedSeatsId.includes(527), selected: Event.reservedSeatsId.includes(527) }">35</div>
            <div class="seat" @click="handleClickSeat(528)" :class="{ occupied: Event.occupiedSeatsId.includes(528), selected: Event.reservedSeatsId.includes(528) }">36</div>
            <div class="seat" @click="handleClickSeat(529)" :class="{ occupied: Event.occupiedSeatsId.includes(529), selected: Event.reservedSeatsId.includes(529) }">37</div>
            <div class="seat" @click="handleClickSeat(530)" :class="{ occupied: Event.occupiedSeatsId.includes(530), selected: Event.reservedSeatsId.includes(530) }">38</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(559)" :class="{ occupied: Event.occupiedSeatsId.includes(559), selected: Event.reservedSeatsId.includes(559) }">29</div>
            <div class="seat" @click="handleClickSeat(560)" :class="{ occupied: Event.occupiedSeatsId.includes(560), selected: Event.reservedSeatsId.includes(560) }">30</div>
            <div class="seat" @click="handleClickSeat(561)" :class="{ occupied: Event.occupiedSeatsId.includes(561), selected: Event.reservedSeatsId.includes(561) }">31</div>
            <div class="seat" @click="handleClickSeat(562)" :class="{ occupied: Event.occupiedSeatsId.includes(562), selected: Event.reservedSeatsId.includes(562) }">32</div>
            <div class="seat" @click="handleClickSeat(563)" :class="{ occupied: Event.occupiedSeatsId.includes(563), selected: Event.reservedSeatsId.includes(563) }">33</div>
            <div class="seat" @click="handleClickSeat(564)" :class="{ occupied: Event.occupiedSeatsId.includes(564), selected: Event.reservedSeatsId.includes(564) }">34</div>
            <div class="seat" @click="handleClickSeat(565)" :class="{ occupied: Event.occupiedSeatsId.includes(565), selected: Event.reservedSeatsId.includes(565) }">35</div>
            <div class="seat" @click="handleClickSeat(566)" :class="{ occupied: Event.occupiedSeatsId.includes(566), selected: Event.reservedSeatsId.includes(566) }">36</div>
            <div class="seat" @click="handleClickSeat(567)" :class="{ occupied: Event.occupiedSeatsId.includes(567), selected: Event.reservedSeatsId.includes(567) }">37</div>
            <div class="seat" @click="handleClickSeat(568)" :class="{ occupied: Event.occupiedSeatsId.includes(568), selected: Event.reservedSeatsId.includes(568) }">38</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(588)" :class="{ occupied: Event.occupiedSeatsId.includes(588), selected: Event.reservedSeatsId.includes(588) }">30</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ occupied: Event.occupiedSeatsId.includes(589), selected: Event.reservedSeatsId.includes(589) }">31</div>
            <div class="seat" @click="handleClickSeat(600)" :class="{ occupied: Event.occupiedSeatsId.includes(600), selected: Event.reservedSeatsId.includes(600) }">32</div>
            <div class="seat" @click="handleClickSeat(601)" :class="{ occupied: Event.occupiedSeatsId.includes(601), selected: Event.reservedSeatsId.includes(601) }">33</div>
            <div class="seat" @click="handleClickSeat(602)" :class="{ occupied: Event.occupiedSeatsId.includes(602), selected: Event.reservedSeatsId.includes(602) }">34</div>
            <div class="seat" @click="handleClickSeat(603)" :class="{ occupied: Event.occupiedSeatsId.includes(603), selected: Event.reservedSeatsId.includes(603) }">35</div>
            <div class="seat" @click="handleClickSeat(604)" :class="{ occupied: Event.occupiedSeatsId.includes(604), selected: Event.reservedSeatsId.includes(604) }">36</div>
            <div class="seat" @click="handleClickSeat(605)" :class="{ occupied: Event.occupiedSeatsId.includes(605), selected: Event.reservedSeatsId.includes(605) }">37</div>
            <div class="seat" @click="handleClickSeat(606)" :class="{ occupied: Event.occupiedSeatsId.includes(606), selected: Event.reservedSeatsId.includes(606) }">38</div>
            <div class="seat" @click="handleClickSeat(607)" :class="{ occupied: Event.occupiedSeatsId.includes(607), selected: Event.reservedSeatsId.includes(607) }">39</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(637)" :class="{ occupied: Event.occupiedSeatsId.includes(637), selected: Event.reservedSeatsId.includes(637) }">30</div>
            <div class="seat" @click="handleClickSeat(638)" :class="{ occupied: Event.occupiedSeatsId.includes(638), selected: Event.reservedSeatsId.includes(638) }">31</div>
            <div class="seat" @click="handleClickSeat(639)" :class="{ occupied: Event.occupiedSeatsId.includes(639), selected: Event.reservedSeatsId.includes(639) }">32</div>
            <div class="seat" @click="handleClickSeat(640)" :class="{ occupied: Event.occupiedSeatsId.includes(640), selected: Event.reservedSeatsId.includes(640) }">33</div>
            <div class="seat" @click="handleClickSeat(641)" :class="{ occupied: Event.occupiedSeatsId.includes(641), selected: Event.reservedSeatsId.includes(641) }">34</div>
            <div class="seat" @click="handleClickSeat(642)" :class="{ occupied: Event.occupiedSeatsId.includes(642), selected: Event.reservedSeatsId.includes(642) }">35</div>
            <div class="seat" @click="handleClickSeat(643)" :class="{ occupied: Event.occupiedSeatsId.includes(643), selected: Event.reservedSeatsId.includes(643) }">36</div>
            <div class="seat" @click="handleClickSeat(644)" :class="{ occupied: Event.occupiedSeatsId.includes(644), selected: Event.reservedSeatsId.includes(644) }">37</div>
            <div class="seat" @click="handleClickSeat(645)" :class="{ occupied: Event.occupiedSeatsId.includes(645), selected: Event.reservedSeatsId.includes(645) }">38</div>
            <div class="seat" @click="handleClickSeat(646)" :class="{ occupied: Event.occupiedSeatsId.includes(646), selected: Event.reservedSeatsId.includes(646) }">39</div>
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
  name: 'FilharmoniaPodkarpackaSektor2',
  data() {
    return {
      selectedPart: 0,
    };
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

@media (max-width: 767px) {
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
    font-size: 2.5vw;
  }
  .seat {
    width: 5vw;
    height: 5vw;
    margin: 3px;
    font-size: 2.5vw;
  }

  .middle > .row > span {
    font-size: 2vw;
  }
  .middle > .row > .seat {
    width: 3vw;
    height: 3vw;
    margin: 2px;
    font-size: 2vw;
  }
}
</style>
