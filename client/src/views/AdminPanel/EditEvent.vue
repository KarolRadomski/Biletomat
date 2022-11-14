<template>
  <div>
    <AuthorNavBar />
    <div class="pageContainer">
      <AdminSideBar active="upcoming" />
      <EventEditor class="creator" />
    </div>
  </div>
</template>

<script>
import AuthorNavBar from '../../components/AuthorNavBar.vue';
import { mapState } from 'pinia';
import { useUserStore } from '../../store/User';
import EventEditor from '../../components/AdminPanel/EventEditor.vue';
import AdminSideBar from '../../components/AdminPanel/AdminSideBar.vue';
export default {
  name: 'EditEvent',
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    AuthorNavBar,
    EventEditor,
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
