import { defineStore } from 'pinia';

export const useOrderStore = defineStore('Order', {
  state: () => {
    return {
      checkoutControl: {
        stateOfCheckout: 1,
      },
      order: {
        details: {},
        seats: []
      },
    };
  },
  actions: {
    resetOrderStore() {
      this.checkoutControl = {
        stateOfCheckout: 1,
      }

      this.order = {
        details: {},
        seats: []
      }

    }
  },
});
