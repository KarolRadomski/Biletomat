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
          startSellingDate: '',
          endSellingDate: '',
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
    handleChangePlace() {
      console.log(this.Event.event.placeID);
      this.Event.reservedSeatsId = [];
      switch (this.Event.event.placeID) {
        case 0:
          this.Event.sectorDetails = [];
          break;
        case 1:
          this.Event.sectorDetails = [
            {
              sectorId: 1,
              price: '',
            },
            {
              sectorId: 2,
              price: '',
            },
            {
              sectorId: 3,
              price: '',
            },
            {
              sectorId: 4,
              price: '',
            },
            {
              sectorId: 5,
              price: '',
            },
            {
              sectorId: 6,
              price: '',
            },
          ];
          break;
        case 2:
          this.Event.sectorDetails = [
            {
              sectorId: 7,
              price: '',
            },
            {
              sectorId: 8,
              price: '',
            },
          ];
          break;
      }
    },
    handleChangePrice(sectorID, price) {
      if (price !== '')
        this.Event.sectorDetails.forEach((detail) => {
          if (detail.sectorId === sectorID) {
            detail.price = parseFloat(price);
          }
        });
    },
    async uploadCover(data) {
      const response = await axios.post('/api/upload/uploadCover', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      this.Event.event.coverUrl = `/uploads/${response.data.file}`;
    },
  },
});
