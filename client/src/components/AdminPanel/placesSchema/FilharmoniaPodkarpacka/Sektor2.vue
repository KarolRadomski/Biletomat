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
            <div class="seat" @click="handleClickSeat(277)" :class="{ selected: Event.reservedSeatsId.includes(277) }">1</div>
            <div class="seat" @click="handleClickSeat(278)" :class="{ selected: Event.reservedSeatsId.includes(278) }">2</div>
            <div class="seat" @click="handleClickSeat(279)" :class="{ selected: Event.reservedSeatsId.includes(279) }">3</div>
            <div class="seat" @click="handleClickSeat(280)" :class="{ selected: Event.reservedSeatsId.includes(280) }">4</div>
            <div class="seat" @click="handleClickSeat(281)" :class="{ selected: Event.reservedSeatsId.includes(281) }">5</div>
            <div class="seat" @click="handleClickSeat(282)" :class="{ selected: Event.reservedSeatsId.includes(282) }">6</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(312)" :class="{ selected: Event.reservedSeatsId.includes(312) }">1</div>
            <div class="seat" @click="handleClickSeat(313)" :class="{ selected: Event.reservedSeatsId.includes(313) }">2</div>
            <div class="seat" @click="handleClickSeat(314)" :class="{ selected: Event.reservedSeatsId.includes(314) }">3</div>
            <div class="seat" @click="handleClickSeat(315)" :class="{ selected: Event.reservedSeatsId.includes(315) }">4</div>
            <div class="seat" @click="handleClickSeat(316)" :class="{ selected: Event.reservedSeatsId.includes(316) }">5</div>
            <div class="seat" @click="handleClickSeat(317)" :class="{ selected: Event.reservedSeatsId.includes(317) }">6</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(347)" :class="{ selected: Event.reservedSeatsId.includes(347) }">1</div>
            <div class="seat" @click="handleClickSeat(348)" :class="{ selected: Event.reservedSeatsId.includes(348) }">2</div>
            <div class="seat" @click="handleClickSeat(349)" :class="{ selected: Event.reservedSeatsId.includes(349) }">3</div>
            <div class="seat" @click="handleClickSeat(350)" :class="{ selected: Event.reservedSeatsId.includes(350) }">4</div>
            <div class="seat" @click="handleClickSeat(351)" :class="{ selected: Event.reservedSeatsId.includes(351) }">5</div>
            <div class="seat" @click="handleClickSeat(352)" :class="{ selected: Event.reservedSeatsId.includes(352) }">6</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(383)" :class="{ selected: Event.reservedSeatsId.includes(383) }">1</div>
            <div class="seat" @click="handleClickSeat(384)" :class="{ selected: Event.reservedSeatsId.includes(384) }">2</div>
            <div class="seat" @click="handleClickSeat(385)" :class="{ selected: Event.reservedSeatsId.includes(385) }">3</div>
            <div class="seat" @click="handleClickSeat(386)" :class="{ selected: Event.reservedSeatsId.includes(386) }">4</div>
            <div class="seat" @click="handleClickSeat(387)" :class="{ selected: Event.reservedSeatsId.includes(387) }">5</div>
            <div class="seat" @click="handleClickSeat(388)" :class="{ selected: Event.reservedSeatsId.includes(388) }">6</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(419)" :class="{ selected: Event.reservedSeatsId.includes(419) }">1</div>
            <div class="seat" @click="handleClickSeat(420)" :class="{ selected: Event.reservedSeatsId.includes(420) }">2</div>
            <div class="seat" @click="handleClickSeat(421)" :class="{ selected: Event.reservedSeatsId.includes(421) }">3</div>
            <div class="seat" @click="handleClickSeat(422)" :class="{ selected: Event.reservedSeatsId.includes(422) }">4</div>
            <div class="seat" @click="handleClickSeat(423)" :class="{ selected: Event.reservedSeatsId.includes(423) }">5</div>
            <div class="seat" @click="handleClickSeat(424)" :class="{ selected: Event.reservedSeatsId.includes(424) }">6</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(456)" :class="{ selected: Event.reservedSeatsId.includes(456) }">1</div>
            <div class="seat" @click="handleClickSeat(457)" :class="{ selected: Event.reservedSeatsId.includes(457) }">2</div>
            <div class="seat" @click="handleClickSeat(458)" :class="{ selected: Event.reservedSeatsId.includes(458) }">3</div>
            <div class="seat" @click="handleClickSeat(459)" :class="{ selected: Event.reservedSeatsId.includes(459) }">4</div>
            <div class="seat" @click="handleClickSeat(460)" :class="{ selected: Event.reservedSeatsId.includes(460) }">5</div>
            <div class="seat" @click="handleClickSeat(461)" :class="{ selected: Event.reservedSeatsId.includes(461) }">6</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(493)" :class="{ selected: Event.reservedSeatsId.includes(493) }">1</div>
            <div class="seat" @click="handleClickSeat(494)" :class="{ selected: Event.reservedSeatsId.includes(494) }">2</div>
            <div class="seat" @click="handleClickSeat(495)" :class="{ selected: Event.reservedSeatsId.includes(495) }">3</div>
            <div class="seat" @click="handleClickSeat(496)" :class="{ selected: Event.reservedSeatsId.includes(496) }">4</div>
            <div class="seat" @click="handleClickSeat(497)" :class="{ selected: Event.reservedSeatsId.includes(497) }">5</div>
            <div class="seat" @click="handleClickSeat(498)" :class="{ selected: Event.reservedSeatsId.includes(498) }">6</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(531)" :class="{ selected: Event.reservedSeatsId.includes(531) }">1</div>
            <div class="seat" @click="handleClickSeat(532)" :class="{ selected: Event.reservedSeatsId.includes(532) }">2</div>
            <div class="seat" @click="handleClickSeat(533)" :class="{ selected: Event.reservedSeatsId.includes(533) }">3</div>
            <div class="seat" @click="handleClickSeat(534)" :class="{ selected: Event.reservedSeatsId.includes(534) }">4</div>
            <div class="seat" @click="handleClickSeat(535)" :class="{ selected: Event.reservedSeatsId.includes(535) }">5</div>
            <div class="seat" @click="handleClickSeat(536)" :class="{ selected: Event.reservedSeatsId.includes(536) }">6</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(569)" :class="{ selected: Event.reservedSeatsId.includes(569) }">1</div>
            <div class="seat" @click="handleClickSeat(570)" :class="{ selected: Event.reservedSeatsId.includes(570) }">2</div>
            <div class="seat" @click="handleClickSeat(571)" :class="{ selected: Event.reservedSeatsId.includes(571) }">3</div>
            <div class="seat" @click="handleClickSeat(572)" :class="{ selected: Event.reservedSeatsId.includes(572) }">4</div>
            <div class="seat" @click="handleClickSeat(573)" :class="{ selected: Event.reservedSeatsId.includes(573) }">5</div>
            <div class="seat" @click="handleClickSeat(574)" :class="{ selected: Event.reservedSeatsId.includes(574) }">6</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(608)" :class="{ selected: Event.reservedSeatsId.includes(608) }">1</div>
            <div class="seat" @click="handleClickSeat(609)" :class="{ selected: Event.reservedSeatsId.includes(609) }">2</div>
            <div class="seat" @click="handleClickSeat(610)" :class="{ selected: Event.reservedSeatsId.includes(610) }">3</div>
            <div class="seat" @click="handleClickSeat(611)" :class="{ selected: Event.reservedSeatsId.includes(611) }">4</div>
            <div class="seat" @click="handleClickSeat(612)" :class="{ selected: Event.reservedSeatsId.includes(612) }">5</div>
            <div class="seat" @click="handleClickSeat(613)" :class="{ selected: Event.reservedSeatsId.includes(613) }">6</div>
          </div>
        </div>
        <!-- Middle column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(250)" :class="{ selected: Event.reservedSeatsId.includes(250) }">1</div>
            <div class="seat" @click="handleClickSeat(251)" :class="{ selected: Event.reservedSeatsId.includes(251) }">2</div>
            <div class="seat" @click="handleClickSeat(252)" :class="{ selected: Event.reservedSeatsId.includes(252) }">3</div>
            <div class="seat" @click="handleClickSeat(253)" :class="{ selected: Event.reservedSeatsId.includes(253) }">4</div>
            <div class="seat" @click="handleClickSeat(254)" :class="{ selected: Event.reservedSeatsId.includes(254) }">5</div>
            <div class="seat" @click="handleClickSeat(255)" :class="{ selected: Event.reservedSeatsId.includes(255) }">6</div>
            <div class="seat" @click="handleClickSeat(256)" :class="{ selected: Event.reservedSeatsId.includes(256) }">7</div>
            <div class="seat" @click="handleClickSeat(257)" :class="{ selected: Event.reservedSeatsId.includes(257) }">8</div>
            <div class="seat" @click="handleClickSeat(258)" :class="{ selected: Event.reservedSeatsId.includes(258) }">9</div>
            <div class="seat" @click="handleClickSeat(259)" :class="{ selected: Event.reservedSeatsId.includes(259) }">10</div>
            <div class="seat" @click="handleClickSeat(260)" :class="{ selected: Event.reservedSeatsId.includes(260) }">11</div>
            <div class="seat" @click="handleClickSeat(261)" :class="{ selected: Event.reservedSeatsId.includes(261) }">12</div>
            <div class="seat" @click="handleClickSeat(262)" :class="{ selected: Event.reservedSeatsId.includes(262) }">13</div>
            <div class="seat" @click="handleClickSeat(263)" :class="{ selected: Event.reservedSeatsId.includes(263) }">14</div>
            <div class="seat" @click="handleClickSeat(264)" :class="{ selected: Event.reservedSeatsId.includes(264) }">15</div>
            <div class="seat" @click="handleClickSeat(265)" :class="{ selected: Event.reservedSeatsId.includes(265) }">16</div>
            <div class="seat" @click="handleClickSeat(266)" :class="{ selected: Event.reservedSeatsId.includes(266) }">17</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(283)" :class="{ selected: Event.reservedSeatsId.includes(283) }">7</div>
            <div class="seat" @click="handleClickSeat(284)" :class="{ selected: Event.reservedSeatsId.includes(284) }">8</div>
            <div class="seat" @click="handleClickSeat(285)" :class="{ selected: Event.reservedSeatsId.includes(285) }">9</div>
            <div class="seat" @click="handleClickSeat(286)" :class="{ selected: Event.reservedSeatsId.includes(286) }">10</div>
            <div class="seat" @click="handleClickSeat(287)" :class="{ selected: Event.reservedSeatsId.includes(287) }">11</div>
            <div class="seat" @click="handleClickSeat(288)" :class="{ selected: Event.reservedSeatsId.includes(288) }">12</div>
            <div class="seat" @click="handleClickSeat(289)" :class="{ selected: Event.reservedSeatsId.includes(289) }">13</div>
            <div class="seat" @click="handleClickSeat(290)" :class="{ selected: Event.reservedSeatsId.includes(290) }">14</div>
            <div class="seat" @click="handleClickSeat(291)" :class="{ selected: Event.reservedSeatsId.includes(291) }">15</div>
            <div class="seat" @click="handleClickSeat(292)" :class="{ selected: Event.reservedSeatsId.includes(292) }">16</div>
            <div class="seat" @click="handleClickSeat(293)" :class="{ selected: Event.reservedSeatsId.includes(293) }">17</div>
            <div class="seat" @click="handleClickSeat(294)" :class="{ selected: Event.reservedSeatsId.includes(294) }">18</div>
            <div class="seat" @click="handleClickSeat(295)" :class="{ selected: Event.reservedSeatsId.includes(295) }">19</div>
            <div class="seat" @click="handleClickSeat(296)" :class="{ selected: Event.reservedSeatsId.includes(296) }">20</div>
            <div class="seat" @click="handleClickSeat(297)" :class="{ selected: Event.reservedSeatsId.includes(297) }">21</div>
            <div class="seat" @click="handleClickSeat(298)" :class="{ selected: Event.reservedSeatsId.includes(298) }">22</div>
            <div class="seat" @click="handleClickSeat(299)" :class="{ selected: Event.reservedSeatsId.includes(299) }">23</div>
            <div class="seat" @click="handleClickSeat(300)" :class="{ selected: Event.reservedSeatsId.includes(300) }">24</div>
            <div class="seat" @click="handleClickSeat(301)" :class="{ selected: Event.reservedSeatsId.includes(301) }">25</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(318)" :class="{ selected: Event.reservedSeatsId.includes(318) }">7</div>
            <div class="seat" @click="handleClickSeat(319)" :class="{ selected: Event.reservedSeatsId.includes(319) }">8</div>
            <div class="seat" @click="handleClickSeat(320)" :class="{ selected: Event.reservedSeatsId.includes(320) }">9</div>
            <div class="seat" @click="handleClickSeat(321)" :class="{ selected: Event.reservedSeatsId.includes(321) }">10</div>
            <div class="seat" @click="handleClickSeat(322)" :class="{ selected: Event.reservedSeatsId.includes(322) }">11</div>
            <div class="seat" @click="handleClickSeat(323)" :class="{ selected: Event.reservedSeatsId.includes(323) }">12</div>
            <div class="seat" @click="handleClickSeat(324)" :class="{ selected: Event.reservedSeatsId.includes(324) }">13</div>
            <div class="seat" @click="handleClickSeat(325)" :class="{ selected: Event.reservedSeatsId.includes(325) }">14</div>
            <div class="seat" @click="handleClickSeat(326)" :class="{ selected: Event.reservedSeatsId.includes(326) }">15</div>
            <div class="seat" @click="handleClickSeat(327)" :class="{ selected: Event.reservedSeatsId.includes(327) }">16</div>
            <div class="seat" @click="handleClickSeat(328)" :class="{ selected: Event.reservedSeatsId.includes(328) }">17</div>
            <div class="seat" @click="handleClickSeat(329)" :class="{ selected: Event.reservedSeatsId.includes(329) }">18</div>
            <div class="seat" @click="handleClickSeat(330)" :class="{ selected: Event.reservedSeatsId.includes(330) }">19</div>
            <div class="seat" @click="handleClickSeat(331)" :class="{ selected: Event.reservedSeatsId.includes(331) }">20</div>
            <div class="seat" @click="handleClickSeat(332)" :class="{ selected: Event.reservedSeatsId.includes(332) }">21</div>
            <div class="seat" @click="handleClickSeat(333)" :class="{ selected: Event.reservedSeatsId.includes(333) }">22</div>
            <div class="seat" @click="handleClickSeat(334)" :class="{ selected: Event.reservedSeatsId.includes(334) }">23</div>
            <div class="seat" @click="handleClickSeat(335)" :class="{ selected: Event.reservedSeatsId.includes(335) }">24</div>
            <div class="seat" @click="handleClickSeat(336)" :class="{ selected: Event.reservedSeatsId.includes(336) }">25</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(353)" :class="{ selected: Event.reservedSeatsId.includes(353) }">7</div>
            <div class="seat" @click="handleClickSeat(354)" :class="{ selected: Event.reservedSeatsId.includes(354) }">8</div>
            <div class="seat" @click="handleClickSeat(355)" :class="{ selected: Event.reservedSeatsId.includes(355) }">9</div>
            <div class="seat" @click="handleClickSeat(356)" :class="{ selected: Event.reservedSeatsId.includes(356) }">10</div>
            <div class="seat" @click="handleClickSeat(357)" :class="{ selected: Event.reservedSeatsId.includes(357) }">11</div>
            <div class="seat" @click="handleClickSeat(358)" :class="{ selected: Event.reservedSeatsId.includes(358) }">12</div>
            <div class="seat" @click="handleClickSeat(359)" :class="{ selected: Event.reservedSeatsId.includes(359) }">13</div>
            <div class="seat" @click="handleClickSeat(360)" :class="{ selected: Event.reservedSeatsId.includes(360) }">14</div>
            <div class="seat" @click="handleClickSeat(361)" :class="{ selected: Event.reservedSeatsId.includes(361) }">15</div>
            <div class="seat" @click="handleClickSeat(362)" :class="{ selected: Event.reservedSeatsId.includes(362) }">16</div>
            <div class="seat" @click="handleClickSeat(363)" :class="{ selected: Event.reservedSeatsId.includes(363) }">17</div>
            <div class="seat" @click="handleClickSeat(364)" :class="{ selected: Event.reservedSeatsId.includes(364) }">18</div>
            <div class="seat" @click="handleClickSeat(365)" :class="{ selected: Event.reservedSeatsId.includes(365) }">19</div>
            <div class="seat" @click="handleClickSeat(366)" :class="{ selected: Event.reservedSeatsId.includes(366) }">20</div>
            <div class="seat" @click="handleClickSeat(367)" :class="{ selected: Event.reservedSeatsId.includes(367) }">21</div>
            <div class="seat" @click="handleClickSeat(368)" :class="{ selected: Event.reservedSeatsId.includes(368) }">22</div>
            <div class="seat" @click="handleClickSeat(369)" :class="{ selected: Event.reservedSeatsId.includes(369) }">23</div>
            <div class="seat" @click="handleClickSeat(370)" :class="{ selected: Event.reservedSeatsId.includes(370) }">24</div>
            <div class="seat" @click="handleClickSeat(371)" :class="{ selected: Event.reservedSeatsId.includes(371) }">25</div>
            <div class="seat" @click="handleClickSeat(372)" :class="{ selected: Event.reservedSeatsId.includes(372) }">26</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(389)" :class="{ selected: Event.reservedSeatsId.includes(389) }">7</div>
            <div class="seat" @click="handleClickSeat(390)" :class="{ selected: Event.reservedSeatsId.includes(390) }">8</div>
            <div class="seat" @click="handleClickSeat(391)" :class="{ selected: Event.reservedSeatsId.includes(391) }">9</div>
            <div class="seat" @click="handleClickSeat(392)" :class="{ selected: Event.reservedSeatsId.includes(392) }">10</div>
            <div class="seat" @click="handleClickSeat(393)" :class="{ selected: Event.reservedSeatsId.includes(393) }">11</div>
            <div class="seat" @click="handleClickSeat(394)" :class="{ selected: Event.reservedSeatsId.includes(394) }">12</div>
            <div class="seat" @click="handleClickSeat(395)" :class="{ selected: Event.reservedSeatsId.includes(395) }">13</div>
            <div class="seat" @click="handleClickSeat(396)" :class="{ selected: Event.reservedSeatsId.includes(396) }">14</div>
            <div class="seat" @click="handleClickSeat(397)" :class="{ selected: Event.reservedSeatsId.includes(397) }">15</div>
            <div class="seat" @click="handleClickSeat(398)" :class="{ selected: Event.reservedSeatsId.includes(398) }">16</div>
            <div class="seat" @click="handleClickSeat(399)" :class="{ selected: Event.reservedSeatsId.includes(399) }">17</div>
            <div class="seat" @click="handleClickSeat(400)" :class="{ selected: Event.reservedSeatsId.includes(400) }">18</div>
            <div class="seat" @click="handleClickSeat(401)" :class="{ selected: Event.reservedSeatsId.includes(401) }">19</div>
            <div class="seat" @click="handleClickSeat(402)" :class="{ selected: Event.reservedSeatsId.includes(402) }">20</div>
            <div class="seat" @click="handleClickSeat(403)" :class="{ selected: Event.reservedSeatsId.includes(403) }">21</div>
            <div class="seat" @click="handleClickSeat(404)" :class="{ selected: Event.reservedSeatsId.includes(404) }">22</div>
            <div class="seat" @click="handleClickSeat(405)" :class="{ selected: Event.reservedSeatsId.includes(405) }">23</div>
            <div class="seat" @click="handleClickSeat(406)" :class="{ selected: Event.reservedSeatsId.includes(406) }">24</div>
            <div class="seat" @click="handleClickSeat(407)" :class="{ selected: Event.reservedSeatsId.includes(407) }">25</div>
            <div class="seat" @click="handleClickSeat(408)" :class="{ selected: Event.reservedSeatsId.includes(408) }">26</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(425)" :class="{ selected: Event.reservedSeatsId.includes(425) }">7</div>
            <div class="seat" @click="handleClickSeat(426)" :class="{ selected: Event.reservedSeatsId.includes(426) }">8</div>
            <div class="seat" @click="handleClickSeat(427)" :class="{ selected: Event.reservedSeatsId.includes(427) }">9</div>
            <div class="seat" @click="handleClickSeat(428)" :class="{ selected: Event.reservedSeatsId.includes(428) }">10</div>
            <div class="seat" @click="handleClickSeat(429)" :class="{ selected: Event.reservedSeatsId.includes(429) }">11</div>
            <div class="seat" @click="handleClickSeat(430)" :class="{ selected: Event.reservedSeatsId.includes(430) }">12</div>
            <div class="seat" @click="handleClickSeat(431)" :class="{ selected: Event.reservedSeatsId.includes(431) }">13</div>
            <div class="seat" @click="handleClickSeat(432)" :class="{ selected: Event.reservedSeatsId.includes(432) }">14</div>
            <div class="seat" @click="handleClickSeat(433)" :class="{ selected: Event.reservedSeatsId.includes(433) }">15</div>
            <div class="seat" @click="handleClickSeat(434)" :class="{ selected: Event.reservedSeatsId.includes(434) }">16</div>
            <div class="seat" @click="handleClickSeat(435)" :class="{ selected: Event.reservedSeatsId.includes(435) }">17</div>
            <div class="seat" @click="handleClickSeat(436)" :class="{ selected: Event.reservedSeatsId.includes(436) }">18</div>
            <div class="seat" @click="handleClickSeat(437)" :class="{ selected: Event.reservedSeatsId.includes(437) }">19</div>
            <div class="seat" @click="handleClickSeat(438)" :class="{ selected: Event.reservedSeatsId.includes(438) }">20</div>
            <div class="seat" @click="handleClickSeat(439)" :class="{ selected: Event.reservedSeatsId.includes(439) }">21</div>
            <div class="seat" @click="handleClickSeat(440)" :class="{ selected: Event.reservedSeatsId.includes(440) }">22</div>
            <div class="seat" @click="handleClickSeat(441)" :class="{ selected: Event.reservedSeatsId.includes(441) }">23</div>
            <div class="seat" @click="handleClickSeat(442)" :class="{ selected: Event.reservedSeatsId.includes(442) }">24</div>
            <div class="seat" @click="handleClickSeat(443)" :class="{ selected: Event.reservedSeatsId.includes(443) }">25</div>
            <div class="seat" @click="handleClickSeat(444)" :class="{ selected: Event.reservedSeatsId.includes(444) }">26</div>
            <div class="seat" @click="handleClickSeat(445)" :class="{ selected: Event.reservedSeatsId.includes(445) }">27</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(462)" :class="{ selected: Event.reservedSeatsId.includes(462) }">7</div>
            <div class="seat" @click="handleClickSeat(463)" :class="{ selected: Event.reservedSeatsId.includes(463) }">8</div>
            <div class="seat" @click="handleClickSeat(464)" :class="{ selected: Event.reservedSeatsId.includes(464) }">9</div>
            <div class="seat" @click="handleClickSeat(465)" :class="{ selected: Event.reservedSeatsId.includes(465) }">10</div>
            <div class="seat" @click="handleClickSeat(466)" :class="{ selected: Event.reservedSeatsId.includes(466) }">11</div>
            <div class="seat" @click="handleClickSeat(467)" :class="{ selected: Event.reservedSeatsId.includes(467) }">12</div>
            <div class="seat" @click="handleClickSeat(468)" :class="{ selected: Event.reservedSeatsId.includes(468) }">13</div>
            <div class="seat" @click="handleClickSeat(469)" :class="{ selected: Event.reservedSeatsId.includes(469) }">14</div>
            <div class="seat" @click="handleClickSeat(470)" :class="{ selected: Event.reservedSeatsId.includes(470) }">15</div>
            <div class="seat" @click="handleClickSeat(471)" :class="{ selected: Event.reservedSeatsId.includes(471) }">16</div>
            <div class="seat" @click="handleClickSeat(472)" :class="{ selected: Event.reservedSeatsId.includes(472) }">17</div>
            <div class="seat" @click="handleClickSeat(473)" :class="{ selected: Event.reservedSeatsId.includes(473) }">18</div>
            <div class="seat" @click="handleClickSeat(474)" :class="{ selected: Event.reservedSeatsId.includes(474) }">19</div>
            <div class="seat" @click="handleClickSeat(475)" :class="{ selected: Event.reservedSeatsId.includes(475) }">20</div>
            <div class="seat" @click="handleClickSeat(476)" :class="{ selected: Event.reservedSeatsId.includes(476) }">21</div>
            <div class="seat" @click="handleClickSeat(477)" :class="{ selected: Event.reservedSeatsId.includes(477) }">22</div>
            <div class="seat" @click="handleClickSeat(478)" :class="{ selected: Event.reservedSeatsId.includes(478) }">23</div>
            <div class="seat" @click="handleClickSeat(479)" :class="{ selected: Event.reservedSeatsId.includes(479) }">24</div>
            <div class="seat" @click="handleClickSeat(480)" :class="{ selected: Event.reservedSeatsId.includes(480) }">25</div>
            <div class="seat" @click="handleClickSeat(481)" :class="{ selected: Event.reservedSeatsId.includes(481) }">26</div>
            <div class="seat" @click="handleClickSeat(482)" :class="{ selected: Event.reservedSeatsId.includes(482) }">27</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(499)" :class="{ selected: Event.reservedSeatsId.includes(499) }">7</div>
            <div class="seat" @click="handleClickSeat(500)" :class="{ selected: Event.reservedSeatsId.includes(500) }">8</div>
            <div class="seat" @click="handleClickSeat(501)" :class="{ selected: Event.reservedSeatsId.includes(501) }">9</div>
            <div class="seat" @click="handleClickSeat(502)" :class="{ selected: Event.reservedSeatsId.includes(502) }">10</div>
            <div class="seat" @click="handleClickSeat(503)" :class="{ selected: Event.reservedSeatsId.includes(503) }">11</div>
            <div class="seat" @click="handleClickSeat(504)" :class="{ selected: Event.reservedSeatsId.includes(504) }">12</div>
            <div class="seat" @click="handleClickSeat(505)" :class="{ selected: Event.reservedSeatsId.includes(505) }">13</div>
            <div class="seat" @click="handleClickSeat(506)" :class="{ selected: Event.reservedSeatsId.includes(506) }">14</div>
            <div class="seat" @click="handleClickSeat(507)" :class="{ selected: Event.reservedSeatsId.includes(507) }">15</div>
            <div class="seat" @click="handleClickSeat(508)" :class="{ selected: Event.reservedSeatsId.includes(508) }">16</div>
            <div class="seat" @click="handleClickSeat(509)" :class="{ selected: Event.reservedSeatsId.includes(509) }">17</div>
            <div class="seat" @click="handleClickSeat(510)" :class="{ selected: Event.reservedSeatsId.includes(510) }">18</div>
            <div class="seat" @click="handleClickSeat(511)" :class="{ selected: Event.reservedSeatsId.includes(511) }">19</div>
            <div class="seat" @click="handleClickSeat(512)" :class="{ selected: Event.reservedSeatsId.includes(512) }">20</div>
            <div class="seat" @click="handleClickSeat(513)" :class="{ selected: Event.reservedSeatsId.includes(513) }">21</div>
            <div class="seat" @click="handleClickSeat(514)" :class="{ selected: Event.reservedSeatsId.includes(514) }">22</div>
            <div class="seat" @click="handleClickSeat(515)" :class="{ selected: Event.reservedSeatsId.includes(515) }">23</div>
            <div class="seat" @click="handleClickSeat(516)" :class="{ selected: Event.reservedSeatsId.includes(516) }">24</div>
            <div class="seat" @click="handleClickSeat(517)" :class="{ selected: Event.reservedSeatsId.includes(517) }">25</div>
            <div class="seat" @click="handleClickSeat(518)" :class="{ selected: Event.reservedSeatsId.includes(518) }">26</div>
            <div class="seat" @click="handleClickSeat(519)" :class="{ selected: Event.reservedSeatsId.includes(519) }">27</div>
            <div class="seat" @click="handleClickSeat(520)" :class="{ selected: Event.reservedSeatsId.includes(520) }">28</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(537)" :class="{ selected: Event.reservedSeatsId.includes(537) }">7</div>
            <div class="seat" @click="handleClickSeat(538)" :class="{ selected: Event.reservedSeatsId.includes(538) }">8</div>
            <div class="seat" @click="handleClickSeat(539)" :class="{ selected: Event.reservedSeatsId.includes(539) }">9</div>
            <div class="seat" @click="handleClickSeat(540)" :class="{ selected: Event.reservedSeatsId.includes(540) }">10</div>
            <div class="seat" @click="handleClickSeat(541)" :class="{ selected: Event.reservedSeatsId.includes(541) }">11</div>
            <div class="seat" @click="handleClickSeat(542)" :class="{ selected: Event.reservedSeatsId.includes(542) }">12</div>
            <div class="seat" @click="handleClickSeat(543)" :class="{ selected: Event.reservedSeatsId.includes(543) }">13</div>
            <div class="seat" @click="handleClickSeat(544)" :class="{ selected: Event.reservedSeatsId.includes(544) }">14</div>
            <div class="seat" @click="handleClickSeat(545)" :class="{ selected: Event.reservedSeatsId.includes(545) }">15</div>
            <div class="seat" @click="handleClickSeat(546)" :class="{ selected: Event.reservedSeatsId.includes(546) }">16</div>
            <div class="seat" @click="handleClickSeat(547)" :class="{ selected: Event.reservedSeatsId.includes(547) }">17</div>
            <div class="seat" @click="handleClickSeat(548)" :class="{ selected: Event.reservedSeatsId.includes(548) }">18</div>
            <div class="seat" @click="handleClickSeat(549)" :class="{ selected: Event.reservedSeatsId.includes(549) }">19</div>
            <div class="seat" @click="handleClickSeat(550)" :class="{ selected: Event.reservedSeatsId.includes(550) }">20</div>
            <div class="seat" @click="handleClickSeat(551)" :class="{ selected: Event.reservedSeatsId.includes(551) }">21</div>
            <div class="seat" @click="handleClickSeat(552)" :class="{ selected: Event.reservedSeatsId.includes(552) }">22</div>
            <div class="seat" @click="handleClickSeat(553)" :class="{ selected: Event.reservedSeatsId.includes(553) }">23</div>
            <div class="seat" @click="handleClickSeat(554)" :class="{ selected: Event.reservedSeatsId.includes(554) }">24</div>
            <div class="seat" @click="handleClickSeat(555)" :class="{ selected: Event.reservedSeatsId.includes(555) }">25</div>
            <div class="seat" @click="handleClickSeat(556)" :class="{ selected: Event.reservedSeatsId.includes(556) }">26</div>
            <div class="seat" @click="handleClickSeat(557)" :class="{ selected: Event.reservedSeatsId.includes(557) }">27</div>
            <div class="seat" @click="handleClickSeat(558)" :class="{ selected: Event.reservedSeatsId.includes(558) }">28</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(575)" :class="{ selected: Event.reservedSeatsId.includes(575) }">7</div>
            <div class="seat" @click="handleClickSeat(576)" :class="{ selected: Event.reservedSeatsId.includes(576) }">8</div>
            <div class="seat" @click="handleClickSeat(577)" :class="{ selected: Event.reservedSeatsId.includes(577) }">9</div>
            <div class="seat" @click="handleClickSeat(578)" :class="{ selected: Event.reservedSeatsId.includes(578) }">10</div>
            <div class="seat" @click="handleClickSeat(579)" :class="{ selected: Event.reservedSeatsId.includes(579) }">11</div>
            <div class="seat" @click="handleClickSeat(580)" :class="{ selected: Event.reservedSeatsId.includes(580) }">12</div>
            <div class="seat" @click="handleClickSeat(581)" :class="{ selected: Event.reservedSeatsId.includes(581) }">13</div>
            <div class="seat" @click="handleClickSeat(582)" :class="{ selected: Event.reservedSeatsId.includes(582) }">14</div>
            <div class="seat" @click="handleClickSeat(583)" :class="{ selected: Event.reservedSeatsId.includes(583) }">15</div>
            <div class="seat" @click="handleClickSeat(584)" :class="{ selected: Event.reservedSeatsId.includes(584) }">16</div>
            <div class="seat" @click="handleClickSeat(585)" :class="{ selected: Event.reservedSeatsId.includes(585) }">17</div>
            <div class="seat" @click="handleClickSeat(586)" :class="{ selected: Event.reservedSeatsId.includes(586) }">18</div>
            <div class="seat" @click="handleClickSeat(587)" :class="{ selected: Event.reservedSeatsId.includes(587) }">19</div>
            <div class="seat" @click="handleClickSeat(588)" :class="{ selected: Event.reservedSeatsId.includes(588) }">20</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ selected: Event.reservedSeatsId.includes(589) }">21</div>
            <div class="seat" @click="handleClickSeat(590)" :class="{ selected: Event.reservedSeatsId.includes(590) }">22</div>
            <div class="seat" @click="handleClickSeat(591)" :class="{ selected: Event.reservedSeatsId.includes(591) }">23</div>
            <div class="seat" @click="handleClickSeat(592)" :class="{ selected: Event.reservedSeatsId.includes(592) }">24</div>
            <div class="seat" @click="handleClickSeat(593)" :class="{ selected: Event.reservedSeatsId.includes(593) }">25</div>
            <div class="seat" @click="handleClickSeat(594)" :class="{ selected: Event.reservedSeatsId.includes(594) }">26</div>
            <div class="seat" @click="handleClickSeat(595)" :class="{ selected: Event.reservedSeatsId.includes(595) }">27</div>
            <div class="seat" @click="handleClickSeat(596)" :class="{ selected: Event.reservedSeatsId.includes(596) }">28</div>
            <div class="seat" @click="handleClickSeat(597)" :class="{ selected: Event.reservedSeatsId.includes(597) }">29</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(614)" :class="{ selected: Event.reservedSeatsId.includes(614) }">7</div>
            <div class="seat" @click="handleClickSeat(615)" :class="{ selected: Event.reservedSeatsId.includes(615) }">8</div>
            <div class="seat" @click="handleClickSeat(616)" :class="{ selected: Event.reservedSeatsId.includes(616) }">9</div>
            <div class="seat" @click="handleClickSeat(617)" :class="{ selected: Event.reservedSeatsId.includes(617) }">10</div>
            <div class="seat" @click="handleClickSeat(618)" :class="{ selected: Event.reservedSeatsId.includes(618) }">11</div>
            <div class="seat" @click="handleClickSeat(619)" :class="{ selected: Event.reservedSeatsId.includes(619) }">12</div>
            <div class="seat" @click="handleClickSeat(620)" :class="{ selected: Event.reservedSeatsId.includes(620) }">13</div>
            <div class="seat" @click="handleClickSeat(621)" :class="{ selected: Event.reservedSeatsId.includes(621) }">14</div>
            <div class="seat" @click="handleClickSeat(622)" :class="{ selected: Event.reservedSeatsId.includes(622) }">15</div>
            <div class="seat" @click="handleClickSeat(623)" :class="{ selected: Event.reservedSeatsId.includes(623) }">16</div>
            <div class="seat" @click="handleClickSeat(624)" :class="{ selected: Event.reservedSeatsId.includes(624) }">17</div>
            <div class="seat" @click="handleClickSeat(625)" :class="{ selected: Event.reservedSeatsId.includes(625) }">18</div>
            <div class="seat" @click="handleClickSeat(626)" :class="{ selected: Event.reservedSeatsId.includes(626) }">19</div>
            <div class="seat" @click="handleClickSeat(627)" :class="{ selected: Event.reservedSeatsId.includes(627) }">20</div>
            <div class="seat" @click="handleClickSeat(628)" :class="{ selected: Event.reservedSeatsId.includes(628) }">21</div>
            <div class="seat" @click="handleClickSeat(629)" :class="{ selected: Event.reservedSeatsId.includes(629) }">22</div>
            <div class="seat" @click="handleClickSeat(630)" :class="{ selected: Event.reservedSeatsId.includes(630) }">23</div>
            <div class="seat" @click="handleClickSeat(631)" :class="{ selected: Event.reservedSeatsId.includes(631) }">24</div>
            <div class="seat" @click="handleClickSeat(632)" :class="{ selected: Event.reservedSeatsId.includes(632) }">25</div>
            <div class="seat" @click="handleClickSeat(633)" :class="{ selected: Event.reservedSeatsId.includes(633) }">26</div>
            <div class="seat" @click="handleClickSeat(634)" :class="{ selected: Event.reservedSeatsId.includes(634) }">27</div>
            <div class="seat" @click="handleClickSeat(635)" :class="{ selected: Event.reservedSeatsId.includes(635) }">28</div>
            <div class="seat" @click="handleClickSeat(636)" :class="{ selected: Event.reservedSeatsId.includes(636) }">29</div>
          </div>
        </div>
        <!-- Right column -->
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(267)" :class="{ selected: Event.reservedSeatsId.includes(267) }">18</div>
            <div class="seat" @click="handleClickSeat(268)" :class="{ selected: Event.reservedSeatsId.includes(268) }">19</div>
            <div class="seat" @click="handleClickSeat(269)" :class="{ selected: Event.reservedSeatsId.includes(269) }">20</div>
            <div class="seat" @click="handleClickSeat(270)" :class="{ selected: Event.reservedSeatsId.includes(270) }">21</div>
            <div class="seat" @click="handleClickSeat(271)" :class="{ selected: Event.reservedSeatsId.includes(271) }">22</div>
            <div class="seat" @click="handleClickSeat(272)" :class="{ selected: Event.reservedSeatsId.includes(272) }">23</div>
            <div class="seat" @click="handleClickSeat(273)" :class="{ selected: Event.reservedSeatsId.includes(273) }">24</div>
            <div class="seat" @click="handleClickSeat(274)" :class="{ selected: Event.reservedSeatsId.includes(274) }">25</div>
            <div class="seat" @click="handleClickSeat(275)" :class="{ selected: Event.reservedSeatsId.includes(275) }">26</div>
            <div class="seat" @click="handleClickSeat(276)" :class="{ selected: Event.reservedSeatsId.includes(276) }">27</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(302)" :class="{ selected: Event.reservedSeatsId.includes(302) }">26</div>
            <div class="seat" @click="handleClickSeat(303)" :class="{ selected: Event.reservedSeatsId.includes(303) }">27</div>
            <div class="seat" @click="handleClickSeat(304)" :class="{ selected: Event.reservedSeatsId.includes(304) }">28</div>
            <div class="seat" @click="handleClickSeat(305)" :class="{ selected: Event.reservedSeatsId.includes(305) }">29</div>
            <div class="seat" @click="handleClickSeat(306)" :class="{ selected: Event.reservedSeatsId.includes(306) }">30</div>
            <div class="seat" @click="handleClickSeat(307)" :class="{ selected: Event.reservedSeatsId.includes(307) }">31</div>
            <div class="seat" @click="handleClickSeat(308)" :class="{ selected: Event.reservedSeatsId.includes(308) }">32</div>
            <div class="seat" @click="handleClickSeat(309)" :class="{ selected: Event.reservedSeatsId.includes(309) }">33</div>
            <div class="seat" @click="handleClickSeat(310)" :class="{ selected: Event.reservedSeatsId.includes(310) }">34</div>
            <div class="seat" @click="handleClickSeat(311)" :class="{ selected: Event.reservedSeatsId.includes(311) }">35</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(337)" :class="{ selected: Event.reservedSeatsId.includes(337) }">26</div>
            <div class="seat" @click="handleClickSeat(338)" :class="{ selected: Event.reservedSeatsId.includes(338) }">27</div>
            <div class="seat" @click="handleClickSeat(339)" :class="{ selected: Event.reservedSeatsId.includes(339) }">28</div>
            <div class="seat" @click="handleClickSeat(340)" :class="{ selected: Event.reservedSeatsId.includes(340) }">29</div>
            <div class="seat" @click="handleClickSeat(341)" :class="{ selected: Event.reservedSeatsId.includes(341) }">30</div>
            <div class="seat" @click="handleClickSeat(342)" :class="{ selected: Event.reservedSeatsId.includes(342) }">31</div>
            <div class="seat" @click="handleClickSeat(343)" :class="{ selected: Event.reservedSeatsId.includes(343) }">32</div>
            <div class="seat" @click="handleClickSeat(344)" :class="{ selected: Event.reservedSeatsId.includes(344) }">33</div>
            <div class="seat" @click="handleClickSeat(345)" :class="{ selected: Event.reservedSeatsId.includes(345) }">34</div>
            <div class="seat" @click="handleClickSeat(346)" :class="{ selected: Event.reservedSeatsId.includes(346) }">35</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(373)" :class="{ selected: Event.reservedSeatsId.includes(373) }">27</div>
            <div class="seat" @click="handleClickSeat(374)" :class="{ selected: Event.reservedSeatsId.includes(374) }">28</div>
            <div class="seat" @click="handleClickSeat(375)" :class="{ selected: Event.reservedSeatsId.includes(375) }">29</div>
            <div class="seat" @click="handleClickSeat(376)" :class="{ selected: Event.reservedSeatsId.includes(376) }">30</div>
            <div class="seat" @click="handleClickSeat(377)" :class="{ selected: Event.reservedSeatsId.includes(377) }">31</div>
            <div class="seat" @click="handleClickSeat(378)" :class="{ selected: Event.reservedSeatsId.includes(378) }">32</div>
            <div class="seat" @click="handleClickSeat(379)" :class="{ selected: Event.reservedSeatsId.includes(379) }">33</div>
            <div class="seat" @click="handleClickSeat(380)" :class="{ selected: Event.reservedSeatsId.includes(380) }">34</div>
            <div class="seat" @click="handleClickSeat(381)" :class="{ selected: Event.reservedSeatsId.includes(381) }">35</div>
            <div class="seat" @click="handleClickSeat(382)" :class="{ selected: Event.reservedSeatsId.includes(382) }">36</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(409)" :class="{ selected: Event.reservedSeatsId.includes(409) }">27</div>
            <div class="seat" @click="handleClickSeat(410)" :class="{ selected: Event.reservedSeatsId.includes(410) }">28</div>
            <div class="seat" @click="handleClickSeat(411)" :class="{ selected: Event.reservedSeatsId.includes(411) }">29</div>
            <div class="seat" @click="handleClickSeat(412)" :class="{ selected: Event.reservedSeatsId.includes(412) }">30</div>
            <div class="seat" @click="handleClickSeat(413)" :class="{ selected: Event.reservedSeatsId.includes(413) }">31</div>
            <div class="seat" @click="handleClickSeat(414)" :class="{ selected: Event.reservedSeatsId.includes(414) }">32</div>
            <div class="seat" @click="handleClickSeat(415)" :class="{ selected: Event.reservedSeatsId.includes(415) }">33</div>
            <div class="seat" @click="handleClickSeat(416)" :class="{ selected: Event.reservedSeatsId.includes(416) }">34</div>
            <div class="seat" @click="handleClickSeat(417)" :class="{ selected: Event.reservedSeatsId.includes(417) }">35</div>
            <div class="seat" @click="handleClickSeat(418)" :class="{ selected: Event.reservedSeatsId.includes(418) }">36</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(446)" :class="{ selected: Event.reservedSeatsId.includes(446) }">28</div>
            <div class="seat" @click="handleClickSeat(447)" :class="{ selected: Event.reservedSeatsId.includes(447) }">29</div>
            <div class="seat" @click="handleClickSeat(448)" :class="{ selected: Event.reservedSeatsId.includes(448) }">30</div>
            <div class="seat" @click="handleClickSeat(449)" :class="{ selected: Event.reservedSeatsId.includes(449) }">31</div>
            <div class="seat" @click="handleClickSeat(450)" :class="{ selected: Event.reservedSeatsId.includes(450) }">32</div>
            <div class="seat" @click="handleClickSeat(451)" :class="{ selected: Event.reservedSeatsId.includes(451) }">33</div>
            <div class="seat" @click="handleClickSeat(452)" :class="{ selected: Event.reservedSeatsId.includes(452) }">34</div>
            <div class="seat" @click="handleClickSeat(453)" :class="{ selected: Event.reservedSeatsId.includes(453) }">35</div>
            <div class="seat" @click="handleClickSeat(454)" :class="{ selected: Event.reservedSeatsId.includes(454) }">36</div>
            <div class="seat" @click="handleClickSeat(455)" :class="{ selected: Event.reservedSeatsId.includes(455) }">37</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(483)" :class="{ selected: Event.reservedSeatsId.includes(483) }">28</div>
            <div class="seat" @click="handleClickSeat(484)" :class="{ selected: Event.reservedSeatsId.includes(484) }">29</div>
            <div class="seat" @click="handleClickSeat(485)" :class="{ selected: Event.reservedSeatsId.includes(485) }">30</div>
            <div class="seat" @click="handleClickSeat(486)" :class="{ selected: Event.reservedSeatsId.includes(486) }">31</div>
            <div class="seat" @click="handleClickSeat(487)" :class="{ selected: Event.reservedSeatsId.includes(487) }">32</div>
            <div class="seat" @click="handleClickSeat(488)" :class="{ selected: Event.reservedSeatsId.includes(488) }">33</div>
            <div class="seat" @click="handleClickSeat(489)" :class="{ selected: Event.reservedSeatsId.includes(489) }">34</div>
            <div class="seat" @click="handleClickSeat(490)" :class="{ selected: Event.reservedSeatsId.includes(490) }">35</div>
            <div class="seat" @click="handleClickSeat(491)" :class="{ selected: Event.reservedSeatsId.includes(491) }">36</div>
            <div class="seat" @click="handleClickSeat(492)" :class="{ selected: Event.reservedSeatsId.includes(492) }">37</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(521)" :class="{ selected: Event.reservedSeatsId.includes(521) }">29</div>
            <div class="seat" @click="handleClickSeat(522)" :class="{ selected: Event.reservedSeatsId.includes(522) }">30</div>
            <div class="seat" @click="handleClickSeat(523)" :class="{ selected: Event.reservedSeatsId.includes(523) }">31</div>
            <div class="seat" @click="handleClickSeat(524)" :class="{ selected: Event.reservedSeatsId.includes(524) }">32</div>
            <div class="seat" @click="handleClickSeat(525)" :class="{ selected: Event.reservedSeatsId.includes(525) }">33</div>
            <div class="seat" @click="handleClickSeat(526)" :class="{ selected: Event.reservedSeatsId.includes(526) }">34</div>
            <div class="seat" @click="handleClickSeat(527)" :class="{ selected: Event.reservedSeatsId.includes(527) }">35</div>
            <div class="seat" @click="handleClickSeat(528)" :class="{ selected: Event.reservedSeatsId.includes(528) }">36</div>
            <div class="seat" @click="handleClickSeat(529)" :class="{ selected: Event.reservedSeatsId.includes(529) }">37</div>
            <div class="seat" @click="handleClickSeat(530)" :class="{ selected: Event.reservedSeatsId.includes(530) }">38</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(559)" :class="{ selected: Event.reservedSeatsId.includes(559) }">29</div>
            <div class="seat" @click="handleClickSeat(560)" :class="{ selected: Event.reservedSeatsId.includes(560) }">30</div>
            <div class="seat" @click="handleClickSeat(561)" :class="{ selected: Event.reservedSeatsId.includes(561) }">31</div>
            <div class="seat" @click="handleClickSeat(562)" :class="{ selected: Event.reservedSeatsId.includes(562) }">32</div>
            <div class="seat" @click="handleClickSeat(563)" :class="{ selected: Event.reservedSeatsId.includes(563) }">33</div>
            <div class="seat" @click="handleClickSeat(564)" :class="{ selected: Event.reservedSeatsId.includes(564) }">34</div>
            <div class="seat" @click="handleClickSeat(565)" :class="{ selected: Event.reservedSeatsId.includes(565) }">35</div>
            <div class="seat" @click="handleClickSeat(566)" :class="{ selected: Event.reservedSeatsId.includes(566) }">36</div>
            <div class="seat" @click="handleClickSeat(567)" :class="{ selected: Event.reservedSeatsId.includes(567) }">37</div>
            <div class="seat" @click="handleClickSeat(568)" :class="{ selected: Event.reservedSeatsId.includes(568) }">38</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(588)" :class="{ selected: Event.reservedSeatsId.includes(588) }">30</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ selected: Event.reservedSeatsId.includes(589) }">31</div>
            <div class="seat" @click="handleClickSeat(600)" :class="{ selected: Event.reservedSeatsId.includes(600) }">32</div>
            <div class="seat" @click="handleClickSeat(601)" :class="{ selected: Event.reservedSeatsId.includes(601) }">33</div>
            <div class="seat" @click="handleClickSeat(602)" :class="{ selected: Event.reservedSeatsId.includes(602) }">34</div>
            <div class="seat" @click="handleClickSeat(603)" :class="{ selected: Event.reservedSeatsId.includes(603) }">35</div>
            <div class="seat" @click="handleClickSeat(604)" :class="{ selected: Event.reservedSeatsId.includes(604) }">36</div>
            <div class="seat" @click="handleClickSeat(605)" :class="{ selected: Event.reservedSeatsId.includes(605) }">37</div>
            <div class="seat" @click="handleClickSeat(606)" :class="{ selected: Event.reservedSeatsId.includes(606) }">38</div>
            <div class="seat" @click="handleClickSeat(607)" :class="{ selected: Event.reservedSeatsId.includes(607) }">39</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(637)" :class="{ selected: Event.reservedSeatsId.includes(637) }">30</div>
            <div class="seat" @click="handleClickSeat(638)" :class="{ selected: Event.reservedSeatsId.includes(638) }">31</div>
            <div class="seat" @click="handleClickSeat(639)" :class="{ selected: Event.reservedSeatsId.includes(639) }">32</div>
            <div class="seat" @click="handleClickSeat(640)" :class="{ selected: Event.reservedSeatsId.includes(640) }">33</div>
            <div class="seat" @click="handleClickSeat(641)" :class="{ selected: Event.reservedSeatsId.includes(641) }">34</div>
            <div class="seat" @click="handleClickSeat(642)" :class="{ selected: Event.reservedSeatsId.includes(642) }">35</div>
            <div class="seat" @click="handleClickSeat(643)" :class="{ selected: Event.reservedSeatsId.includes(643) }">36</div>
            <div class="seat" @click="handleClickSeat(644)" :class="{ selected: Event.reservedSeatsId.includes(644) }">37</div>
            <div class="seat" @click="handleClickSeat(645)" :class="{ selected: Event.reservedSeatsId.includes(645) }">38</div>
            <div class="seat" @click="handleClickSeat(646)" :class="{ selected: Event.reservedSeatsId.includes(646) }">39</div>
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
        <h5 class="returnButton" @click="selectedPart = 0">
          <i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót
        </h5>
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
            <div class="seat" @click="handleClickSeat(277)" :class="{ selected: Event.reservedSeatsId.includes(277) }">1</div>
            <div class="seat" @click="handleClickSeat(278)" :class="{ selected: Event.reservedSeatsId.includes(278) }">2</div>
            <div class="seat" @click="handleClickSeat(279)" :class="{ selected: Event.reservedSeatsId.includes(279) }">3</div>
            <div class="seat" @click="handleClickSeat(280)" :class="{ selected: Event.reservedSeatsId.includes(280) }">4</div>
            <div class="seat" @click="handleClickSeat(281)" :class="{ selected: Event.reservedSeatsId.includes(281) }">5</div>
            <div class="seat" @click="handleClickSeat(282)" :class="{ selected: Event.reservedSeatsId.includes(282) }">6</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(312)" :class="{ selected: Event.reservedSeatsId.includes(312) }">1</div>
            <div class="seat" @click="handleClickSeat(313)" :class="{ selected: Event.reservedSeatsId.includes(313) }">2</div>
            <div class="seat" @click="handleClickSeat(314)" :class="{ selected: Event.reservedSeatsId.includes(314) }">3</div>
            <div class="seat" @click="handleClickSeat(315)" :class="{ selected: Event.reservedSeatsId.includes(315) }">4</div>
            <div class="seat" @click="handleClickSeat(316)" :class="{ selected: Event.reservedSeatsId.includes(316) }">5</div>
            <div class="seat" @click="handleClickSeat(317)" :class="{ selected: Event.reservedSeatsId.includes(317) }">6</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(347)" :class="{ selected: Event.reservedSeatsId.includes(347) }">1</div>
            <div class="seat" @click="handleClickSeat(348)" :class="{ selected: Event.reservedSeatsId.includes(348) }">2</div>
            <div class="seat" @click="handleClickSeat(349)" :class="{ selected: Event.reservedSeatsId.includes(349) }">3</div>
            <div class="seat" @click="handleClickSeat(350)" :class="{ selected: Event.reservedSeatsId.includes(350) }">4</div>
            <div class="seat" @click="handleClickSeat(351)" :class="{ selected: Event.reservedSeatsId.includes(351) }">5</div>
            <div class="seat" @click="handleClickSeat(352)" :class="{ selected: Event.reservedSeatsId.includes(352) }">6</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(383)" :class="{ selected: Event.reservedSeatsId.includes(383) }">1</div>
            <div class="seat" @click="handleClickSeat(384)" :class="{ selected: Event.reservedSeatsId.includes(384) }">2</div>
            <div class="seat" @click="handleClickSeat(385)" :class="{ selected: Event.reservedSeatsId.includes(385) }">3</div>
            <div class="seat" @click="handleClickSeat(386)" :class="{ selected: Event.reservedSeatsId.includes(386) }">4</div>
            <div class="seat" @click="handleClickSeat(387)" :class="{ selected: Event.reservedSeatsId.includes(387) }">5</div>
            <div class="seat" @click="handleClickSeat(388)" :class="{ selected: Event.reservedSeatsId.includes(388) }">6</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(419)" :class="{ selected: Event.reservedSeatsId.includes(419) }">1</div>
            <div class="seat" @click="handleClickSeat(420)" :class="{ selected: Event.reservedSeatsId.includes(420) }">2</div>
            <div class="seat" @click="handleClickSeat(421)" :class="{ selected: Event.reservedSeatsId.includes(421) }">3</div>
            <div class="seat" @click="handleClickSeat(422)" :class="{ selected: Event.reservedSeatsId.includes(422) }">4</div>
            <div class="seat" @click="handleClickSeat(423)" :class="{ selected: Event.reservedSeatsId.includes(423) }">5</div>
            <div class="seat" @click="handleClickSeat(424)" :class="{ selected: Event.reservedSeatsId.includes(424) }">6</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(456)" :class="{ selected: Event.reservedSeatsId.includes(456) }">1</div>
            <div class="seat" @click="handleClickSeat(457)" :class="{ selected: Event.reservedSeatsId.includes(457) }">2</div>
            <div class="seat" @click="handleClickSeat(458)" :class="{ selected: Event.reservedSeatsId.includes(458) }">3</div>
            <div class="seat" @click="handleClickSeat(459)" :class="{ selected: Event.reservedSeatsId.includes(459) }">4</div>
            <div class="seat" @click="handleClickSeat(460)" :class="{ selected: Event.reservedSeatsId.includes(460) }">5</div>
            <div class="seat" @click="handleClickSeat(461)" :class="{ selected: Event.reservedSeatsId.includes(461) }">6</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(493)" :class="{ selected: Event.reservedSeatsId.includes(493) }">1</div>
            <div class="seat" @click="handleClickSeat(494)" :class="{ selected: Event.reservedSeatsId.includes(494) }">2</div>
            <div class="seat" @click="handleClickSeat(495)" :class="{ selected: Event.reservedSeatsId.includes(495) }">3</div>
            <div class="seat" @click="handleClickSeat(496)" :class="{ selected: Event.reservedSeatsId.includes(496) }">4</div>
            <div class="seat" @click="handleClickSeat(497)" :class="{ selected: Event.reservedSeatsId.includes(497) }">5</div>
            <div class="seat" @click="handleClickSeat(498)" :class="{ selected: Event.reservedSeatsId.includes(498) }">6</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(531)" :class="{ selected: Event.reservedSeatsId.includes(531) }">1</div>
            <div class="seat" @click="handleClickSeat(532)" :class="{ selected: Event.reservedSeatsId.includes(532) }">2</div>
            <div class="seat" @click="handleClickSeat(533)" :class="{ selected: Event.reservedSeatsId.includes(533) }">3</div>
            <div class="seat" @click="handleClickSeat(534)" :class="{ selected: Event.reservedSeatsId.includes(534) }">4</div>
            <div class="seat" @click="handleClickSeat(535)" :class="{ selected: Event.reservedSeatsId.includes(535) }">5</div>
            <div class="seat" @click="handleClickSeat(536)" :class="{ selected: Event.reservedSeatsId.includes(536) }">6</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(569)" :class="{ selected: Event.reservedSeatsId.includes(569) }">1</div>
            <div class="seat" @click="handleClickSeat(570)" :class="{ selected: Event.reservedSeatsId.includes(570) }">2</div>
            <div class="seat" @click="handleClickSeat(571)" :class="{ selected: Event.reservedSeatsId.includes(571) }">3</div>
            <div class="seat" @click="handleClickSeat(572)" :class="{ selected: Event.reservedSeatsId.includes(572) }">4</div>
            <div class="seat" @click="handleClickSeat(573)" :class="{ selected: Event.reservedSeatsId.includes(573) }">5</div>
            <div class="seat" @click="handleClickSeat(574)" :class="{ selected: Event.reservedSeatsId.includes(574) }">6</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(608)" :class="{ selected: Event.reservedSeatsId.includes(608) }">1</div>
            <div class="seat" @click="handleClickSeat(609)" :class="{ selected: Event.reservedSeatsId.includes(609) }">2</div>
            <div class="seat" @click="handleClickSeat(610)" :class="{ selected: Event.reservedSeatsId.includes(610) }">3</div>
            <div class="seat" @click="handleClickSeat(611)" :class="{ selected: Event.reservedSeatsId.includes(611) }">4</div>
            <div class="seat" @click="handleClickSeat(612)" :class="{ selected: Event.reservedSeatsId.includes(612) }">5</div>
            <div class="seat" @click="handleClickSeat(613)" :class="{ selected: Event.reservedSeatsId.includes(613) }">6</div>
          </div>
        </div>
      </div>
      <!-- Middle Column -->
      <div v-else-if="selectedPart === 2">
        <h5 class="returnButton" @click="selectedPart = 0">
          <i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót
        </h5>
        <div class="column middle">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(250)" :class="{ selected: Event.reservedSeatsId.includes(250) }">1</div>
            <div class="seat" @click="handleClickSeat(251)" :class="{ selected: Event.reservedSeatsId.includes(251) }">2</div>
            <div class="seat" @click="handleClickSeat(252)" :class="{ selected: Event.reservedSeatsId.includes(252) }">3</div>
            <div class="seat" @click="handleClickSeat(253)" :class="{ selected: Event.reservedSeatsId.includes(253) }">4</div>
            <div class="seat" @click="handleClickSeat(254)" :class="{ selected: Event.reservedSeatsId.includes(254) }">5</div>
            <div class="seat" @click="handleClickSeat(255)" :class="{ selected: Event.reservedSeatsId.includes(255) }">6</div>
            <div class="seat" @click="handleClickSeat(256)" :class="{ selected: Event.reservedSeatsId.includes(256) }">7</div>
            <div class="seat" @click="handleClickSeat(257)" :class="{ selected: Event.reservedSeatsId.includes(257) }">8</div>
            <div class="seat" @click="handleClickSeat(258)" :class="{ selected: Event.reservedSeatsId.includes(258) }">9</div>
            <div class="seat" @click="handleClickSeat(259)" :class="{ selected: Event.reservedSeatsId.includes(259) }">10</div>
            <div class="seat" @click="handleClickSeat(260)" :class="{ selected: Event.reservedSeatsId.includes(260) }">11</div>
            <div class="seat" @click="handleClickSeat(261)" :class="{ selected: Event.reservedSeatsId.includes(261) }">12</div>
            <div class="seat" @click="handleClickSeat(262)" :class="{ selected: Event.reservedSeatsId.includes(262) }">13</div>
            <div class="seat" @click="handleClickSeat(263)" :class="{ selected: Event.reservedSeatsId.includes(263) }">14</div>
            <div class="seat" @click="handleClickSeat(264)" :class="{ selected: Event.reservedSeatsId.includes(264) }">15</div>
            <div class="seat" @click="handleClickSeat(265)" :class="{ selected: Event.reservedSeatsId.includes(265) }">16</div>
            <div class="seat" @click="handleClickSeat(266)" :class="{ selected: Event.reservedSeatsId.includes(266) }">17</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(283)" :class="{ selected: Event.reservedSeatsId.includes(283) }">7</div>
            <div class="seat" @click="handleClickSeat(284)" :class="{ selected: Event.reservedSeatsId.includes(284) }">8</div>
            <div class="seat" @click="handleClickSeat(285)" :class="{ selected: Event.reservedSeatsId.includes(285) }">9</div>
            <div class="seat" @click="handleClickSeat(286)" :class="{ selected: Event.reservedSeatsId.includes(286) }">10</div>
            <div class="seat" @click="handleClickSeat(287)" :class="{ selected: Event.reservedSeatsId.includes(287) }">11</div>
            <div class="seat" @click="handleClickSeat(288)" :class="{ selected: Event.reservedSeatsId.includes(288) }">12</div>
            <div class="seat" @click="handleClickSeat(289)" :class="{ selected: Event.reservedSeatsId.includes(289) }">13</div>
            <div class="seat" @click="handleClickSeat(290)" :class="{ selected: Event.reservedSeatsId.includes(290) }">14</div>
            <div class="seat" @click="handleClickSeat(291)" :class="{ selected: Event.reservedSeatsId.includes(291) }">15</div>
            <div class="seat" @click="handleClickSeat(292)" :class="{ selected: Event.reservedSeatsId.includes(292) }">16</div>
            <div class="seat" @click="handleClickSeat(293)" :class="{ selected: Event.reservedSeatsId.includes(293) }">17</div>
            <div class="seat" @click="handleClickSeat(294)" :class="{ selected: Event.reservedSeatsId.includes(294) }">18</div>
            <div class="seat" @click="handleClickSeat(295)" :class="{ selected: Event.reservedSeatsId.includes(295) }">19</div>
            <div class="seat" @click="handleClickSeat(296)" :class="{ selected: Event.reservedSeatsId.includes(296) }">20</div>
            <div class="seat" @click="handleClickSeat(297)" :class="{ selected: Event.reservedSeatsId.includes(297) }">21</div>
            <div class="seat" @click="handleClickSeat(298)" :class="{ selected: Event.reservedSeatsId.includes(298) }">22</div>
            <div class="seat" @click="handleClickSeat(299)" :class="{ selected: Event.reservedSeatsId.includes(299) }">23</div>
            <div class="seat" @click="handleClickSeat(300)" :class="{ selected: Event.reservedSeatsId.includes(300) }">24</div>
            <div class="seat" @click="handleClickSeat(301)" :class="{ selected: Event.reservedSeatsId.includes(301) }">25</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(318)" :class="{ selected: Event.reservedSeatsId.includes(318) }">7</div>
            <div class="seat" @click="handleClickSeat(319)" :class="{ selected: Event.reservedSeatsId.includes(319) }">8</div>
            <div class="seat" @click="handleClickSeat(320)" :class="{ selected: Event.reservedSeatsId.includes(320) }">9</div>
            <div class="seat" @click="handleClickSeat(321)" :class="{ selected: Event.reservedSeatsId.includes(321) }">10</div>
            <div class="seat" @click="handleClickSeat(322)" :class="{ selected: Event.reservedSeatsId.includes(322) }">11</div>
            <div class="seat" @click="handleClickSeat(323)" :class="{ selected: Event.reservedSeatsId.includes(323) }">12</div>
            <div class="seat" @click="handleClickSeat(324)" :class="{ selected: Event.reservedSeatsId.includes(324) }">13</div>
            <div class="seat" @click="handleClickSeat(325)" :class="{ selected: Event.reservedSeatsId.includes(325) }">14</div>
            <div class="seat" @click="handleClickSeat(326)" :class="{ selected: Event.reservedSeatsId.includes(326) }">15</div>
            <div class="seat" @click="handleClickSeat(327)" :class="{ selected: Event.reservedSeatsId.includes(327) }">16</div>
            <div class="seat" @click="handleClickSeat(328)" :class="{ selected: Event.reservedSeatsId.includes(328) }">17</div>
            <div class="seat" @click="handleClickSeat(329)" :class="{ selected: Event.reservedSeatsId.includes(329) }">18</div>
            <div class="seat" @click="handleClickSeat(330)" :class="{ selected: Event.reservedSeatsId.includes(330) }">19</div>
            <div class="seat" @click="handleClickSeat(331)" :class="{ selected: Event.reservedSeatsId.includes(331) }">20</div>
            <div class="seat" @click="handleClickSeat(332)" :class="{ selected: Event.reservedSeatsId.includes(332) }">21</div>
            <div class="seat" @click="handleClickSeat(333)" :class="{ selected: Event.reservedSeatsId.includes(333) }">22</div>
            <div class="seat" @click="handleClickSeat(334)" :class="{ selected: Event.reservedSeatsId.includes(334) }">23</div>
            <div class="seat" @click="handleClickSeat(335)" :class="{ selected: Event.reservedSeatsId.includes(335) }">24</div>
            <div class="seat" @click="handleClickSeat(336)" :class="{ selected: Event.reservedSeatsId.includes(336) }">25</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(353)" :class="{ selected: Event.reservedSeatsId.includes(353) }">7</div>
            <div class="seat" @click="handleClickSeat(354)" :class="{ selected: Event.reservedSeatsId.includes(354) }">8</div>
            <div class="seat" @click="handleClickSeat(355)" :class="{ selected: Event.reservedSeatsId.includes(355) }">9</div>
            <div class="seat" @click="handleClickSeat(356)" :class="{ selected: Event.reservedSeatsId.includes(356) }">10</div>
            <div class="seat" @click="handleClickSeat(357)" :class="{ selected: Event.reservedSeatsId.includes(357) }">11</div>
            <div class="seat" @click="handleClickSeat(358)" :class="{ selected: Event.reservedSeatsId.includes(358) }">12</div>
            <div class="seat" @click="handleClickSeat(359)" :class="{ selected: Event.reservedSeatsId.includes(359) }">13</div>
            <div class="seat" @click="handleClickSeat(360)" :class="{ selected: Event.reservedSeatsId.includes(360) }">14</div>
            <div class="seat" @click="handleClickSeat(361)" :class="{ selected: Event.reservedSeatsId.includes(361) }">15</div>
            <div class="seat" @click="handleClickSeat(362)" :class="{ selected: Event.reservedSeatsId.includes(362) }">16</div>
            <div class="seat" @click="handleClickSeat(363)" :class="{ selected: Event.reservedSeatsId.includes(363) }">17</div>
            <div class="seat" @click="handleClickSeat(364)" :class="{ selected: Event.reservedSeatsId.includes(364) }">18</div>
            <div class="seat" @click="handleClickSeat(365)" :class="{ selected: Event.reservedSeatsId.includes(365) }">19</div>
            <div class="seat" @click="handleClickSeat(366)" :class="{ selected: Event.reservedSeatsId.includes(366) }">20</div>
            <div class="seat" @click="handleClickSeat(367)" :class="{ selected: Event.reservedSeatsId.includes(367) }">21</div>
            <div class="seat" @click="handleClickSeat(368)" :class="{ selected: Event.reservedSeatsId.includes(368) }">22</div>
            <div class="seat" @click="handleClickSeat(369)" :class="{ selected: Event.reservedSeatsId.includes(369) }">23</div>
            <div class="seat" @click="handleClickSeat(370)" :class="{ selected: Event.reservedSeatsId.includes(370) }">24</div>
            <div class="seat" @click="handleClickSeat(371)" :class="{ selected: Event.reservedSeatsId.includes(371) }">25</div>
            <div class="seat" @click="handleClickSeat(372)" :class="{ selected: Event.reservedSeatsId.includes(372) }">26</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(389)" :class="{ selected: Event.reservedSeatsId.includes(389) }">7</div>
            <div class="seat" @click="handleClickSeat(390)" :class="{ selected: Event.reservedSeatsId.includes(390) }">8</div>
            <div class="seat" @click="handleClickSeat(391)" :class="{ selected: Event.reservedSeatsId.includes(391) }">9</div>
            <div class="seat" @click="handleClickSeat(392)" :class="{ selected: Event.reservedSeatsId.includes(392) }">10</div>
            <div class="seat" @click="handleClickSeat(393)" :class="{ selected: Event.reservedSeatsId.includes(393) }">11</div>
            <div class="seat" @click="handleClickSeat(394)" :class="{ selected: Event.reservedSeatsId.includes(394) }">12</div>
            <div class="seat" @click="handleClickSeat(395)" :class="{ selected: Event.reservedSeatsId.includes(395) }">13</div>
            <div class="seat" @click="handleClickSeat(396)" :class="{ selected: Event.reservedSeatsId.includes(396) }">14</div>
            <div class="seat" @click="handleClickSeat(397)" :class="{ selected: Event.reservedSeatsId.includes(397) }">15</div>
            <div class="seat" @click="handleClickSeat(398)" :class="{ selected: Event.reservedSeatsId.includes(398) }">16</div>
            <div class="seat" @click="handleClickSeat(399)" :class="{ selected: Event.reservedSeatsId.includes(399) }">17</div>
            <div class="seat" @click="handleClickSeat(400)" :class="{ selected: Event.reservedSeatsId.includes(400) }">18</div>
            <div class="seat" @click="handleClickSeat(401)" :class="{ selected: Event.reservedSeatsId.includes(401) }">19</div>
            <div class="seat" @click="handleClickSeat(402)" :class="{ selected: Event.reservedSeatsId.includes(402) }">20</div>
            <div class="seat" @click="handleClickSeat(403)" :class="{ selected: Event.reservedSeatsId.includes(403) }">21</div>
            <div class="seat" @click="handleClickSeat(404)" :class="{ selected: Event.reservedSeatsId.includes(404) }">22</div>
            <div class="seat" @click="handleClickSeat(405)" :class="{ selected: Event.reservedSeatsId.includes(405) }">23</div>
            <div class="seat" @click="handleClickSeat(406)" :class="{ selected: Event.reservedSeatsId.includes(406) }">24</div>
            <div class="seat" @click="handleClickSeat(407)" :class="{ selected: Event.reservedSeatsId.includes(407) }">25</div>
            <div class="seat" @click="handleClickSeat(408)" :class="{ selected: Event.reservedSeatsId.includes(408) }">26</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(425)" :class="{ selected: Event.reservedSeatsId.includes(425) }">7</div>
            <div class="seat" @click="handleClickSeat(426)" :class="{ selected: Event.reservedSeatsId.includes(426) }">8</div>
            <div class="seat" @click="handleClickSeat(427)" :class="{ selected: Event.reservedSeatsId.includes(427) }">9</div>
            <div class="seat" @click="handleClickSeat(428)" :class="{ selected: Event.reservedSeatsId.includes(428) }">10</div>
            <div class="seat" @click="handleClickSeat(429)" :class="{ selected: Event.reservedSeatsId.includes(429) }">11</div>
            <div class="seat" @click="handleClickSeat(430)" :class="{ selected: Event.reservedSeatsId.includes(430) }">12</div>
            <div class="seat" @click="handleClickSeat(431)" :class="{ selected: Event.reservedSeatsId.includes(431) }">13</div>
            <div class="seat" @click="handleClickSeat(432)" :class="{ selected: Event.reservedSeatsId.includes(432) }">14</div>
            <div class="seat" @click="handleClickSeat(433)" :class="{ selected: Event.reservedSeatsId.includes(433) }">15</div>
            <div class="seat" @click="handleClickSeat(434)" :class="{ selected: Event.reservedSeatsId.includes(434) }">16</div>
            <div class="seat" @click="handleClickSeat(435)" :class="{ selected: Event.reservedSeatsId.includes(435) }">17</div>
            <div class="seat" @click="handleClickSeat(436)" :class="{ selected: Event.reservedSeatsId.includes(436) }">18</div>
            <div class="seat" @click="handleClickSeat(437)" :class="{ selected: Event.reservedSeatsId.includes(437) }">19</div>
            <div class="seat" @click="handleClickSeat(438)" :class="{ selected: Event.reservedSeatsId.includes(438) }">20</div>
            <div class="seat" @click="handleClickSeat(439)" :class="{ selected: Event.reservedSeatsId.includes(439) }">21</div>
            <div class="seat" @click="handleClickSeat(440)" :class="{ selected: Event.reservedSeatsId.includes(440) }">22</div>
            <div class="seat" @click="handleClickSeat(441)" :class="{ selected: Event.reservedSeatsId.includes(441) }">23</div>
            <div class="seat" @click="handleClickSeat(442)" :class="{ selected: Event.reservedSeatsId.includes(442) }">24</div>
            <div class="seat" @click="handleClickSeat(443)" :class="{ selected: Event.reservedSeatsId.includes(443) }">25</div>
            <div class="seat" @click="handleClickSeat(444)" :class="{ selected: Event.reservedSeatsId.includes(444) }">26</div>
            <div class="seat" @click="handleClickSeat(445)" :class="{ selected: Event.reservedSeatsId.includes(445) }">27</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(462)" :class="{ selected: Event.reservedSeatsId.includes(462) }">7</div>
            <div class="seat" @click="handleClickSeat(463)" :class="{ selected: Event.reservedSeatsId.includes(463) }">8</div>
            <div class="seat" @click="handleClickSeat(464)" :class="{ selected: Event.reservedSeatsId.includes(464) }">9</div>
            <div class="seat" @click="handleClickSeat(465)" :class="{ selected: Event.reservedSeatsId.includes(465) }">10</div>
            <div class="seat" @click="handleClickSeat(466)" :class="{ selected: Event.reservedSeatsId.includes(466) }">11</div>
            <div class="seat" @click="handleClickSeat(467)" :class="{ selected: Event.reservedSeatsId.includes(467) }">12</div>
            <div class="seat" @click="handleClickSeat(468)" :class="{ selected: Event.reservedSeatsId.includes(468) }">13</div>
            <div class="seat" @click="handleClickSeat(469)" :class="{ selected: Event.reservedSeatsId.includes(469) }">14</div>
            <div class="seat" @click="handleClickSeat(470)" :class="{ selected: Event.reservedSeatsId.includes(470) }">15</div>
            <div class="seat" @click="handleClickSeat(471)" :class="{ selected: Event.reservedSeatsId.includes(471) }">16</div>
            <div class="seat" @click="handleClickSeat(472)" :class="{ selected: Event.reservedSeatsId.includes(472) }">17</div>
            <div class="seat" @click="handleClickSeat(473)" :class="{ selected: Event.reservedSeatsId.includes(473) }">18</div>
            <div class="seat" @click="handleClickSeat(474)" :class="{ selected: Event.reservedSeatsId.includes(474) }">19</div>
            <div class="seat" @click="handleClickSeat(475)" :class="{ selected: Event.reservedSeatsId.includes(475) }">20</div>
            <div class="seat" @click="handleClickSeat(476)" :class="{ selected: Event.reservedSeatsId.includes(476) }">21</div>
            <div class="seat" @click="handleClickSeat(477)" :class="{ selected: Event.reservedSeatsId.includes(477) }">22</div>
            <div class="seat" @click="handleClickSeat(478)" :class="{ selected: Event.reservedSeatsId.includes(478) }">23</div>
            <div class="seat" @click="handleClickSeat(479)" :class="{ selected: Event.reservedSeatsId.includes(479) }">24</div>
            <div class="seat" @click="handleClickSeat(480)" :class="{ selected: Event.reservedSeatsId.includes(480) }">25</div>
            <div class="seat" @click="handleClickSeat(481)" :class="{ selected: Event.reservedSeatsId.includes(481) }">26</div>
            <div class="seat" @click="handleClickSeat(482)" :class="{ selected: Event.reservedSeatsId.includes(482) }">27</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(499)" :class="{ selected: Event.reservedSeatsId.includes(499) }">7</div>
            <div class="seat" @click="handleClickSeat(500)" :class="{ selected: Event.reservedSeatsId.includes(500) }">8</div>
            <div class="seat" @click="handleClickSeat(501)" :class="{ selected: Event.reservedSeatsId.includes(501) }">9</div>
            <div class="seat" @click="handleClickSeat(502)" :class="{ selected: Event.reservedSeatsId.includes(502) }">10</div>
            <div class="seat" @click="handleClickSeat(503)" :class="{ selected: Event.reservedSeatsId.includes(503) }">11</div>
            <div class="seat" @click="handleClickSeat(504)" :class="{ selected: Event.reservedSeatsId.includes(504) }">12</div>
            <div class="seat" @click="handleClickSeat(505)" :class="{ selected: Event.reservedSeatsId.includes(505) }">13</div>
            <div class="seat" @click="handleClickSeat(506)" :class="{ selected: Event.reservedSeatsId.includes(506) }">14</div>
            <div class="seat" @click="handleClickSeat(507)" :class="{ selected: Event.reservedSeatsId.includes(507) }">15</div>
            <div class="seat" @click="handleClickSeat(508)" :class="{ selected: Event.reservedSeatsId.includes(508) }">16</div>
            <div class="seat" @click="handleClickSeat(509)" :class="{ selected: Event.reservedSeatsId.includes(509) }">17</div>
            <div class="seat" @click="handleClickSeat(510)" :class="{ selected: Event.reservedSeatsId.includes(510) }">18</div>
            <div class="seat" @click="handleClickSeat(511)" :class="{ selected: Event.reservedSeatsId.includes(511) }">19</div>
            <div class="seat" @click="handleClickSeat(512)" :class="{ selected: Event.reservedSeatsId.includes(512) }">20</div>
            <div class="seat" @click="handleClickSeat(513)" :class="{ selected: Event.reservedSeatsId.includes(513) }">21</div>
            <div class="seat" @click="handleClickSeat(514)" :class="{ selected: Event.reservedSeatsId.includes(514) }">22</div>
            <div class="seat" @click="handleClickSeat(515)" :class="{ selected: Event.reservedSeatsId.includes(515) }">23</div>
            <div class="seat" @click="handleClickSeat(516)" :class="{ selected: Event.reservedSeatsId.includes(516) }">24</div>
            <div class="seat" @click="handleClickSeat(517)" :class="{ selected: Event.reservedSeatsId.includes(517) }">25</div>
            <div class="seat" @click="handleClickSeat(518)" :class="{ selected: Event.reservedSeatsId.includes(518) }">26</div>
            <div class="seat" @click="handleClickSeat(519)" :class="{ selected: Event.reservedSeatsId.includes(519) }">27</div>
            <div class="seat" @click="handleClickSeat(520)" :class="{ selected: Event.reservedSeatsId.includes(520) }">28</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(537)" :class="{ selected: Event.reservedSeatsId.includes(537) }">7</div>
            <div class="seat" @click="handleClickSeat(538)" :class="{ selected: Event.reservedSeatsId.includes(538) }">8</div>
            <div class="seat" @click="handleClickSeat(539)" :class="{ selected: Event.reservedSeatsId.includes(539) }">9</div>
            <div class="seat" @click="handleClickSeat(540)" :class="{ selected: Event.reservedSeatsId.includes(540) }">10</div>
            <div class="seat" @click="handleClickSeat(541)" :class="{ selected: Event.reservedSeatsId.includes(541) }">11</div>
            <div class="seat" @click="handleClickSeat(542)" :class="{ selected: Event.reservedSeatsId.includes(542) }">12</div>
            <div class="seat" @click="handleClickSeat(543)" :class="{ selected: Event.reservedSeatsId.includes(543) }">13</div>
            <div class="seat" @click="handleClickSeat(544)" :class="{ selected: Event.reservedSeatsId.includes(544) }">14</div>
            <div class="seat" @click="handleClickSeat(545)" :class="{ selected: Event.reservedSeatsId.includes(545) }">15</div>
            <div class="seat" @click="handleClickSeat(546)" :class="{ selected: Event.reservedSeatsId.includes(546) }">16</div>
            <div class="seat" @click="handleClickSeat(547)" :class="{ selected: Event.reservedSeatsId.includes(547) }">17</div>
            <div class="seat" @click="handleClickSeat(548)" :class="{ selected: Event.reservedSeatsId.includes(548) }">18</div>
            <div class="seat" @click="handleClickSeat(549)" :class="{ selected: Event.reservedSeatsId.includes(549) }">19</div>
            <div class="seat" @click="handleClickSeat(550)" :class="{ selected: Event.reservedSeatsId.includes(550) }">20</div>
            <div class="seat" @click="handleClickSeat(551)" :class="{ selected: Event.reservedSeatsId.includes(551) }">21</div>
            <div class="seat" @click="handleClickSeat(552)" :class="{ selected: Event.reservedSeatsId.includes(552) }">22</div>
            <div class="seat" @click="handleClickSeat(553)" :class="{ selected: Event.reservedSeatsId.includes(553) }">23</div>
            <div class="seat" @click="handleClickSeat(554)" :class="{ selected: Event.reservedSeatsId.includes(554) }">24</div>
            <div class="seat" @click="handleClickSeat(555)" :class="{ selected: Event.reservedSeatsId.includes(555) }">25</div>
            <div class="seat" @click="handleClickSeat(556)" :class="{ selected: Event.reservedSeatsId.includes(556) }">26</div>
            <div class="seat" @click="handleClickSeat(557)" :class="{ selected: Event.reservedSeatsId.includes(557) }">27</div>
            <div class="seat" @click="handleClickSeat(558)" :class="{ selected: Event.reservedSeatsId.includes(558) }">28</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(575)" :class="{ selected: Event.reservedSeatsId.includes(575) }">7</div>
            <div class="seat" @click="handleClickSeat(576)" :class="{ selected: Event.reservedSeatsId.includes(576) }">8</div>
            <div class="seat" @click="handleClickSeat(577)" :class="{ selected: Event.reservedSeatsId.includes(577) }">9</div>
            <div class="seat" @click="handleClickSeat(578)" :class="{ selected: Event.reservedSeatsId.includes(578) }">10</div>
            <div class="seat" @click="handleClickSeat(579)" :class="{ selected: Event.reservedSeatsId.includes(579) }">11</div>
            <div class="seat" @click="handleClickSeat(580)" :class="{ selected: Event.reservedSeatsId.includes(580) }">12</div>
            <div class="seat" @click="handleClickSeat(581)" :class="{ selected: Event.reservedSeatsId.includes(581) }">13</div>
            <div class="seat" @click="handleClickSeat(582)" :class="{ selected: Event.reservedSeatsId.includes(582) }">14</div>
            <div class="seat" @click="handleClickSeat(583)" :class="{ selected: Event.reservedSeatsId.includes(583) }">15</div>
            <div class="seat" @click="handleClickSeat(584)" :class="{ selected: Event.reservedSeatsId.includes(584) }">16</div>
            <div class="seat" @click="handleClickSeat(585)" :class="{ selected: Event.reservedSeatsId.includes(585) }">17</div>
            <div class="seat" @click="handleClickSeat(586)" :class="{ selected: Event.reservedSeatsId.includes(586) }">18</div>
            <div class="seat" @click="handleClickSeat(587)" :class="{ selected: Event.reservedSeatsId.includes(587) }">19</div>
            <div class="seat" @click="handleClickSeat(588)" :class="{ selected: Event.reservedSeatsId.includes(588) }">20</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ selected: Event.reservedSeatsId.includes(589) }">21</div>
            <div class="seat" @click="handleClickSeat(590)" :class="{ selected: Event.reservedSeatsId.includes(590) }">22</div>
            <div class="seat" @click="handleClickSeat(591)" :class="{ selected: Event.reservedSeatsId.includes(591) }">23</div>
            <div class="seat" @click="handleClickSeat(592)" :class="{ selected: Event.reservedSeatsId.includes(592) }">24</div>
            <div class="seat" @click="handleClickSeat(593)" :class="{ selected: Event.reservedSeatsId.includes(593) }">25</div>
            <div class="seat" @click="handleClickSeat(594)" :class="{ selected: Event.reservedSeatsId.includes(594) }">26</div>
            <div class="seat" @click="handleClickSeat(595)" :class="{ selected: Event.reservedSeatsId.includes(595) }">27</div>
            <div class="seat" @click="handleClickSeat(596)" :class="{ selected: Event.reservedSeatsId.includes(596) }">28</div>
            <div class="seat" @click="handleClickSeat(597)" :class="{ selected: Event.reservedSeatsId.includes(597) }">29</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(614)" :class="{ selected: Event.reservedSeatsId.includes(614) }">7</div>
            <div class="seat" @click="handleClickSeat(615)" :class="{ selected: Event.reservedSeatsId.includes(615) }">8</div>
            <div class="seat" @click="handleClickSeat(616)" :class="{ selected: Event.reservedSeatsId.includes(616) }">9</div>
            <div class="seat" @click="handleClickSeat(617)" :class="{ selected: Event.reservedSeatsId.includes(617) }">10</div>
            <div class="seat" @click="handleClickSeat(618)" :class="{ selected: Event.reservedSeatsId.includes(618) }">11</div>
            <div class="seat" @click="handleClickSeat(619)" :class="{ selected: Event.reservedSeatsId.includes(619) }">12</div>
            <div class="seat" @click="handleClickSeat(620)" :class="{ selected: Event.reservedSeatsId.includes(620) }">13</div>
            <div class="seat" @click="handleClickSeat(621)" :class="{ selected: Event.reservedSeatsId.includes(621) }">14</div>
            <div class="seat" @click="handleClickSeat(622)" :class="{ selected: Event.reservedSeatsId.includes(622) }">15</div>
            <div class="seat" @click="handleClickSeat(623)" :class="{ selected: Event.reservedSeatsId.includes(623) }">16</div>
            <div class="seat" @click="handleClickSeat(624)" :class="{ selected: Event.reservedSeatsId.includes(624) }">17</div>
            <div class="seat" @click="handleClickSeat(625)" :class="{ selected: Event.reservedSeatsId.includes(625) }">18</div>
            <div class="seat" @click="handleClickSeat(626)" :class="{ selected: Event.reservedSeatsId.includes(626) }">19</div>
            <div class="seat" @click="handleClickSeat(627)" :class="{ selected: Event.reservedSeatsId.includes(627) }">20</div>
            <div class="seat" @click="handleClickSeat(628)" :class="{ selected: Event.reservedSeatsId.includes(628) }">21</div>
            <div class="seat" @click="handleClickSeat(629)" :class="{ selected: Event.reservedSeatsId.includes(629) }">22</div>
            <div class="seat" @click="handleClickSeat(630)" :class="{ selected: Event.reservedSeatsId.includes(630) }">23</div>
            <div class="seat" @click="handleClickSeat(631)" :class="{ selected: Event.reservedSeatsId.includes(631) }">24</div>
            <div class="seat" @click="handleClickSeat(632)" :class="{ selected: Event.reservedSeatsId.includes(632) }">25</div>
            <div class="seat" @click="handleClickSeat(633)" :class="{ selected: Event.reservedSeatsId.includes(633) }">26</div>
            <div class="seat" @click="handleClickSeat(634)" :class="{ selected: Event.reservedSeatsId.includes(634) }">27</div>
            <div class="seat" @click="handleClickSeat(635)" :class="{ selected: Event.reservedSeatsId.includes(635) }">28</div>
            <div class="seat" @click="handleClickSeat(636)" :class="{ selected: Event.reservedSeatsId.includes(636) }">29</div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div v-else-if="selectedPart === 3">
        <h5 class="returnButton" @click="selectedPart = 0">
          <i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót
        </h5>
        <div class="column">
          <div class="row">
            <span>IX</span>
            <div class="seat" @click="handleClickSeat(267)" :class="{ selected: Event.reservedSeatsId.includes(267) }">18</div>
            <div class="seat" @click="handleClickSeat(268)" :class="{ selected: Event.reservedSeatsId.includes(268) }">19</div>
            <div class="seat" @click="handleClickSeat(269)" :class="{ selected: Event.reservedSeatsId.includes(269) }">20</div>
            <div class="seat" @click="handleClickSeat(270)" :class="{ selected: Event.reservedSeatsId.includes(270) }">21</div>
            <div class="seat" @click="handleClickSeat(271)" :class="{ selected: Event.reservedSeatsId.includes(271) }">22</div>
            <div class="seat" @click="handleClickSeat(272)" :class="{ selected: Event.reservedSeatsId.includes(272) }">23</div>
            <div class="seat" @click="handleClickSeat(273)" :class="{ selected: Event.reservedSeatsId.includes(273) }">24</div>
            <div class="seat" @click="handleClickSeat(274)" :class="{ selected: Event.reservedSeatsId.includes(274) }">25</div>
            <div class="seat" @click="handleClickSeat(275)" :class="{ selected: Event.reservedSeatsId.includes(275) }">26</div>
            <div class="seat" @click="handleClickSeat(276)" :class="{ selected: Event.reservedSeatsId.includes(276) }">27</div>
          </div>
          <div class="row">
            <span>X</span>
            <div class="seat" @click="handleClickSeat(302)" :class="{ selected: Event.reservedSeatsId.includes(302) }">26</div>
            <div class="seat" @click="handleClickSeat(303)" :class="{ selected: Event.reservedSeatsId.includes(303) }">27</div>
            <div class="seat" @click="handleClickSeat(304)" :class="{ selected: Event.reservedSeatsId.includes(304) }">28</div>
            <div class="seat" @click="handleClickSeat(305)" :class="{ selected: Event.reservedSeatsId.includes(305) }">29</div>
            <div class="seat" @click="handleClickSeat(306)" :class="{ selected: Event.reservedSeatsId.includes(306) }">30</div>
            <div class="seat" @click="handleClickSeat(307)" :class="{ selected: Event.reservedSeatsId.includes(307) }">31</div>
            <div class="seat" @click="handleClickSeat(308)" :class="{ selected: Event.reservedSeatsId.includes(308) }">32</div>
            <div class="seat" @click="handleClickSeat(309)" :class="{ selected: Event.reservedSeatsId.includes(309) }">33</div>
            <div class="seat" @click="handleClickSeat(310)" :class="{ selected: Event.reservedSeatsId.includes(310) }">34</div>
            <div class="seat" @click="handleClickSeat(311)" :class="{ selected: Event.reservedSeatsId.includes(311) }">35</div>
          </div>
          <div class="row">
            <span>XI</span>
            <div class="seat" @click="handleClickSeat(337)" :class="{ selected: Event.reservedSeatsId.includes(337) }">26</div>
            <div class="seat" @click="handleClickSeat(338)" :class="{ selected: Event.reservedSeatsId.includes(338) }">27</div>
            <div class="seat" @click="handleClickSeat(339)" :class="{ selected: Event.reservedSeatsId.includes(339) }">28</div>
            <div class="seat" @click="handleClickSeat(340)" :class="{ selected: Event.reservedSeatsId.includes(340) }">29</div>
            <div class="seat" @click="handleClickSeat(341)" :class="{ selected: Event.reservedSeatsId.includes(341) }">30</div>
            <div class="seat" @click="handleClickSeat(342)" :class="{ selected: Event.reservedSeatsId.includes(342) }">31</div>
            <div class="seat" @click="handleClickSeat(343)" :class="{ selected: Event.reservedSeatsId.includes(343) }">32</div>
            <div class="seat" @click="handleClickSeat(344)" :class="{ selected: Event.reservedSeatsId.includes(344) }">33</div>
            <div class="seat" @click="handleClickSeat(345)" :class="{ selected: Event.reservedSeatsId.includes(345) }">34</div>
            <div class="seat" @click="handleClickSeat(346)" :class="{ selected: Event.reservedSeatsId.includes(346) }">35</div>
          </div>
          <div class="row">
            <span>XII</span>
            <div class="seat" @click="handleClickSeat(373)" :class="{ selected: Event.reservedSeatsId.includes(373) }">27</div>
            <div class="seat" @click="handleClickSeat(374)" :class="{ selected: Event.reservedSeatsId.includes(374) }">28</div>
            <div class="seat" @click="handleClickSeat(375)" :class="{ selected: Event.reservedSeatsId.includes(375) }">29</div>
            <div class="seat" @click="handleClickSeat(376)" :class="{ selected: Event.reservedSeatsId.includes(376) }">30</div>
            <div class="seat" @click="handleClickSeat(377)" :class="{ selected: Event.reservedSeatsId.includes(377) }">31</div>
            <div class="seat" @click="handleClickSeat(378)" :class="{ selected: Event.reservedSeatsId.includes(378) }">32</div>
            <div class="seat" @click="handleClickSeat(379)" :class="{ selected: Event.reservedSeatsId.includes(379) }">33</div>
            <div class="seat" @click="handleClickSeat(380)" :class="{ selected: Event.reservedSeatsId.includes(380) }">34</div>
            <div class="seat" @click="handleClickSeat(381)" :class="{ selected: Event.reservedSeatsId.includes(381) }">35</div>
            <div class="seat" @click="handleClickSeat(382)" :class="{ selected: Event.reservedSeatsId.includes(382) }">36</div>
          </div>
          <div class="row">
            <span>XIII</span>
            <div class="seat" @click="handleClickSeat(409)" :class="{ selected: Event.reservedSeatsId.includes(409) }">27</div>
            <div class="seat" @click="handleClickSeat(410)" :class="{ selected: Event.reservedSeatsId.includes(410) }">28</div>
            <div class="seat" @click="handleClickSeat(411)" :class="{ selected: Event.reservedSeatsId.includes(411) }">29</div>
            <div class="seat" @click="handleClickSeat(412)" :class="{ selected: Event.reservedSeatsId.includes(412) }">30</div>
            <div class="seat" @click="handleClickSeat(413)" :class="{ selected: Event.reservedSeatsId.includes(413) }">31</div>
            <div class="seat" @click="handleClickSeat(414)" :class="{ selected: Event.reservedSeatsId.includes(414) }">32</div>
            <div class="seat" @click="handleClickSeat(415)" :class="{ selected: Event.reservedSeatsId.includes(415) }">33</div>
            <div class="seat" @click="handleClickSeat(416)" :class="{ selected: Event.reservedSeatsId.includes(416) }">34</div>
            <div class="seat" @click="handleClickSeat(417)" :class="{ selected: Event.reservedSeatsId.includes(417) }">35</div>
            <div class="seat" @click="handleClickSeat(418)" :class="{ selected: Event.reservedSeatsId.includes(418) }">36</div>
          </div>
          <div class="row">
            <span>XIV</span>
            <div class="seat" @click="handleClickSeat(446)" :class="{ selected: Event.reservedSeatsId.includes(446) }">28</div>
            <div class="seat" @click="handleClickSeat(447)" :class="{ selected: Event.reservedSeatsId.includes(447) }">29</div>
            <div class="seat" @click="handleClickSeat(448)" :class="{ selected: Event.reservedSeatsId.includes(448) }">30</div>
            <div class="seat" @click="handleClickSeat(449)" :class="{ selected: Event.reservedSeatsId.includes(449) }">31</div>
            <div class="seat" @click="handleClickSeat(450)" :class="{ selected: Event.reservedSeatsId.includes(450) }">32</div>
            <div class="seat" @click="handleClickSeat(451)" :class="{ selected: Event.reservedSeatsId.includes(451) }">33</div>
            <div class="seat" @click="handleClickSeat(452)" :class="{ selected: Event.reservedSeatsId.includes(452) }">34</div>
            <div class="seat" @click="handleClickSeat(453)" :class="{ selected: Event.reservedSeatsId.includes(453) }">35</div>
            <div class="seat" @click="handleClickSeat(454)" :class="{ selected: Event.reservedSeatsId.includes(454) }">36</div>
            <div class="seat" @click="handleClickSeat(455)" :class="{ selected: Event.reservedSeatsId.includes(455) }">37</div>
          </div>
          <div class="row">
            <span>XV</span>
            <div class="seat" @click="handleClickSeat(483)" :class="{ selected: Event.reservedSeatsId.includes(483) }">28</div>
            <div class="seat" @click="handleClickSeat(484)" :class="{ selected: Event.reservedSeatsId.includes(484) }">29</div>
            <div class="seat" @click="handleClickSeat(485)" :class="{ selected: Event.reservedSeatsId.includes(485) }">30</div>
            <div class="seat" @click="handleClickSeat(486)" :class="{ selected: Event.reservedSeatsId.includes(486) }">31</div>
            <div class="seat" @click="handleClickSeat(487)" :class="{ selected: Event.reservedSeatsId.includes(487) }">32</div>
            <div class="seat" @click="handleClickSeat(488)" :class="{ selected: Event.reservedSeatsId.includes(488) }">33</div>
            <div class="seat" @click="handleClickSeat(489)" :class="{ selected: Event.reservedSeatsId.includes(489) }">34</div>
            <div class="seat" @click="handleClickSeat(490)" :class="{ selected: Event.reservedSeatsId.includes(490) }">35</div>
            <div class="seat" @click="handleClickSeat(491)" :class="{ selected: Event.reservedSeatsId.includes(491) }">36</div>
            <div class="seat" @click="handleClickSeat(492)" :class="{ selected: Event.reservedSeatsId.includes(492) }">37</div>
          </div>
          <div class="row">
            <span>XVI</span>
            <div class="seat" @click="handleClickSeat(521)" :class="{ selected: Event.reservedSeatsId.includes(521) }">29</div>
            <div class="seat" @click="handleClickSeat(522)" :class="{ selected: Event.reservedSeatsId.includes(522) }">30</div>
            <div class="seat" @click="handleClickSeat(523)" :class="{ selected: Event.reservedSeatsId.includes(523) }">31</div>
            <div class="seat" @click="handleClickSeat(524)" :class="{ selected: Event.reservedSeatsId.includes(524) }">32</div>
            <div class="seat" @click="handleClickSeat(525)" :class="{ selected: Event.reservedSeatsId.includes(525) }">33</div>
            <div class="seat" @click="handleClickSeat(526)" :class="{ selected: Event.reservedSeatsId.includes(526) }">34</div>
            <div class="seat" @click="handleClickSeat(527)" :class="{ selected: Event.reservedSeatsId.includes(527) }">35</div>
            <div class="seat" @click="handleClickSeat(528)" :class="{ selected: Event.reservedSeatsId.includes(528) }">36</div>
            <div class="seat" @click="handleClickSeat(529)" :class="{ selected: Event.reservedSeatsId.includes(529) }">37</div>
            <div class="seat" @click="handleClickSeat(530)" :class="{ selected: Event.reservedSeatsId.includes(530) }">38</div>
          </div>
          <div class="row">
            <span>XVII</span>
            <div class="seat" @click="handleClickSeat(559)" :class="{ selected: Event.reservedSeatsId.includes(559) }">29</div>
            <div class="seat" @click="handleClickSeat(560)" :class="{ selected: Event.reservedSeatsId.includes(560) }">30</div>
            <div class="seat" @click="handleClickSeat(561)" :class="{ selected: Event.reservedSeatsId.includes(561) }">31</div>
            <div class="seat" @click="handleClickSeat(562)" :class="{ selected: Event.reservedSeatsId.includes(562) }">32</div>
            <div class="seat" @click="handleClickSeat(563)" :class="{ selected: Event.reservedSeatsId.includes(563) }">33</div>
            <div class="seat" @click="handleClickSeat(564)" :class="{ selected: Event.reservedSeatsId.includes(564) }">34</div>
            <div class="seat" @click="handleClickSeat(565)" :class="{ selected: Event.reservedSeatsId.includes(565) }">35</div>
            <div class="seat" @click="handleClickSeat(566)" :class="{ selected: Event.reservedSeatsId.includes(566) }">36</div>
            <div class="seat" @click="handleClickSeat(567)" :class="{ selected: Event.reservedSeatsId.includes(567) }">37</div>
            <div class="seat" @click="handleClickSeat(568)" :class="{ selected: Event.reservedSeatsId.includes(568) }">38</div>
          </div>
          <div class="row">
            <span>XVIII</span>
            <div class="seat" @click="handleClickSeat(588)" :class="{ selected: Event.reservedSeatsId.includes(588) }">30</div>
            <div class="seat" @click="handleClickSeat(589)" :class="{ selected: Event.reservedSeatsId.includes(589) }">31</div>
            <div class="seat" @click="handleClickSeat(600)" :class="{ selected: Event.reservedSeatsId.includes(600) }">32</div>
            <div class="seat" @click="handleClickSeat(601)" :class="{ selected: Event.reservedSeatsId.includes(601) }">33</div>
            <div class="seat" @click="handleClickSeat(602)" :class="{ selected: Event.reservedSeatsId.includes(602) }">34</div>
            <div class="seat" @click="handleClickSeat(603)" :class="{ selected: Event.reservedSeatsId.includes(603) }">35</div>
            <div class="seat" @click="handleClickSeat(604)" :class="{ selected: Event.reservedSeatsId.includes(604) }">36</div>
            <div class="seat" @click="handleClickSeat(605)" :class="{ selected: Event.reservedSeatsId.includes(605) }">37</div>
            <div class="seat" @click="handleClickSeat(606)" :class="{ selected: Event.reservedSeatsId.includes(606) }">38</div>
            <div class="seat" @click="handleClickSeat(607)" :class="{ selected: Event.reservedSeatsId.includes(607) }">39</div>
          </div>
          <div class="row">
            <span>XIX</span>
            <div class="seat" @click="handleClickSeat(637)" :class="{ selected: Event.reservedSeatsId.includes(637) }">30</div>
            <div class="seat" @click="handleClickSeat(638)" :class="{ selected: Event.reservedSeatsId.includes(638) }">31</div>
            <div class="seat" @click="handleClickSeat(639)" :class="{ selected: Event.reservedSeatsId.includes(639) }">32</div>
            <div class="seat" @click="handleClickSeat(640)" :class="{ selected: Event.reservedSeatsId.includes(640) }">33</div>
            <div class="seat" @click="handleClickSeat(641)" :class="{ selected: Event.reservedSeatsId.includes(641) }">34</div>
            <div class="seat" @click="handleClickSeat(642)" :class="{ selected: Event.reservedSeatsId.includes(642) }">35</div>
            <div class="seat" @click="handleClickSeat(643)" :class="{ selected: Event.reservedSeatsId.includes(643) }">36</div>
            <div class="seat" @click="handleClickSeat(644)" :class="{ selected: Event.reservedSeatsId.includes(644) }">37</div>
            <div class="seat" @click="handleClickSeat(645)" :class="{ selected: Event.reservedSeatsId.includes(645) }">38</div>
            <div class="seat" @click="handleClickSeat(646)" :class="{ selected: Event.reservedSeatsId.includes(646) }">39</div>
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
