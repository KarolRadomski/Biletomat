<template>
   <div class="modal" id="sectorModal" tabindex="-1">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">Ustawienia sektora</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <ul class="nav nav-tabs nav-fill">
                  <li class="nav-item">
                     <a class="nav-link" :class="{ 'active': modalState === 'pricing' }"
                        @click="modalState = 'pricing'">Cena sektora</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" :class="{ 'active': modalState === 'reservations' }"
                        @click="modalState = 'reservations'">Rezerwacja miejsc</a>
                  </li>
               </ul>
               <p>{{ place }}</p>
               <p>{{ selectedSector }}</p>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
               <button type="button" class="btn btn-primary">Zapisz zmiany</button>
            </div>
         </div>
      </div>
   </div>
</template>


<script>

export default {
   props: ['place', 'selectedSector'],
   name: 'SectorDetailsModal',
   data() {
      return {
         modalState: 'pricing'
      }
   }

}

</script>

<style scoped>
.nav-item,
.nav-link {
   cursor: pointer;
}
</style>