<template>
  <div class="grid">
    <h1 class="display1">Welcome to the Stock Trader Vue App.</h1>
    <p>
      You Can Trade Stocks Or View Them on Your Portfolio.
      <br />
      <br />
      You May Also <strong>Save & Load</strong> Your Data To/From Firebase DB.
      <br />
      By Clicking On <strong>Save</strong> Or <strong>Load</strong> Buttons.
      <br />
      <br />
      By Clicking On <strong>'End Day'</strong> You Will Begin New Day With New
      Stocks Prices.
      <br />
      <br />
      <br />
      Your Funds:
      <strong
        ><big>{{ funds | currency }}</big></strong
      >
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
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
  color: #f3f3f3;
}
h1 {
  font-size: 3.9em;
  margin: 0;
}
p {
  font-size: 1.3em;
}
</style>
