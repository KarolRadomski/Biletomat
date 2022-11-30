<template>
  <div>
    <AuthorNavBar />
    <div class="pageContainer">
      <AdminSideBar active="Service" />
      <CreateService />
    </div>
  </div>
</template>

<script>
import AuthorNavBar from '../../components/AuthorNavBar.vue';
import { mapState } from 'pinia';
import { useUserStore } from '../../store/User';
import AdminSideBar from '../../components/AdminPanel/AdminSideBar.vue';
import CreateService from '../../components/AdminPanel/CreateService.vue';
export default {
  name: 'EditEvent',
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    AuthorNavBar,
    AdminSideBar,
    CreateService,
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
}
</style>
