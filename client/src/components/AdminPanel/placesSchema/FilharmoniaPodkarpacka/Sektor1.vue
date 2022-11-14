<template>
  <div>
    <div class="largeLayout">
      <div class="scene">Scena</div>
      <div class="sectorContainer">
        <!-- Left column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(1)" :class="{ occupied: Event.occupiedSeatsId.includes(1), selected: Event.reservedSeatsId.includes(1) }">1</div>
            <div class="seat" @click="handleClickSeat(2)" :class="{ occupied: Event.occupiedSeatsId.includes(2), selected: Event.reservedSeatsId.includes(2) }">2</div>
            <div class="seat" @click="handleClickSeat(3)" :class="{ occupied: Event.occupiedSeatsId.includes(3), selected: Event.reservedSeatsId.includes(3) }">3</div>
            <div class="seat" @click="handleClickSeat(4)" :class="{ occupied: Event.occupiedSeatsId.includes(4), selected: Event.reservedSeatsId.includes(4) }">4</div>
            <div class="seat" @click="handleClickSeat(5)" :class="{ occupied: Event.occupiedSeatsId.includes(5), selected: Event.reservedSeatsId.includes(5) }">5</div>
            <div class="seat" @click="handleClickSeat(6)" :class="{ occupied: Event.occupiedSeatsId.includes(6), selected: Event.reservedSeatsId.includes(6) }">6</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(29)" :class="{ occupied: Event.occupiedSeatsId.includes(29), selected: Event.reservedSeatsId.includes(29) }">1</div>
            <div class="seat" @click="handleClickSeat(30)" :class="{ occupied: Event.occupiedSeatsId.includes(30), selected: Event.reservedSeatsId.includes(30) }">2</div>
            <div class="seat" @click="handleClickSeat(31)" :class="{ occupied: Event.occupiedSeatsId.includes(31), selected: Event.reservedSeatsId.includes(31) }">3</div>
            <div class="seat" @click="handleClickSeat(32)" :class="{ occupied: Event.occupiedSeatsId.includes(32), selected: Event.reservedSeatsId.includes(32) }">4</div>
            <div class="seat" @click="handleClickSeat(33)" :class="{ occupied: Event.occupiedSeatsId.includes(33), selected: Event.reservedSeatsId.includes(33) }">5</div>
            <div class="seat" @click="handleClickSeat(34)" :class="{ occupied: Event.occupiedSeatsId.includes(34), selected: Event.reservedSeatsId.includes(34) }">6</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(58)" :class="{ occupied: Event.occupiedSeatsId.includes(58), selected: Event.reservedSeatsId.includes(58) }">1</div>
            <div class="seat" @click="handleClickSeat(59)" :class="{ occupied: Event.occupiedSeatsId.includes(59), selected: Event.reservedSeatsId.includes(59) }">2</div>
            <div class="seat" @click="handleClickSeat(60)" :class="{ occupied: Event.occupiedSeatsId.includes(60), selected: Event.reservedSeatsId.includes(60) }">3</div>
            <div class="seat" @click="handleClickSeat(61)" :class="{ occupied: Event.occupiedSeatsId.includes(61), selected: Event.reservedSeatsId.includes(61) }">4</div>
            <div class="seat" @click="handleClickSeat(62)" :class="{ occupied: Event.occupiedSeatsId.includes(62), selected: Event.reservedSeatsId.includes(62) }">5</div>
            <div class="seat" @click="handleClickSeat(63)" :class="{ occupied: Event.occupiedSeatsId.includes(63), selected: Event.reservedSeatsId.includes(63) }">6</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(89)" :class="{ occupied: Event.occupiedSeatsId.includes(89), selected: Event.reservedSeatsId.includes(89) }">1</div>
            <div class="seat" @click="handleClickSeat(90)" :class="{ occupied: Event.occupiedSeatsId.includes(90), selected: Event.reservedSeatsId.includes(90) }">2</div>
            <div class="seat" @click="handleClickSeat(91)" :class="{ occupied: Event.occupiedSeatsId.includes(91), selected: Event.reservedSeatsId.includes(91) }">3</div>
            <div class="seat" @click="handleClickSeat(92)" :class="{ occupied: Event.occupiedSeatsId.includes(92), selected: Event.reservedSeatsId.includes(92) }">4</div>
            <div class="seat" @click="handleClickSeat(93)" :class="{ occupied: Event.occupiedSeatsId.includes(93), selected: Event.reservedSeatsId.includes(93) }">5</div>
            <div class="seat" @click="handleClickSeat(94)" :class="{ occupied: Event.occupiedSeatsId.includes(94), selected: Event.reservedSeatsId.includes(94) }">6</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(120)" :class="{ occupied: Event.occupiedSeatsId.includes(120), selected: Event.reservedSeatsId.includes(120) }">1</div>
            <div class="seat" @click="handleClickSeat(121)" :class="{ occupied: Event.occupiedSeatsId.includes(121), selected: Event.reservedSeatsId.includes(121) }">2</div>
            <div class="seat" @click="handleClickSeat(122)" :class="{ occupied: Event.occupiedSeatsId.includes(122), selected: Event.reservedSeatsId.includes(122) }">3</div>
            <div class="seat" @click="handleClickSeat(123)" :class="{ occupied: Event.occupiedSeatsId.includes(123), selected: Event.reservedSeatsId.includes(123) }">4</div>
            <div class="seat" @click="handleClickSeat(124)" :class="{ occupied: Event.occupiedSeatsId.includes(124), selected: Event.reservedSeatsId.includes(124) }">5</div>
            <div class="seat" @click="handleClickSeat(125)" :class="{ occupied: Event.occupiedSeatsId.includes(125), selected: Event.reservedSeatsId.includes(125) }">6</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(152)" :class="{ occupied: Event.occupiedSeatsId.includes(152), selected: Event.reservedSeatsId.includes(152) }">1</div>
            <div class="seat" @click="handleClickSeat(153)" :class="{ occupied: Event.occupiedSeatsId.includes(153), selected: Event.reservedSeatsId.includes(153) }">2</div>
            <div class="seat" @click="handleClickSeat(154)" :class="{ occupied: Event.occupiedSeatsId.includes(154), selected: Event.reservedSeatsId.includes(154) }">3</div>
            <div class="seat" @click="handleClickSeat(155)" :class="{ occupied: Event.occupiedSeatsId.includes(155), selected: Event.reservedSeatsId.includes(155) }">4</div>
            <div class="seat" @click="handleClickSeat(156)" :class="{ occupied: Event.occupiedSeatsId.includes(156), selected: Event.reservedSeatsId.includes(156) }">5</div>
            <div class="seat" @click="handleClickSeat(157)" :class="{ occupied: Event.occupiedSeatsId.includes(157), selected: Event.reservedSeatsId.includes(157) }">6</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(184)" :class="{ occupied: Event.occupiedSeatsId.includes(184), selected: Event.reservedSeatsId.includes(184) }">1</div>
            <div class="seat" @click="handleClickSeat(185)" :class="{ occupied: Event.occupiedSeatsId.includes(185), selected: Event.reservedSeatsId.includes(185) }">2</div>
            <div class="seat" @click="handleClickSeat(186)" :class="{ occupied: Event.occupiedSeatsId.includes(186), selected: Event.reservedSeatsId.includes(186) }">3</div>
            <div class="seat" @click="handleClickSeat(187)" :class="{ occupied: Event.occupiedSeatsId.includes(187), selected: Event.reservedSeatsId.includes(187) }">4</div>
            <div class="seat" @click="handleClickSeat(188)" :class="{ occupied: Event.occupiedSeatsId.includes(188), selected: Event.reservedSeatsId.includes(188) }">5</div>
            <div class="seat" @click="handleClickSeat(189)" :class="{ occupied: Event.occupiedSeatsId.includes(189), selected: Event.reservedSeatsId.includes(189) }">6</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(217)" :class="{ occupied: Event.occupiedSeatsId.includes(217), selected: Event.reservedSeatsId.includes(217) }">1</div>
            <div class="seat" @click="handleClickSeat(218)" :class="{ occupied: Event.occupiedSeatsId.includes(218), selected: Event.reservedSeatsId.includes(218) }">2</div>
            <div class="seat" @click="handleClickSeat(219)" :class="{ occupied: Event.occupiedSeatsId.includes(219), selected: Event.reservedSeatsId.includes(219) }">3</div>
            <div class="seat" @click="handleClickSeat(220)" :class="{ occupied: Event.occupiedSeatsId.includes(220), selected: Event.reservedSeatsId.includes(220) }">4</div>
            <div class="seat" @click="handleClickSeat(221)" :class="{ occupied: Event.occupiedSeatsId.includes(221), selected: Event.reservedSeatsId.includes(221) }">5</div>
            <div class="seat" @click="handleClickSeat(222)" :class="{ occupied: Event.occupiedSeatsId.includes(222), selected: Event.reservedSeatsId.includes(222) }">6</div>
          </div>
        </div>
        <!-- Middle column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(7)" :class="{ occupied: Event.occupiedSeatsId.includes(7), selected: Event.reservedSeatsId.includes(7) }">7</div>
            <div class="seat" @click="handleClickSeat(8)" :class="{ occupied: Event.occupiedSeatsId.includes(8), selected: Event.reservedSeatsId.includes(8) }">8</div>
            <div class="seat" @click="handleClickSeat(9)" :class="{ occupied: Event.occupiedSeatsId.includes(9), selected: Event.reservedSeatsId.includes(9) }">9</div>
            <div class="seat" @click="handleClickSeat(10)" :class="{ occupied: Event.occupiedSeatsId.includes(10), selected: Event.reservedSeatsId.includes(10) }">10</div>
            <div class="seat" @click="handleClickSeat(11)" :class="{ occupied: Event.occupiedSeatsId.includes(11), selected: Event.reservedSeatsId.includes(11) }">11</div>
            <div class="seat" @click="handleClickSeat(12)" :class="{ occupied: Event.occupiedSeatsId.includes(12), selected: Event.reservedSeatsId.includes(12) }">12</div>
            <div class="seat" @click="handleClickSeat(13)" :class="{ occupied: Event.occupiedSeatsId.includes(13), selected: Event.reservedSeatsId.includes(13) }">13</div>
            <div class="seat" @click="handleClickSeat(14)" :class="{ occupied: Event.occupiedSeatsId.includes(14), selected: Event.reservedSeatsId.includes(14) }">14</div>
            <div class="seat" @click="handleClickSeat(15)" :class="{ occupied: Event.occupiedSeatsId.includes(15), selected: Event.reservedSeatsId.includes(15) }">15</div>
            <div class="seat" @click="handleClickSeat(16)" :class="{ occupied: Event.occupiedSeatsId.includes(16), selected: Event.reservedSeatsId.includes(16) }">16</div>
            <div class="seat" @click="handleClickSeat(17)" :class="{ occupied: Event.occupiedSeatsId.includes(17), selected: Event.reservedSeatsId.includes(17) }">17</div>
            <div class="seat" @click="handleClickSeat(18)" :class="{ occupied: Event.occupiedSeatsId.includes(18), selected: Event.reservedSeatsId.includes(18) }">18</div>
            <div class="seat" @click="handleClickSeat(19)" :class="{ occupied: Event.occupiedSeatsId.includes(19), selected: Event.reservedSeatsId.includes(19) }">19</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(35)" :class="{ occupied: Event.occupiedSeatsId.includes(35), selected: Event.reservedSeatsId.includes(35) }">7</div>
            <div class="seat" @click="handleClickSeat(36)" :class="{ occupied: Event.occupiedSeatsId.includes(36), selected: Event.reservedSeatsId.includes(36) }">8</div>
            <div class="seat" @click="handleClickSeat(37)" :class="{ occupied: Event.occupiedSeatsId.includes(37), selected: Event.reservedSeatsId.includes(37) }">9</div>
            <div class="seat" @click="handleClickSeat(38)" :class="{ occupied: Event.occupiedSeatsId.includes(38), selected: Event.reservedSeatsId.includes(38) }">10</div>
            <div class="seat" @click="handleClickSeat(39)" :class="{ occupied: Event.occupiedSeatsId.includes(39), selected: Event.reservedSeatsId.includes(39) }">11</div>
            <div class="seat" @click="handleClickSeat(40)" :class="{ occupied: Event.occupiedSeatsId.includes(40), selected: Event.reservedSeatsId.includes(40) }">12</div>
            <div class="seat" @click="handleClickSeat(41)" :class="{ occupied: Event.occupiedSeatsId.includes(41), selected: Event.reservedSeatsId.includes(41) }">13</div>
            <div class="seat" @click="handleClickSeat(42)" :class="{ occupied: Event.occupiedSeatsId.includes(42), selected: Event.reservedSeatsId.includes(42) }">14</div>
            <div class="seat" @click="handleClickSeat(43)" :class="{ occupied: Event.occupiedSeatsId.includes(43), selected: Event.reservedSeatsId.includes(43) }">15</div>
            <div class="seat" @click="handleClickSeat(44)" :class="{ occupied: Event.occupiedSeatsId.includes(44), selected: Event.reservedSeatsId.includes(44) }">16</div>
            <div class="seat" @click="handleClickSeat(45)" :class="{ occupied: Event.occupiedSeatsId.includes(45), selected: Event.reservedSeatsId.includes(45) }">17</div>
            <div class="seat" @click="handleClickSeat(46)" :class="{ occupied: Event.occupiedSeatsId.includes(46), selected: Event.reservedSeatsId.includes(46) }">18</div>
            <div class="seat" @click="handleClickSeat(47)" :class="{ occupied: Event.occupiedSeatsId.includes(47), selected: Event.reservedSeatsId.includes(47) }">19</div>
            <div class="seat" @click="handleClickSeat(48)" :class="{ occupied: Event.occupiedSeatsId.includes(48), selected: Event.reservedSeatsId.includes(48) }">20</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(64)" :class="{ occupied: Event.occupiedSeatsId.includes(64), selected: Event.reservedSeatsId.includes(64) }">7</div>
            <div class="seat" @click="handleClickSeat(65)" :class="{ occupied: Event.occupiedSeatsId.includes(65), selected: Event.reservedSeatsId.includes(65) }">8</div>
            <div class="seat" @click="handleClickSeat(66)" :class="{ occupied: Event.occupiedSeatsId.includes(66), selected: Event.reservedSeatsId.includes(66) }">9</div>
            <div class="seat" @click="handleClickSeat(67)" :class="{ occupied: Event.occupiedSeatsId.includes(67), selected: Event.reservedSeatsId.includes(67) }">10</div>
            <div class="seat" @click="handleClickSeat(68)" :class="{ occupied: Event.occupiedSeatsId.includes(68), selected: Event.reservedSeatsId.includes(68) }">11</div>
            <div class="seat" @click="handleClickSeat(69)" :class="{ occupied: Event.occupiedSeatsId.includes(69), selected: Event.reservedSeatsId.includes(69) }">12</div>
            <div class="seat" @click="handleClickSeat(70)" :class="{ occupied: Event.occupiedSeatsId.includes(70), selected: Event.reservedSeatsId.includes(70) }">13</div>
            <div class="seat" @click="handleClickSeat(71)" :class="{ occupied: Event.occupiedSeatsId.includes(71), selected: Event.reservedSeatsId.includes(71) }">14</div>
            <div class="seat" @click="handleClickSeat(72)" :class="{ occupied: Event.occupiedSeatsId.includes(72), selected: Event.reservedSeatsId.includes(72) }">15</div>
            <div class="seat" @click="handleClickSeat(73)" :class="{ occupied: Event.occupiedSeatsId.includes(73), selected: Event.reservedSeatsId.includes(73) }">16</div>
            <div class="seat" @click="handleClickSeat(74)" :class="{ occupied: Event.occupiedSeatsId.includes(74), selected: Event.reservedSeatsId.includes(74) }">17</div>
            <div class="seat" @click="handleClickSeat(75)" :class="{ occupied: Event.occupiedSeatsId.includes(75), selected: Event.reservedSeatsId.includes(75) }">18</div>
            <div class="seat" @click="handleClickSeat(76)" :class="{ occupied: Event.occupiedSeatsId.includes(76), selected: Event.reservedSeatsId.includes(76) }">19</div>
            <div class="seat" @click="handleClickSeat(77)" :class="{ occupied: Event.occupiedSeatsId.includes(77), selected: Event.reservedSeatsId.includes(77) }">20</div>
            <div class="seat" @click="handleClickSeat(78)" :class="{ occupied: Event.occupiedSeatsId.includes(78), selected: Event.reservedSeatsId.includes(78) }">21</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(95)" :class="{ occupied: Event.occupiedSeatsId.includes(95), selected: Event.reservedSeatsId.includes(95) }">7</div>
            <div class="seat" @click="handleClickSeat(96)" :class="{ occupied: Event.occupiedSeatsId.includes(96), selected: Event.reservedSeatsId.includes(96) }">8</div>
            <div class="seat" @click="handleClickSeat(97)" :class="{ occupied: Event.occupiedSeatsId.includes(97), selected: Event.reservedSeatsId.includes(97) }">9</div>
            <div class="seat" @click="handleClickSeat(98)" :class="{ occupied: Event.occupiedSeatsId.includes(98), selected: Event.reservedSeatsId.includes(98) }">10</div>
            <div class="seat" @click="handleClickSeat(99)" :class="{ occupied: Event.occupiedSeatsId.includes(99), selected: Event.reservedSeatsId.includes(99) }">11</div>
            <div class="seat" @click="handleClickSeat(100)" :class="{ occupied: Event.occupiedSeatsId.includes(100), selected: Event.reservedSeatsId.includes(100) }">12</div>
            <div class="seat" @click="handleClickSeat(101)" :class="{ occupied: Event.occupiedSeatsId.includes(101), selected: Event.reservedSeatsId.includes(101) }">13</div>
            <div class="seat" @click="handleClickSeat(102)" :class="{ occupied: Event.occupiedSeatsId.includes(102), selected: Event.reservedSeatsId.includes(102) }">14</div>
            <div class="seat" @click="handleClickSeat(103)" :class="{ occupied: Event.occupiedSeatsId.includes(103), selected: Event.reservedSeatsId.includes(103) }">15</div>
            <div class="seat" @click="handleClickSeat(104)" :class="{ occupied: Event.occupiedSeatsId.includes(104), selected: Event.reservedSeatsId.includes(104) }">16</div>
            <div class="seat" @click="handleClickSeat(105)" :class="{ occupied: Event.occupiedSeatsId.includes(105), selected: Event.reservedSeatsId.includes(105) }">17</div>
            <div class="seat" @click="handleClickSeat(106)" :class="{ occupied: Event.occupiedSeatsId.includes(106), selected: Event.reservedSeatsId.includes(106) }">18</div>
            <div class="seat" @click="handleClickSeat(107)" :class="{ occupied: Event.occupiedSeatsId.includes(107), selected: Event.reservedSeatsId.includes(107) }">19</div>
            <div class="seat" @click="handleClickSeat(108)" :class="{ occupied: Event.occupiedSeatsId.includes(108), selected: Event.reservedSeatsId.includes(108) }">20</div>
            <div class="seat" @click="handleClickSeat(109)" :class="{ occupied: Event.occupiedSeatsId.includes(109), selected: Event.reservedSeatsId.includes(109) }">21</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(126)" :class="{ occupied: Event.occupiedSeatsId.includes(126), selected: Event.reservedSeatsId.includes(126) }">7</div>
            <div class="seat" @click="handleClickSeat(127)" :class="{ occupied: Event.occupiedSeatsId.includes(127), selected: Event.reservedSeatsId.includes(127) }">8</div>
            <div class="seat" @click="handleClickSeat(128)" :class="{ occupied: Event.occupiedSeatsId.includes(128), selected: Event.reservedSeatsId.includes(128) }">9</div>
            <div class="seat" @click="handleClickSeat(129)" :class="{ occupied: Event.occupiedSeatsId.includes(129), selected: Event.reservedSeatsId.includes(129) }">10</div>
            <div class="seat" @click="handleClickSeat(130)" :class="{ occupied: Event.occupiedSeatsId.includes(130), selected: Event.reservedSeatsId.includes(130) }">11</div>
            <div class="seat" @click="handleClickSeat(131)" :class="{ occupied: Event.occupiedSeatsId.includes(131), selected: Event.reservedSeatsId.includes(131) }">12</div>
            <div class="seat" @click="handleClickSeat(132)" :class="{ occupied: Event.occupiedSeatsId.includes(132), selected: Event.reservedSeatsId.includes(132) }">13</div>
            <div class="seat" @click="handleClickSeat(133)" :class="{ occupied: Event.occupiedSeatsId.includes(133), selected: Event.reservedSeatsId.includes(133) }">14</div>
            <div class="seat" @click="handleClickSeat(134)" :class="{ occupied: Event.occupiedSeatsId.includes(134), selected: Event.reservedSeatsId.includes(134) }">15</div>
            <div class="seat" @click="handleClickSeat(135)" :class="{ occupied: Event.occupiedSeatsId.includes(135), selected: Event.reservedSeatsId.includes(135) }">16</div>
            <div class="seat" @click="handleClickSeat(136)" :class="{ occupied: Event.occupiedSeatsId.includes(136), selected: Event.reservedSeatsId.includes(136) }">17</div>
            <div class="seat" @click="handleClickSeat(137)" :class="{ occupied: Event.occupiedSeatsId.includes(137), selected: Event.reservedSeatsId.includes(137) }">18</div>
            <div class="seat" @click="handleClickSeat(138)" :class="{ occupied: Event.occupiedSeatsId.includes(138), selected: Event.reservedSeatsId.includes(138) }">19</div>
            <div class="seat" @click="handleClickSeat(139)" :class="{ occupied: Event.occupiedSeatsId.includes(139), selected: Event.reservedSeatsId.includes(139) }">20</div>
            <div class="seat" @click="handleClickSeat(140)" :class="{ occupied: Event.occupiedSeatsId.includes(140), selected: Event.reservedSeatsId.includes(140) }">21</div>
            <div class="seat" @click="handleClickSeat(141)" :class="{ occupied: Event.occupiedSeatsId.includes(141), selected: Event.reservedSeatsId.includes(141) }">22</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(158)" :class="{ occupied: Event.occupiedSeatsId.includes(158), selected: Event.reservedSeatsId.includes(158) }">7</div>
            <div class="seat" @click="handleClickSeat(159)" :class="{ occupied: Event.occupiedSeatsId.includes(159), selected: Event.reservedSeatsId.includes(159) }">8</div>
            <div class="seat" @click="handleClickSeat(160)" :class="{ occupied: Event.occupiedSeatsId.includes(160), selected: Event.reservedSeatsId.includes(160) }">9</div>
            <div class="seat" @click="handleClickSeat(161)" :class="{ occupied: Event.occupiedSeatsId.includes(161), selected: Event.reservedSeatsId.includes(161) }">10</div>
            <div class="seat" @click="handleClickSeat(162)" :class="{ occupied: Event.occupiedSeatsId.includes(162), selected: Event.reservedSeatsId.includes(162) }">11</div>
            <div class="seat" @click="handleClickSeat(163)" :class="{ occupied: Event.occupiedSeatsId.includes(163), selected: Event.reservedSeatsId.includes(163) }">12</div>
            <div class="seat" @click="handleClickSeat(164)" :class="{ occupied: Event.occupiedSeatsId.includes(164), selected: Event.reservedSeatsId.includes(164) }">13</div>
            <div class="seat" @click="handleClickSeat(165)" :class="{ occupied: Event.occupiedSeatsId.includes(165), selected: Event.reservedSeatsId.includes(165) }">14</div>
            <div class="seat" @click="handleClickSeat(166)" :class="{ occupied: Event.occupiedSeatsId.includes(166), selected: Event.reservedSeatsId.includes(166) }">15</div>
            <div class="seat" @click="handleClickSeat(167)" :class="{ occupied: Event.occupiedSeatsId.includes(167), selected: Event.reservedSeatsId.includes(167) }">16</div>
            <div class="seat" @click="handleClickSeat(168)" :class="{ occupied: Event.occupiedSeatsId.includes(168), selected: Event.reservedSeatsId.includes(168) }">17</div>
            <div class="seat" @click="handleClickSeat(169)" :class="{ occupied: Event.occupiedSeatsId.includes(169), selected: Event.reservedSeatsId.includes(169) }">18</div>
            <div class="seat" @click="handleClickSeat(170)" :class="{ occupied: Event.occupiedSeatsId.includes(170), selected: Event.reservedSeatsId.includes(170) }">19</div>
            <div class="seat" @click="handleClickSeat(171)" :class="{ occupied: Event.occupiedSeatsId.includes(171), selected: Event.reservedSeatsId.includes(171) }">20</div>
            <div class="seat" @click="handleClickSeat(172)" :class="{ occupied: Event.occupiedSeatsId.includes(172), selected: Event.reservedSeatsId.includes(172) }">21</div>
            <div class="seat" @click="handleClickSeat(173)" :class="{ occupied: Event.occupiedSeatsId.includes(173), selected: Event.reservedSeatsId.includes(173) }">22</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(190)" :class="{ occupied: Event.occupiedSeatsId.includes(190), selected: Event.reservedSeatsId.includes(190) }">7</div>
            <div class="seat" @click="handleClickSeat(191)" :class="{ occupied: Event.occupiedSeatsId.includes(191), selected: Event.reservedSeatsId.includes(191) }">8</div>
            <div class="seat" @click="handleClickSeat(192)" :class="{ occupied: Event.occupiedSeatsId.includes(192), selected: Event.reservedSeatsId.includes(192) }">9</div>
            <div class="seat" @click="handleClickSeat(193)" :class="{ occupied: Event.occupiedSeatsId.includes(193), selected: Event.reservedSeatsId.includes(193) }">10</div>
            <div class="seat" @click="handleClickSeat(194)" :class="{ occupied: Event.occupiedSeatsId.includes(194), selected: Event.reservedSeatsId.includes(194) }">11</div>
            <div class="seat" @click="handleClickSeat(195)" :class="{ occupied: Event.occupiedSeatsId.includes(195), selected: Event.reservedSeatsId.includes(195) }">12</div>
            <div class="seat" @click="handleClickSeat(196)" :class="{ occupied: Event.occupiedSeatsId.includes(196), selected: Event.reservedSeatsId.includes(196) }">13</div>
            <div class="seat" @click="handleClickSeat(197)" :class="{ occupied: Event.occupiedSeatsId.includes(197), selected: Event.reservedSeatsId.includes(197) }">14</div>
            <div class="seat" @click="handleClickSeat(198)" :class="{ occupied: Event.occupiedSeatsId.includes(198), selected: Event.reservedSeatsId.includes(198) }">15</div>
            <div class="seat" @click="handleClickSeat(199)" :class="{ occupied: Event.occupiedSeatsId.includes(199), selected: Event.reservedSeatsId.includes(199) }">16</div>
            <div class="seat" @click="handleClickSeat(200)" :class="{ occupied: Event.occupiedSeatsId.includes(200), selected: Event.reservedSeatsId.includes(200) }">17</div>
            <div class="seat" @click="handleClickSeat(201)" :class="{ occupied: Event.occupiedSeatsId.includes(201), selected: Event.reservedSeatsId.includes(201) }">18</div>
            <div class="seat" @click="handleClickSeat(202)" :class="{ occupied: Event.occupiedSeatsId.includes(202), selected: Event.reservedSeatsId.includes(202) }">19</div>
            <div class="seat" @click="handleClickSeat(203)" :class="{ occupied: Event.occupiedSeatsId.includes(203), selected: Event.reservedSeatsId.includes(203) }">20</div>
            <div class="seat" @click="handleClickSeat(204)" :class="{ occupied: Event.occupiedSeatsId.includes(204), selected: Event.reservedSeatsId.includes(204) }">21</div>
            <div class="seat" @click="handleClickSeat(205)" :class="{ occupied: Event.occupiedSeatsId.includes(205), selected: Event.reservedSeatsId.includes(205) }">22</div>
            <div class="seat" @click="handleClickSeat(206)" :class="{ occupied: Event.occupiedSeatsId.includes(206), selected: Event.reservedSeatsId.includes(206) }">23</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(223)" :class="{ occupied: Event.occupiedSeatsId.includes(223), selected: Event.reservedSeatsId.includes(223) }">7</div>
            <div class="seat" @click="handleClickSeat(224)" :class="{ occupied: Event.occupiedSeatsId.includes(224), selected: Event.reservedSeatsId.includes(224) }">8</div>
            <div class="seat" @click="handleClickSeat(225)" :class="{ occupied: Event.occupiedSeatsId.includes(225), selected: Event.reservedSeatsId.includes(225) }">9</div>
            <div class="seat" @click="handleClickSeat(226)" :class="{ occupied: Event.occupiedSeatsId.includes(226), selected: Event.reservedSeatsId.includes(226) }">10</div>
            <div class="seat" @click="handleClickSeat(227)" :class="{ occupied: Event.occupiedSeatsId.includes(227), selected: Event.reservedSeatsId.includes(227) }">11</div>
            <div class="seat" @click="handleClickSeat(228)" :class="{ occupied: Event.occupiedSeatsId.includes(228), selected: Event.reservedSeatsId.includes(228) }">12</div>
            <div class="seat" @click="handleClickSeat(229)" :class="{ occupied: Event.occupiedSeatsId.includes(229), selected: Event.reservedSeatsId.includes(229) }">13</div>
            <div class="seat" @click="handleClickSeat(230)" :class="{ occupied: Event.occupiedSeatsId.includes(230), selected: Event.reservedSeatsId.includes(230) }">14</div>
            <div class="seat" @click="handleClickSeat(231)" :class="{ occupied: Event.occupiedSeatsId.includes(231), selected: Event.reservedSeatsId.includes(231) }">15</div>
            <div class="seat" @click="handleClickSeat(232)" :class="{ occupied: Event.occupiedSeatsId.includes(232), selected: Event.reservedSeatsId.includes(232) }">16</div>
            <div class="seat" @click="handleClickSeat(233)" :class="{ occupied: Event.occupiedSeatsId.includes(233), selected: Event.reservedSeatsId.includes(233) }">17</div>
            <div class="seat" @click="handleClickSeat(234)" :class="{ occupied: Event.occupiedSeatsId.includes(234), selected: Event.reservedSeatsId.includes(234) }">18</div>
            <div class="seat" @click="handleClickSeat(235)" :class="{ occupied: Event.occupiedSeatsId.includes(235), selected: Event.reservedSeatsId.includes(235) }">19</div>
            <div class="seat" @click="handleClickSeat(236)" :class="{ occupied: Event.occupiedSeatsId.includes(236), selected: Event.reservedSeatsId.includes(236) }">20</div>
            <div class="seat" @click="handleClickSeat(237)" :class="{ occupied: Event.occupiedSeatsId.includes(237), selected: Event.reservedSeatsId.includes(237) }">21</div>
            <div class="seat" @click="handleClickSeat(238)" :class="{ occupied: Event.occupiedSeatsId.includes(238), selected: Event.reservedSeatsId.includes(238) }">22</div>
            <div class="seat" @click="handleClickSeat(239)" :class="{ occupied: Event.occupiedSeatsId.includes(239), selected: Event.reservedSeatsId.includes(239) }">23</div>
          </div>
        </div>
        <!-- Right column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(20)" :class="{ occupied: Event.occupiedSeatsId.includes(20), selected: Event.reservedSeatsId.includes(20) }">20</div>
            <div class="seat" @click="handleClickSeat(21)" :class="{ occupied: Event.occupiedSeatsId.includes(21), selected: Event.reservedSeatsId.includes(21) }">21</div>
            <div class="seat" @click="handleClickSeat(22)" :class="{ occupied: Event.occupiedSeatsId.includes(22), selected: Event.reservedSeatsId.includes(22) }">22</div>
            <div class="seat" @click="handleClickSeat(23)" :class="{ occupied: Event.occupiedSeatsId.includes(23), selected: Event.reservedSeatsId.includes(23) }">23</div>
            <div class="seat" @click="handleClickSeat(24)" :class="{ occupied: Event.occupiedSeatsId.includes(24), selected: Event.reservedSeatsId.includes(24) }">24</div>
            <div class="seat" @click="handleClickSeat(25)" :class="{ occupied: Event.occupiedSeatsId.includes(25), selected: Event.reservedSeatsId.includes(25) }">25</div>
            <div class="seat" @click="handleClickSeat(26)" :class="{ occupied: Event.occupiedSeatsId.includes(26), selected: Event.reservedSeatsId.includes(26) }">26</div>
            <div class="seat" @click="handleClickSeat(27)" :class="{ occupied: Event.occupiedSeatsId.includes(27), selected: Event.reservedSeatsId.includes(27) }">27</div>
            <div class="seat" @click="handleClickSeat(28)" :class="{ occupied: Event.occupiedSeatsId.includes(28), selected: Event.reservedSeatsId.includes(28) }">28</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(49)" :class="{ occupied: Event.occupiedSeatsId.includes(49), selected: Event.reservedSeatsId.includes(49) }">21</div>
            <div class="seat" @click="handleClickSeat(50)" :class="{ occupied: Event.occupiedSeatsId.includes(50), selected: Event.reservedSeatsId.includes(50) }">22</div>
            <div class="seat" @click="handleClickSeat(51)" :class="{ occupied: Event.occupiedSeatsId.includes(51), selected: Event.reservedSeatsId.includes(51) }">23</div>
            <div class="seat" @click="handleClickSeat(52)" :class="{ occupied: Event.occupiedSeatsId.includes(52), selected: Event.reservedSeatsId.includes(52) }">24</div>
            <div class="seat" @click="handleClickSeat(53)" :class="{ occupied: Event.occupiedSeatsId.includes(53), selected: Event.reservedSeatsId.includes(53) }">25</div>
            <div class="seat" @click="handleClickSeat(54)" :class="{ occupied: Event.occupiedSeatsId.includes(54), selected: Event.reservedSeatsId.includes(54) }">26</div>
            <div class="seat" @click="handleClickSeat(55)" :class="{ occupied: Event.occupiedSeatsId.includes(55), selected: Event.reservedSeatsId.includes(55) }">27</div>
            <div class="seat" @click="handleClickSeat(56)" :class="{ occupied: Event.occupiedSeatsId.includes(56), selected: Event.reservedSeatsId.includes(56) }">28</div>
            <div class="seat" @click="handleClickSeat(57)" :class="{ occupied: Event.occupiedSeatsId.includes(57), selected: Event.reservedSeatsId.includes(57) }">29</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(79)" :class="{ occupied: Event.occupiedSeatsId.includes(79), selected: Event.reservedSeatsId.includes(79) }">22</div>
            <div class="seat" @click="handleClickSeat(80)" :class="{ occupied: Event.occupiedSeatsId.includes(80), selected: Event.reservedSeatsId.includes(80) }">23</div>
            <div class="seat" @click="handleClickSeat(81)" :class="{ occupied: Event.occupiedSeatsId.includes(81), selected: Event.reservedSeatsId.includes(81) }">24</div>
            <div class="seat" @click="handleClickSeat(82)" :class="{ occupied: Event.occupiedSeatsId.includes(82), selected: Event.reservedSeatsId.includes(82) }">25</div>
            <div class="seat" @click="handleClickSeat(83)" :class="{ occupied: Event.occupiedSeatsId.includes(83), selected: Event.reservedSeatsId.includes(83) }">26</div>
            <div class="seat" @click="handleClickSeat(84)" :class="{ occupied: Event.occupiedSeatsId.includes(84), selected: Event.reservedSeatsId.includes(84) }">27</div>
            <div class="seat" @click="handleClickSeat(85)" :class="{ occupied: Event.occupiedSeatsId.includes(85), selected: Event.reservedSeatsId.includes(85) }">28</div>
            <div class="seat" @click="handleClickSeat(86)" :class="{ occupied: Event.occupiedSeatsId.includes(86), selected: Event.reservedSeatsId.includes(86) }">29</div>
            <div class="seat" @click="handleClickSeat(87)" :class="{ occupied: Event.occupiedSeatsId.includes(87), selected: Event.reservedSeatsId.includes(87) }">30</div>
            <div class="seat" @click="handleClickSeat(88)" :class="{ occupied: Event.occupiedSeatsId.includes(88), selected: Event.reservedSeatsId.includes(88) }">31</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(110)" :class="{ occupied: Event.occupiedSeatsId.includes(110), selected: Event.reservedSeatsId.includes(110) }">22</div>
            <div class="seat" @click="handleClickSeat(111)" :class="{ occupied: Event.occupiedSeatsId.includes(111), selected: Event.reservedSeatsId.includes(111) }">23</div>
            <div class="seat" @click="handleClickSeat(112)" :class="{ occupied: Event.occupiedSeatsId.includes(112), selected: Event.reservedSeatsId.includes(112) }">24</div>
            <div class="seat" @click="handleClickSeat(113)" :class="{ occupied: Event.occupiedSeatsId.includes(113), selected: Event.reservedSeatsId.includes(113) }">25</div>
            <div class="seat" @click="handleClickSeat(114)" :class="{ occupied: Event.occupiedSeatsId.includes(114), selected: Event.reservedSeatsId.includes(114) }">26</div>
            <div class="seat" @click="handleClickSeat(115)" :class="{ occupied: Event.occupiedSeatsId.includes(115), selected: Event.reservedSeatsId.includes(115) }">27</div>
            <div class="seat" @click="handleClickSeat(116)" :class="{ occupied: Event.occupiedSeatsId.includes(116), selected: Event.reservedSeatsId.includes(116) }">28</div>
            <div class="seat" @click="handleClickSeat(117)" :class="{ occupied: Event.occupiedSeatsId.includes(117), selected: Event.reservedSeatsId.includes(117) }">29</div>
            <div class="seat" @click="handleClickSeat(118)" :class="{ occupied: Event.occupiedSeatsId.includes(118), selected: Event.reservedSeatsId.includes(118) }">30</div>
            <div class="seat" @click="handleClickSeat(119)" :class="{ occupied: Event.occupiedSeatsId.includes(119), selected: Event.reservedSeatsId.includes(119) }">31</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(142)" :class="{ occupied: Event.occupiedSeatsId.includes(142), selected: Event.reservedSeatsId.includes(142) }">23</div>
            <div class="seat" @click="handleClickSeat(143)" :class="{ occupied: Event.occupiedSeatsId.includes(143), selected: Event.reservedSeatsId.includes(143) }">24</div>
            <div class="seat" @click="handleClickSeat(144)" :class="{ occupied: Event.occupiedSeatsId.includes(144), selected: Event.reservedSeatsId.includes(144) }">25</div>
            <div class="seat" @click="handleClickSeat(145)" :class="{ occupied: Event.occupiedSeatsId.includes(145), selected: Event.reservedSeatsId.includes(145) }">26</div>
            <div class="seat" @click="handleClickSeat(146)" :class="{ occupied: Event.occupiedSeatsId.includes(146), selected: Event.reservedSeatsId.includes(146) }">27</div>
            <div class="seat" @click="handleClickSeat(147)" :class="{ occupied: Event.occupiedSeatsId.includes(147), selected: Event.reservedSeatsId.includes(147) }">28</div>
            <div class="seat" @click="handleClickSeat(148)" :class="{ occupied: Event.occupiedSeatsId.includes(148), selected: Event.reservedSeatsId.includes(148) }">29</div>
            <div class="seat" @click="handleClickSeat(149)" :class="{ occupied: Event.occupiedSeatsId.includes(149), selected: Event.reservedSeatsId.includes(149) }">30</div>
            <div class="seat" @click="handleClickSeat(150)" :class="{ occupied: Event.occupiedSeatsId.includes(150), selected: Event.reservedSeatsId.includes(150) }">31</div>
            <div class="seat" @click="handleClickSeat(151)" :class="{ occupied: Event.occupiedSeatsId.includes(151), selected: Event.reservedSeatsId.includes(151) }">32</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(174)" :class="{ occupied: Event.occupiedSeatsId.includes(174), selected: Event.reservedSeatsId.includes(174) }">23</div>
            <div class="seat" @click="handleClickSeat(175)" :class="{ occupied: Event.occupiedSeatsId.includes(175), selected: Event.reservedSeatsId.includes(175) }">24</div>
            <div class="seat" @click="handleClickSeat(176)" :class="{ occupied: Event.occupiedSeatsId.includes(176), selected: Event.reservedSeatsId.includes(176) }">25</div>
            <div class="seat" @click="handleClickSeat(177)" :class="{ occupied: Event.occupiedSeatsId.includes(177), selected: Event.reservedSeatsId.includes(177) }">26</div>
            <div class="seat" @click="handleClickSeat(178)" :class="{ occupied: Event.occupiedSeatsId.includes(178), selected: Event.reservedSeatsId.includes(178) }">27</div>
            <div class="seat" @click="handleClickSeat(179)" :class="{ occupied: Event.occupiedSeatsId.includes(179), selected: Event.reservedSeatsId.includes(179) }">28</div>
            <div class="seat" @click="handleClickSeat(180)" :class="{ occupied: Event.occupiedSeatsId.includes(180), selected: Event.reservedSeatsId.includes(180) }">29</div>
            <div class="seat" @click="handleClickSeat(181)" :class="{ occupied: Event.occupiedSeatsId.includes(181), selected: Event.reservedSeatsId.includes(181) }">30</div>
            <div class="seat" @click="handleClickSeat(182)" :class="{ occupied: Event.occupiedSeatsId.includes(182), selected: Event.reservedSeatsId.includes(182) }">31</div>
            <div class="seat" @click="handleClickSeat(183)" :class="{ occupied: Event.occupiedSeatsId.includes(183), selected: Event.reservedSeatsId.includes(183) }">32</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(207)" :class="{ occupied: Event.occupiedSeatsId.includes(207), selected: Event.reservedSeatsId.includes(207) }">24</div>
            <div class="seat" @click="handleClickSeat(208)" :class="{ occupied: Event.occupiedSeatsId.includes(208), selected: Event.reservedSeatsId.includes(208) }">25</div>
            <div class="seat" @click="handleClickSeat(209)" :class="{ occupied: Event.occupiedSeatsId.includes(209), selected: Event.reservedSeatsId.includes(209) }">26</div>
            <div class="seat" @click="handleClickSeat(210)" :class="{ occupied: Event.occupiedSeatsId.includes(210), selected: Event.reservedSeatsId.includes(210) }">27</div>
            <div class="seat" @click="handleClickSeat(211)" :class="{ occupied: Event.occupiedSeatsId.includes(211), selected: Event.reservedSeatsId.includes(211) }">28</div>
            <div class="seat" @click="handleClickSeat(212)" :class="{ occupied: Event.occupiedSeatsId.includes(212), selected: Event.reservedSeatsId.includes(212) }">29</div>
            <div class="seat" @click="handleClickSeat(213)" :class="{ occupied: Event.occupiedSeatsId.includes(213), selected: Event.reservedSeatsId.includes(213) }">30</div>
            <div class="seat" @click="handleClickSeat(214)" :class="{ occupied: Event.occupiedSeatsId.includes(214), selected: Event.reservedSeatsId.includes(214) }">31</div>
            <div class="seat" @click="handleClickSeat(215)" :class="{ occupied: Event.occupiedSeatsId.includes(215), selected: Event.reservedSeatsId.includes(215) }">32</div>
            <div class="seat" @click="handleClickSeat(216)" :class="{ occupied: Event.occupiedSeatsId.includes(216), selected: Event.reservedSeatsId.includes(216) }">33</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(240)" :class="{ occupied: Event.occupiedSeatsId.includes(240), selected: Event.reservedSeatsId.includes(240) }">24</div>
            <div class="seat" @click="handleClickSeat(241)" :class="{ occupied: Event.occupiedSeatsId.includes(241), selected: Event.reservedSeatsId.includes(241) }">25</div>
            <div class="seat" @click="handleClickSeat(242)" :class="{ occupied: Event.occupiedSeatsId.includes(242), selected: Event.reservedSeatsId.includes(242) }">26</div>
            <div class="seat" @click="handleClickSeat(243)" :class="{ occupied: Event.occupiedSeatsId.includes(243), selected: Event.reservedSeatsId.includes(243) }">27</div>
            <div class="seat" @click="handleClickSeat(244)" :class="{ occupied: Event.occupiedSeatsId.includes(244), selected: Event.reservedSeatsId.includes(244) }">28</div>
            <div class="seat" @click="handleClickSeat(245)" :class="{ occupied: Event.occupiedSeatsId.includes(245), selected: Event.reservedSeatsId.includes(245) }">29</div>
            <div class="seat" @click="handleClickSeat(246)" :class="{ occupied: Event.occupiedSeatsId.includes(246), selected: Event.reservedSeatsId.includes(246) }">30</div>
            <div class="seat" @click="handleClickSeat(247)" :class="{ occupied: Event.occupiedSeatsId.includes(247), selected: Event.reservedSeatsId.includes(247) }">31</div>
            <div class="seat" @click="handleClickSeat(248)" :class="{ occupied: Event.occupiedSeatsId.includes(248), selected: Event.reservedSeatsId.includes(248) }">32</div>
            <div class="seat" @click="handleClickSeat(249)" :class="{ occupied: Event.occupiedSeatsId.includes(249), selected: Event.reservedSeatsId.includes(249) }">33</div>
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
            <span>I</span>
            <div class="seat" @click="handleClickSeat(1)" :class="{ occupied: Event.occupiedSeatsId.includes(1), selected: Event.reservedSeatsId.includes(1) }">1</div>
            <div class="seat" @click="handleClickSeat(2)" :class="{ occupied: Event.occupiedSeatsId.includes(2), selected: Event.reservedSeatsId.includes(2) }">2</div>
            <div class="seat" @click="handleClickSeat(3)" :class="{ occupied: Event.occupiedSeatsId.includes(3), selected: Event.reservedSeatsId.includes(3) }">3</div>
            <div class="seat" @click="handleClickSeat(4)" :class="{ occupied: Event.occupiedSeatsId.includes(4), selected: Event.reservedSeatsId.includes(4) }">4</div>
            <div class="seat" @click="handleClickSeat(5)" :class="{ occupied: Event.occupiedSeatsId.includes(5), selected: Event.reservedSeatsId.includes(5) }">5</div>
            <div class="seat" @click="handleClickSeat(6)" :class="{ occupied: Event.occupiedSeatsId.includes(6), selected: Event.reservedSeatsId.includes(6) }">6</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(29)" :class="{ occupied: Event.occupiedSeatsId.includes(29), selected: Event.reservedSeatsId.includes(29) }">1</div>
            <div class="seat" @click="handleClickSeat(30)" :class="{ occupied: Event.occupiedSeatsId.includes(30), selected: Event.reservedSeatsId.includes(30) }">2</div>
            <div class="seat" @click="handleClickSeat(31)" :class="{ occupied: Event.occupiedSeatsId.includes(31), selected: Event.reservedSeatsId.includes(31) }">3</div>
            <div class="seat" @click="handleClickSeat(32)" :class="{ occupied: Event.occupiedSeatsId.includes(32), selected: Event.reservedSeatsId.includes(32) }">4</div>
            <div class="seat" @click="handleClickSeat(33)" :class="{ occupied: Event.occupiedSeatsId.includes(33), selected: Event.reservedSeatsId.includes(33) }">5</div>
            <div class="seat" @click="handleClickSeat(34)" :class="{ occupied: Event.occupiedSeatsId.includes(34), selected: Event.reservedSeatsId.includes(34) }">6</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(58)" :class="{ occupied: Event.occupiedSeatsId.includes(58), selected: Event.reservedSeatsId.includes(58) }">1</div>
            <div class="seat" @click="handleClickSeat(59)" :class="{ occupied: Event.occupiedSeatsId.includes(59), selected: Event.reservedSeatsId.includes(59) }">2</div>
            <div class="seat" @click="handleClickSeat(60)" :class="{ occupied: Event.occupiedSeatsId.includes(60), selected: Event.reservedSeatsId.includes(60) }">3</div>
            <div class="seat" @click="handleClickSeat(61)" :class="{ occupied: Event.occupiedSeatsId.includes(61), selected: Event.reservedSeatsId.includes(61) }">4</div>
            <div class="seat" @click="handleClickSeat(62)" :class="{ occupied: Event.occupiedSeatsId.includes(62), selected: Event.reservedSeatsId.includes(62) }">5</div>
            <div class="seat" @click="handleClickSeat(63)" :class="{ occupied: Event.occupiedSeatsId.includes(63), selected: Event.reservedSeatsId.includes(63) }">6</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(89)" :class="{ occupied: Event.occupiedSeatsId.includes(89), selected: Event.reservedSeatsId.includes(89) }">1</div>
            <div class="seat" @click="handleClickSeat(90)" :class="{ occupied: Event.occupiedSeatsId.includes(90), selected: Event.reservedSeatsId.includes(90) }">2</div>
            <div class="seat" @click="handleClickSeat(91)" :class="{ occupied: Event.occupiedSeatsId.includes(91), selected: Event.reservedSeatsId.includes(91) }">3</div>
            <div class="seat" @click="handleClickSeat(92)" :class="{ occupied: Event.occupiedSeatsId.includes(92), selected: Event.reservedSeatsId.includes(92) }">4</div>
            <div class="seat" @click="handleClickSeat(93)" :class="{ occupied: Event.occupiedSeatsId.includes(93), selected: Event.reservedSeatsId.includes(93) }">5</div>
            <div class="seat" @click="handleClickSeat(94)" :class="{ occupied: Event.occupiedSeatsId.includes(94), selected: Event.reservedSeatsId.includes(94) }">6</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(120)" :class="{ occupied: Event.occupiedSeatsId.includes(120), selected: Event.reservedSeatsId.includes(120) }">1</div>
            <div class="seat" @click="handleClickSeat(121)" :class="{ occupied: Event.occupiedSeatsId.includes(121), selected: Event.reservedSeatsId.includes(121) }">2</div>
            <div class="seat" @click="handleClickSeat(122)" :class="{ occupied: Event.occupiedSeatsId.includes(122), selected: Event.reservedSeatsId.includes(122) }">3</div>
            <div class="seat" @click="handleClickSeat(123)" :class="{ occupied: Event.occupiedSeatsId.includes(123), selected: Event.reservedSeatsId.includes(123) }">4</div>
            <div class="seat" @click="handleClickSeat(124)" :class="{ occupied: Event.occupiedSeatsId.includes(124), selected: Event.reservedSeatsId.includes(124) }">5</div>
            <div class="seat" @click="handleClickSeat(125)" :class="{ occupied: Event.occupiedSeatsId.includes(125), selected: Event.reservedSeatsId.includes(125) }">6</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(152)" :class="{ occupied: Event.occupiedSeatsId.includes(152), selected: Event.reservedSeatsId.includes(152) }">1</div>
            <div class="seat" @click="handleClickSeat(153)" :class="{ occupied: Event.occupiedSeatsId.includes(153), selected: Event.reservedSeatsId.includes(153) }">2</div>
            <div class="seat" @click="handleClickSeat(154)" :class="{ occupied: Event.occupiedSeatsId.includes(154), selected: Event.reservedSeatsId.includes(154) }">3</div>
            <div class="seat" @click="handleClickSeat(155)" :class="{ occupied: Event.occupiedSeatsId.includes(155), selected: Event.reservedSeatsId.includes(155) }">4</div>
            <div class="seat" @click="handleClickSeat(156)" :class="{ occupied: Event.occupiedSeatsId.includes(156), selected: Event.reservedSeatsId.includes(156) }">5</div>
            <div class="seat" @click="handleClickSeat(157)" :class="{ occupied: Event.occupiedSeatsId.includes(157), selected: Event.reservedSeatsId.includes(157) }">6</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(184)" :class="{ occupied: Event.occupiedSeatsId.includes(184), selected: Event.reservedSeatsId.includes(184) }">1</div>
            <div class="seat" @click="handleClickSeat(185)" :class="{ occupied: Event.occupiedSeatsId.includes(185), selected: Event.reservedSeatsId.includes(185) }">2</div>
            <div class="seat" @click="handleClickSeat(186)" :class="{ occupied: Event.occupiedSeatsId.includes(186), selected: Event.reservedSeatsId.includes(186) }">3</div>
            <div class="seat" @click="handleClickSeat(187)" :class="{ occupied: Event.occupiedSeatsId.includes(187), selected: Event.reservedSeatsId.includes(187) }">4</div>
            <div class="seat" @click="handleClickSeat(188)" :class="{ occupied: Event.occupiedSeatsId.includes(188), selected: Event.reservedSeatsId.includes(188) }">5</div>
            <div class="seat" @click="handleClickSeat(189)" :class="{ occupied: Event.occupiedSeatsId.includes(189), selected: Event.reservedSeatsId.includes(189) }">6</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(217)" :class="{ occupied: Event.occupiedSeatsId.includes(217), selected: Event.reservedSeatsId.includes(217) }">1</div>
            <div class="seat" @click="handleClickSeat(218)" :class="{ occupied: Event.occupiedSeatsId.includes(218), selected: Event.reservedSeatsId.includes(218) }">2</div>
            <div class="seat" @click="handleClickSeat(219)" :class="{ occupied: Event.occupiedSeatsId.includes(219), selected: Event.reservedSeatsId.includes(219) }">3</div>
            <div class="seat" @click="handleClickSeat(220)" :class="{ occupied: Event.occupiedSeatsId.includes(220), selected: Event.reservedSeatsId.includes(220) }">4</div>
            <div class="seat" @click="handleClickSeat(221)" :class="{ occupied: Event.occupiedSeatsId.includes(221), selected: Event.reservedSeatsId.includes(221) }">5</div>
            <div class="seat" @click="handleClickSeat(222)" :class="{ occupied: Event.occupiedSeatsId.includes(222), selected: Event.reservedSeatsId.includes(222) }">6</div>
          </div>
        </div>
      </div>
      <!-- Middle Column -->
      <div v-else-if="selectedPart === 2">
        <h5 class="returnButton" @click="selectedPart = 0"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót</h5>
        <div class="column middle">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(7)" :class="{ occupied: Event.occupiedSeatsId.includes(7), selected: Event.reservedSeatsId.includes(7) }">7</div>
            <div class="seat" @click="handleClickSeat(8)" :class="{ occupied: Event.occupiedSeatsId.includes(8), selected: Event.reservedSeatsId.includes(8) }">8</div>
            <div class="seat" @click="handleClickSeat(9)" :class="{ occupied: Event.occupiedSeatsId.includes(9), selected: Event.reservedSeatsId.includes(9) }">9</div>
            <div class="seat" @click="handleClickSeat(10)" :class="{ occupied: Event.occupiedSeatsId.includes(10), selected: Event.reservedSeatsId.includes(10) }">10</div>
            <div class="seat" @click="handleClickSeat(11)" :class="{ occupied: Event.occupiedSeatsId.includes(11), selected: Event.reservedSeatsId.includes(11) }">11</div>
            <div class="seat" @click="handleClickSeat(12)" :class="{ occupied: Event.occupiedSeatsId.includes(12), selected: Event.reservedSeatsId.includes(12) }">12</div>
            <div class="seat" @click="handleClickSeat(13)" :class="{ occupied: Event.occupiedSeatsId.includes(13), selected: Event.reservedSeatsId.includes(13) }">13</div>
            <div class="seat" @click="handleClickSeat(14)" :class="{ occupied: Event.occupiedSeatsId.includes(14), selected: Event.reservedSeatsId.includes(14) }">14</div>
            <div class="seat" @click="handleClickSeat(15)" :class="{ occupied: Event.occupiedSeatsId.includes(15), selected: Event.reservedSeatsId.includes(15) }">15</div>
            <div class="seat" @click="handleClickSeat(16)" :class="{ occupied: Event.occupiedSeatsId.includes(16), selected: Event.reservedSeatsId.includes(16) }">16</div>
            <div class="seat" @click="handleClickSeat(17)" :class="{ occupied: Event.occupiedSeatsId.includes(17), selected: Event.reservedSeatsId.includes(17) }">17</div>
            <div class="seat" @click="handleClickSeat(18)" :class="{ occupied: Event.occupiedSeatsId.includes(18), selected: Event.reservedSeatsId.includes(18) }">18</div>
            <div class="seat" @click="handleClickSeat(19)" :class="{ occupied: Event.occupiedSeatsId.includes(19), selected: Event.reservedSeatsId.includes(19) }">19</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(35)" :class="{ occupied: Event.occupiedSeatsId.includes(35), selected: Event.reservedSeatsId.includes(35) }">7</div>
            <div class="seat" @click="handleClickSeat(36)" :class="{ occupied: Event.occupiedSeatsId.includes(36), selected: Event.reservedSeatsId.includes(36) }">8</div>
            <div class="seat" @click="handleClickSeat(37)" :class="{ occupied: Event.occupiedSeatsId.includes(37), selected: Event.reservedSeatsId.includes(37) }">9</div>
            <div class="seat" @click="handleClickSeat(38)" :class="{ occupied: Event.occupiedSeatsId.includes(38), selected: Event.reservedSeatsId.includes(38) }">10</div>
            <div class="seat" @click="handleClickSeat(39)" :class="{ occupied: Event.occupiedSeatsId.includes(39), selected: Event.reservedSeatsId.includes(39) }">11</div>
            <div class="seat" @click="handleClickSeat(40)" :class="{ occupied: Event.occupiedSeatsId.includes(40), selected: Event.reservedSeatsId.includes(40) }">12</div>
            <div class="seat" @click="handleClickSeat(41)" :class="{ occupied: Event.occupiedSeatsId.includes(41), selected: Event.reservedSeatsId.includes(41) }">13</div>
            <div class="seat" @click="handleClickSeat(42)" :class="{ occupied: Event.occupiedSeatsId.includes(42), selected: Event.reservedSeatsId.includes(42) }">14</div>
            <div class="seat" @click="handleClickSeat(43)" :class="{ occupied: Event.occupiedSeatsId.includes(43), selected: Event.reservedSeatsId.includes(43) }">15</div>
            <div class="seat" @click="handleClickSeat(44)" :class="{ occupied: Event.occupiedSeatsId.includes(44), selected: Event.reservedSeatsId.includes(44) }">16</div>
            <div class="seat" @click="handleClickSeat(45)" :class="{ occupied: Event.occupiedSeatsId.includes(45), selected: Event.reservedSeatsId.includes(45) }">17</div>
            <div class="seat" @click="handleClickSeat(46)" :class="{ occupied: Event.occupiedSeatsId.includes(46), selected: Event.reservedSeatsId.includes(46) }">18</div>
            <div class="seat" @click="handleClickSeat(47)" :class="{ occupied: Event.occupiedSeatsId.includes(47), selected: Event.reservedSeatsId.includes(47) }">19</div>
            <div class="seat" @click="handleClickSeat(48)" :class="{ occupied: Event.occupiedSeatsId.includes(48), selected: Event.reservedSeatsId.includes(48) }">20</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(64)" :class="{ occupied: Event.occupiedSeatsId.includes(64), selected: Event.reservedSeatsId.includes(64) }">7</div>
            <div class="seat" @click="handleClickSeat(65)" :class="{ occupied: Event.occupiedSeatsId.includes(65), selected: Event.reservedSeatsId.includes(65) }">8</div>
            <div class="seat" @click="handleClickSeat(66)" :class="{ occupied: Event.occupiedSeatsId.includes(66), selected: Event.reservedSeatsId.includes(66) }">9</div>
            <div class="seat" @click="handleClickSeat(67)" :class="{ occupied: Event.occupiedSeatsId.includes(67), selected: Event.reservedSeatsId.includes(67) }">10</div>
            <div class="seat" @click="handleClickSeat(68)" :class="{ occupied: Event.occupiedSeatsId.includes(68), selected: Event.reservedSeatsId.includes(68) }">11</div>
            <div class="seat" @click="handleClickSeat(69)" :class="{ occupied: Event.occupiedSeatsId.includes(69), selected: Event.reservedSeatsId.includes(69) }">12</div>
            <div class="seat" @click="handleClickSeat(70)" :class="{ occupied: Event.occupiedSeatsId.includes(70), selected: Event.reservedSeatsId.includes(70) }">13</div>
            <div class="seat" @click="handleClickSeat(71)" :class="{ occupied: Event.occupiedSeatsId.includes(71), selected: Event.reservedSeatsId.includes(71) }">14</div>
            <div class="seat" @click="handleClickSeat(72)" :class="{ occupied: Event.occupiedSeatsId.includes(72), selected: Event.reservedSeatsId.includes(72) }">15</div>
            <div class="seat" @click="handleClickSeat(73)" :class="{ occupied: Event.occupiedSeatsId.includes(73), selected: Event.reservedSeatsId.includes(73) }">16</div>
            <div class="seat" @click="handleClickSeat(74)" :class="{ occupied: Event.occupiedSeatsId.includes(74), selected: Event.reservedSeatsId.includes(74) }">17</div>
            <div class="seat" @click="handleClickSeat(75)" :class="{ occupied: Event.occupiedSeatsId.includes(75), selected: Event.reservedSeatsId.includes(75) }">18</div>
            <div class="seat" @click="handleClickSeat(76)" :class="{ occupied: Event.occupiedSeatsId.includes(76), selected: Event.reservedSeatsId.includes(76) }">19</div>
            <div class="seat" @click="handleClickSeat(77)" :class="{ occupied: Event.occupiedSeatsId.includes(77), selected: Event.reservedSeatsId.includes(77) }">20</div>
            <div class="seat" @click="handleClickSeat(78)" :class="{ occupied: Event.occupiedSeatsId.includes(78), selected: Event.reservedSeatsId.includes(78) }">21</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(95)" :class="{ occupied: Event.occupiedSeatsId.includes(95), selected: Event.reservedSeatsId.includes(95) }">7</div>
            <div class="seat" @click="handleClickSeat(96)" :class="{ occupied: Event.occupiedSeatsId.includes(96), selected: Event.reservedSeatsId.includes(96) }">8</div>
            <div class="seat" @click="handleClickSeat(97)" :class="{ occupied: Event.occupiedSeatsId.includes(97), selected: Event.reservedSeatsId.includes(97) }">9</div>
            <div class="seat" @click="handleClickSeat(98)" :class="{ occupied: Event.occupiedSeatsId.includes(98), selected: Event.reservedSeatsId.includes(98) }">10</div>
            <div class="seat" @click="handleClickSeat(99)" :class="{ occupied: Event.occupiedSeatsId.includes(99), selected: Event.reservedSeatsId.includes(99) }">11</div>
            <div class="seat" @click="handleClickSeat(100)" :class="{ occupied: Event.occupiedSeatsId.includes(100), selected: Event.reservedSeatsId.includes(100) }">12</div>
            <div class="seat" @click="handleClickSeat(101)" :class="{ occupied: Event.occupiedSeatsId.includes(101), selected: Event.reservedSeatsId.includes(101) }">13</div>
            <div class="seat" @click="handleClickSeat(102)" :class="{ occupied: Event.occupiedSeatsId.includes(102), selected: Event.reservedSeatsId.includes(102) }">14</div>
            <div class="seat" @click="handleClickSeat(103)" :class="{ occupied: Event.occupiedSeatsId.includes(103), selected: Event.reservedSeatsId.includes(103) }">15</div>
            <div class="seat" @click="handleClickSeat(104)" :class="{ occupied: Event.occupiedSeatsId.includes(104), selected: Event.reservedSeatsId.includes(104) }">16</div>
            <div class="seat" @click="handleClickSeat(105)" :class="{ occupied: Event.occupiedSeatsId.includes(105), selected: Event.reservedSeatsId.includes(105) }">17</div>
            <div class="seat" @click="handleClickSeat(106)" :class="{ occupied: Event.occupiedSeatsId.includes(106), selected: Event.reservedSeatsId.includes(106) }">18</div>
            <div class="seat" @click="handleClickSeat(107)" :class="{ occupied: Event.occupiedSeatsId.includes(107), selected: Event.reservedSeatsId.includes(107) }">19</div>
            <div class="seat" @click="handleClickSeat(108)" :class="{ occupied: Event.occupiedSeatsId.includes(108), selected: Event.reservedSeatsId.includes(108) }">20</div>
            <div class="seat" @click="handleClickSeat(109)" :class="{ occupied: Event.occupiedSeatsId.includes(109), selected: Event.reservedSeatsId.includes(109) }">21</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(126)" :class="{ occupied: Event.occupiedSeatsId.includes(126), selected: Event.reservedSeatsId.includes(126) }">7</div>
            <div class="seat" @click="handleClickSeat(127)" :class="{ occupied: Event.occupiedSeatsId.includes(127), selected: Event.reservedSeatsId.includes(127) }">8</div>
            <div class="seat" @click="handleClickSeat(128)" :class="{ occupied: Event.occupiedSeatsId.includes(128), selected: Event.reservedSeatsId.includes(128) }">9</div>
            <div class="seat" @click="handleClickSeat(129)" :class="{ occupied: Event.occupiedSeatsId.includes(129), selected: Event.reservedSeatsId.includes(129) }">10</div>
            <div class="seat" @click="handleClickSeat(130)" :class="{ occupied: Event.occupiedSeatsId.includes(130), selected: Event.reservedSeatsId.includes(130) }">11</div>
            <div class="seat" @click="handleClickSeat(131)" :class="{ occupied: Event.occupiedSeatsId.includes(131), selected: Event.reservedSeatsId.includes(131) }">12</div>
            <div class="seat" @click="handleClickSeat(132)" :class="{ occupied: Event.occupiedSeatsId.includes(132), selected: Event.reservedSeatsId.includes(132) }">13</div>
            <div class="seat" @click="handleClickSeat(133)" :class="{ occupied: Event.occupiedSeatsId.includes(133), selected: Event.reservedSeatsId.includes(133) }">14</div>
            <div class="seat" @click="handleClickSeat(134)" :class="{ occupied: Event.occupiedSeatsId.includes(134), selected: Event.reservedSeatsId.includes(134) }">15</div>
            <div class="seat" @click="handleClickSeat(135)" :class="{ occupied: Event.occupiedSeatsId.includes(135), selected: Event.reservedSeatsId.includes(135) }">16</div>
            <div class="seat" @click="handleClickSeat(136)" :class="{ occupied: Event.occupiedSeatsId.includes(136), selected: Event.reservedSeatsId.includes(136) }">17</div>
            <div class="seat" @click="handleClickSeat(137)" :class="{ occupied: Event.occupiedSeatsId.includes(137), selected: Event.reservedSeatsId.includes(137) }">18</div>
            <div class="seat" @click="handleClickSeat(138)" :class="{ occupied: Event.occupiedSeatsId.includes(138), selected: Event.reservedSeatsId.includes(138) }">19</div>
            <div class="seat" @click="handleClickSeat(139)" :class="{ occupied: Event.occupiedSeatsId.includes(139), selected: Event.reservedSeatsId.includes(139) }">20</div>
            <div class="seat" @click="handleClickSeat(140)" :class="{ occupied: Event.occupiedSeatsId.includes(140), selected: Event.reservedSeatsId.includes(140) }">21</div>
            <div class="seat" @click="handleClickSeat(141)" :class="{ occupied: Event.occupiedSeatsId.includes(141), selected: Event.reservedSeatsId.includes(141) }">22</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(158)" :class="{ occupied: Event.occupiedSeatsId.includes(158), selected: Event.reservedSeatsId.includes(158) }">7</div>
            <div class="seat" @click="handleClickSeat(159)" :class="{ occupied: Event.occupiedSeatsId.includes(159), selected: Event.reservedSeatsId.includes(159) }">8</div>
            <div class="seat" @click="handleClickSeat(160)" :class="{ occupied: Event.occupiedSeatsId.includes(160), selected: Event.reservedSeatsId.includes(160) }">9</div>
            <div class="seat" @click="handleClickSeat(161)" :class="{ occupied: Event.occupiedSeatsId.includes(161), selected: Event.reservedSeatsId.includes(161) }">10</div>
            <div class="seat" @click="handleClickSeat(162)" :class="{ occupied: Event.occupiedSeatsId.includes(162), selected: Event.reservedSeatsId.includes(162) }">11</div>
            <div class="seat" @click="handleClickSeat(163)" :class="{ occupied: Event.occupiedSeatsId.includes(163), selected: Event.reservedSeatsId.includes(163) }">12</div>
            <div class="seat" @click="handleClickSeat(164)" :class="{ occupied: Event.occupiedSeatsId.includes(164), selected: Event.reservedSeatsId.includes(164) }">13</div>
            <div class="seat" @click="handleClickSeat(165)" :class="{ occupied: Event.occupiedSeatsId.includes(165), selected: Event.reservedSeatsId.includes(165) }">14</div>
            <div class="seat" @click="handleClickSeat(166)" :class="{ occupied: Event.occupiedSeatsId.includes(166), selected: Event.reservedSeatsId.includes(166) }">15</div>
            <div class="seat" @click="handleClickSeat(167)" :class="{ occupied: Event.occupiedSeatsId.includes(167), selected: Event.reservedSeatsId.includes(167) }">16</div>
            <div class="seat" @click="handleClickSeat(168)" :class="{ occupied: Event.occupiedSeatsId.includes(168), selected: Event.reservedSeatsId.includes(168) }">17</div>
            <div class="seat" @click="handleClickSeat(169)" :class="{ occupied: Event.occupiedSeatsId.includes(169), selected: Event.reservedSeatsId.includes(169) }">18</div>
            <div class="seat" @click="handleClickSeat(170)" :class="{ occupied: Event.occupiedSeatsId.includes(170), selected: Event.reservedSeatsId.includes(170) }">19</div>
            <div class="seat" @click="handleClickSeat(171)" :class="{ occupied: Event.occupiedSeatsId.includes(171), selected: Event.reservedSeatsId.includes(171) }">20</div>
            <div class="seat" @click="handleClickSeat(172)" :class="{ occupied: Event.occupiedSeatsId.includes(172), selected: Event.reservedSeatsId.includes(172) }">21</div>
            <div class="seat" @click="handleClickSeat(173)" :class="{ occupied: Event.occupiedSeatsId.includes(173), selected: Event.reservedSeatsId.includes(173) }">22</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(190)" :class="{ occupied: Event.occupiedSeatsId.includes(190), selected: Event.reservedSeatsId.includes(190) }">7</div>
            <div class="seat" @click="handleClickSeat(191)" :class="{ occupied: Event.occupiedSeatsId.includes(191), selected: Event.reservedSeatsId.includes(191) }">8</div>
            <div class="seat" @click="handleClickSeat(192)" :class="{ occupied: Event.occupiedSeatsId.includes(192), selected: Event.reservedSeatsId.includes(192) }">9</div>
            <div class="seat" @click="handleClickSeat(193)" :class="{ occupied: Event.occupiedSeatsId.includes(193), selected: Event.reservedSeatsId.includes(193) }">10</div>
            <div class="seat" @click="handleClickSeat(194)" :class="{ occupied: Event.occupiedSeatsId.includes(194), selected: Event.reservedSeatsId.includes(194) }">11</div>
            <div class="seat" @click="handleClickSeat(195)" :class="{ occupied: Event.occupiedSeatsId.includes(195), selected: Event.reservedSeatsId.includes(195) }">12</div>
            <div class="seat" @click="handleClickSeat(196)" :class="{ occupied: Event.occupiedSeatsId.includes(196), selected: Event.reservedSeatsId.includes(196) }">13</div>
            <div class="seat" @click="handleClickSeat(197)" :class="{ occupied: Event.occupiedSeatsId.includes(197), selected: Event.reservedSeatsId.includes(197) }">14</div>
            <div class="seat" @click="handleClickSeat(198)" :class="{ occupied: Event.occupiedSeatsId.includes(198), selected: Event.reservedSeatsId.includes(198) }">15</div>
            <div class="seat" @click="handleClickSeat(199)" :class="{ occupied: Event.occupiedSeatsId.includes(199), selected: Event.reservedSeatsId.includes(199) }">16</div>
            <div class="seat" @click="handleClickSeat(200)" :class="{ occupied: Event.occupiedSeatsId.includes(200), selected: Event.reservedSeatsId.includes(200) }">17</div>
            <div class="seat" @click="handleClickSeat(201)" :class="{ occupied: Event.occupiedSeatsId.includes(201), selected: Event.reservedSeatsId.includes(201) }">18</div>
            <div class="seat" @click="handleClickSeat(202)" :class="{ occupied: Event.occupiedSeatsId.includes(202), selected: Event.reservedSeatsId.includes(202) }">19</div>
            <div class="seat" @click="handleClickSeat(203)" :class="{ occupied: Event.occupiedSeatsId.includes(203), selected: Event.reservedSeatsId.includes(203) }">20</div>
            <div class="seat" @click="handleClickSeat(204)" :class="{ occupied: Event.occupiedSeatsId.includes(204), selected: Event.reservedSeatsId.includes(204) }">21</div>
            <div class="seat" @click="handleClickSeat(205)" :class="{ occupied: Event.occupiedSeatsId.includes(205), selected: Event.reservedSeatsId.includes(205) }">22</div>
            <div class="seat" @click="handleClickSeat(206)" :class="{ occupied: Event.occupiedSeatsId.includes(206), selected: Event.reservedSeatsId.includes(206) }">23</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(223)" :class="{ occupied: Event.occupiedSeatsId.includes(223), selected: Event.reservedSeatsId.includes(223) }">7</div>
            <div class="seat" @click="handleClickSeat(224)" :class="{ occupied: Event.occupiedSeatsId.includes(224), selected: Event.reservedSeatsId.includes(224) }">8</div>
            <div class="seat" @click="handleClickSeat(225)" :class="{ occupied: Event.occupiedSeatsId.includes(225), selected: Event.reservedSeatsId.includes(225) }">9</div>
            <div class="seat" @click="handleClickSeat(226)" :class="{ occupied: Event.occupiedSeatsId.includes(226), selected: Event.reservedSeatsId.includes(226) }">10</div>
            <div class="seat" @click="handleClickSeat(227)" :class="{ occupied: Event.occupiedSeatsId.includes(227), selected: Event.reservedSeatsId.includes(227) }">11</div>
            <div class="seat" @click="handleClickSeat(228)" :class="{ occupied: Event.occupiedSeatsId.includes(228), selected: Event.reservedSeatsId.includes(228) }">12</div>
            <div class="seat" @click="handleClickSeat(229)" :class="{ occupied: Event.occupiedSeatsId.includes(229), selected: Event.reservedSeatsId.includes(229) }">13</div>
            <div class="seat" @click="handleClickSeat(230)" :class="{ occupied: Event.occupiedSeatsId.includes(230), selected: Event.reservedSeatsId.includes(230) }">14</div>
            <div class="seat" @click="handleClickSeat(231)" :class="{ occupied: Event.occupiedSeatsId.includes(231), selected: Event.reservedSeatsId.includes(231) }">15</div>
            <div class="seat" @click="handleClickSeat(232)" :class="{ occupied: Event.occupiedSeatsId.includes(232), selected: Event.reservedSeatsId.includes(232) }">16</div>
            <div class="seat" @click="handleClickSeat(233)" :class="{ occupied: Event.occupiedSeatsId.includes(233), selected: Event.reservedSeatsId.includes(233) }">17</div>
            <div class="seat" @click="handleClickSeat(234)" :class="{ occupied: Event.occupiedSeatsId.includes(234), selected: Event.reservedSeatsId.includes(234) }">18</div>
            <div class="seat" @click="handleClickSeat(235)" :class="{ occupied: Event.occupiedSeatsId.includes(235), selected: Event.reservedSeatsId.includes(235) }">19</div>
            <div class="seat" @click="handleClickSeat(236)" :class="{ occupied: Event.occupiedSeatsId.includes(236), selected: Event.reservedSeatsId.includes(236) }">20</div>
            <div class="seat" @click="handleClickSeat(237)" :class="{ occupied: Event.occupiedSeatsId.includes(237), selected: Event.reservedSeatsId.includes(237) }">21</div>
            <div class="seat" @click="handleClickSeat(238)" :class="{ occupied: Event.occupiedSeatsId.includes(238), selected: Event.reservedSeatsId.includes(238) }">22</div>
            <div class="seat" @click="handleClickSeat(239)" :class="{ occupied: Event.occupiedSeatsId.includes(239), selected: Event.reservedSeatsId.includes(239) }">23</div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div v-else-if="selectedPart === 3">
        <h5 class="returnButton" @click="selectedPart = 0"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót</h5>
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(20)" :class="{ occupied: Event.occupiedSeatsId.includes(20), selected: Event.reservedSeatsId.includes(20) }">20</div>
            <div class="seat" @click="handleClickSeat(21)" :class="{ occupied: Event.occupiedSeatsId.includes(21), selected: Event.reservedSeatsId.includes(21) }">21</div>
            <div class="seat" @click="handleClickSeat(22)" :class="{ occupied: Event.occupiedSeatsId.includes(22), selected: Event.reservedSeatsId.includes(22) }">22</div>
            <div class="seat" @click="handleClickSeat(23)" :class="{ occupied: Event.occupiedSeatsId.includes(23), selected: Event.reservedSeatsId.includes(23) }">23</div>
            <div class="seat" @click="handleClickSeat(24)" :class="{ occupied: Event.occupiedSeatsId.includes(24), selected: Event.reservedSeatsId.includes(24) }">24</div>
            <div class="seat" @click="handleClickSeat(25)" :class="{ occupied: Event.occupiedSeatsId.includes(25), selected: Event.reservedSeatsId.includes(25) }">25</div>
            <div class="seat" @click="handleClickSeat(26)" :class="{ occupied: Event.occupiedSeatsId.includes(26), selected: Event.reservedSeatsId.includes(26) }">26</div>
            <div class="seat" @click="handleClickSeat(27)" :class="{ occupied: Event.occupiedSeatsId.includes(27), selected: Event.reservedSeatsId.includes(27) }">27</div>
            <div class="seat" @click="handleClickSeat(28)" :class="{ occupied: Event.occupiedSeatsId.includes(28), selected: Event.reservedSeatsId.includes(28) }">28</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(49)" :class="{ occupied: Event.occupiedSeatsId.includes(49), selected: Event.reservedSeatsId.includes(49) }">21</div>
            <div class="seat" @click="handleClickSeat(50)" :class="{ occupied: Event.occupiedSeatsId.includes(50), selected: Event.reservedSeatsId.includes(50) }">22</div>
            <div class="seat" @click="handleClickSeat(51)" :class="{ occupied: Event.occupiedSeatsId.includes(51), selected: Event.reservedSeatsId.includes(51) }">23</div>
            <div class="seat" @click="handleClickSeat(52)" :class="{ occupied: Event.occupiedSeatsId.includes(52), selected: Event.reservedSeatsId.includes(52) }">24</div>
            <div class="seat" @click="handleClickSeat(53)" :class="{ occupied: Event.occupiedSeatsId.includes(53), selected: Event.reservedSeatsId.includes(53) }">25</div>
            <div class="seat" @click="handleClickSeat(54)" :class="{ occupied: Event.occupiedSeatsId.includes(54), selected: Event.reservedSeatsId.includes(54) }">26</div>
            <div class="seat" @click="handleClickSeat(55)" :class="{ occupied: Event.occupiedSeatsId.includes(55), selected: Event.reservedSeatsId.includes(55) }">27</div>
            <div class="seat" @click="handleClickSeat(56)" :class="{ occupied: Event.occupiedSeatsId.includes(56), selected: Event.reservedSeatsId.includes(56) }">28</div>
            <div class="seat" @click="handleClickSeat(57)" :class="{ occupied: Event.occupiedSeatsId.includes(57), selected: Event.reservedSeatsId.includes(57) }">29</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(79)" :class="{ occupied: Event.occupiedSeatsId.includes(79), selected: Event.reservedSeatsId.includes(79) }">22</div>
            <div class="seat" @click="handleClickSeat(80)" :class="{ occupied: Event.occupiedSeatsId.includes(80), selected: Event.reservedSeatsId.includes(80) }">23</div>
            <div class="seat" @click="handleClickSeat(81)" :class="{ occupied: Event.occupiedSeatsId.includes(81), selected: Event.reservedSeatsId.includes(81) }">24</div>
            <div class="seat" @click="handleClickSeat(82)" :class="{ occupied: Event.occupiedSeatsId.includes(82), selected: Event.reservedSeatsId.includes(82) }">25</div>
            <div class="seat" @click="handleClickSeat(83)" :class="{ occupied: Event.occupiedSeatsId.includes(83), selected: Event.reservedSeatsId.includes(83) }">26</div>
            <div class="seat" @click="handleClickSeat(84)" :class="{ occupied: Event.occupiedSeatsId.includes(84), selected: Event.reservedSeatsId.includes(84) }">27</div>
            <div class="seat" @click="handleClickSeat(85)" :class="{ occupied: Event.occupiedSeatsId.includes(85), selected: Event.reservedSeatsId.includes(85) }">28</div>
            <div class="seat" @click="handleClickSeat(86)" :class="{ occupied: Event.occupiedSeatsId.includes(86), selected: Event.reservedSeatsId.includes(86) }">29</div>
            <div class="seat" @click="handleClickSeat(87)" :class="{ occupied: Event.occupiedSeatsId.includes(87), selected: Event.reservedSeatsId.includes(87) }">30</div>
            <div class="seat" @click="handleClickSeat(88)" :class="{ occupied: Event.occupiedSeatsId.includes(88), selected: Event.reservedSeatsId.includes(88) }">31</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(110)" :class="{ occupied: Event.occupiedSeatsId.includes(110), selected: Event.reservedSeatsId.includes(110) }">22</div>
            <div class="seat" @click="handleClickSeat(111)" :class="{ occupied: Event.occupiedSeatsId.includes(111), selected: Event.reservedSeatsId.includes(111) }">23</div>
            <div class="seat" @click="handleClickSeat(112)" :class="{ occupied: Event.occupiedSeatsId.includes(112), selected: Event.reservedSeatsId.includes(112) }">24</div>
            <div class="seat" @click="handleClickSeat(113)" :class="{ occupied: Event.occupiedSeatsId.includes(113), selected: Event.reservedSeatsId.includes(113) }">25</div>
            <div class="seat" @click="handleClickSeat(114)" :class="{ occupied: Event.occupiedSeatsId.includes(114), selected: Event.reservedSeatsId.includes(114) }">26</div>
            <div class="seat" @click="handleClickSeat(115)" :class="{ occupied: Event.occupiedSeatsId.includes(115), selected: Event.reservedSeatsId.includes(115) }">27</div>
            <div class="seat" @click="handleClickSeat(116)" :class="{ occupied: Event.occupiedSeatsId.includes(116), selected: Event.reservedSeatsId.includes(116) }">28</div>
            <div class="seat" @click="handleClickSeat(117)" :class="{ occupied: Event.occupiedSeatsId.includes(117), selected: Event.reservedSeatsId.includes(117) }">29</div>
            <div class="seat" @click="handleClickSeat(118)" :class="{ occupied: Event.occupiedSeatsId.includes(118), selected: Event.reservedSeatsId.includes(118) }">30</div>
            <div class="seat" @click="handleClickSeat(119)" :class="{ occupied: Event.occupiedSeatsId.includes(119), selected: Event.reservedSeatsId.includes(119) }">31</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(142)" :class="{ occupied: Event.occupiedSeatsId.includes(142), selected: Event.reservedSeatsId.includes(142) }">23</div>
            <div class="seat" @click="handleClickSeat(143)" :class="{ occupied: Event.occupiedSeatsId.includes(143), selected: Event.reservedSeatsId.includes(143) }">24</div>
            <div class="seat" @click="handleClickSeat(144)" :class="{ occupied: Event.occupiedSeatsId.includes(144), selected: Event.reservedSeatsId.includes(144) }">25</div>
            <div class="seat" @click="handleClickSeat(145)" :class="{ occupied: Event.occupiedSeatsId.includes(145), selected: Event.reservedSeatsId.includes(145) }">26</div>
            <div class="seat" @click="handleClickSeat(146)" :class="{ occupied: Event.occupiedSeatsId.includes(146), selected: Event.reservedSeatsId.includes(146) }">27</div>
            <div class="seat" @click="handleClickSeat(147)" :class="{ occupied: Event.occupiedSeatsId.includes(147), selected: Event.reservedSeatsId.includes(147) }">28</div>
            <div class="seat" @click="handleClickSeat(148)" :class="{ occupied: Event.occupiedSeatsId.includes(148), selected: Event.reservedSeatsId.includes(148) }">29</div>
            <div class="seat" @click="handleClickSeat(149)" :class="{ occupied: Event.occupiedSeatsId.includes(149), selected: Event.reservedSeatsId.includes(149) }">30</div>
            <div class="seat" @click="handleClickSeat(150)" :class="{ occupied: Event.occupiedSeatsId.includes(150), selected: Event.reservedSeatsId.includes(150) }">31</div>
            <div class="seat" @click="handleClickSeat(151)" :class="{ occupied: Event.occupiedSeatsId.includes(151), selected: Event.reservedSeatsId.includes(151) }">32</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(174)" :class="{ occupied: Event.occupiedSeatsId.includes(174), selected: Event.reservedSeatsId.includes(174) }">23</div>
            <div class="seat" @click="handleClickSeat(175)" :class="{ occupied: Event.occupiedSeatsId.includes(175), selected: Event.reservedSeatsId.includes(175) }">24</div>
            <div class="seat" @click="handleClickSeat(176)" :class="{ occupied: Event.occupiedSeatsId.includes(176), selected: Event.reservedSeatsId.includes(176) }">25</div>
            <div class="seat" @click="handleClickSeat(177)" :class="{ occupied: Event.occupiedSeatsId.includes(177), selected: Event.reservedSeatsId.includes(177) }">26</div>
            <div class="seat" @click="handleClickSeat(178)" :class="{ occupied: Event.occupiedSeatsId.includes(178), selected: Event.reservedSeatsId.includes(178) }">27</div>
            <div class="seat" @click="handleClickSeat(179)" :class="{ occupied: Event.occupiedSeatsId.includes(179), selected: Event.reservedSeatsId.includes(179) }">28</div>
            <div class="seat" @click="handleClickSeat(180)" :class="{ occupied: Event.occupiedSeatsId.includes(180), selected: Event.reservedSeatsId.includes(180) }">29</div>
            <div class="seat" @click="handleClickSeat(181)" :class="{ occupied: Event.occupiedSeatsId.includes(181), selected: Event.reservedSeatsId.includes(181) }">30</div>
            <div class="seat" @click="handleClickSeat(182)" :class="{ occupied: Event.occupiedSeatsId.includes(182), selected: Event.reservedSeatsId.includes(182) }">31</div>
            <div class="seat" @click="handleClickSeat(183)" :class="{ occupied: Event.occupiedSeatsId.includes(183), selected: Event.reservedSeatsId.includes(183) }">32</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(207)" :class="{ occupied: Event.occupiedSeatsId.includes(207), selected: Event.reservedSeatsId.includes(207) }">24</div>
            <div class="seat" @click="handleClickSeat(208)" :class="{ occupied: Event.occupiedSeatsId.includes(208), selected: Event.reservedSeatsId.includes(208) }">25</div>
            <div class="seat" @click="handleClickSeat(209)" :class="{ occupied: Event.occupiedSeatsId.includes(209), selected: Event.reservedSeatsId.includes(209) }">26</div>
            <div class="seat" @click="handleClickSeat(210)" :class="{ occupied: Event.occupiedSeatsId.includes(210), selected: Event.reservedSeatsId.includes(210) }">27</div>
            <div class="seat" @click="handleClickSeat(211)" :class="{ occupied: Event.occupiedSeatsId.includes(211), selected: Event.reservedSeatsId.includes(211) }">28</div>
            <div class="seat" @click="handleClickSeat(212)" :class="{ occupied: Event.occupiedSeatsId.includes(212), selected: Event.reservedSeatsId.includes(212) }">29</div>
            <div class="seat" @click="handleClickSeat(213)" :class="{ occupied: Event.occupiedSeatsId.includes(213), selected: Event.reservedSeatsId.includes(213) }">30</div>
            <div class="seat" @click="handleClickSeat(214)" :class="{ occupied: Event.occupiedSeatsId.includes(214), selected: Event.reservedSeatsId.includes(214) }">31</div>
            <div class="seat" @click="handleClickSeat(215)" :class="{ occupied: Event.occupiedSeatsId.includes(215), selected: Event.reservedSeatsId.includes(215) }">32</div>
            <div class="seat" @click="handleClickSeat(216)" :class="{ occupied: Event.occupiedSeatsId.includes(216), selected: Event.reservedSeatsId.includes(216) }">33</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(240)" :class="{ occupied: Event.occupiedSeatsId.includes(240), selected: Event.reservedSeatsId.includes(240) }">24</div>
            <div class="seat" @click="handleClickSeat(241)" :class="{ occupied: Event.occupiedSeatsId.includes(241), selected: Event.reservedSeatsId.includes(241) }">25</div>
            <div class="seat" @click="handleClickSeat(242)" :class="{ occupied: Event.occupiedSeatsId.includes(242), selected: Event.reservedSeatsId.includes(242) }">26</div>
            <div class="seat" @click="handleClickSeat(243)" :class="{ occupied: Event.occupiedSeatsId.includes(243), selected: Event.reservedSeatsId.includes(243) }">27</div>
            <div class="seat" @click="handleClickSeat(244)" :class="{ occupied: Event.occupiedSeatsId.includes(244), selected: Event.reservedSeatsId.includes(244) }">28</div>
            <div class="seat" @click="handleClickSeat(245)" :class="{ occupied: Event.occupiedSeatsId.includes(245), selected: Event.reservedSeatsId.includes(245) }">29</div>
            <div class="seat" @click="handleClickSeat(246)" :class="{ occupied: Event.occupiedSeatsId.includes(246), selected: Event.reservedSeatsId.includes(246) }">30</div>
            <div class="seat" @click="handleClickSeat(247)" :class="{ occupied: Event.occupiedSeatsId.includes(247), selected: Event.reservedSeatsId.includes(247) }">31</div>
            <div class="seat" @click="handleClickSeat(248)" :class="{ occupied: Event.occupiedSeatsId.includes(248), selected: Event.reservedSeatsId.includes(248) }">32</div>
            <div class="seat" @click="handleClickSeat(249)" :class="{ occupied: Event.occupiedSeatsId.includes(249), selected: Event.reservedSeatsId.includes(249) }">33</div>
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
