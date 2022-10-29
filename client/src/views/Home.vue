<template>
  <div>
    <NavBar />
    <div class="pageContainer">
      <!-- {{ user }} -->
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '../store/User';
export default {
  name: 'HomeView',
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.pageContainer {
  background-image: url('../assets/tlo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: top;
  /* margin-bottom: -80px; */
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: -1;
}
</style>
