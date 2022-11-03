<template>
  <div>
    <div class="largeLayout">
      <div class="scene">Scena</div>
      <div class="sectorContainer">
        <!-- Left column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(1)" :class="{ selected: Event.reservedSeatsId.includes(1) }">1</div>
            <div class="seat" @click="handleClickSeat(2)" :class="{ selected: Event.reservedSeatsId.includes(2) }">2</div>
            <div class="seat" @click="handleClickSeat(3)" :class="{ selected: Event.reservedSeatsId.includes(3) }">3</div>
            <div class="seat" @click="handleClickSeat(4)" :class="{ selected: Event.reservedSeatsId.includes(4) }">4</div>
            <div class="seat" @click="handleClickSeat(5)" :class="{ selected: Event.reservedSeatsId.includes(5) }">5</div>
            <div class="seat" @click="handleClickSeat(6)" :class="{ selected: Event.reservedSeatsId.includes(6) }">6</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(29)" :class="{ selected: Event.reservedSeatsId.includes(29) }">1</div>
            <div class="seat" @click="handleClickSeat(30)" :class="{ selected: Event.reservedSeatsId.includes(30) }">2</div>
            <div class="seat" @click="handleClickSeat(31)" :class="{ selected: Event.reservedSeatsId.includes(31) }">3</div>
            <div class="seat" @click="handleClickSeat(32)" :class="{ selected: Event.reservedSeatsId.includes(32) }">4</div>
            <div class="seat" @click="handleClickSeat(33)" :class="{ selected: Event.reservedSeatsId.includes(33) }">5</div>
            <div class="seat" @click="handleClickSeat(34)" :class="{ selected: Event.reservedSeatsId.includes(34) }">6</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(58)" :class="{ selected: Event.reservedSeatsId.includes(58) }">1</div>
            <div class="seat" @click="handleClickSeat(59)" :class="{ selected: Event.reservedSeatsId.includes(59) }">2</div>
            <div class="seat" @click="handleClickSeat(60)" :class="{ selected: Event.reservedSeatsId.includes(60) }">3</div>
            <div class="seat" @click="handleClickSeat(61)" :class="{ selected: Event.reservedSeatsId.includes(61) }">4</div>
            <div class="seat" @click="handleClickSeat(62)" :class="{ selected: Event.reservedSeatsId.includes(62) }">5</div>
            <div class="seat" @click="handleClickSeat(63)" :class="{ selected: Event.reservedSeatsId.includes(63) }">6</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(89)" :class="{ selected: Event.reservedSeatsId.includes(89) }">1</div>
            <div class="seat" @click="handleClickSeat(90)" :class="{ selected: Event.reservedSeatsId.includes(90) }">2</div>
            <div class="seat" @click="handleClickSeat(91)" :class="{ selected: Event.reservedSeatsId.includes(91) }">3</div>
            <div class="seat" @click="handleClickSeat(92)" :class="{ selected: Event.reservedSeatsId.includes(92) }">4</div>
            <div class="seat" @click="handleClickSeat(93)" :class="{ selected: Event.reservedSeatsId.includes(93) }">5</div>
            <div class="seat" @click="handleClickSeat(94)" :class="{ selected: Event.reservedSeatsId.includes(94) }">6</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(120)" :class="{ selected: Event.reservedSeatsId.includes(120) }">1</div>
            <div class="seat" @click="handleClickSeat(121)" :class="{ selected: Event.reservedSeatsId.includes(121) }">2</div>
            <div class="seat" @click="handleClickSeat(122)" :class="{ selected: Event.reservedSeatsId.includes(122) }">3</div>
            <div class="seat" @click="handleClickSeat(123)" :class="{ selected: Event.reservedSeatsId.includes(123) }">4</div>
            <div class="seat" @click="handleClickSeat(124)" :class="{ selected: Event.reservedSeatsId.includes(124) }">5</div>
            <div class="seat" @click="handleClickSeat(125)" :class="{ selected: Event.reservedSeatsId.includes(125) }">6</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(152)" :class="{ selected: Event.reservedSeatsId.includes(152) }">1</div>
            <div class="seat" @click="handleClickSeat(153)" :class="{ selected: Event.reservedSeatsId.includes(153) }">2</div>
            <div class="seat" @click="handleClickSeat(154)" :class="{ selected: Event.reservedSeatsId.includes(154) }">3</div>
            <div class="seat" @click="handleClickSeat(155)" :class="{ selected: Event.reservedSeatsId.includes(155) }">4</div>
            <div class="seat" @click="handleClickSeat(156)" :class="{ selected: Event.reservedSeatsId.includes(156) }">5</div>
            <div class="seat" @click="handleClickSeat(157)" :class="{ selected: Event.reservedSeatsId.includes(157) }">6</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(184)" :class="{ selected: Event.reservedSeatsId.includes(184) }">1</div>
            <div class="seat" @click="handleClickSeat(185)" :class="{ selected: Event.reservedSeatsId.includes(185) }">2</div>
            <div class="seat" @click="handleClickSeat(186)" :class="{ selected: Event.reservedSeatsId.includes(186) }">3</div>
            <div class="seat" @click="handleClickSeat(187)" :class="{ selected: Event.reservedSeatsId.includes(187) }">4</div>
            <div class="seat" @click="handleClickSeat(188)" :class="{ selected: Event.reservedSeatsId.includes(188) }">5</div>
            <div class="seat" @click="handleClickSeat(189)" :class="{ selected: Event.reservedSeatsId.includes(189) }">6</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(217)" :class="{ selected: Event.reservedSeatsId.includes(217) }">1</div>
            <div class="seat" @click="handleClickSeat(218)" :class="{ selected: Event.reservedSeatsId.includes(218) }">2</div>
            <div class="seat" @click="handleClickSeat(219)" :class="{ selected: Event.reservedSeatsId.includes(219) }">3</div>
            <div class="seat" @click="handleClickSeat(220)" :class="{ selected: Event.reservedSeatsId.includes(220) }">4</div>
            <div class="seat" @click="handleClickSeat(221)" :class="{ selected: Event.reservedSeatsId.includes(221) }">5</div>
            <div class="seat" @click="handleClickSeat(222)" :class="{ selected: Event.reservedSeatsId.includes(222) }">6</div>
          </div>
        </div>
        <!-- Middle column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(7)" :class="{ selected: Event.reservedSeatsId.includes(7) }">7</div>
            <div class="seat" @click="handleClickSeat(8)" :class="{ selected: Event.reservedSeatsId.includes(8) }">8</div>
            <div class="seat" @click="handleClickSeat(9)" :class="{ selected: Event.reservedSeatsId.includes(9) }">9</div>
            <div class="seat" @click="handleClickSeat(10)" :class="{ selected: Event.reservedSeatsId.includes(10) }">10</div>
            <div class="seat" @click="handleClickSeat(11)" :class="{ selected: Event.reservedSeatsId.includes(11) }">11</div>
            <div class="seat" @click="handleClickSeat(12)" :class="{ selected: Event.reservedSeatsId.includes(12) }">12</div>
            <div class="seat" @click="handleClickSeat(13)" :class="{ selected: Event.reservedSeatsId.includes(13) }">13</div>
            <div class="seat" @click="handleClickSeat(14)" :class="{ selected: Event.reservedSeatsId.includes(14) }">14</div>
            <div class="seat" @click="handleClickSeat(15)" :class="{ selected: Event.reservedSeatsId.includes(15) }">15</div>
            <div class="seat" @click="handleClickSeat(16)" :class="{ selected: Event.reservedSeatsId.includes(16) }">16</div>
            <div class="seat" @click="handleClickSeat(17)" :class="{ selected: Event.reservedSeatsId.includes(17) }">17</div>
            <div class="seat" @click="handleClickSeat(18)" :class="{ selected: Event.reservedSeatsId.includes(18) }">18</div>
            <div class="seat" @click="handleClickSeat(19)" :class="{ selected: Event.reservedSeatsId.includes(19) }">19</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(35)" :class="{ selected: Event.reservedSeatsId.includes(35) }">7</div>
            <div class="seat" @click="handleClickSeat(36)" :class="{ selected: Event.reservedSeatsId.includes(36) }">8</div>
            <div class="seat" @click="handleClickSeat(37)" :class="{ selected: Event.reservedSeatsId.includes(37) }">9</div>
            <div class="seat" @click="handleClickSeat(38)" :class="{ selected: Event.reservedSeatsId.includes(38) }">10</div>
            <div class="seat" @click="handleClickSeat(39)" :class="{ selected: Event.reservedSeatsId.includes(39) }">11</div>
            <div class="seat" @click="handleClickSeat(40)" :class="{ selected: Event.reservedSeatsId.includes(40) }">12</div>
            <div class="seat" @click="handleClickSeat(41)" :class="{ selected: Event.reservedSeatsId.includes(41) }">13</div>
            <div class="seat" @click="handleClickSeat(42)" :class="{ selected: Event.reservedSeatsId.includes(42) }">14</div>
            <div class="seat" @click="handleClickSeat(43)" :class="{ selected: Event.reservedSeatsId.includes(43) }">15</div>
            <div class="seat" @click="handleClickSeat(44)" :class="{ selected: Event.reservedSeatsId.includes(44) }">16</div>
            <div class="seat" @click="handleClickSeat(45)" :class="{ selected: Event.reservedSeatsId.includes(45) }">17</div>
            <div class="seat" @click="handleClickSeat(46)" :class="{ selected: Event.reservedSeatsId.includes(46) }">18</div>
            <div class="seat" @click="handleClickSeat(47)" :class="{ selected: Event.reservedSeatsId.includes(47) }">19</div>
            <div class="seat" @click="handleClickSeat(48)" :class="{ selected: Event.reservedSeatsId.includes(48) }">20</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(64)" :class="{ selected: Event.reservedSeatsId.includes(64) }">7</div>
            <div class="seat" @click="handleClickSeat(65)" :class="{ selected: Event.reservedSeatsId.includes(65) }">8</div>
            <div class="seat" @click="handleClickSeat(66)" :class="{ selected: Event.reservedSeatsId.includes(66) }">9</div>
            <div class="seat" @click="handleClickSeat(67)" :class="{ selected: Event.reservedSeatsId.includes(67) }">10</div>
            <div class="seat" @click="handleClickSeat(68)" :class="{ selected: Event.reservedSeatsId.includes(68) }">11</div>
            <div class="seat" @click="handleClickSeat(69)" :class="{ selected: Event.reservedSeatsId.includes(69) }">12</div>
            <div class="seat" @click="handleClickSeat(70)" :class="{ selected: Event.reservedSeatsId.includes(70) }">13</div>
            <div class="seat" @click="handleClickSeat(71)" :class="{ selected: Event.reservedSeatsId.includes(71) }">14</div>
            <div class="seat" @click="handleClickSeat(72)" :class="{ selected: Event.reservedSeatsId.includes(72) }">15</div>
            <div class="seat" @click="handleClickSeat(73)" :class="{ selected: Event.reservedSeatsId.includes(73) }">16</div>
            <div class="seat" @click="handleClickSeat(74)" :class="{ selected: Event.reservedSeatsId.includes(74) }">17</div>
            <div class="seat" @click="handleClickSeat(75)" :class="{ selected: Event.reservedSeatsId.includes(75) }">18</div>
            <div class="seat" @click="handleClickSeat(76)" :class="{ selected: Event.reservedSeatsId.includes(76) }">19</div>
            <div class="seat" @click="handleClickSeat(77)" :class="{ selected: Event.reservedSeatsId.includes(77) }">20</div>
            <div class="seat" @click="handleClickSeat(78)" :class="{ selected: Event.reservedSeatsId.includes(78) }">21</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(95)" :class="{ selected: Event.reservedSeatsId.includes(95) }">7</div>
            <div class="seat" @click="handleClickSeat(96)" :class="{ selected: Event.reservedSeatsId.includes(96) }">8</div>
            <div class="seat" @click="handleClickSeat(97)" :class="{ selected: Event.reservedSeatsId.includes(97) }">9</div>
            <div class="seat" @click="handleClickSeat(98)" :class="{ selected: Event.reservedSeatsId.includes(98) }">10</div>
            <div class="seat" @click="handleClickSeat(99)" :class="{ selected: Event.reservedSeatsId.includes(99) }">11</div>
            <div class="seat" @click="handleClickSeat(100)" :class="{ selected: Event.reservedSeatsId.includes(100) }">12</div>
            <div class="seat" @click="handleClickSeat(101)" :class="{ selected: Event.reservedSeatsId.includes(101) }">13</div>
            <div class="seat" @click="handleClickSeat(102)" :class="{ selected: Event.reservedSeatsId.includes(102) }">14</div>
            <div class="seat" @click="handleClickSeat(103)" :class="{ selected: Event.reservedSeatsId.includes(103) }">15</div>
            <div class="seat" @click="handleClickSeat(104)" :class="{ selected: Event.reservedSeatsId.includes(104) }">16</div>
            <div class="seat" @click="handleClickSeat(105)" :class="{ selected: Event.reservedSeatsId.includes(105) }">17</div>
            <div class="seat" @click="handleClickSeat(106)" :class="{ selected: Event.reservedSeatsId.includes(106) }">18</div>
            <div class="seat" @click="handleClickSeat(107)" :class="{ selected: Event.reservedSeatsId.includes(107) }">19</div>
            <div class="seat" @click="handleClickSeat(108)" :class="{ selected: Event.reservedSeatsId.includes(108) }">20</div>
            <div class="seat" @click="handleClickSeat(109)" :class="{ selected: Event.reservedSeatsId.includes(109) }">21</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(126)" :class="{ selected: Event.reservedSeatsId.includes(126) }">7</div>
            <div class="seat" @click="handleClickSeat(127)" :class="{ selected: Event.reservedSeatsId.includes(127) }">8</div>
            <div class="seat" @click="handleClickSeat(128)" :class="{ selected: Event.reservedSeatsId.includes(128) }">9</div>
            <div class="seat" @click="handleClickSeat(129)" :class="{ selected: Event.reservedSeatsId.includes(129) }">10</div>
            <div class="seat" @click="handleClickSeat(130)" :class="{ selected: Event.reservedSeatsId.includes(130) }">11</div>
            <div class="seat" @click="handleClickSeat(131)" :class="{ selected: Event.reservedSeatsId.includes(131) }">12</div>
            <div class="seat" @click="handleClickSeat(132)" :class="{ selected: Event.reservedSeatsId.includes(132) }">13</div>
            <div class="seat" @click="handleClickSeat(133)" :class="{ selected: Event.reservedSeatsId.includes(133) }">14</div>
            <div class="seat" @click="handleClickSeat(134)" :class="{ selected: Event.reservedSeatsId.includes(134) }">15</div>
            <div class="seat" @click="handleClickSeat(135)" :class="{ selected: Event.reservedSeatsId.includes(135) }">16</div>
            <div class="seat" @click="handleClickSeat(136)" :class="{ selected: Event.reservedSeatsId.includes(136) }">17</div>
            <div class="seat" @click="handleClickSeat(137)" :class="{ selected: Event.reservedSeatsId.includes(137) }">18</div>
            <div class="seat" @click="handleClickSeat(138)" :class="{ selected: Event.reservedSeatsId.includes(138) }">19</div>
            <div class="seat" @click="handleClickSeat(139)" :class="{ selected: Event.reservedSeatsId.includes(139) }">20</div>
            <div class="seat" @click="handleClickSeat(140)" :class="{ selected: Event.reservedSeatsId.includes(140) }">21</div>
            <div class="seat" @click="handleClickSeat(141)" :class="{ selected: Event.reservedSeatsId.includes(141) }">22</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(158)" :class="{ selected: Event.reservedSeatsId.includes(158) }">7</div>
            <div class="seat" @click="handleClickSeat(159)" :class="{ selected: Event.reservedSeatsId.includes(159) }">8</div>
            <div class="seat" @click="handleClickSeat(160)" :class="{ selected: Event.reservedSeatsId.includes(160) }">9</div>
            <div class="seat" @click="handleClickSeat(161)" :class="{ selected: Event.reservedSeatsId.includes(161) }">10</div>
            <div class="seat" @click="handleClickSeat(162)" :class="{ selected: Event.reservedSeatsId.includes(162) }">11</div>
            <div class="seat" @click="handleClickSeat(163)" :class="{ selected: Event.reservedSeatsId.includes(163) }">12</div>
            <div class="seat" @click="handleClickSeat(164)" :class="{ selected: Event.reservedSeatsId.includes(164) }">13</div>
            <div class="seat" @click="handleClickSeat(165)" :class="{ selected: Event.reservedSeatsId.includes(165) }">14</div>
            <div class="seat" @click="handleClickSeat(166)" :class="{ selected: Event.reservedSeatsId.includes(166) }">15</div>
            <div class="seat" @click="handleClickSeat(167)" :class="{ selected: Event.reservedSeatsId.includes(167) }">16</div>
            <div class="seat" @click="handleClickSeat(168)" :class="{ selected: Event.reservedSeatsId.includes(168) }">17</div>
            <div class="seat" @click="handleClickSeat(169)" :class="{ selected: Event.reservedSeatsId.includes(169) }">18</div>
            <div class="seat" @click="handleClickSeat(170)" :class="{ selected: Event.reservedSeatsId.includes(170) }">19</div>
            <div class="seat" @click="handleClickSeat(171)" :class="{ selected: Event.reservedSeatsId.includes(171) }">20</div>
            <div class="seat" @click="handleClickSeat(172)" :class="{ selected: Event.reservedSeatsId.includes(172) }">21</div>
            <div class="seat" @click="handleClickSeat(173)" :class="{ selected: Event.reservedSeatsId.includes(173) }">22</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(190)" :class="{ selected: Event.reservedSeatsId.includes(190) }">7</div>
            <div class="seat" @click="handleClickSeat(191)" :class="{ selected: Event.reservedSeatsId.includes(191) }">8</div>
            <div class="seat" @click="handleClickSeat(192)" :class="{ selected: Event.reservedSeatsId.includes(192) }">9</div>
            <div class="seat" @click="handleClickSeat(193)" :class="{ selected: Event.reservedSeatsId.includes(193) }">10</div>
            <div class="seat" @click="handleClickSeat(194)" :class="{ selected: Event.reservedSeatsId.includes(194) }">11</div>
            <div class="seat" @click="handleClickSeat(195)" :class="{ selected: Event.reservedSeatsId.includes(195) }">12</div>
            <div class="seat" @click="handleClickSeat(196)" :class="{ selected: Event.reservedSeatsId.includes(196) }">13</div>
            <div class="seat" @click="handleClickSeat(197)" :class="{ selected: Event.reservedSeatsId.includes(197) }">14</div>
            <div class="seat" @click="handleClickSeat(198)" :class="{ selected: Event.reservedSeatsId.includes(198) }">15</div>
            <div class="seat" @click="handleClickSeat(199)" :class="{ selected: Event.reservedSeatsId.includes(199) }">16</div>
            <div class="seat" @click="handleClickSeat(200)" :class="{ selected: Event.reservedSeatsId.includes(200) }">17</div>
            <div class="seat" @click="handleClickSeat(201)" :class="{ selected: Event.reservedSeatsId.includes(201) }">18</div>
            <div class="seat" @click="handleClickSeat(202)" :class="{ selected: Event.reservedSeatsId.includes(202) }">19</div>
            <div class="seat" @click="handleClickSeat(203)" :class="{ selected: Event.reservedSeatsId.includes(203) }">20</div>
            <div class="seat" @click="handleClickSeat(204)" :class="{ selected: Event.reservedSeatsId.includes(204) }">21</div>
            <div class="seat" @click="handleClickSeat(205)" :class="{ selected: Event.reservedSeatsId.includes(205) }">22</div>
            <div class="seat" @click="handleClickSeat(206)" :class="{ selected: Event.reservedSeatsId.includes(206) }">23</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(223)" :class="{ selected: Event.reservedSeatsId.includes(223) }">7</div>
            <div class="seat" @click="handleClickSeat(224)" :class="{ selected: Event.reservedSeatsId.includes(224) }">8</div>
            <div class="seat" @click="handleClickSeat(225)" :class="{ selected: Event.reservedSeatsId.includes(225) }">9</div>
            <div class="seat" @click="handleClickSeat(226)" :class="{ selected: Event.reservedSeatsId.includes(226) }">10</div>
            <div class="seat" @click="handleClickSeat(227)" :class="{ selected: Event.reservedSeatsId.includes(227) }">11</div>
            <div class="seat" @click="handleClickSeat(228)" :class="{ selected: Event.reservedSeatsId.includes(228) }">12</div>
            <div class="seat" @click="handleClickSeat(229)" :class="{ selected: Event.reservedSeatsId.includes(229) }">13</div>
            <div class="seat" @click="handleClickSeat(230)" :class="{ selected: Event.reservedSeatsId.includes(230) }">14</div>
            <div class="seat" @click="handleClickSeat(231)" :class="{ selected: Event.reservedSeatsId.includes(231) }">15</div>
            <div class="seat" @click="handleClickSeat(232)" :class="{ selected: Event.reservedSeatsId.includes(232) }">16</div>
            <div class="seat" @click="handleClickSeat(233)" :class="{ selected: Event.reservedSeatsId.includes(233) }">17</div>
            <div class="seat" @click="handleClickSeat(234)" :class="{ selected: Event.reservedSeatsId.includes(234) }">18</div>
            <div class="seat" @click="handleClickSeat(235)" :class="{ selected: Event.reservedSeatsId.includes(235) }">19</div>
            <div class="seat" @click="handleClickSeat(236)" :class="{ selected: Event.reservedSeatsId.includes(236) }">20</div>
            <div class="seat" @click="handleClickSeat(237)" :class="{ selected: Event.reservedSeatsId.includes(237) }">21</div>
            <div class="seat" @click="handleClickSeat(238)" :class="{ selected: Event.reservedSeatsId.includes(238) }">22</div>
            <div class="seat" @click="handleClickSeat(239)" :class="{ selected: Event.reservedSeatsId.includes(239) }">23</div>
          </div>
        </div>
        <!-- Right column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(20)" :class="{ selected: Event.reservedSeatsId.includes(20) }">20</div>
            <div class="seat" @click="handleClickSeat(21)" :class="{ selected: Event.reservedSeatsId.includes(21) }">21</div>
            <div class="seat" @click="handleClickSeat(22)" :class="{ selected: Event.reservedSeatsId.includes(22) }">22</div>
            <div class="seat" @click="handleClickSeat(23)" :class="{ selected: Event.reservedSeatsId.includes(23) }">23</div>
            <div class="seat" @click="handleClickSeat(24)" :class="{ selected: Event.reservedSeatsId.includes(24) }">24</div>
            <div class="seat" @click="handleClickSeat(25)" :class="{ selected: Event.reservedSeatsId.includes(25) }">25</div>
            <div class="seat" @click="handleClickSeat(26)" :class="{ selected: Event.reservedSeatsId.includes(26) }">26</div>
            <div class="seat" @click="handleClickSeat(27)" :class="{ selected: Event.reservedSeatsId.includes(27) }">27</div>
            <div class="seat" @click="handleClickSeat(28)" :class="{ selected: Event.reservedSeatsId.includes(28) }">28</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(49)" :class="{ selected: Event.reservedSeatsId.includes(49) }">21</div>
            <div class="seat" @click="handleClickSeat(50)" :class="{ selected: Event.reservedSeatsId.includes(50) }">22</div>
            <div class="seat" @click="handleClickSeat(51)" :class="{ selected: Event.reservedSeatsId.includes(51) }">23</div>
            <div class="seat" @click="handleClickSeat(52)" :class="{ selected: Event.reservedSeatsId.includes(52) }">24</div>
            <div class="seat" @click="handleClickSeat(53)" :class="{ selected: Event.reservedSeatsId.includes(53) }">25</div>
            <div class="seat" @click="handleClickSeat(54)" :class="{ selected: Event.reservedSeatsId.includes(54) }">26</div>
            <div class="seat" @click="handleClickSeat(55)" :class="{ selected: Event.reservedSeatsId.includes(55) }">27</div>
            <div class="seat" @click="handleClickSeat(56)" :class="{ selected: Event.reservedSeatsId.includes(56) }">28</div>
            <div class="seat" @click="handleClickSeat(57)" :class="{ selected: Event.reservedSeatsId.includes(57) }">29</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(79)" :class="{ selected: Event.reservedSeatsId.includes(79) }">22</div>
            <div class="seat" @click="handleClickSeat(80)" :class="{ selected: Event.reservedSeatsId.includes(80) }">23</div>
            <div class="seat" @click="handleClickSeat(81)" :class="{ selected: Event.reservedSeatsId.includes(81) }">24</div>
            <div class="seat" @click="handleClickSeat(82)" :class="{ selected: Event.reservedSeatsId.includes(82) }">25</div>
            <div class="seat" @click="handleClickSeat(83)" :class="{ selected: Event.reservedSeatsId.includes(83) }">26</div>
            <div class="seat" @click="handleClickSeat(84)" :class="{ selected: Event.reservedSeatsId.includes(84) }">27</div>
            <div class="seat" @click="handleClickSeat(85)" :class="{ selected: Event.reservedSeatsId.includes(85) }">28</div>
            <div class="seat" @click="handleClickSeat(86)" :class="{ selected: Event.reservedSeatsId.includes(86) }">29</div>
            <div class="seat" @click="handleClickSeat(87)" :class="{ selected: Event.reservedSeatsId.includes(87) }">30</div>
            <div class="seat" @click="handleClickSeat(88)" :class="{ selected: Event.reservedSeatsId.includes(88) }">31</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(110)" :class="{ selected: Event.reservedSeatsId.includes(110) }">22</div>
            <div class="seat" @click="handleClickSeat(111)" :class="{ selected: Event.reservedSeatsId.includes(111) }">23</div>
            <div class="seat" @click="handleClickSeat(112)" :class="{ selected: Event.reservedSeatsId.includes(112) }">24</div>
            <div class="seat" @click="handleClickSeat(113)" :class="{ selected: Event.reservedSeatsId.includes(113) }">25</div>
            <div class="seat" @click="handleClickSeat(114)" :class="{ selected: Event.reservedSeatsId.includes(114) }">26</div>
            <div class="seat" @click="handleClickSeat(115)" :class="{ selected: Event.reservedSeatsId.includes(115) }">27</div>
            <div class="seat" @click="handleClickSeat(116)" :class="{ selected: Event.reservedSeatsId.includes(116) }">28</div>
            <div class="seat" @click="handleClickSeat(117)" :class="{ selected: Event.reservedSeatsId.includes(117) }">29</div>
            <div class="seat" @click="handleClickSeat(118)" :class="{ selected: Event.reservedSeatsId.includes(118) }">30</div>
            <div class="seat" @click="handleClickSeat(119)" :class="{ selected: Event.reservedSeatsId.includes(119) }">31</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(142)" :class="{ selected: Event.reservedSeatsId.includes(142) }">23</div>
            <div class="seat" @click="handleClickSeat(143)" :class="{ selected: Event.reservedSeatsId.includes(143) }">24</div>
            <div class="seat" @click="handleClickSeat(144)" :class="{ selected: Event.reservedSeatsId.includes(144) }">25</div>
            <div class="seat" @click="handleClickSeat(145)" :class="{ selected: Event.reservedSeatsId.includes(145) }">26</div>
            <div class="seat" @click="handleClickSeat(146)" :class="{ selected: Event.reservedSeatsId.includes(146) }">27</div>
            <div class="seat" @click="handleClickSeat(147)" :class="{ selected: Event.reservedSeatsId.includes(147) }">28</div>
            <div class="seat" @click="handleClickSeat(148)" :class="{ selected: Event.reservedSeatsId.includes(148) }">29</div>
            <div class="seat" @click="handleClickSeat(149)" :class="{ selected: Event.reservedSeatsId.includes(149) }">30</div>
            <div class="seat" @click="handleClickSeat(150)" :class="{ selected: Event.reservedSeatsId.includes(150) }">31</div>
            <div class="seat" @click="handleClickSeat(151)" :class="{ selected: Event.reservedSeatsId.includes(151) }">32</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(174)" :class="{ selected: Event.reservedSeatsId.includes(174) }">23</div>
            <div class="seat" @click="handleClickSeat(175)" :class="{ selected: Event.reservedSeatsId.includes(175) }">24</div>
            <div class="seat" @click="handleClickSeat(176)" :class="{ selected: Event.reservedSeatsId.includes(176) }">25</div>
            <div class="seat" @click="handleClickSeat(177)" :class="{ selected: Event.reservedSeatsId.includes(177) }">26</div>
            <div class="seat" @click="handleClickSeat(178)" :class="{ selected: Event.reservedSeatsId.includes(178) }">27</div>
            <div class="seat" @click="handleClickSeat(179)" :class="{ selected: Event.reservedSeatsId.includes(179) }">28</div>
            <div class="seat" @click="handleClickSeat(180)" :class="{ selected: Event.reservedSeatsId.includes(180) }">29</div>
            <div class="seat" @click="handleClickSeat(181)" :class="{ selected: Event.reservedSeatsId.includes(181) }">30</div>
            <div class="seat" @click="handleClickSeat(182)" :class="{ selected: Event.reservedSeatsId.includes(182) }">31</div>
            <div class="seat" @click="handleClickSeat(183)" :class="{ selected: Event.reservedSeatsId.includes(183) }">32</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(207)" :class="{ selected: Event.reservedSeatsId.includes(207) }">24</div>
            <div class="seat" @click="handleClickSeat(208)" :class="{ selected: Event.reservedSeatsId.includes(208) }">25</div>
            <div class="seat" @click="handleClickSeat(209)" :class="{ selected: Event.reservedSeatsId.includes(209) }">26</div>
            <div class="seat" @click="handleClickSeat(210)" :class="{ selected: Event.reservedSeatsId.includes(210) }">27</div>
            <div class="seat" @click="handleClickSeat(211)" :class="{ selected: Event.reservedSeatsId.includes(211) }">28</div>
            <div class="seat" @click="handleClickSeat(212)" :class="{ selected: Event.reservedSeatsId.includes(212) }">29</div>
            <div class="seat" @click="handleClickSeat(213)" :class="{ selected: Event.reservedSeatsId.includes(213) }">30</div>
            <div class="seat" @click="handleClickSeat(214)" :class="{ selected: Event.reservedSeatsId.includes(214) }">31</div>
            <div class="seat" @click="handleClickSeat(215)" :class="{ selected: Event.reservedSeatsId.includes(215) }">32</div>
            <div class="seat" @click="handleClickSeat(216)" :class="{ selected: Event.reservedSeatsId.includes(216) }">33</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(240)" :class="{ selected: Event.reservedSeatsId.includes(240) }">24</div>
            <div class="seat" @click="handleClickSeat(241)" :class="{ selected: Event.reservedSeatsId.includes(241) }">25</div>
            <div class="seat" @click="handleClickSeat(242)" :class="{ selected: Event.reservedSeatsId.includes(242) }">26</div>
            <div class="seat" @click="handleClickSeat(243)" :class="{ selected: Event.reservedSeatsId.includes(243) }">27</div>
            <div class="seat" @click="handleClickSeat(244)" :class="{ selected: Event.reservedSeatsId.includes(244) }">28</div>
            <div class="seat" @click="handleClickSeat(245)" :class="{ selected: Event.reservedSeatsId.includes(245) }">29</div>
            <div class="seat" @click="handleClickSeat(246)" :class="{ selected: Event.reservedSeatsId.includes(246) }">30</div>
            <div class="seat" @click="handleClickSeat(247)" :class="{ selected: Event.reservedSeatsId.includes(247) }">31</div>
            <div class="seat" @click="handleClickSeat(248)" :class="{ selected: Event.reservedSeatsId.includes(248) }">32</div>
            <div class="seat" @click="handleClickSeat(249)" :class="{ selected: Event.reservedSeatsId.includes(249) }">33</div>
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
            <span>I</span>
            <div class="seat" @click="handleClickSeat(1)" :class="{ selected: Event.reservedSeatsId.includes(1) }">1</div>
            <div class="seat" @click="handleClickSeat(2)" :class="{ selected: Event.reservedSeatsId.includes(2) }">2</div>
            <div class="seat" @click="handleClickSeat(3)" :class="{ selected: Event.reservedSeatsId.includes(3) }">3</div>
            <div class="seat" @click="handleClickSeat(4)" :class="{ selected: Event.reservedSeatsId.includes(4) }">4</div>
            <div class="seat" @click="handleClickSeat(5)" :class="{ selected: Event.reservedSeatsId.includes(5) }">5</div>
            <div class="seat" @click="handleClickSeat(6)" :class="{ selected: Event.reservedSeatsId.includes(6) }">6</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(29)" :class="{ selected: Event.reservedSeatsId.includes(29) }">1</div>
            <div class="seat" @click="handleClickSeat(30)" :class="{ selected: Event.reservedSeatsId.includes(30) }">2</div>
            <div class="seat" @click="handleClickSeat(31)" :class="{ selected: Event.reservedSeatsId.includes(31) }">3</div>
            <div class="seat" @click="handleClickSeat(32)" :class="{ selected: Event.reservedSeatsId.includes(32) }">4</div>
            <div class="seat" @click="handleClickSeat(33)" :class="{ selected: Event.reservedSeatsId.includes(33) }">5</div>
            <div class="seat" @click="handleClickSeat(34)" :class="{ selected: Event.reservedSeatsId.includes(34) }">6</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(58)" :class="{ selected: Event.reservedSeatsId.includes(58) }">1</div>
            <div class="seat" @click="handleClickSeat(59)" :class="{ selected: Event.reservedSeatsId.includes(59) }">2</div>
            <div class="seat" @click="handleClickSeat(60)" :class="{ selected: Event.reservedSeatsId.includes(60) }">3</div>
            <div class="seat" @click="handleClickSeat(61)" :class="{ selected: Event.reservedSeatsId.includes(61) }">4</div>
            <div class="seat" @click="handleClickSeat(62)" :class="{ selected: Event.reservedSeatsId.includes(62) }">5</div>
            <div class="seat" @click="handleClickSeat(63)" :class="{ selected: Event.reservedSeatsId.includes(63) }">6</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(89)" :class="{ selected: Event.reservedSeatsId.includes(89) }">1</div>
            <div class="seat" @click="handleClickSeat(90)" :class="{ selected: Event.reservedSeatsId.includes(90) }">2</div>
            <div class="seat" @click="handleClickSeat(91)" :class="{ selected: Event.reservedSeatsId.includes(91) }">3</div>
            <div class="seat" @click="handleClickSeat(92)" :class="{ selected: Event.reservedSeatsId.includes(92) }">4</div>
            <div class="seat" @click="handleClickSeat(93)" :class="{ selected: Event.reservedSeatsId.includes(93) }">5</div>
            <div class="seat" @click="handleClickSeat(94)" :class="{ selected: Event.reservedSeatsId.includes(94) }">6</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(120)" :class="{ selected: Event.reservedSeatsId.includes(120) }">1</div>
            <div class="seat" @click="handleClickSeat(121)" :class="{ selected: Event.reservedSeatsId.includes(121) }">2</div>
            <div class="seat" @click="handleClickSeat(122)" :class="{ selected: Event.reservedSeatsId.includes(122) }">3</div>
            <div class="seat" @click="handleClickSeat(123)" :class="{ selected: Event.reservedSeatsId.includes(123) }">4</div>
            <div class="seat" @click="handleClickSeat(124)" :class="{ selected: Event.reservedSeatsId.includes(124) }">5</div>
            <div class="seat" @click="handleClickSeat(125)" :class="{ selected: Event.reservedSeatsId.includes(125) }">6</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(152)" :class="{ selected: Event.reservedSeatsId.includes(152) }">1</div>
            <div class="seat" @click="handleClickSeat(153)" :class="{ selected: Event.reservedSeatsId.includes(153) }">2</div>
            <div class="seat" @click="handleClickSeat(154)" :class="{ selected: Event.reservedSeatsId.includes(154) }">3</div>
            <div class="seat" @click="handleClickSeat(155)" :class="{ selected: Event.reservedSeatsId.includes(155) }">4</div>
            <div class="seat" @click="handleClickSeat(156)" :class="{ selected: Event.reservedSeatsId.includes(156) }">5</div>
            <div class="seat" @click="handleClickSeat(157)" :class="{ selected: Event.reservedSeatsId.includes(157) }">6</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(184)" :class="{ selected: Event.reservedSeatsId.includes(184) }">1</div>
            <div class="seat" @click="handleClickSeat(185)" :class="{ selected: Event.reservedSeatsId.includes(185) }">2</div>
            <div class="seat" @click="handleClickSeat(186)" :class="{ selected: Event.reservedSeatsId.includes(186) }">3</div>
            <div class="seat" @click="handleClickSeat(187)" :class="{ selected: Event.reservedSeatsId.includes(187) }">4</div>
            <div class="seat" @click="handleClickSeat(188)" :class="{ selected: Event.reservedSeatsId.includes(188) }">5</div>
            <div class="seat" @click="handleClickSeat(189)" :class="{ selected: Event.reservedSeatsId.includes(189) }">6</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(217)" :class="{ selected: Event.reservedSeatsId.includes(217) }">1</div>
            <div class="seat" @click="handleClickSeat(218)" :class="{ selected: Event.reservedSeatsId.includes(218) }">2</div>
            <div class="seat" @click="handleClickSeat(219)" :class="{ selected: Event.reservedSeatsId.includes(219) }">3</div>
            <div class="seat" @click="handleClickSeat(220)" :class="{ selected: Event.reservedSeatsId.includes(220) }">4</div>
            <div class="seat" @click="handleClickSeat(221)" :class="{ selected: Event.reservedSeatsId.includes(221) }">5</div>
            <div class="seat" @click="handleClickSeat(222)" :class="{ selected: Event.reservedSeatsId.includes(222) }">6</div>
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
            <span>I</span>
            <div class="seat" @click="handleClickSeat(7)" :class="{ selected: Event.reservedSeatsId.includes(7) }">7</div>
            <div class="seat" @click="handleClickSeat(8)" :class="{ selected: Event.reservedSeatsId.includes(8) }">8</div>
            <div class="seat" @click="handleClickSeat(9)" :class="{ selected: Event.reservedSeatsId.includes(9) }">9</div>
            <div class="seat" @click="handleClickSeat(10)" :class="{ selected: Event.reservedSeatsId.includes(10) }">10</div>
            <div class="seat" @click="handleClickSeat(11)" :class="{ selected: Event.reservedSeatsId.includes(11) }">11</div>
            <div class="seat" @click="handleClickSeat(12)" :class="{ selected: Event.reservedSeatsId.includes(12) }">12</div>
            <div class="seat" @click="handleClickSeat(13)" :class="{ selected: Event.reservedSeatsId.includes(13) }">13</div>
            <div class="seat" @click="handleClickSeat(14)" :class="{ selected: Event.reservedSeatsId.includes(14) }">14</div>
            <div class="seat" @click="handleClickSeat(15)" :class="{ selected: Event.reservedSeatsId.includes(15) }">15</div>
            <div class="seat" @click="handleClickSeat(16)" :class="{ selected: Event.reservedSeatsId.includes(16) }">16</div>
            <div class="seat" @click="handleClickSeat(17)" :class="{ selected: Event.reservedSeatsId.includes(17) }">17</div>
            <div class="seat" @click="handleClickSeat(18)" :class="{ selected: Event.reservedSeatsId.includes(18) }">18</div>
            <div class="seat" @click="handleClickSeat(19)" :class="{ selected: Event.reservedSeatsId.includes(19) }">19</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(35)" :class="{ selected: Event.reservedSeatsId.includes(35) }">7</div>
            <div class="seat" @click="handleClickSeat(36)" :class="{ selected: Event.reservedSeatsId.includes(36) }">8</div>
            <div class="seat" @click="handleClickSeat(37)" :class="{ selected: Event.reservedSeatsId.includes(37) }">9</div>
            <div class="seat" @click="handleClickSeat(38)" :class="{ selected: Event.reservedSeatsId.includes(38) }">10</div>
            <div class="seat" @click="handleClickSeat(39)" :class="{ selected: Event.reservedSeatsId.includes(39) }">11</div>
            <div class="seat" @click="handleClickSeat(40)" :class="{ selected: Event.reservedSeatsId.includes(40) }">12</div>
            <div class="seat" @click="handleClickSeat(41)" :class="{ selected: Event.reservedSeatsId.includes(41) }">13</div>
            <div class="seat" @click="handleClickSeat(42)" :class="{ selected: Event.reservedSeatsId.includes(42) }">14</div>
            <div class="seat" @click="handleClickSeat(43)" :class="{ selected: Event.reservedSeatsId.includes(43) }">15</div>
            <div class="seat" @click="handleClickSeat(44)" :class="{ selected: Event.reservedSeatsId.includes(44) }">16</div>
            <div class="seat" @click="handleClickSeat(45)" :class="{ selected: Event.reservedSeatsId.includes(45) }">17</div>
            <div class="seat" @click="handleClickSeat(46)" :class="{ selected: Event.reservedSeatsId.includes(46) }">18</div>
            <div class="seat" @click="handleClickSeat(47)" :class="{ selected: Event.reservedSeatsId.includes(47) }">19</div>
            <div class="seat" @click="handleClickSeat(48)" :class="{ selected: Event.reservedSeatsId.includes(48) }">20</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(64)" :class="{ selected: Event.reservedSeatsId.includes(64) }">7</div>
            <div class="seat" @click="handleClickSeat(65)" :class="{ selected: Event.reservedSeatsId.includes(65) }">8</div>
            <div class="seat" @click="handleClickSeat(66)" :class="{ selected: Event.reservedSeatsId.includes(66) }">9</div>
            <div class="seat" @click="handleClickSeat(67)" :class="{ selected: Event.reservedSeatsId.includes(67) }">10</div>
            <div class="seat" @click="handleClickSeat(68)" :class="{ selected: Event.reservedSeatsId.includes(68) }">11</div>
            <div class="seat" @click="handleClickSeat(69)" :class="{ selected: Event.reservedSeatsId.includes(69) }">12</div>
            <div class="seat" @click="handleClickSeat(70)" :class="{ selected: Event.reservedSeatsId.includes(70) }">13</div>
            <div class="seat" @click="handleClickSeat(71)" :class="{ selected: Event.reservedSeatsId.includes(71) }">14</div>
            <div class="seat" @click="handleClickSeat(72)" :class="{ selected: Event.reservedSeatsId.includes(72) }">15</div>
            <div class="seat" @click="handleClickSeat(73)" :class="{ selected: Event.reservedSeatsId.includes(73) }">16</div>
            <div class="seat" @click="handleClickSeat(74)" :class="{ selected: Event.reservedSeatsId.includes(74) }">17</div>
            <div class="seat" @click="handleClickSeat(75)" :class="{ selected: Event.reservedSeatsId.includes(75) }">18</div>
            <div class="seat" @click="handleClickSeat(76)" :class="{ selected: Event.reservedSeatsId.includes(76) }">19</div>
            <div class="seat" @click="handleClickSeat(77)" :class="{ selected: Event.reservedSeatsId.includes(77) }">20</div>
            <div class="seat" @click="handleClickSeat(78)" :class="{ selected: Event.reservedSeatsId.includes(78) }">21</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(95)" :class="{ selected: Event.reservedSeatsId.includes(95) }">7</div>
            <div class="seat" @click="handleClickSeat(96)" :class="{ selected: Event.reservedSeatsId.includes(96) }">8</div>
            <div class="seat" @click="handleClickSeat(97)" :class="{ selected: Event.reservedSeatsId.includes(97) }">9</div>
            <div class="seat" @click="handleClickSeat(98)" :class="{ selected: Event.reservedSeatsId.includes(98) }">10</div>
            <div class="seat" @click="handleClickSeat(99)" :class="{ selected: Event.reservedSeatsId.includes(99) }">11</div>
            <div class="seat" @click="handleClickSeat(100)" :class="{ selected: Event.reservedSeatsId.includes(100) }">12</div>
            <div class="seat" @click="handleClickSeat(101)" :class="{ selected: Event.reservedSeatsId.includes(101) }">13</div>
            <div class="seat" @click="handleClickSeat(102)" :class="{ selected: Event.reservedSeatsId.includes(102) }">14</div>
            <div class="seat" @click="handleClickSeat(103)" :class="{ selected: Event.reservedSeatsId.includes(103) }">15</div>
            <div class="seat" @click="handleClickSeat(104)" :class="{ selected: Event.reservedSeatsId.includes(104) }">16</div>
            <div class="seat" @click="handleClickSeat(105)" :class="{ selected: Event.reservedSeatsId.includes(105) }">17</div>
            <div class="seat" @click="handleClickSeat(106)" :class="{ selected: Event.reservedSeatsId.includes(106) }">18</div>
            <div class="seat" @click="handleClickSeat(107)" :class="{ selected: Event.reservedSeatsId.includes(107) }">19</div>
            <div class="seat" @click="handleClickSeat(108)" :class="{ selected: Event.reservedSeatsId.includes(108) }">20</div>
            <div class="seat" @click="handleClickSeat(109)" :class="{ selected: Event.reservedSeatsId.includes(109) }">21</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(126)" :class="{ selected: Event.reservedSeatsId.includes(126) }">7</div>
            <div class="seat" @click="handleClickSeat(127)" :class="{ selected: Event.reservedSeatsId.includes(127) }">8</div>
            <div class="seat" @click="handleClickSeat(128)" :class="{ selected: Event.reservedSeatsId.includes(128) }">9</div>
            <div class="seat" @click="handleClickSeat(129)" :class="{ selected: Event.reservedSeatsId.includes(129) }">10</div>
            <div class="seat" @click="handleClickSeat(130)" :class="{ selected: Event.reservedSeatsId.includes(130) }">11</div>
            <div class="seat" @click="handleClickSeat(131)" :class="{ selected: Event.reservedSeatsId.includes(131) }">12</div>
            <div class="seat" @click="handleClickSeat(132)" :class="{ selected: Event.reservedSeatsId.includes(132) }">13</div>
            <div class="seat" @click="handleClickSeat(133)" :class="{ selected: Event.reservedSeatsId.includes(133) }">14</div>
            <div class="seat" @click="handleClickSeat(134)" :class="{ selected: Event.reservedSeatsId.includes(134) }">15</div>
            <div class="seat" @click="handleClickSeat(135)" :class="{ selected: Event.reservedSeatsId.includes(135) }">16</div>
            <div class="seat" @click="handleClickSeat(136)" :class="{ selected: Event.reservedSeatsId.includes(136) }">17</div>
            <div class="seat" @click="handleClickSeat(137)" :class="{ selected: Event.reservedSeatsId.includes(137) }">18</div>
            <div class="seat" @click="handleClickSeat(138)" :class="{ selected: Event.reservedSeatsId.includes(138) }">19</div>
            <div class="seat" @click="handleClickSeat(139)" :class="{ selected: Event.reservedSeatsId.includes(139) }">20</div>
            <div class="seat" @click="handleClickSeat(140)" :class="{ selected: Event.reservedSeatsId.includes(140) }">21</div>
            <div class="seat" @click="handleClickSeat(141)" :class="{ selected: Event.reservedSeatsId.includes(141) }">22</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(158)" :class="{ selected: Event.reservedSeatsId.includes(158) }">7</div>
            <div class="seat" @click="handleClickSeat(159)" :class="{ selected: Event.reservedSeatsId.includes(159) }">8</div>
            <div class="seat" @click="handleClickSeat(160)" :class="{ selected: Event.reservedSeatsId.includes(160) }">9</div>
            <div class="seat" @click="handleClickSeat(161)" :class="{ selected: Event.reservedSeatsId.includes(161) }">10</div>
            <div class="seat" @click="handleClickSeat(162)" :class="{ selected: Event.reservedSeatsId.includes(162) }">11</div>
            <div class="seat" @click="handleClickSeat(163)" :class="{ selected: Event.reservedSeatsId.includes(163) }">12</div>
            <div class="seat" @click="handleClickSeat(164)" :class="{ selected: Event.reservedSeatsId.includes(164) }">13</div>
            <div class="seat" @click="handleClickSeat(165)" :class="{ selected: Event.reservedSeatsId.includes(165) }">14</div>
            <div class="seat" @click="handleClickSeat(166)" :class="{ selected: Event.reservedSeatsId.includes(166) }">15</div>
            <div class="seat" @click="handleClickSeat(167)" :class="{ selected: Event.reservedSeatsId.includes(167) }">16</div>
            <div class="seat" @click="handleClickSeat(168)" :class="{ selected: Event.reservedSeatsId.includes(168) }">17</div>
            <div class="seat" @click="handleClickSeat(169)" :class="{ selected: Event.reservedSeatsId.includes(169) }">18</div>
            <div class="seat" @click="handleClickSeat(170)" :class="{ selected: Event.reservedSeatsId.includes(170) }">19</div>
            <div class="seat" @click="handleClickSeat(171)" :class="{ selected: Event.reservedSeatsId.includes(171) }">20</div>
            <div class="seat" @click="handleClickSeat(172)" :class="{ selected: Event.reservedSeatsId.includes(172) }">21</div>
            <div class="seat" @click="handleClickSeat(173)" :class="{ selected: Event.reservedSeatsId.includes(173) }">22</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(190)" :class="{ selected: Event.reservedSeatsId.includes(190) }">7</div>
            <div class="seat" @click="handleClickSeat(191)" :class="{ selected: Event.reservedSeatsId.includes(191) }">8</div>
            <div class="seat" @click="handleClickSeat(192)" :class="{ selected: Event.reservedSeatsId.includes(192) }">9</div>
            <div class="seat" @click="handleClickSeat(193)" :class="{ selected: Event.reservedSeatsId.includes(193) }">10</div>
            <div class="seat" @click="handleClickSeat(194)" :class="{ selected: Event.reservedSeatsId.includes(194) }">11</div>
            <div class="seat" @click="handleClickSeat(195)" :class="{ selected: Event.reservedSeatsId.includes(195) }">12</div>
            <div class="seat" @click="handleClickSeat(196)" :class="{ selected: Event.reservedSeatsId.includes(196) }">13</div>
            <div class="seat" @click="handleClickSeat(197)" :class="{ selected: Event.reservedSeatsId.includes(197) }">14</div>
            <div class="seat" @click="handleClickSeat(198)" :class="{ selected: Event.reservedSeatsId.includes(198) }">15</div>
            <div class="seat" @click="handleClickSeat(199)" :class="{ selected: Event.reservedSeatsId.includes(199) }">16</div>
            <div class="seat" @click="handleClickSeat(200)" :class="{ selected: Event.reservedSeatsId.includes(200) }">17</div>
            <div class="seat" @click="handleClickSeat(201)" :class="{ selected: Event.reservedSeatsId.includes(201) }">18</div>
            <div class="seat" @click="handleClickSeat(202)" :class="{ selected: Event.reservedSeatsId.includes(202) }">19</div>
            <div class="seat" @click="handleClickSeat(203)" :class="{ selected: Event.reservedSeatsId.includes(203) }">20</div>
            <div class="seat" @click="handleClickSeat(204)" :class="{ selected: Event.reservedSeatsId.includes(204) }">21</div>
            <div class="seat" @click="handleClickSeat(205)" :class="{ selected: Event.reservedSeatsId.includes(205) }">22</div>
            <div class="seat" @click="handleClickSeat(206)" :class="{ selected: Event.reservedSeatsId.includes(206) }">23</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(223)" :class="{ selected: Event.reservedSeatsId.includes(223) }">7</div>
            <div class="seat" @click="handleClickSeat(224)" :class="{ selected: Event.reservedSeatsId.includes(224) }">8</div>
            <div class="seat" @click="handleClickSeat(225)" :class="{ selected: Event.reservedSeatsId.includes(225) }">9</div>
            <div class="seat" @click="handleClickSeat(226)" :class="{ selected: Event.reservedSeatsId.includes(226) }">10</div>
            <div class="seat" @click="handleClickSeat(227)" :class="{ selected: Event.reservedSeatsId.includes(227) }">11</div>
            <div class="seat" @click="handleClickSeat(228)" :class="{ selected: Event.reservedSeatsId.includes(228) }">12</div>
            <div class="seat" @click="handleClickSeat(229)" :class="{ selected: Event.reservedSeatsId.includes(229) }">13</div>
            <div class="seat" @click="handleClickSeat(230)" :class="{ selected: Event.reservedSeatsId.includes(230) }">14</div>
            <div class="seat" @click="handleClickSeat(231)" :class="{ selected: Event.reservedSeatsId.includes(231) }">15</div>
            <div class="seat" @click="handleClickSeat(232)" :class="{ selected: Event.reservedSeatsId.includes(232) }">16</div>
            <div class="seat" @click="handleClickSeat(233)" :class="{ selected: Event.reservedSeatsId.includes(233) }">17</div>
            <div class="seat" @click="handleClickSeat(234)" :class="{ selected: Event.reservedSeatsId.includes(234) }">18</div>
            <div class="seat" @click="handleClickSeat(235)" :class="{ selected: Event.reservedSeatsId.includes(235) }">19</div>
            <div class="seat" @click="handleClickSeat(236)" :class="{ selected: Event.reservedSeatsId.includes(236) }">20</div>
            <div class="seat" @click="handleClickSeat(237)" :class="{ selected: Event.reservedSeatsId.includes(237) }">21</div>
            <div class="seat" @click="handleClickSeat(238)" :class="{ selected: Event.reservedSeatsId.includes(238) }">22</div>
            <div class="seat" @click="handleClickSeat(239)" :class="{ selected: Event.reservedSeatsId.includes(239) }">23</div>
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
            <span>I</span>
            <div class="seat" @click="handleClickSeat(20)" :class="{ selected: Event.reservedSeatsId.includes(20) }">20</div>
            <div class="seat" @click="handleClickSeat(21)" :class="{ selected: Event.reservedSeatsId.includes(21) }">21</div>
            <div class="seat" @click="handleClickSeat(22)" :class="{ selected: Event.reservedSeatsId.includes(22) }">22</div>
            <div class="seat" @click="handleClickSeat(23)" :class="{ selected: Event.reservedSeatsId.includes(23) }">23</div>
            <div class="seat" @click="handleClickSeat(24)" :class="{ selected: Event.reservedSeatsId.includes(24) }">24</div>
            <div class="seat" @click="handleClickSeat(25)" :class="{ selected: Event.reservedSeatsId.includes(25) }">25</div>
            <div class="seat" @click="handleClickSeat(26)" :class="{ selected: Event.reservedSeatsId.includes(26) }">26</div>
            <div class="seat" @click="handleClickSeat(27)" :class="{ selected: Event.reservedSeatsId.includes(27) }">27</div>
            <div class="seat" @click="handleClickSeat(28)" :class="{ selected: Event.reservedSeatsId.includes(28) }">28</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(49)" :class="{ selected: Event.reservedSeatsId.includes(49) }">21</div>
            <div class="seat" @click="handleClickSeat(50)" :class="{ selected: Event.reservedSeatsId.includes(50) }">22</div>
            <div class="seat" @click="handleClickSeat(51)" :class="{ selected: Event.reservedSeatsId.includes(51) }">23</div>
            <div class="seat" @click="handleClickSeat(52)" :class="{ selected: Event.reservedSeatsId.includes(52) }">24</div>
            <div class="seat" @click="handleClickSeat(53)" :class="{ selected: Event.reservedSeatsId.includes(53) }">25</div>
            <div class="seat" @click="handleClickSeat(54)" :class="{ selected: Event.reservedSeatsId.includes(54) }">26</div>
            <div class="seat" @click="handleClickSeat(55)" :class="{ selected: Event.reservedSeatsId.includes(55) }">27</div>
            <div class="seat" @click="handleClickSeat(56)" :class="{ selected: Event.reservedSeatsId.includes(56) }">28</div>
            <div class="seat" @click="handleClickSeat(57)" :class="{ selected: Event.reservedSeatsId.includes(57) }">29</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(79)" :class="{ selected: Event.reservedSeatsId.includes(79) }">22</div>
            <div class="seat" @click="handleClickSeat(80)" :class="{ selected: Event.reservedSeatsId.includes(80) }">23</div>
            <div class="seat" @click="handleClickSeat(81)" :class="{ selected: Event.reservedSeatsId.includes(81) }">24</div>
            <div class="seat" @click="handleClickSeat(82)" :class="{ selected: Event.reservedSeatsId.includes(82) }">25</div>
            <div class="seat" @click="handleClickSeat(83)" :class="{ selected: Event.reservedSeatsId.includes(83) }">26</div>
            <div class="seat" @click="handleClickSeat(84)" :class="{ selected: Event.reservedSeatsId.includes(84) }">27</div>
            <div class="seat" @click="handleClickSeat(85)" :class="{ selected: Event.reservedSeatsId.includes(85) }">28</div>
            <div class="seat" @click="handleClickSeat(86)" :class="{ selected: Event.reservedSeatsId.includes(86) }">29</div>
            <div class="seat" @click="handleClickSeat(87)" :class="{ selected: Event.reservedSeatsId.includes(87) }">30</div>
            <div class="seat" @click="handleClickSeat(88)" :class="{ selected: Event.reservedSeatsId.includes(88) }">31</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(110)" :class="{ selected: Event.reservedSeatsId.includes(110) }">22</div>
            <div class="seat" @click="handleClickSeat(111)" :class="{ selected: Event.reservedSeatsId.includes(111) }">23</div>
            <div class="seat" @click="handleClickSeat(112)" :class="{ selected: Event.reservedSeatsId.includes(112) }">24</div>
            <div class="seat" @click="handleClickSeat(113)" :class="{ selected: Event.reservedSeatsId.includes(113) }">25</div>
            <div class="seat" @click="handleClickSeat(114)" :class="{ selected: Event.reservedSeatsId.includes(114) }">26</div>
            <div class="seat" @click="handleClickSeat(115)" :class="{ selected: Event.reservedSeatsId.includes(115) }">27</div>
            <div class="seat" @click="handleClickSeat(116)" :class="{ selected: Event.reservedSeatsId.includes(116) }">28</div>
            <div class="seat" @click="handleClickSeat(117)" :class="{ selected: Event.reservedSeatsId.includes(117) }">29</div>
            <div class="seat" @click="handleClickSeat(118)" :class="{ selected: Event.reservedSeatsId.includes(118) }">30</div>
            <div class="seat" @click="handleClickSeat(119)" :class="{ selected: Event.reservedSeatsId.includes(119) }">31</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(142)" :class="{ selected: Event.reservedSeatsId.includes(142) }">23</div>
            <div class="seat" @click="handleClickSeat(143)" :class="{ selected: Event.reservedSeatsId.includes(143) }">24</div>
            <div class="seat" @click="handleClickSeat(144)" :class="{ selected: Event.reservedSeatsId.includes(144) }">25</div>
            <div class="seat" @click="handleClickSeat(145)" :class="{ selected: Event.reservedSeatsId.includes(145) }">26</div>
            <div class="seat" @click="handleClickSeat(146)" :class="{ selected: Event.reservedSeatsId.includes(146) }">27</div>
            <div class="seat" @click="handleClickSeat(147)" :class="{ selected: Event.reservedSeatsId.includes(147) }">28</div>
            <div class="seat" @click="handleClickSeat(148)" :class="{ selected: Event.reservedSeatsId.includes(148) }">29</div>
            <div class="seat" @click="handleClickSeat(149)" :class="{ selected: Event.reservedSeatsId.includes(149) }">30</div>
            <div class="seat" @click="handleClickSeat(150)" :class="{ selected: Event.reservedSeatsId.includes(150) }">31</div>
            <div class="seat" @click="handleClickSeat(151)" :class="{ selected: Event.reservedSeatsId.includes(151) }">32</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(174)" :class="{ selected: Event.reservedSeatsId.includes(174) }">23</div>
            <div class="seat" @click="handleClickSeat(175)" :class="{ selected: Event.reservedSeatsId.includes(175) }">24</div>
            <div class="seat" @click="handleClickSeat(176)" :class="{ selected: Event.reservedSeatsId.includes(176) }">25</div>
            <div class="seat" @click="handleClickSeat(177)" :class="{ selected: Event.reservedSeatsId.includes(177) }">26</div>
            <div class="seat" @click="handleClickSeat(178)" :class="{ selected: Event.reservedSeatsId.includes(178) }">27</div>
            <div class="seat" @click="handleClickSeat(179)" :class="{ selected: Event.reservedSeatsId.includes(179) }">28</div>
            <div class="seat" @click="handleClickSeat(180)" :class="{ selected: Event.reservedSeatsId.includes(180) }">29</div>
            <div class="seat" @click="handleClickSeat(181)" :class="{ selected: Event.reservedSeatsId.includes(181) }">30</div>
            <div class="seat" @click="handleClickSeat(182)" :class="{ selected: Event.reservedSeatsId.includes(182) }">31</div>
            <div class="seat" @click="handleClickSeat(183)" :class="{ selected: Event.reservedSeatsId.includes(183) }">32</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(207)" :class="{ selected: Event.reservedSeatsId.includes(207) }">24</div>
            <div class="seat" @click="handleClickSeat(208)" :class="{ selected: Event.reservedSeatsId.includes(208) }">25</div>
            <div class="seat" @click="handleClickSeat(209)" :class="{ selected: Event.reservedSeatsId.includes(209) }">26</div>
            <div class="seat" @click="handleClickSeat(210)" :class="{ selected: Event.reservedSeatsId.includes(210) }">27</div>
            <div class="seat" @click="handleClickSeat(211)" :class="{ selected: Event.reservedSeatsId.includes(211) }">28</div>
            <div class="seat" @click="handleClickSeat(212)" :class="{ selected: Event.reservedSeatsId.includes(212) }">29</div>
            <div class="seat" @click="handleClickSeat(213)" :class="{ selected: Event.reservedSeatsId.includes(213) }">30</div>
            <div class="seat" @click="handleClickSeat(214)" :class="{ selected: Event.reservedSeatsId.includes(214) }">31</div>
            <div class="seat" @click="handleClickSeat(215)" :class="{ selected: Event.reservedSeatsId.includes(215) }">32</div>
            <div class="seat" @click="handleClickSeat(216)" :class="{ selected: Event.reservedSeatsId.includes(216) }">33</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(240)" :class="{ selected: Event.reservedSeatsId.includes(240) }">24</div>
            <div class="seat" @click="handleClickSeat(241)" :class="{ selected: Event.reservedSeatsId.includes(241) }">25</div>
            <div class="seat" @click="handleClickSeat(242)" :class="{ selected: Event.reservedSeatsId.includes(242) }">26</div>
            <div class="seat" @click="handleClickSeat(243)" :class="{ selected: Event.reservedSeatsId.includes(243) }">27</div>
            <div class="seat" @click="handleClickSeat(244)" :class="{ selected: Event.reservedSeatsId.includes(244) }">28</div>
            <div class="seat" @click="handleClickSeat(245)" :class="{ selected: Event.reservedSeatsId.includes(245) }">29</div>
            <div class="seat" @click="handleClickSeat(246)" :class="{ selected: Event.reservedSeatsId.includes(246) }">30</div>
            <div class="seat" @click="handleClickSeat(247)" :class="{ selected: Event.reservedSeatsId.includes(247) }">31</div>
            <div class="seat" @click="handleClickSeat(248)" :class="{ selected: Event.reservedSeatsId.includes(248) }">32</div>
            <div class="seat" @click="handleClickSeat(249)" :class="{ selected: Event.reservedSeatsId.includes(249) }">33</div>
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
  name: 'FilharmoniaPodkarpackaSektor1',
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
  font-size: 1.3vw;
  cursor: default;
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
