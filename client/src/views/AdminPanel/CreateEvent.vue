<template>
  <div>
    <AuthorNavBar />
    <div class="pageContainer">
      <AdminSideBar active="new" />
      <EventCreator class="creator" />
    </div>
  </div>
</template>

<script>
import AuthorNavBar from '../../components/AuthorNavBar.vue';
import { mapState } from 'pinia';
import { useUserStore } from '../../store/User';
import EventCreator from '../../components/AdminPanel/EventCreator.vue';
import AdminSideBar from '../../components/AdminPanel/AdminSideBar.vue';
export default {
  name: 'CreateEvent',
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    AuthorNavBar,
    EventCreator,
    AdminSideBar,
  },
};
</script>
<style scoped>
.pageContainer {
  display: flex;
  width: 100%;
}
@media (max-width: 575px) {
  .pageContainer {
    flex-direction: column;
  }
  .creator {
    margin-top: 30px;
  }
}
</style>
