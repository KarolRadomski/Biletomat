import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from 'axios';

export const useUserStore = defineStore('User', {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      userError: '',
    };
  },
  actions: {
    // User login
    async login(email, password) {
      try {
        this.userError = '';
        const data = {
          email,
          password,
        };
        const temp = await axios.post('api/auth/login', data);
        this.user = temp.data;
        localStorage.setItem('user', JSON.stringify(temp.data));
      } catch (error) {
        this.userError = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      }
    },
    async logout() {
      try {
        this.userError = '';
        this.user = null;
        localStorage.removeItem('user');
      } catch (error) {
        this.userError = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      }
    },

    async register(fname, lname, email, password) {
      try {
        this.userError = '';
        const data = {
          fname,
          lname,
          email,
          password,
        };
        const temp = await axios.post('api/auth/register', data);
        this.user = temp.data;
        localStorage.setItem('user', JSON.stringify(temp.data));
      } catch (error) {
        this.userError = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      }
    },
  },
});
