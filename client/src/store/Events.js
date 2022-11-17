import { defineStore } from 'pinia';
import axios from 'axios';

export const useEventsStore = defineStore('Events', {
  state: () => {
    return {
      events: [],
      event: {},
    };
  },
  actions: {
    async fetchEvents() {
      const temp = await axios.get('/api/event/getavailable');
      this.events = [];
      temp.data.events.forEach((event) => {
        this.events.push({
          id: event.id,
          name: event.name,
          date: event.date,
          description: event.description,
          coverUrl: event.coverUrl,
          placeId: event.placeId,
          placeName: event.place.name,
        });
      });
    },
    async fetchEventDetails(eventId) {
      axios.post('/api/event/getData', { id: eventId }).then((response) => {
        //Basic informations about event
        this.event.name = response.data.event.name;
        this.event.id = response.data.event.id;
        this.event.date = response.data.event.date;
        this.event.description = response.data.event.description;
        this.event.coverUrl = response.data.event.coverUrl;
        this.event.placeID = response.data.event.placeId;
        this.event.placeName = response.data.event.place.name;
        this.event.placeAddress = response.data.event.place.address;

        //Price for each sector
        this.event.sectorDetails = [];
        response.data.event.sectorDetails.forEach((sector) => {
          this.event.sectorDetails.push({
            sectorId: sector.sectorId,
            price: sector.price,
          });
        });
        //Informations about seat availability
        this.event.occupiedSeatsId = [];
        response.data.event.sectorDetails.forEach((sector) => {
          sector.seatsInSectors.forEach((seat) => {
            if (seat.reserved || seat.ticket.length !== 0) {
              this.event.occupiedSeatsId.push(seat.seatId);
            }
          });
        });
      });
    },
  },
});
