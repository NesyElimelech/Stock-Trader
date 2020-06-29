<template>
  <div class="grid">
    <vs-row>
      <vs-col type="flex" justify="center" align="center">
        <vs-card class="cardx">
          <div class="card-header" slot="header">
            <h3>
              {{ stock.name }} ( Price: {{ stock.price | currency }} | Quantity:
              {{ stock.quantity }} )
            </h3>
          </div>
          <div slot="footer">
            <div class=" center content-inputs">
              <vs-input
                type="number"
                v-model="quantity"
                label-placeholder="Quantity"
                border
                dark
              >
              </vs-input>
              <vs-button
                dark
                style="min-width: 120px"
                animation-type="scale"
                @click="refundStock"
              >
                Sell
                <template #animate>
                  <i class="bx bx-coin-stack"></i>
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
import { mapActions } from "vuex";
export default {
  data: () => ({ quantity: "" }),

  props: ["stock"],
  methods: {
    ...mapActions(["sellStock"]),
    refundStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.grid {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
}
.cardx {
  margin: 0 20px 20px 20px;
  background-color: #3a82df;
  border-radius: 20px;
  padding: 5px 20px;
  width: 450px;
}
.cardx .card-header {
  background-color: #1b3837af;
  border-radius: 20px;
  color: rgb(240, 255, 234);
  padding: 2px;
  margin: 18px;
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
  padding: 3px;
}
</style>
