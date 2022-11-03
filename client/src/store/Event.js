import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from 'axios';

export const useEventStore = defineStore('Event', {
  state: () => {
    return {
      Event: {
        event: {
          name: '',
          date: '',
          description: '',
          placeID: '',
          coverUrl: '',
        },
        sectorDetails: [],
        reservedSeatsId: [],
      },
    };
  },
  actions: {
    handleClickSeat(id) {
      if (this.Event.reservedSeatsId.includes(id)) {
        this.Event.reservedSeatsId = this.Event.reservedSeatsId.filter((item) => {
          return item !== id;
        });
      } else {
        this.Event.reservedSeatsId.push(id);
      }
      console.log(this.Event.reservedSeatsId);
    },

    async uploadCover(data) {
      const response = await axios.post('/api/upload/uploadCover', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      this.Event.event.coverUrl = `/uploads/${response.data.file}`;
    },
  },
});
