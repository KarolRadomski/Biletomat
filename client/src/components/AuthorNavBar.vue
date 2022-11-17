<template>
  <nav class="navbar bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logoSmallHalf.png" alt="Logo" width="62" height="62" class="d-inline-block logo" />
        <h1 class="d-inline-block align-middle ms-3 logoName">Biletomat</h1>
      </a>
      <div class="rightSide">
        <router-link to="/"
          ><button class="btn btn-outline-dark me-2 returnButton"><i class="bi bi-reply-fill me-2" style="font-size: 20px; position: relative; top: 1px"></i>Powrót do serwisu</button></router-link
        >
        <button class="btn logoutButton" @click="handleLogout">Wyloguj się</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '../store/User';
import { mapWritableState, mapActions } from 'pinia';
export default {
  name: 'NavBar',
  data() {
    return {
      avatarDropdown: false,
    };
  },
  methods: {
    ...mapActions(useUserStore, ['logout']),
    async handleLogout() {
      await this.logout();
      this.$router.push('/');
    },
  },
  computed: {
    ...mapWritableState(useUserStore, ['user']),
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
  z-index: 10;
  position: fixed;
  width: 100vw;
}
.logoutButton {
  border: none;
  background: #f25757;
  padding: 5px 15px;
  color: white;
  height: 45px;
}
.returnButton {
  height: 45px;
}
.rightSide {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

@media only screen and (max-width: 767px) {
  .logoName {
    font-size: 24px;
    padding-top: 10px;
  }
  .logo {
    width: 32px !important;
    height: 32px !important;
  }
}
@media only screen and (max-width: 530px) {
  .logoName {
    display: none !important;
  }
}
@media only screen and (max-width: 400px) {
  button {
    font-size: 0.65em;
  }
  .returnButton > i {
    display: none;
  }
}
</style>
