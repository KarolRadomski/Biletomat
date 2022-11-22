<template>
  <div class="container">
    <div class="borderLabel">
      <label style="font-size: 24px" id="borderTitle">Podsumowanie</label>
      <div class="contentContainer">
        <i class="bi bi-check-circle"></i>
        <h3>Dziękujemy za zakup</h3>
      </div>
      <h5 style="text-align: center">
        Bilety są gotowe do odebrania w zakładce <a href="/mojeBilety">Moje bilety <i class="bi bi-box-arrow-up-right" style="font-size: 18px"></i></a>
      </h5>

      <div class="navButtons">
        <a class="w-50" href="/">
          <button class="backToHomeButton">Powrót do strony głównej</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from '../../store/Order';
import { mapWritableState } from 'pinia';

export default {
  name: 'Payment',
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useOrderStore, ['checkoutControl']),
  },
  methods: {},
};
</script>
<style scoped>
.container {
  padding: 5px;
}
.borderLabel {
  padding: 10px;
  border: 1px solid lightgray;
  margin: 10px 0px;
}

.borderLabel > #borderTitle {
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  top: -28px;
  left: 20px;
  background-color: white;
}

.contentContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.contentContainer > i {
  font-size: 48px;
  color: rgb(22, 167, 22);

  margin-right: 40px;
}
a {
  text-decoration: none;
  color: #f25757;
  font-weight: 600;
}
.navButtons {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
}

.backToHomeButton {
  width: 100%;
  border: none;
  height: 40px;
  color: white;
  background-color: #f25757;
}

@media screen and (max-width: 767px) {
}
@media screen and (max-width: 480px) {
}
</style>
