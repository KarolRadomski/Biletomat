<template>
  <div class="modal" id="sectorModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ustawienia sektora</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: modalState === 'pricing' }" @click="modalState = 'pricing'">Cena sektora</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: modalState === 'reservations' }" @click="modalState = 'reservations'">Rezerwacja miejsc</a>
            </li>
          </ul>
          <div v-if="modalState === 'pricing'">
            <p>{{ place }}</p>
            <!-- <p>{{ selectedSector }}</p> -->
            <label for="price">Cena sektora: </label>
            <input id="price" v-model="price.value" type="text" class="form-control w-50" :class="validatePrice" />
          </div>
          <div v-else>
            <div v-if="place === 'Filharmonia Podkarpacka' && selectedSector === 1">
              <Sektor1 />
            </div>
            <div v-else-if="place === 'Filharmonia Podkarpacka' && selectedSector === 2">
              <Sektor2 />
            </div>
            <div v-else-if="place === 'Filharmonia Podkarpacka' && selectedSector === 3">
              <Sektor3 />
            </div>
            <div v-else-if="place === 'Filharmonia Podkarpacka' && selectedSector === 4">
              <Sektor4 />
            </div>
            <div v-else-if="place === 'Filharmonia Podkarpacka' && selectedSector === 5">
              <Sektor5 />
            </div>
            <div v-else-if="place === 'Filharmonia Podkarpacka' && selectedSector === 6">
              <Sektor6 />
            </div>
            <div v-else-if="place === 'Teatr Wandy Siemaszkowej' && selectedSector === 7">
              <Parter />
            </div>
            <div v-else-if="place === 'Teatr Wandy Siemaszkowej' && selectedSector === 8">
              <Balkon />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Zamknij</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sektor1 from './placesSchema/FilharmoniaPodkarpacka/Sektor1.vue';
import Sektor2 from './placesSchema/FilharmoniaPodkarpacka/Sektor2.vue';
import Sektor3 from './placesSchema/FilharmoniaPodkarpacka/Sektor3.vue';
import Sektor4 from './placesSchema/FilharmoniaPodkarpacka/Sektor4.vue';
import Sektor5 from './placesSchema/FilharmoniaPodkarpacka/Sektor5.vue';
import Sektor6 from './placesSchema/FilharmoniaPodkarpacka/Sektor6.vue';
import Parter from './placesSchema/TeatrWandySiemaszkowej/Parter.vue';
import Balkon from './placesSchema/TeatrWandySiemaszkowej/Balkon.vue';
export default {
  props: ['place', 'selectedSector'],
  name: 'SectorDetailsModal',
  data() {
    return {
      modalState: 'pricing',
      price: {
        value: 0,
        valid: null,
      },
    };
  },
  computed: {
    validatePrice() {
      this.price.value = String(this.price.value).replace(',', '.');
      !isNaN(this.price.value) && this.price.value >= 0 ? (this.price.valid = 'is-valid') : (this.price.valid = 'is-invalid');
      return this.price.valid;
    },
  },
  components: {
    Sektor1,
    Sektor2,
    Sektor3,
    Sektor4,
    Sektor5,
    Sektor6,
    Parter,
    Balkon,
  },
};
</script>

<style scoped>
.nav-item,
.nav-link {
  cursor: pointer;
}
</style>
