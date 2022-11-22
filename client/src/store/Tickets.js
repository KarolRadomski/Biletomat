import { defineStore } from 'pinia';
import axios from 'axios';

export const useTicketsStore = defineStore('tickets', {
  state: () => {
    return {
      controls: {
        selectedSector: '',
      },
      tickets: JSON.parse(localStorage.getItem('tickets')) || [],
    };
  },
  actions: {
    async handleClickSeat(seatID, eventID, price) {
      let flag = true;
      this.tickets.forEach((ticket) => {
        if (ticket.seatID === seatID && ticket.eventID === eventID) flag = false;
      });

      if (flag) {
        await axios.post('/api/event/seat', { eventID: eventID, seatID: seatID }).then((response) => {
          response.data.event.sectorDetails = response.data.event.sectorDetails.filter((item) => {
            return item.seatsInSectors.length !== 0;
          });
          console.log(response.data.event);
          this.tickets.push({
            eventID: eventID,
            seatID: seatID,
            seatInSectorID: response.data.event.sectorDetails[0].seatsInSectors[0].id,
            price: price,
            eventName: response.data.event.name,
            endSellingDate: response.data.event.endSellingDate,
            row: response.data.event.sectorDetails[0].seatsInSectors[0].seat.row,
            number: response.data.event.sectorDetails[0].seatsInSectors[0].seat.number,
            sectorName: response.data.event.sectorDetails[0].seatsInSectors[0].seat.seatInSectors[0].sectorDetail.sector.name,
          });
          localStorage.setItem('tickets', JSON.stringify(this.tickets));
        });
      } else {
        this.tickets = this.tickets.filter((item) => {
          return item.seatID !== seatID || item.eventID !== eventID;
        });
        localStorage.setItem('tickets', JSON.stringify(this.tickets));
      }
    },
  },
});
