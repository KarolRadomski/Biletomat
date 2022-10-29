<template>
   <div class="componentContainer">
      <p>Wybierz sektor aby ustalić jego szczegóły</p>
      <div class="scene">Scena</div>
      <div class="sectorsContainer">
         <div class="sectorsLeftColumn col-10">
            <div class="sector sector1" data-bs-toggle="modal" data-bs-target="#sectorModal" @click="showModalSectorDetails = true;
            place = 'Filharmonia Podkarpacka'; selectedSector = 1">
               <h5>Sektor 1</h5>
            </div>
            <div class="sector sector2"
               @click="showModalSectorDetails = true; place = 'Filharmonia Podkarpacka'; selectedSector = 2">
               <h5>Sektor 2</h5>
            </div>
         </div>
         <div class="sectorsRightColumn col-2">
            <div class="sector sector3"
               @click="showModalSectorDetails = true; place = 'Filharmonia Podkarpacka'; selectedSector = 3">
               <h5>Sektor 3</h5>
            </div>
            <div class="sector sector4"
               @click="showModalSectorDetails = true; place = 'Filharmonia Podkarpacka'; selectedSector = 4">
               <h5>Sektor 4</h5>
            </div>
            <div class="sector sector5"
               @click="showModalSectorDetails = true; place = 'Filharmonia Podkarpacka'; selectedSector = 5">
               <h5>Sektor 5</h5>
            </div>
            <div class="sector sector6"
               @click="showModalSectorDetails = true; place = 'Filharmonia Podkarpacka'; selectedSector = 6">
               <h5>Sektor 6</h5>
            </div>
         </div>
      </div>
      <SectorDetailsModal v-if=true :place=place :selectedSector=selectedSector />
   </div>
</template>

<script>
import axios from 'axios';
import SectorDetailsModal from '../SectorDetailsModal.vue'
export default {
   name: 'FilharmoniaPodkarpacka',
   data() {
      return {
         showModalSectorDetails: false,
         place: '',
         selectedSector: '',
      }
   },
   components: {
      SectorDetailsModal
   }

}
</script>

<style scoped>
.scene {
   width: 70%;
   margin: 0 auto;
   text-align: center;
   font-size: 30px;
   font-weight: 600;
   border-bottom: 3px solid black
}

.sectorsContainer {
   display: flex;
   margin-top: 20px;
}

.sectorsLeftColumn {
   display: flex;
   flex-direction: column;
   background: red;
   justify-content: space-between;
}

.sectorsRightColumn {
   display: flex;
   flex-direction: column;
   background: blue;
   justify-content: space-evenly;
   padding: 20px 0px;
}

.sector {
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: lightgray;
   margin: 20px;
}

.sector1 {
   height: 200px;
   margin-left: 20%;
}

.sector2 {
   height: 300px;
}

.sector3,
.sector4,
.sector5,
.sector6 {
   height: 80px;
}
</style>