<template>
  <div class="grid">
    <h1>Stocks Page</h1>
    <vs-row>
      <vs-col
        :key="stock"
        v-for="stock in stocks"
        w="3"
        justify="center"
        align="center"
      >
        <app-stock :stock="stock"></app-stock>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Stock from "../components/stocks/Stock";
export default {
  created() {
    this.$store.dispatch("initStocks");
  },
  components: { appStock: Stock },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style scoped>
.grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
}
h1 {
  color: #f3f3f3;
  font-size: 2.9em;
  margin: 10px;
}
</style>
