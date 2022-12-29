<template>
  <nav class="navbar bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logoSmallHalf.png" alt="Logo" width="62" height="62" class="d-inline-block logo" />
        <h1 class="d-inline-block align-middle ms-3 logoName">Biletomat</h1>
      </a>
      <form class="d-flex w-25" role="search">
        <input class="form-control me-2" type="search" placeholder="Szukaj wydarzeń" aria-label="Search" />
      </form>
      <div class="d-flex">
        <div>
          <router-link :to="{ path: '/koszyk' }">
            <button type="button" class="position-relative cartButton">
              <i class="bi bi-cart cartIcon"></i>
              <span v-if="this.tickets?.length" class="position-absolute top-0 mt-1 start-100 translate-middle badge rounded-pill bg-danger"> {{ this.tickets?.length }} </span>
            </button>
          </router-link>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown">
            <b v-if="user" class="userName me-2">{{ user.fname }} {{ user.lname }}</b>
            <img src="../assets/userProfile.png" class="rounded-circle avatar" height="48" alt="Portrait of a Woman" />
          </a>

          <div v-if="!user" class="dropdown-menu dropdownElement me-2" style="left: -230px !important">
            <h3>Witaj w Biletomat</h3>

            Zaloguj się aby kupować i przeglądać swoje bilety
            <router-link :to="{ path: '/logowanie' }">
              <button class="w-100 mt-2 loginButton">Zaloguj się</button>
            </router-link>
            <span class="mt-2"> Nie masz konta? <a href="/rejestracja" class="registerButton mt-2">Zarejestruj się</a> </span>
          </div>
          <div v-else class="dropdown-menu dropdownElement me-2">
            <router-link v-if="user.role === 'ADMIN'" :to="{ path: '/admin' }">
              <p class="dropElement">Panel Administratora</p>
            </router-link>
            <router-link :to="{ path: '/moje-bilety' }">
              <p class="dropElement last">Moje bilety</p>
            </router-link>

            <button class="w-75 mt-2 loginButton" @click="handleLogout">Wyloguj się</button>
          </div>

          <!-- <div class="dropdown-menu dropdownElement me-2">
            <div v-if="!user">
              <h3>Witaj w Biletomat</h3>

              Zaloguj się aby kupować i przeglądać swoje bilety
              <router-link :to="{ path: '/logowanie' }">
                <button class="w-100 mt-2 loginButton">Zaloguj się</button>
              </router-link>
              <span class="mt-2"> Nie masz konta? <a href="/rejestracja" class="registerButton mt-2">Zarejestruj się</a> </span>
            </div>

            <div v-else>
              <router-link v-if="user.role === 'ADMIN'" :to="{ path: '/admin' }">
                <p class="dropElement">Panel Administratora</p>
              </router-link>
              <router-link :to="{ path: '/moje-bilety' }">
                <p class="dropElement last">Moje bilety</p>
              </router-link>

              <button class="w-100 mt-2 loginButton" @click="handleLogout">Wyloguj się</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '../store/User';
import { mapWritableState, mapActions } from 'pinia';
import { useTicketsStore } from '../store/Tickets';
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
    ...mapWritableState(useTicketsStore, ['tickets']),
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
  z-index: 2;
  position: fixed;
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
}

.avatar {
  background-color: #f25757;
}

.dropdownElement {
  text-align: center;
  padding: 20px;
  width: 300px;
  border-radius: 0px;
  border-color: lightgray;
  position: absolute;
  top: 20;
  left: -40px !important;
}

.dropdownElement a {
  text-decoration: none;
}

.loginButton {
  border: none;
  background: #f25757;
  padding: 5px;
  font-size: 18px;
  color: white;
}

.registerButton {
  text-decoration: none;
  color: #f94144;
}

.dropElement {
  text-align: left;
  margin-bottom: 0px;
  color: black;
  font-weight: 600;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}

.dropElement.last {
  border-bottom: none;
}
i.cartIcon {
  height: min-content;
  align-self: center;
  margin-bottom: 4px;
  margin-right: 0px;
  font-size: 24px;
}
.cartButton {
  border: none;
  background: white;
  margin-right: 40px;
  margin-top: 5px;
}

@media only screen and (max-width: 767px) {
  .dropdownElement {
    left: -250px !important;
  }
  .userName {
    display: none !important;
  }

  .logoName {
    font-size: 24px;
    padding-top: 10px;
  }

  .logo,
  .avatar {
    width: 32px !important;
    height: 32px !important;
  }
}
</style>
