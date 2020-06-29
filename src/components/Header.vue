<template>
  <div fluid class="navbar">
    <vs-navbar
      class="navbar"
      text-white
      color="#6c8978"
      center-collapsed
      v-model="active"
    >
      <template #left>
        <img src="../assets/logo.png" alt="logo" />
        <span class="logoTitle">The Stocks Trade</span>
      </template>
      <vs-navbar-item
        class="navItem bx-tada-hover"
        :active="active == 'home'"
        to="/"
        id="home"
      >
        <i class="bx bx-home"></i> Home
      </vs-navbar-item>
      <vs-navbar-item
        class="navItem bx-tada-hover"
        :active="active == 'portfolio'"
        to="/portfolio"
        id="portfolio"
      >
        <i class="bx bxs-bar-chart-alt-2"></i>
        Portfolio
      </vs-navbar-item>
      <vs-navbar-item
        class="navItem bx-tada-hover"
        :active="active == 'stocks'"
        to="/stocks"
        id="stocks"
      >
        <i class="bx bx-coin-stack"></i> Stocks
      </vs-navbar-item>
      <template #right>
        <vs-navbar-item class="navItem bx-tada-hover"
          ><a @click="endDay">End Day</a></vs-navbar-item
        >
        <strong
          >Funds: <big>{{ funds | currency }}</big></strong
        >
        <vs-navbar-item>
          <template>
            <div class="center">
              <vs-button-group>
                <vs-button dark @click="saveData">
                  Save
                </vs-button>
                <vs-button dark @click="loadData">
                  Load
                </vs-button>
              </vs-button-group>
            </div>
          </template>
        </vs-navbar-item>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    active: "home",
    value: ""
  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
a {
  text-decoration: none;
  font-family: "Poppins";
}

.navbar {
  height: 75px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.navItem {
  font-size: 1em;
}

.logoTitle {
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 8px;
}

strong {
  text-transform: uppercase;
  color: #f4f4f4;
}
</style>
