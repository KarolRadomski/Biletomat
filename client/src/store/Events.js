import { defineStore } from 'pinia';
import axios from 'axios';

export const useEventsStore = defineStore('Events', {
   state: () => {
      return {
         events: []
      };
   },
   actions: {
      async fetchEvents() {
         const temp = await axios.get('/api/event/getavailable');
         this.events = []
         temp.data.events.forEach(event => {
            this.events.push({
               id: event.id,
               name: event.name,
               date: event.date,
               description: event.description,
               coverUrl: event.coverUrl,
               placeId: event.placeId,
               placeName: event.place.name
            })
         })

      },
   },
});
