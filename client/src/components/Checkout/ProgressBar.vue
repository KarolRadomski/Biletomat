<template>
  <div class="container">
    <div class="progress-container">
      <div class="progress" id="progress" :style="{ width: progressWidth + '%' }"></div>
      <div class="circle" :class="{ active: checkoutControl.stateOfCheckout >= 1 }"><i class="bi bi-list-ul"></i></div>
      <div class="circle" :class="{ active: checkoutControl.stateOfCheckout >= 2 }"><i class="bi bi-credit-card"></i></div>
      <div class="circle" :class="{ active: checkoutControl.stateOfCheckout === 3 }"><i class="bi bi-bag-fill"></i></div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from '../../store/Order';
import { mapWritableState } from 'pinia';
export default {
  name: 'ProgressBar',
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useOrderStore, ['checkoutControl']),
    progressWidth() {
      let width = 0;
      if (this.checkoutControl?.stateOfCheckout === 1) width = 0;
      else if (this.checkoutControl?.stateOfCheckout === 2) width = 50;
      else if (this.checkoutControl?.stateOfCheckout === 3) width = 100;
      return width;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 15px;
  text-align: center;
}

.progress-container::before {
  content: '';
  background: gray;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  /* z-index: -1; */
}

.progress-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 80%;
}

.progress {
  background: #f25757;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 33%;
  /* z-index: -1; */
  transition: 0.4s ease;
}

.circle {
  background: #fff;
  color: #999;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid gray;
  transition: 0.4s ease;
  z-index: 0;
}

.circle.active {
  border-color: #f25757;
  color: #f25757;
  z-index: 0;
}
</style>
