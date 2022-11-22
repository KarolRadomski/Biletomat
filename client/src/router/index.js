import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import AdminIndex from '../views/AdminPanel/index.vue';
import Creator from '../views/AdminPanel/CreateEvent.vue';
import Editor from '../views/AdminPanel/EditEvent.vue';
import Wydarzenie from '../views/Wydarzenie.vue';
import Koszyk from '../views/Koszyk.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/logowanie',
    name: 'login',
    component: Login,
  },
  {
    path: '/rejestracja',
    name: 'register',
    component: Register,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminIndex,
  },
  {
    path: '/admin/new',
    name: 'creator',
    component: Creator,
  },
  {
    path: '/admin/edit/:id',
    name: 'editor',
    component: Editor,
  },
  {
    path: '/wydarzenie/:id',
    name: 'wydarzenie',
    component: Wydarzenie,
  },
  {
    path: '/koszyk',
    name: 'koszyk',
    component: Koszyk,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
