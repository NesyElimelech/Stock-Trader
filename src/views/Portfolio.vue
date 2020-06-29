<template>
  <div class="grid">
    <h1>Portfolio page</h1>
    <p>Here you can see all the stocks you bought and sell or save them.</p>
    <app-portfolio-stock
      v-for="stock in stocks"
      :key="stock"
      :stock="stock"
    ></app-portfolio-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "../components/portfolio/Stock";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appPortfolioStock: Stock
  }
};
</script>

<style scoped>
.grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 0;
  padding: 0;
}
h1 {
  color: #f3f3f3;
  font-size: 2.9em;
  margin: 0;
}
p {
  color: #f3f3f3;
  font-size: 1.4em;
}
</style>
