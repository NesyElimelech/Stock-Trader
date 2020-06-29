<template>
  <div class="grid">
    <vs-row justify="center">
      <vs-col type="flex" justify="center" align="center">
        <vs-card class="cardx">
          <div class="card-header" slot="header">
            <h3>
              {{ stock.name }}
              <small>( Price: {{ stock.price | currency }} )</small>
            </h3>
          </div>
          <div slot="footer">
            <div class="center content-inputs">
              <vs-input
                type="number"
                justify="flex-start"
                warn
                v-model="quantity"
                label-placeholder="Quantity"
                min="0"
              >
              </vs-input>
              <vs-button
                justify="flex-end"
                gradient
                style="min-width: 80px"
                warn
                animation-type="scale"
                @click="buyStock"
              >
                Buy
                <template #animate>
                  <i class="bx bxs-basket"></i>
                </template>
              </vs-button>
            </div>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data: () => ({ quantity: "" }),
  props: ["stock"],
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      if (this.quantity >= 1) {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };

        console.log(order);
        this.$store.dispatch("buyStock", order);
        this.quantity = 0;
      } else {
        return (this.quantity = 0);
      }
    }
  }
};
</script>

<style scoped>
.cardx {
  margin: 0 20px 20px 20px;
  background-color: #268554;
  border-radius: 20px;
  padding: 5px 20px;
  width: 65%;
}
.cardx .card-header {
  background-color: #232323af;
  border-radius: 20px;
  color: rgb(240, 255, 234);
}
.content-inputs {
  width: 100%;
  display: flex;
  justify-content: center;
}

small {
  font-size: 0.6em;
  float: right;
  margin-top: 8px;
  margin-right: 10px;
}
</style>
