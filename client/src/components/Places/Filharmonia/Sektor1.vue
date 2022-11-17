<template>
  <div>
    <div class="largeLayout">
      <h4 @click="controls.selectedSector = ''"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do widoku sektorów</h4>
      <div class="scene">Scena</div>
      <div class="sectorContainer">
        <!-- Left column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(1, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(1), selected: selectedSeats.includes(1) }">1</div>
            <div class="seat" @click="handleClickSeat(2, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(2), selected: selectedSeats.includes(2) }">2</div>
            <div class="seat" @click="handleClickSeat(3, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(3), selected: selectedSeats.includes(3) }">3</div>
            <div class="seat" @click="handleClickSeat(4, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(4), selected: selectedSeats.includes(4) }">4</div>
            <div class="seat" @click="handleClickSeat(5, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(5), selected: selectedSeats.includes(5) }">5</div>
            <div class="seat" @click="handleClickSeat(6, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(6), selected: selectedSeats.includes(6) }">6</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(29, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(29), selected: selectedSeats.includes(29) }">1</div>
            <div class="seat" @click="handleClickSeat(30, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(30), selected: selectedSeats.includes(30) }">2</div>
            <div class="seat" @click="handleClickSeat(31, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(31), selected: selectedSeats.includes(31) }">3</div>
            <div class="seat" @click="handleClickSeat(32, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(32), selected: selectedSeats.includes(32) }">4</div>
            <div class="seat" @click="handleClickSeat(33, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(33), selected: selectedSeats.includes(33) }">5</div>
            <div class="seat" @click="handleClickSeat(34, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(34), selected: selectedSeats.includes(34) }">6</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(58, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(58), selected: selectedSeats.includes(58) }">1</div>
            <div class="seat" @click="handleClickSeat(59, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(59), selected: selectedSeats.includes(59) }">2</div>
            <div class="seat" @click="handleClickSeat(60, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(60), selected: selectedSeats.includes(60) }">3</div>
            <div class="seat" @click="handleClickSeat(61, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(61), selected: selectedSeats.includes(61) }">4</div>
            <div class="seat" @click="handleClickSeat(62, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(62), selected: selectedSeats.includes(62) }">5</div>
            <div class="seat" @click="handleClickSeat(63, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(63), selected: selectedSeats.includes(63) }">6</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(89, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(89), selected: selectedSeats.includes(89) }">1</div>
            <div class="seat" @click="handleClickSeat(90, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(90), selected: selectedSeats.includes(90) }">2</div>
            <div class="seat" @click="handleClickSeat(91, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(91), selected: selectedSeats.includes(91) }">3</div>
            <div class="seat" @click="handleClickSeat(92, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(92), selected: selectedSeats.includes(92) }">4</div>
            <div class="seat" @click="handleClickSeat(93, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(93), selected: selectedSeats.includes(93) }">5</div>
            <div class="seat" @click="handleClickSeat(94, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(94), selected: selectedSeats.includes(94) }">6</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(120, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(120), selected: selectedSeats.includes(120) }">1</div>
            <div class="seat" @click="handleClickSeat(121, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(121), selected: selectedSeats.includes(121) }">2</div>
            <div class="seat" @click="handleClickSeat(122, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(122), selected: selectedSeats.includes(122) }">3</div>
            <div class="seat" @click="handleClickSeat(123, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(123), selected: selectedSeats.includes(123) }">4</div>
            <div class="seat" @click="handleClickSeat(124, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(124), selected: selectedSeats.includes(124) }">5</div>
            <div class="seat" @click="handleClickSeat(125, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(125), selected: selectedSeats.includes(125) }">6</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(152, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(152), selected: selectedSeats.includes(152) }">1</div>
            <div class="seat" @click="handleClickSeat(153, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(153), selected: selectedSeats.includes(153) }">2</div>
            <div class="seat" @click="handleClickSeat(154, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(154), selected: selectedSeats.includes(154) }">3</div>
            <div class="seat" @click="handleClickSeat(155, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(155), selected: selectedSeats.includes(155) }">4</div>
            <div class="seat" @click="handleClickSeat(156, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(156), selected: selectedSeats.includes(156) }">5</div>
            <div class="seat" @click="handleClickSeat(157, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(157), selected: selectedSeats.includes(157) }">6</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(184, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(184), selected: selectedSeats.includes(184) }">1</div>
            <div class="seat" @click="handleClickSeat(185, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(185), selected: selectedSeats.includes(185) }">2</div>
            <div class="seat" @click="handleClickSeat(186, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(186), selected: selectedSeats.includes(186) }">3</div>
            <div class="seat" @click="handleClickSeat(187, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(187), selected: selectedSeats.includes(187) }">4</div>
            <div class="seat" @click="handleClickSeat(188, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(188), selected: selectedSeats.includes(188) }">5</div>
            <div class="seat" @click="handleClickSeat(189, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(189), selected: selectedSeats.includes(189) }">6</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(217, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(217), selected: selectedSeats.includes(217) }">1</div>
            <div class="seat" @click="handleClickSeat(218, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(218), selected: selectedSeats.includes(218) }">2</div>
            <div class="seat" @click="handleClickSeat(219, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(219), selected: selectedSeats.includes(219) }">3</div>
            <div class="seat" @click="handleClickSeat(220, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(220), selected: selectedSeats.includes(220) }">4</div>
            <div class="seat" @click="handleClickSeat(221, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(221), selected: selectedSeats.includes(221) }">5</div>
            <div class="seat" @click="handleClickSeat(222, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(222), selected: selectedSeats.includes(222) }">6</div>
          </div>
        </div>
        <!-- Middle column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(7, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(7), selected: selectedSeats.includes(7) }">7</div>
            <div class="seat" @click="handleClickSeat(8, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(8), selected: selectedSeats.includes(8) }">8</div>
            <div class="seat" @click="handleClickSeat(9, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(9), selected: selectedSeats.includes(9) }">9</div>
            <div class="seat" @click="handleClickSeat(10, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(10), selected: selectedSeats.includes(10) }">10</div>
            <div class="seat" @click="handleClickSeat(11, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(11), selected: selectedSeats.includes(11) }">11</div>
            <div class="seat" @click="handleClickSeat(12, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(12), selected: selectedSeats.includes(12) }">12</div>
            <div class="seat" @click="handleClickSeat(13, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(13), selected: selectedSeats.includes(13) }">13</div>
            <div class="seat" @click="handleClickSeat(14, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(14), selected: selectedSeats.includes(14) }">14</div>
            <div class="seat" @click="handleClickSeat(15, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(15), selected: selectedSeats.includes(15) }">15</div>
            <div class="seat" @click="handleClickSeat(16, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(16), selected: selectedSeats.includes(16) }">16</div>
            <div class="seat" @click="handleClickSeat(17, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(17), selected: selectedSeats.includes(17) }">17</div>
            <div class="seat" @click="handleClickSeat(18, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(18), selected: selectedSeats.includes(18) }">18</div>
            <div class="seat" @click="handleClickSeat(19, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(19), selected: selectedSeats.includes(19) }">19</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(35, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(35), selected: selectedSeats.includes(35) }">7</div>
            <div class="seat" @click="handleClickSeat(36, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(36), selected: selectedSeats.includes(36) }">8</div>
            <div class="seat" @click="handleClickSeat(37, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(37), selected: selectedSeats.includes(37) }">9</div>
            <div class="seat" @click="handleClickSeat(38, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(38), selected: selectedSeats.includes(38) }">10</div>
            <div class="seat" @click="handleClickSeat(39, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(39), selected: selectedSeats.includes(39) }">11</div>
            <div class="seat" @click="handleClickSeat(40, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(40), selected: selectedSeats.includes(40) }">12</div>
            <div class="seat" @click="handleClickSeat(41, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(41), selected: selectedSeats.includes(41) }">13</div>
            <div class="seat" @click="handleClickSeat(42, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(42), selected: selectedSeats.includes(42) }">14</div>
            <div class="seat" @click="handleClickSeat(43, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(43), selected: selectedSeats.includes(43) }">15</div>
            <div class="seat" @click="handleClickSeat(44, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(44), selected: selectedSeats.includes(44) }">16</div>
            <div class="seat" @click="handleClickSeat(45, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(45), selected: selectedSeats.includes(45) }">17</div>
            <div class="seat" @click="handleClickSeat(46, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(46), selected: selectedSeats.includes(46) }">18</div>
            <div class="seat" @click="handleClickSeat(47, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(47), selected: selectedSeats.includes(47) }">19</div>
            <div class="seat" @click="handleClickSeat(48, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(48), selected: selectedSeats.includes(48) }">20</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(64, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(64), selected: selectedSeats.includes(64) }">7</div>
            <div class="seat" @click="handleClickSeat(65, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(65), selected: selectedSeats.includes(65) }">8</div>
            <div class="seat" @click="handleClickSeat(66, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(66), selected: selectedSeats.includes(66) }">9</div>
            <div class="seat" @click="handleClickSeat(67, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(67), selected: selectedSeats.includes(67) }">10</div>
            <div class="seat" @click="handleClickSeat(68, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(68), selected: selectedSeats.includes(68) }">11</div>
            <div class="seat" @click="handleClickSeat(69, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(69), selected: selectedSeats.includes(69) }">12</div>
            <div class="seat" @click="handleClickSeat(70, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(70), selected: selectedSeats.includes(70) }">13</div>
            <div class="seat" @click="handleClickSeat(71, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(71), selected: selectedSeats.includes(71) }">14</div>
            <div class="seat" @click="handleClickSeat(72, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(72), selected: selectedSeats.includes(72) }">15</div>
            <div class="seat" @click="handleClickSeat(73, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(73), selected: selectedSeats.includes(73) }">16</div>
            <div class="seat" @click="handleClickSeat(74, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(74), selected: selectedSeats.includes(74) }">17</div>
            <div class="seat" @click="handleClickSeat(75, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(75), selected: selectedSeats.includes(75) }">18</div>
            <div class="seat" @click="handleClickSeat(76, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(76), selected: selectedSeats.includes(76) }">19</div>
            <div class="seat" @click="handleClickSeat(77, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(77), selected: selectedSeats.includes(77) }">20</div>
            <div class="seat" @click="handleClickSeat(78, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(78), selected: selectedSeats.includes(78) }">21</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(95, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(95), selected: selectedSeats.includes(95) }">7</div>
            <div class="seat" @click="handleClickSeat(96, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(96), selected: selectedSeats.includes(96) }">8</div>
            <div class="seat" @click="handleClickSeat(97, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(97), selected: selectedSeats.includes(97) }">9</div>
            <div class="seat" @click="handleClickSeat(98, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(98), selected: selectedSeats.includes(98) }">10</div>
            <div class="seat" @click="handleClickSeat(99, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(99), selected: selectedSeats.includes(99) }">11</div>
            <div class="seat" @click="handleClickSeat(100, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(100), selected: selectedSeats.includes(100) }">12</div>
            <div class="seat" @click="handleClickSeat(101, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(101), selected: selectedSeats.includes(101) }">13</div>
            <div class="seat" @click="handleClickSeat(102, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(102), selected: selectedSeats.includes(102) }">14</div>
            <div class="seat" @click="handleClickSeat(103, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(103), selected: selectedSeats.includes(103) }">15</div>
            <div class="seat" @click="handleClickSeat(104, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(104), selected: selectedSeats.includes(104) }">16</div>
            <div class="seat" @click="handleClickSeat(105, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(105), selected: selectedSeats.includes(105) }">17</div>
            <div class="seat" @click="handleClickSeat(106, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(106), selected: selectedSeats.includes(106) }">18</div>
            <div class="seat" @click="handleClickSeat(107, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(107), selected: selectedSeats.includes(107) }">19</div>
            <div class="seat" @click="handleClickSeat(108, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(108), selected: selectedSeats.includes(108) }">20</div>
            <div class="seat" @click="handleClickSeat(109, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(109), selected: selectedSeats.includes(109) }">21</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(126, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(126), selected: selectedSeats.includes(126) }">7</div>
            <div class="seat" @click="handleClickSeat(127, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(127), selected: selectedSeats.includes(127) }">8</div>
            <div class="seat" @click="handleClickSeat(128, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(128), selected: selectedSeats.includes(128) }">9</div>
            <div class="seat" @click="handleClickSeat(129, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(129), selected: selectedSeats.includes(129) }">10</div>
            <div class="seat" @click="handleClickSeat(130, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(130), selected: selectedSeats.includes(130) }">11</div>
            <div class="seat" @click="handleClickSeat(131, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(131), selected: selectedSeats.includes(131) }">12</div>
            <div class="seat" @click="handleClickSeat(132, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(132), selected: selectedSeats.includes(132) }">13</div>
            <div class="seat" @click="handleClickSeat(133, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(133), selected: selectedSeats.includes(133) }">14</div>
            <div class="seat" @click="handleClickSeat(134, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(134), selected: selectedSeats.includes(134) }">15</div>
            <div class="seat" @click="handleClickSeat(135, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(135), selected: selectedSeats.includes(135) }">16</div>
            <div class="seat" @click="handleClickSeat(136, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(136), selected: selectedSeats.includes(136) }">17</div>
            <div class="seat" @click="handleClickSeat(137, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(137), selected: selectedSeats.includes(137) }">18</div>
            <div class="seat" @click="handleClickSeat(138, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(138), selected: selectedSeats.includes(138) }">19</div>
            <div class="seat" @click="handleClickSeat(139, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(139), selected: selectedSeats.includes(139) }">20</div>
            <div class="seat" @click="handleClickSeat(140, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(140), selected: selectedSeats.includes(140) }">21</div>
            <div class="seat" @click="handleClickSeat(141, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(141), selected: selectedSeats.includes(141) }">22</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(158, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(158), selected: selectedSeats.includes(158) }">7</div>
            <div class="seat" @click="handleClickSeat(159, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(159), selected: selectedSeats.includes(159) }">8</div>
            <div class="seat" @click="handleClickSeat(160, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(160), selected: selectedSeats.includes(160) }">9</div>
            <div class="seat" @click="handleClickSeat(161, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(161), selected: selectedSeats.includes(161) }">10</div>
            <div class="seat" @click="handleClickSeat(162, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(162), selected: selectedSeats.includes(162) }">11</div>
            <div class="seat" @click="handleClickSeat(163, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(163), selected: selectedSeats.includes(163) }">12</div>
            <div class="seat" @click="handleClickSeat(164, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(164), selected: selectedSeats.includes(164) }">13</div>
            <div class="seat" @click="handleClickSeat(165, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(165), selected: selectedSeats.includes(165) }">14</div>
            <div class="seat" @click="handleClickSeat(166, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(166), selected: selectedSeats.includes(166) }">15</div>
            <div class="seat" @click="handleClickSeat(167, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(167), selected: selectedSeats.includes(167) }">16</div>
            <div class="seat" @click="handleClickSeat(168, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(168), selected: selectedSeats.includes(168) }">17</div>
            <div class="seat" @click="handleClickSeat(169, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(169), selected: selectedSeats.includes(169) }">18</div>
            <div class="seat" @click="handleClickSeat(170, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(170), selected: selectedSeats.includes(170) }">19</div>
            <div class="seat" @click="handleClickSeat(171, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(171), selected: selectedSeats.includes(171) }">20</div>
            <div class="seat" @click="handleClickSeat(172, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(172), selected: selectedSeats.includes(172) }">21</div>
            <div class="seat" @click="handleClickSeat(173, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(173), selected: selectedSeats.includes(173) }">22</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(190, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(190), selected: selectedSeats.includes(190) }">7</div>
            <div class="seat" @click="handleClickSeat(191, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(191), selected: selectedSeats.includes(191) }">8</div>
            <div class="seat" @click="handleClickSeat(192, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(192), selected: selectedSeats.includes(192) }">9</div>
            <div class="seat" @click="handleClickSeat(193, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(193), selected: selectedSeats.includes(193) }">10</div>
            <div class="seat" @click="handleClickSeat(194, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(194), selected: selectedSeats.includes(194) }">11</div>
            <div class="seat" @click="handleClickSeat(195, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(195), selected: selectedSeats.includes(195) }">12</div>
            <div class="seat" @click="handleClickSeat(196, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(196), selected: selectedSeats.includes(196) }">13</div>
            <div class="seat" @click="handleClickSeat(197, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(197), selected: selectedSeats.includes(197) }">14</div>
            <div class="seat" @click="handleClickSeat(198, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(198), selected: selectedSeats.includes(198) }">15</div>
            <div class="seat" @click="handleClickSeat(199, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(199), selected: selectedSeats.includes(199) }">16</div>
            <div class="seat" @click="handleClickSeat(200, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(200), selected: selectedSeats.includes(200) }">17</div>
            <div class="seat" @click="handleClickSeat(201, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(201), selected: selectedSeats.includes(201) }">18</div>
            <div class="seat" @click="handleClickSeat(202, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(202), selected: selectedSeats.includes(202) }">19</div>
            <div class="seat" @click="handleClickSeat(203, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(203), selected: selectedSeats.includes(203) }">20</div>
            <div class="seat" @click="handleClickSeat(204, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(204), selected: selectedSeats.includes(204) }">21</div>
            <div class="seat" @click="handleClickSeat(205, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(205), selected: selectedSeats.includes(205) }">22</div>
            <div class="seat" @click="handleClickSeat(206, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(206), selected: selectedSeats.includes(206) }">23</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(223, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(223), selected: selectedSeats.includes(223) }">7</div>
            <div class="seat" @click="handleClickSeat(224, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(224), selected: selectedSeats.includes(224) }">8</div>
            <div class="seat" @click="handleClickSeat(225, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(225), selected: selectedSeats.includes(225) }">9</div>
            <div class="seat" @click="handleClickSeat(226, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(226), selected: selectedSeats.includes(226) }">10</div>
            <div class="seat" @click="handleClickSeat(227, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(227), selected: selectedSeats.includes(227) }">11</div>
            <div class="seat" @click="handleClickSeat(228, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(228), selected: selectedSeats.includes(228) }">12</div>
            <div class="seat" @click="handleClickSeat(229, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(229), selected: selectedSeats.includes(229) }">13</div>
            <div class="seat" @click="handleClickSeat(230, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(230), selected: selectedSeats.includes(230) }">14</div>
            <div class="seat" @click="handleClickSeat(231, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(231), selected: selectedSeats.includes(231) }">15</div>
            <div class="seat" @click="handleClickSeat(232, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(232), selected: selectedSeats.includes(232) }">16</div>
            <div class="seat" @click="handleClickSeat(233, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(233), selected: selectedSeats.includes(233) }">17</div>
            <div class="seat" @click="handleClickSeat(234, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(234), selected: selectedSeats.includes(234) }">18</div>
            <div class="seat" @click="handleClickSeat(235, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(235), selected: selectedSeats.includes(235) }">19</div>
            <div class="seat" @click="handleClickSeat(236, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(236), selected: selectedSeats.includes(236) }">20</div>
            <div class="seat" @click="handleClickSeat(237, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(237), selected: selectedSeats.includes(237) }">21</div>
            <div class="seat" @click="handleClickSeat(238, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(238), selected: selectedSeats.includes(238) }">22</div>
            <div class="seat" @click="handleClickSeat(239, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(239), selected: selectedSeats.includes(239) }">23</div>
          </div>
        </div>
        <!-- Right column -->
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(20, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(20), selected: selectedSeats.includes(20) }">20</div>
            <div class="seat" @click="handleClickSeat(21, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(21), selected: selectedSeats.includes(21) }">21</div>
            <div class="seat" @click="handleClickSeat(22, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(22), selected: selectedSeats.includes(22) }">22</div>
            <div class="seat" @click="handleClickSeat(23, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(23), selected: selectedSeats.includes(23) }">23</div>
            <div class="seat" @click="handleClickSeat(24, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(24), selected: selectedSeats.includes(24) }">24</div>
            <div class="seat" @click="handleClickSeat(25, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(25), selected: selectedSeats.includes(25) }">25</div>
            <div class="seat" @click="handleClickSeat(26, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(26), selected: selectedSeats.includes(26) }">26</div>
            <div class="seat" @click="handleClickSeat(27, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(27), selected: selectedSeats.includes(27) }">27</div>
            <div class="seat" @click="handleClickSeat(28, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(28), selected: selectedSeats.includes(28) }">28</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(49, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(49), selected: selectedSeats.includes(49) }">21</div>
            <div class="seat" @click="handleClickSeat(50, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(50), selected: selectedSeats.includes(50) }">22</div>
            <div class="seat" @click="handleClickSeat(51, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(51), selected: selectedSeats.includes(51) }">23</div>
            <div class="seat" @click="handleClickSeat(52, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(52), selected: selectedSeats.includes(52) }">24</div>
            <div class="seat" @click="handleClickSeat(53, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(53), selected: selectedSeats.includes(53) }">25</div>
            <div class="seat" @click="handleClickSeat(54, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(54), selected: selectedSeats.includes(54) }">26</div>
            <div class="seat" @click="handleClickSeat(55, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(55), selected: selectedSeats.includes(55) }">27</div>
            <div class="seat" @click="handleClickSeat(56, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(56), selected: selectedSeats.includes(56) }">28</div>
            <div class="seat" @click="handleClickSeat(57, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(57), selected: selectedSeats.includes(57) }">29</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(79, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(79), selected: selectedSeats.includes(79) }">22</div>
            <div class="seat" @click="handleClickSeat(80, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(80), selected: selectedSeats.includes(80) }">23</div>
            <div class="seat" @click="handleClickSeat(81, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(81), selected: selectedSeats.includes(81) }">24</div>
            <div class="seat" @click="handleClickSeat(82, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(82), selected: selectedSeats.includes(82) }">25</div>
            <div class="seat" @click="handleClickSeat(83, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(83), selected: selectedSeats.includes(83) }">26</div>
            <div class="seat" @click="handleClickSeat(84, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(84), selected: selectedSeats.includes(84) }">27</div>
            <div class="seat" @click="handleClickSeat(85, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(85), selected: selectedSeats.includes(85) }">28</div>
            <div class="seat" @click="handleClickSeat(86, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(86), selected: selectedSeats.includes(86) }">29</div>
            <div class="seat" @click="handleClickSeat(87, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(87), selected: selectedSeats.includes(87) }">30</div>
            <div class="seat" @click="handleClickSeat(88, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(88), selected: selectedSeats.includes(88) }">31</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(110, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(110), selected: selectedSeats.includes(110) }">22</div>
            <div class="seat" @click="handleClickSeat(111, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(111), selected: selectedSeats.includes(111) }">23</div>
            <div class="seat" @click="handleClickSeat(112, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(112), selected: selectedSeats.includes(112) }">24</div>
            <div class="seat" @click="handleClickSeat(113, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(113), selected: selectedSeats.includes(113) }">25</div>
            <div class="seat" @click="handleClickSeat(114, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(114), selected: selectedSeats.includes(114) }">26</div>
            <div class="seat" @click="handleClickSeat(115, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(115), selected: selectedSeats.includes(115) }">27</div>
            <div class="seat" @click="handleClickSeat(116, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(116), selected: selectedSeats.includes(116) }">28</div>
            <div class="seat" @click="handleClickSeat(117, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(117), selected: selectedSeats.includes(117) }">29</div>
            <div class="seat" @click="handleClickSeat(118, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(118), selected: selectedSeats.includes(118) }">30</div>
            <div class="seat" @click="handleClickSeat(119, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(119), selected: selectedSeats.includes(119) }">31</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(142, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(142), selected: selectedSeats.includes(142) }">23</div>
            <div class="seat" @click="handleClickSeat(143, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(143), selected: selectedSeats.includes(143) }">24</div>
            <div class="seat" @click="handleClickSeat(144, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(144), selected: selectedSeats.includes(144) }">25</div>
            <div class="seat" @click="handleClickSeat(145, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(145), selected: selectedSeats.includes(145) }">26</div>
            <div class="seat" @click="handleClickSeat(146, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(146), selected: selectedSeats.includes(146) }">27</div>
            <div class="seat" @click="handleClickSeat(147, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(147), selected: selectedSeats.includes(147) }">28</div>
            <div class="seat" @click="handleClickSeat(148, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(148), selected: selectedSeats.includes(148) }">29</div>
            <div class="seat" @click="handleClickSeat(149, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(149), selected: selectedSeats.includes(149) }">30</div>
            <div class="seat" @click="handleClickSeat(150, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(150), selected: selectedSeats.includes(150) }">31</div>
            <div class="seat" @click="handleClickSeat(151, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(151), selected: selectedSeats.includes(151) }">32</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(174, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(174), selected: selectedSeats.includes(174) }">23</div>
            <div class="seat" @click="handleClickSeat(175, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(175), selected: selectedSeats.includes(175) }">24</div>
            <div class="seat" @click="handleClickSeat(176, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(176), selected: selectedSeats.includes(176) }">25</div>
            <div class="seat" @click="handleClickSeat(177, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(177), selected: selectedSeats.includes(177) }">26</div>
            <div class="seat" @click="handleClickSeat(178, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(178), selected: selectedSeats.includes(178) }">27</div>
            <div class="seat" @click="handleClickSeat(179, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(179), selected: selectedSeats.includes(179) }">28</div>
            <div class="seat" @click="handleClickSeat(180, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(180), selected: selectedSeats.includes(180) }">29</div>
            <div class="seat" @click="handleClickSeat(181, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(181), selected: selectedSeats.includes(181) }">30</div>
            <div class="seat" @click="handleClickSeat(182, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(182), selected: selectedSeats.includes(182) }">31</div>
            <div class="seat" @click="handleClickSeat(183, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(183), selected: selectedSeats.includes(183) }">32</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(207, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(207), selected: selectedSeats.includes(207) }">24</div>
            <div class="seat" @click="handleClickSeat(208, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(208), selected: selectedSeats.includes(208) }">25</div>
            <div class="seat" @click="handleClickSeat(209, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(209), selected: selectedSeats.includes(209) }">26</div>
            <div class="seat" @click="handleClickSeat(210, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(210), selected: selectedSeats.includes(210) }">27</div>
            <div class="seat" @click="handleClickSeat(211, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(211), selected: selectedSeats.includes(211) }">28</div>
            <div class="seat" @click="handleClickSeat(212, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(212), selected: selectedSeats.includes(212) }">29</div>
            <div class="seat" @click="handleClickSeat(213, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(213), selected: selectedSeats.includes(213) }">30</div>
            <div class="seat" @click="handleClickSeat(214, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(214), selected: selectedSeats.includes(214) }">31</div>
            <div class="seat" @click="handleClickSeat(215, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(215), selected: selectedSeats.includes(215) }">32</div>
            <div class="seat" @click="handleClickSeat(216, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(216), selected: selectedSeats.includes(216) }">33</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(240, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(240), selected: selectedSeats.includes(240) }">24</div>
            <div class="seat" @click="handleClickSeat(241, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(241), selected: selectedSeats.includes(241) }">25</div>
            <div class="seat" @click="handleClickSeat(242, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(242), selected: selectedSeats.includes(242) }">26</div>
            <div class="seat" @click="handleClickSeat(243, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(243), selected: selectedSeats.includes(243) }">27</div>
            <div class="seat" @click="handleClickSeat(244, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(244), selected: selectedSeats.includes(244) }">28</div>
            <div class="seat" @click="handleClickSeat(245, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(245), selected: selectedSeats.includes(245) }">29</div>
            <div class="seat" @click="handleClickSeat(246, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(246), selected: selectedSeats.includes(246) }">30</div>
            <div class="seat" @click="handleClickSeat(247, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(247), selected: selectedSeats.includes(247) }">31</div>
            <div class="seat" @click="handleClickSeat(248, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(248), selected: selectedSeats.includes(248) }">32</div>
            <div class="seat" @click="handleClickSeat(249, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(249), selected: selectedSeats.includes(249) }">33</div>
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
            <span>I</span>
            <div class="seat" @click="handleClickSeat(1, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(1), selected: selectedSeats.includes(1) }">1</div>
            <div class="seat" @click="handleClickSeat(2, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(2), selected: selectedSeats.includes(2) }">2</div>
            <div class="seat" @click="handleClickSeat(3, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(3), selected: selectedSeats.includes(3) }">3</div>
            <div class="seat" @click="handleClickSeat(4, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(4), selected: selectedSeats.includes(4) }">4</div>
            <div class="seat" @click="handleClickSeat(5, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(5), selected: selectedSeats.includes(5) }">5</div>
            <div class="seat" @click="handleClickSeat(6, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(6), selected: selectedSeats.includes(6) }">6</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(29, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(29), selected: selectedSeats.includes(29) }">1</div>
            <div class="seat" @click="handleClickSeat(30, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(30), selected: selectedSeats.includes(30) }">2</div>
            <div class="seat" @click="handleClickSeat(31, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(31), selected: selectedSeats.includes(31) }">3</div>
            <div class="seat" @click="handleClickSeat(32, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(32), selected: selectedSeats.includes(32) }">4</div>
            <div class="seat" @click="handleClickSeat(33, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(33), selected: selectedSeats.includes(33) }">5</div>
            <div class="seat" @click="handleClickSeat(34, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(34), selected: selectedSeats.includes(34) }">6</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(58, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(58), selected: selectedSeats.includes(58) }">1</div>
            <div class="seat" @click="handleClickSeat(59, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(59), selected: selectedSeats.includes(59) }">2</div>
            <div class="seat" @click="handleClickSeat(60, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(60), selected: selectedSeats.includes(60) }">3</div>
            <div class="seat" @click="handleClickSeat(61, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(61), selected: selectedSeats.includes(61) }">4</div>
            <div class="seat" @click="handleClickSeat(62, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(62), selected: selectedSeats.includes(62) }">5</div>
            <div class="seat" @click="handleClickSeat(63, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(63), selected: selectedSeats.includes(63) }">6</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(89, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(89), selected: selectedSeats.includes(89) }">1</div>
            <div class="seat" @click="handleClickSeat(90, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(90), selected: selectedSeats.includes(90) }">2</div>
            <div class="seat" @click="handleClickSeat(91, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(91), selected: selectedSeats.includes(91) }">3</div>
            <div class="seat" @click="handleClickSeat(92, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(92), selected: selectedSeats.includes(92) }">4</div>
            <div class="seat" @click="handleClickSeat(93, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(93), selected: selectedSeats.includes(93) }">5</div>
            <div class="seat" @click="handleClickSeat(94, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(94), selected: selectedSeats.includes(94) }">6</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(120, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(120), selected: selectedSeats.includes(120) }">1</div>
            <div class="seat" @click="handleClickSeat(121, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(121), selected: selectedSeats.includes(121) }">2</div>
            <div class="seat" @click="handleClickSeat(122, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(122), selected: selectedSeats.includes(122) }">3</div>
            <div class="seat" @click="handleClickSeat(123, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(123), selected: selectedSeats.includes(123) }">4</div>
            <div class="seat" @click="handleClickSeat(124, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(124), selected: selectedSeats.includes(124) }">5</div>
            <div class="seat" @click="handleClickSeat(125, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(125), selected: selectedSeats.includes(125) }">6</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(152, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(152), selected: selectedSeats.includes(152) }">1</div>
            <div class="seat" @click="handleClickSeat(153, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(153), selected: selectedSeats.includes(153) }">2</div>
            <div class="seat" @click="handleClickSeat(154, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(154), selected: selectedSeats.includes(154) }">3</div>
            <div class="seat" @click="handleClickSeat(155, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(155), selected: selectedSeats.includes(155) }">4</div>
            <div class="seat" @click="handleClickSeat(156, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(156), selected: selectedSeats.includes(156) }">5</div>
            <div class="seat" @click="handleClickSeat(157, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(157), selected: selectedSeats.includes(157) }">6</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(184, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(184), selected: selectedSeats.includes(184) }">1</div>
            <div class="seat" @click="handleClickSeat(185, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(185), selected: selectedSeats.includes(185) }">2</div>
            <div class="seat" @click="handleClickSeat(186, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(186), selected: selectedSeats.includes(186) }">3</div>
            <div class="seat" @click="handleClickSeat(187, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(187), selected: selectedSeats.includes(187) }">4</div>
            <div class="seat" @click="handleClickSeat(188, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(188), selected: selectedSeats.includes(188) }">5</div>
            <div class="seat" @click="handleClickSeat(189, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(189), selected: selectedSeats.includes(189) }">6</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(217, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(217), selected: selectedSeats.includes(217) }">1</div>
            <div class="seat" @click="handleClickSeat(218, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(218), selected: selectedSeats.includes(218) }">2</div>
            <div class="seat" @click="handleClickSeat(219, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(219), selected: selectedSeats.includes(219) }">3</div>
            <div class="seat" @click="handleClickSeat(220, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(220), selected: selectedSeats.includes(220) }">4</div>
            <div class="seat" @click="handleClickSeat(221, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(221), selected: selectedSeats.includes(221) }">5</div>
            <div class="seat" @click="handleClickSeat(222, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(222), selected: selectedSeats.includes(222) }">6</div>
          </div>
        </div>
      </div>
      <!-- Middle Column -->
      <div v-else-if="selectedPart === 2">
        <div class="column middle">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(7, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(7), selected: selectedSeats.includes(7) }">7</div>
            <div class="seat" @click="handleClickSeat(8, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(8), selected: selectedSeats.includes(8) }">8</div>
            <div class="seat" @click="handleClickSeat(9, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(9), selected: selectedSeats.includes(9) }">9</div>
            <div class="seat" @click="handleClickSeat(10, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(10), selected: selectedSeats.includes(10) }">10</div>
            <div class="seat" @click="handleClickSeat(11, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(11), selected: selectedSeats.includes(11) }">11</div>
            <div class="seat" @click="handleClickSeat(12, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(12), selected: selectedSeats.includes(12) }">12</div>
            <div class="seat" @click="handleClickSeat(13, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(13), selected: selectedSeats.includes(13) }">13</div>
            <div class="seat" @click="handleClickSeat(14, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(14), selected: selectedSeats.includes(14) }">14</div>
            <div class="seat" @click="handleClickSeat(15, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(15), selected: selectedSeats.includes(15) }">15</div>
            <div class="seat" @click="handleClickSeat(16, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(16), selected: selectedSeats.includes(16) }">16</div>
            <div class="seat" @click="handleClickSeat(17, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(17), selected: selectedSeats.includes(17) }">17</div>
            <div class="seat" @click="handleClickSeat(18, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(18), selected: selectedSeats.includes(18) }">18</div>
            <div class="seat" @click="handleClickSeat(19, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(19), selected: selectedSeats.includes(19) }">19</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(35, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(35), selected: selectedSeats.includes(35) }">7</div>
            <div class="seat" @click="handleClickSeat(36, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(36), selected: selectedSeats.includes(36) }">8</div>
            <div class="seat" @click="handleClickSeat(37, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(37), selected: selectedSeats.includes(37) }">9</div>
            <div class="seat" @click="handleClickSeat(38, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(38), selected: selectedSeats.includes(38) }">10</div>
            <div class="seat" @click="handleClickSeat(39, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(39), selected: selectedSeats.includes(39) }">11</div>
            <div class="seat" @click="handleClickSeat(40, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(40), selected: selectedSeats.includes(40) }">12</div>
            <div class="seat" @click="handleClickSeat(41, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(41), selected: selectedSeats.includes(41) }">13</div>
            <div class="seat" @click="handleClickSeat(42, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(42), selected: selectedSeats.includes(42) }">14</div>
            <div class="seat" @click="handleClickSeat(43, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(43), selected: selectedSeats.includes(43) }">15</div>
            <div class="seat" @click="handleClickSeat(44, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(44), selected: selectedSeats.includes(44) }">16</div>
            <div class="seat" @click="handleClickSeat(45, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(45), selected: selectedSeats.includes(45) }">17</div>
            <div class="seat" @click="handleClickSeat(46, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(46), selected: selectedSeats.includes(46) }">18</div>
            <div class="seat" @click="handleClickSeat(47, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(47), selected: selectedSeats.includes(47) }">19</div>
            <div class="seat" @click="handleClickSeat(48, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(48), selected: selectedSeats.includes(48) }">20</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(64, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(64), selected: selectedSeats.includes(64) }">7</div>
            <div class="seat" @click="handleClickSeat(65, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(65), selected: selectedSeats.includes(65) }">8</div>
            <div class="seat" @click="handleClickSeat(66, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(66), selected: selectedSeats.includes(66) }">9</div>
            <div class="seat" @click="handleClickSeat(67, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(67), selected: selectedSeats.includes(67) }">10</div>
            <div class="seat" @click="handleClickSeat(68, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(68), selected: selectedSeats.includes(68) }">11</div>
            <div class="seat" @click="handleClickSeat(69, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(69), selected: selectedSeats.includes(69) }">12</div>
            <div class="seat" @click="handleClickSeat(70, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(70), selected: selectedSeats.includes(70) }">13</div>
            <div class="seat" @click="handleClickSeat(71, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(71), selected: selectedSeats.includes(71) }">14</div>
            <div class="seat" @click="handleClickSeat(72, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(72), selected: selectedSeats.includes(72) }">15</div>
            <div class="seat" @click="handleClickSeat(73, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(73), selected: selectedSeats.includes(73) }">16</div>
            <div class="seat" @click="handleClickSeat(74, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(74), selected: selectedSeats.includes(74) }">17</div>
            <div class="seat" @click="handleClickSeat(75, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(75), selected: selectedSeats.includes(75) }">18</div>
            <div class="seat" @click="handleClickSeat(76, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(76), selected: selectedSeats.includes(76) }">19</div>
            <div class="seat" @click="handleClickSeat(77, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(77), selected: selectedSeats.includes(77) }">20</div>
            <div class="seat" @click="handleClickSeat(78, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(78), selected: selectedSeats.includes(78) }">21</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(95, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(95), selected: selectedSeats.includes(95) }">7</div>
            <div class="seat" @click="handleClickSeat(96, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(96), selected: selectedSeats.includes(96) }">8</div>
            <div class="seat" @click="handleClickSeat(97, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(97), selected: selectedSeats.includes(97) }">9</div>
            <div class="seat" @click="handleClickSeat(98, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(98), selected: selectedSeats.includes(98) }">10</div>
            <div class="seat" @click="handleClickSeat(99, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(99), selected: selectedSeats.includes(99) }">11</div>
            <div class="seat" @click="handleClickSeat(100, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(100), selected: selectedSeats.includes(100) }">12</div>
            <div class="seat" @click="handleClickSeat(101, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(101), selected: selectedSeats.includes(101) }">13</div>
            <div class="seat" @click="handleClickSeat(102, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(102), selected: selectedSeats.includes(102) }">14</div>
            <div class="seat" @click="handleClickSeat(103, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(103), selected: selectedSeats.includes(103) }">15</div>
            <div class="seat" @click="handleClickSeat(104, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(104), selected: selectedSeats.includes(104) }">16</div>
            <div class="seat" @click="handleClickSeat(105, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(105), selected: selectedSeats.includes(105) }">17</div>
            <div class="seat" @click="handleClickSeat(106, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(106), selected: selectedSeats.includes(106) }">18</div>
            <div class="seat" @click="handleClickSeat(107, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(107), selected: selectedSeats.includes(107) }">19</div>
            <div class="seat" @click="handleClickSeat(108, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(108), selected: selectedSeats.includes(108) }">20</div>
            <div class="seat" @click="handleClickSeat(109, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(109), selected: selectedSeats.includes(109) }">21</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(126, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(126), selected: selectedSeats.includes(126) }">7</div>
            <div class="seat" @click="handleClickSeat(127, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(127), selected: selectedSeats.includes(127) }">8</div>
            <div class="seat" @click="handleClickSeat(128, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(128), selected: selectedSeats.includes(128) }">9</div>
            <div class="seat" @click="handleClickSeat(129, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(129), selected: selectedSeats.includes(129) }">10</div>
            <div class="seat" @click="handleClickSeat(130, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(130), selected: selectedSeats.includes(130) }">11</div>
            <div class="seat" @click="handleClickSeat(131, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(131), selected: selectedSeats.includes(131) }">12</div>
            <div class="seat" @click="handleClickSeat(132, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(132), selected: selectedSeats.includes(132) }">13</div>
            <div class="seat" @click="handleClickSeat(133, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(133), selected: selectedSeats.includes(133) }">14</div>
            <div class="seat" @click="handleClickSeat(134, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(134), selected: selectedSeats.includes(134) }">15</div>
            <div class="seat" @click="handleClickSeat(135, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(135), selected: selectedSeats.includes(135) }">16</div>
            <div class="seat" @click="handleClickSeat(136, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(136), selected: selectedSeats.includes(136) }">17</div>
            <div class="seat" @click="handleClickSeat(137, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(137), selected: selectedSeats.includes(137) }">18</div>
            <div class="seat" @click="handleClickSeat(138, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(138), selected: selectedSeats.includes(138) }">19</div>
            <div class="seat" @click="handleClickSeat(139, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(139), selected: selectedSeats.includes(139) }">20</div>
            <div class="seat" @click="handleClickSeat(140, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(140), selected: selectedSeats.includes(140) }">21</div>
            <div class="seat" @click="handleClickSeat(141, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(141), selected: selectedSeats.includes(141) }">22</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(158, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(158), selected: selectedSeats.includes(158) }">7</div>
            <div class="seat" @click="handleClickSeat(159, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(159), selected: selectedSeats.includes(159) }">8</div>
            <div class="seat" @click="handleClickSeat(160, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(160), selected: selectedSeats.includes(160) }">9</div>
            <div class="seat" @click="handleClickSeat(161, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(161), selected: selectedSeats.includes(161) }">10</div>
            <div class="seat" @click="handleClickSeat(162, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(162), selected: selectedSeats.includes(162) }">11</div>
            <div class="seat" @click="handleClickSeat(163, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(163), selected: selectedSeats.includes(163) }">12</div>
            <div class="seat" @click="handleClickSeat(164, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(164), selected: selectedSeats.includes(164) }">13</div>
            <div class="seat" @click="handleClickSeat(165, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(165), selected: selectedSeats.includes(165) }">14</div>
            <div class="seat" @click="handleClickSeat(166, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(166), selected: selectedSeats.includes(166) }">15</div>
            <div class="seat" @click="handleClickSeat(167, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(167), selected: selectedSeats.includes(167) }">16</div>
            <div class="seat" @click="handleClickSeat(168, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(168), selected: selectedSeats.includes(168) }">17</div>
            <div class="seat" @click="handleClickSeat(169, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(169), selected: selectedSeats.includes(169) }">18</div>
            <div class="seat" @click="handleClickSeat(170, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(170), selected: selectedSeats.includes(170) }">19</div>
            <div class="seat" @click="handleClickSeat(171, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(171), selected: selectedSeats.includes(171) }">20</div>
            <div class="seat" @click="handleClickSeat(172, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(172), selected: selectedSeats.includes(172) }">21</div>
            <div class="seat" @click="handleClickSeat(173, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(173), selected: selectedSeats.includes(173) }">22</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(190, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(190), selected: selectedSeats.includes(190) }">7</div>
            <div class="seat" @click="handleClickSeat(191, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(191), selected: selectedSeats.includes(191) }">8</div>
            <div class="seat" @click="handleClickSeat(192, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(192), selected: selectedSeats.includes(192) }">9</div>
            <div class="seat" @click="handleClickSeat(193, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(193), selected: selectedSeats.includes(193) }">10</div>
            <div class="seat" @click="handleClickSeat(194, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(194), selected: selectedSeats.includes(194) }">11</div>
            <div class="seat" @click="handleClickSeat(195, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(195), selected: selectedSeats.includes(195) }">12</div>
            <div class="seat" @click="handleClickSeat(196, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(196), selected: selectedSeats.includes(196) }">13</div>
            <div class="seat" @click="handleClickSeat(197, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(197), selected: selectedSeats.includes(197) }">14</div>
            <div class="seat" @click="handleClickSeat(198, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(198), selected: selectedSeats.includes(198) }">15</div>
            <div class="seat" @click="handleClickSeat(199, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(199), selected: selectedSeats.includes(199) }">16</div>
            <div class="seat" @click="handleClickSeat(200, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(200), selected: selectedSeats.includes(200) }">17</div>
            <div class="seat" @click="handleClickSeat(201, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(201), selected: selectedSeats.includes(201) }">18</div>
            <div class="seat" @click="handleClickSeat(202, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(202), selected: selectedSeats.includes(202) }">19</div>
            <div class="seat" @click="handleClickSeat(203, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(203), selected: selectedSeats.includes(203) }">20</div>
            <div class="seat" @click="handleClickSeat(204, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(204), selected: selectedSeats.includes(204) }">21</div>
            <div class="seat" @click="handleClickSeat(205, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(205), selected: selectedSeats.includes(205) }">22</div>
            <div class="seat" @click="handleClickSeat(206, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(206), selected: selectedSeats.includes(206) }">23</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(223, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(223), selected: selectedSeats.includes(223) }">7</div>
            <div class="seat" @click="handleClickSeat(224, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(224), selected: selectedSeats.includes(224) }">8</div>
            <div class="seat" @click="handleClickSeat(225, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(225), selected: selectedSeats.includes(225) }">9</div>
            <div class="seat" @click="handleClickSeat(226, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(226), selected: selectedSeats.includes(226) }">10</div>
            <div class="seat" @click="handleClickSeat(227, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(227), selected: selectedSeats.includes(227) }">11</div>
            <div class="seat" @click="handleClickSeat(228, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(228), selected: selectedSeats.includes(228) }">12</div>
            <div class="seat" @click="handleClickSeat(229, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(229), selected: selectedSeats.includes(229) }">13</div>
            <div class="seat" @click="handleClickSeat(230, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(230), selected: selectedSeats.includes(230) }">14</div>
            <div class="seat" @click="handleClickSeat(231, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(231), selected: selectedSeats.includes(231) }">15</div>
            <div class="seat" @click="handleClickSeat(232, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(232), selected: selectedSeats.includes(232) }">16</div>
            <div class="seat" @click="handleClickSeat(233, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(233), selected: selectedSeats.includes(233) }">17</div>
            <div class="seat" @click="handleClickSeat(234, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(234), selected: selectedSeats.includes(234) }">18</div>
            <div class="seat" @click="handleClickSeat(235, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(235), selected: selectedSeats.includes(235) }">19</div>
            <div class="seat" @click="handleClickSeat(236, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(236), selected: selectedSeats.includes(236) }">20</div>
            <div class="seat" @click="handleClickSeat(237, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(237), selected: selectedSeats.includes(237) }">21</div>
            <div class="seat" @click="handleClickSeat(238, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(238), selected: selectedSeats.includes(238) }">22</div>
            <div class="seat" @click="handleClickSeat(239, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(239), selected: selectedSeats.includes(239) }">23</div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div v-else-if="selectedPart === 3">
        <div class="column">
          <div class="row">
            <span>I</span>
            <div class="seat" @click="handleClickSeat(20, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(20), selected: selectedSeats.includes(20) }">20</div>
            <div class="seat" @click="handleClickSeat(21, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(21), selected: selectedSeats.includes(21) }">21</div>
            <div class="seat" @click="handleClickSeat(22, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(22), selected: selectedSeats.includes(22) }">22</div>
            <div class="seat" @click="handleClickSeat(23, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(23), selected: selectedSeats.includes(23) }">23</div>
            <div class="seat" @click="handleClickSeat(24, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(24), selected: selectedSeats.includes(24) }">24</div>
            <div class="seat" @click="handleClickSeat(25, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(25), selected: selectedSeats.includes(25) }">25</div>
            <div class="seat" @click="handleClickSeat(26, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(26), selected: selectedSeats.includes(26) }">26</div>
            <div class="seat" @click="handleClickSeat(27, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(27), selected: selectedSeats.includes(27) }">27</div>
            <div class="seat" @click="handleClickSeat(28, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(28), selected: selectedSeats.includes(28) }">28</div>
          </div>
          <div class="row">
            <span>II</span>
            <div class="seat" @click="handleClickSeat(49, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(49), selected: selectedSeats.includes(49) }">21</div>
            <div class="seat" @click="handleClickSeat(50, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(50), selected: selectedSeats.includes(50) }">22</div>
            <div class="seat" @click="handleClickSeat(51, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(51), selected: selectedSeats.includes(51) }">23</div>
            <div class="seat" @click="handleClickSeat(52, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(52), selected: selectedSeats.includes(52) }">24</div>
            <div class="seat" @click="handleClickSeat(53, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(53), selected: selectedSeats.includes(53) }">25</div>
            <div class="seat" @click="handleClickSeat(54, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(54), selected: selectedSeats.includes(54) }">26</div>
            <div class="seat" @click="handleClickSeat(55, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(55), selected: selectedSeats.includes(55) }">27</div>
            <div class="seat" @click="handleClickSeat(56, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(56), selected: selectedSeats.includes(56) }">28</div>
            <div class="seat" @click="handleClickSeat(57, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(57), selected: selectedSeats.includes(57) }">29</div>
          </div>
          <div class="row">
            <span>III</span>
            <div class="seat" @click="handleClickSeat(79, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(79), selected: selectedSeats.includes(79) }">22</div>
            <div class="seat" @click="handleClickSeat(80, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(80), selected: selectedSeats.includes(80) }">23</div>
            <div class="seat" @click="handleClickSeat(81, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(81), selected: selectedSeats.includes(81) }">24</div>
            <div class="seat" @click="handleClickSeat(82, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(82), selected: selectedSeats.includes(82) }">25</div>
            <div class="seat" @click="handleClickSeat(83, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(83), selected: selectedSeats.includes(83) }">26</div>
            <div class="seat" @click="handleClickSeat(84, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(84), selected: selectedSeats.includes(84) }">27</div>
            <div class="seat" @click="handleClickSeat(85, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(85), selected: selectedSeats.includes(85) }">28</div>
            <div class="seat" @click="handleClickSeat(86, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(86), selected: selectedSeats.includes(86) }">29</div>
            <div class="seat" @click="handleClickSeat(87, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(87), selected: selectedSeats.includes(87) }">30</div>
            <div class="seat" @click="handleClickSeat(88, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(88), selected: selectedSeats.includes(88) }">31</div>
          </div>
          <div class="row">
            <span>IV</span>
            <div class="seat" @click="handleClickSeat(110, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(110), selected: selectedSeats.includes(110) }">22</div>
            <div class="seat" @click="handleClickSeat(111, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(111), selected: selectedSeats.includes(111) }">23</div>
            <div class="seat" @click="handleClickSeat(112, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(112), selected: selectedSeats.includes(112) }">24</div>
            <div class="seat" @click="handleClickSeat(113, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(113), selected: selectedSeats.includes(113) }">25</div>
            <div class="seat" @click="handleClickSeat(114, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(114), selected: selectedSeats.includes(114) }">26</div>
            <div class="seat" @click="handleClickSeat(115, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(115), selected: selectedSeats.includes(115) }">27</div>
            <div class="seat" @click="handleClickSeat(116, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(116), selected: selectedSeats.includes(116) }">28</div>
            <div class="seat" @click="handleClickSeat(117, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(117), selected: selectedSeats.includes(117) }">29</div>
            <div class="seat" @click="handleClickSeat(118, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(118), selected: selectedSeats.includes(118) }">30</div>
            <div class="seat" @click="handleClickSeat(119, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(119), selected: selectedSeats.includes(119) }">31</div>
          </div>
          <div class="row">
            <span>V</span>
            <div class="seat" @click="handleClickSeat(142, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(142), selected: selectedSeats.includes(142) }">23</div>
            <div class="seat" @click="handleClickSeat(143, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(143), selected: selectedSeats.includes(143) }">24</div>
            <div class="seat" @click="handleClickSeat(144, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(144), selected: selectedSeats.includes(144) }">25</div>
            <div class="seat" @click="handleClickSeat(145, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(145), selected: selectedSeats.includes(145) }">26</div>
            <div class="seat" @click="handleClickSeat(146, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(146), selected: selectedSeats.includes(146) }">27</div>
            <div class="seat" @click="handleClickSeat(147, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(147), selected: selectedSeats.includes(147) }">28</div>
            <div class="seat" @click="handleClickSeat(148, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(148), selected: selectedSeats.includes(148) }">29</div>
            <div class="seat" @click="handleClickSeat(149, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(149), selected: selectedSeats.includes(149) }">30</div>
            <div class="seat" @click="handleClickSeat(150, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(150), selected: selectedSeats.includes(150) }">31</div>
            <div class="seat" @click="handleClickSeat(151, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(151), selected: selectedSeats.includes(151) }">32</div>
          </div>
          <div class="row">
            <span>VI</span>
            <div class="seat" @click="handleClickSeat(174, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(174), selected: selectedSeats.includes(174) }">23</div>
            <div class="seat" @click="handleClickSeat(175, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(175), selected: selectedSeats.includes(175) }">24</div>
            <div class="seat" @click="handleClickSeat(176, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(176), selected: selectedSeats.includes(176) }">25</div>
            <div class="seat" @click="handleClickSeat(177, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(177), selected: selectedSeats.includes(177) }">26</div>
            <div class="seat" @click="handleClickSeat(178, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(178), selected: selectedSeats.includes(178) }">27</div>
            <div class="seat" @click="handleClickSeat(179, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(179), selected: selectedSeats.includes(179) }">28</div>
            <div class="seat" @click="handleClickSeat(180, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(180), selected: selectedSeats.includes(180) }">29</div>
            <div class="seat" @click="handleClickSeat(181, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(181), selected: selectedSeats.includes(181) }">30</div>
            <div class="seat" @click="handleClickSeat(182, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(182), selected: selectedSeats.includes(182) }">31</div>
            <div class="seat" @click="handleClickSeat(183, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(183), selected: selectedSeats.includes(183) }">32</div>
          </div>
          <div class="row">
            <span>VII</span>
            <div class="seat" @click="handleClickSeat(207, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(207), selected: selectedSeats.includes(207) }">24</div>
            <div class="seat" @click="handleClickSeat(208, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(208), selected: selectedSeats.includes(208) }">25</div>
            <div class="seat" @click="handleClickSeat(209, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(209), selected: selectedSeats.includes(209) }">26</div>
            <div class="seat" @click="handleClickSeat(210, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(210), selected: selectedSeats.includes(210) }">27</div>
            <div class="seat" @click="handleClickSeat(211, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(211), selected: selectedSeats.includes(211) }">28</div>
            <div class="seat" @click="handleClickSeat(212, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(212), selected: selectedSeats.includes(212) }">29</div>
            <div class="seat" @click="handleClickSeat(213, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(213), selected: selectedSeats.includes(213) }">30</div>
            <div class="seat" @click="handleClickSeat(214, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(214), selected: selectedSeats.includes(214) }">31</div>
            <div class="seat" @click="handleClickSeat(215, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(215), selected: selectedSeats.includes(215) }">32</div>
            <div class="seat" @click="handleClickSeat(216, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(216), selected: selectedSeats.includes(216) }">33</div>
          </div>
          <div class="row">
            <span>VIII</span>
            <div class="seat" @click="handleClickSeat(240, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(240), selected: selectedSeats.includes(240) }">24</div>
            <div class="seat" @click="handleClickSeat(241, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(241), selected: selectedSeats.includes(241) }">25</div>
            <div class="seat" @click="handleClickSeat(242, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(242), selected: selectedSeats.includes(242) }">26</div>
            <div class="seat" @click="handleClickSeat(243, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(243), selected: selectedSeats.includes(243) }">27</div>
            <div class="seat" @click="handleClickSeat(244, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(244), selected: selectedSeats.includes(244) }">28</div>
            <div class="seat" @click="handleClickSeat(245, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(245), selected: selectedSeats.includes(245) }">29</div>
            <div class="seat" @click="handleClickSeat(246, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(246), selected: selectedSeats.includes(246) }">30</div>
            <div class="seat" @click="handleClickSeat(247, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(247), selected: selectedSeats.includes(247) }">31</div>
            <div class="seat" @click="handleClickSeat(248, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(248), selected: selectedSeats.includes(248) }">32</div>
            <div class="seat" @click="handleClickSeat(249, event.id, sectorPrice)" :class="{ occupied: event.occupiedSeatsId.includes(249), selected: selectedSeats.includes(249) }">33</div>
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
    font-size: 2.5vw;
  }
  .seat {
    width: 3vw;
    height: 3vw;
    margin: 3px;
    font-size: 2vw;
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
