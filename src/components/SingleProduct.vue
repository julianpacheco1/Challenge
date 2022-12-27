<template>
  <v-card class="single-product">
    <div>
      <v-row>
        <v-col>
          <v-img
            class="imagen-product"
            :src="product.images[0].originalUrl"
            height="100%"
          ></v-img>
        </v-col>

        <v-col>
          <div class="row">
            <h1 class="font-6 font-weight-medium">
              {{ product.name }}
            </h1>
          </div>

          <div
            class="d-inline-block grey lighten-4 grey--text text--darken-2 rounded font-weight-bold px-2 mt-2"
          >
            <small>sku {{ product.variants[0].sku }}</small>
          </div>

          <div class="mt-4 quarter--text text-uppercase font-weight-bold">
            {{ product.brand.name }}
          </div>

          <div>
            <ProductPrice :priceData="product.variants[0]" />
          </div>

          <div class="product-price"></div>

          
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import ProductPrice from "./ProductPrice.vue";
export default {
  name: "SingleProduct",
  components: { ProductPrice },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.single-product {
  margin: 0 auto;
  padding: 40px 0;

}
.iamgen-product {
  width: 40%;
}
.product-price {
  margin: 2vw auto;
}
.font-weight-medium {
  font-weight: 500;
}
.font-6 {
  font-size: 2rem;
  line-height: 2rem;
}

.grey--text.text--darken-2 {
  color: #616161;
  caret-color: #616161;
}
.grey.lighten-4 {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.rounded {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
.px-2 {
  padding-right: 8px;
  padding-left: 8px;
}
.mt-2 {
  margin-top: 10%;
}
.d-inline-block {
  display: inline-block;
}

.font-weight-bold {
  font-weight: 700;
}
.quarter--text {
  color: #461e8c;
  caret-color: #461e8c;
}
.text-uppercase {
  text-transform: uppercase;
}
.mt-4 {
  margin-top: 16px;
}
.font-weight-bold {
  font-weight: 700;
}
.grey--text {
  color: #9e9e9e;
  caret-color: #9e9e9e;
}
</style>
