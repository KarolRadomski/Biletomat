<template>
   <div>
      <NavBar />
      <div class="pageContainer">
         <!-- {{ user }} -->
         Wydarzenie
      </div>
   </div>
</template>
 
<script>
import NavBar from '../components/NavBar.vue';
// import UpcomingEvents from '../components/UpcomingEvents.vue';
import { mapState, mapActions } from 'pinia';

export default {
   name: 'wydarzenie',
   methods: {
      //   ...mapActions(useEventsStore, ['fetchEvents'])
   },
   computed: {
      // ...mapState(useEventsStore, ['events']),
   },

};
</script>
 
<style scoped>

</style>
 