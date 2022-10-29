<template>
  <div>
    <AuthorNavBar />
    <EventCreator />
  </div>
</template>

<script>
import AuthorNavBar from '../components/AuthorNavBar.vue';
import { mapState } from 'pinia';
import { useUserStore } from '../store/User';
import EventCreator from '../components/AdminPanel/EventCreator.vue';
export default {
  name: 'AdminView',
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  components: {
    AuthorNavBar,
    EventCreator,
  },
};
</script>
