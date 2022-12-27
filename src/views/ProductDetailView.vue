<template>
  <div>
    <div class="comp-single-product">
      <SingleProduct :product="product.product" />
    </div>
    <div class="carous">
      <ProductsCarousel
        :productoID="product"
        :related="product.relatedProducts"
      />
    </div>
  </div>
</template>

<script>
import SingleProduct from "../components/SingleProduct.vue";
import ProductsCarousel from "../components/ProductsCarousel.vue";

export default {
  name: "ProductDetailView",

  components: { SingleProduct, ProductsCarousel },

  data() {
    return {
      product: null,
    };
  },

  async mounted() {
    await this.fetchProduct();
  },

  methods: {
    async fetchProduct() {
      try {
        const response = await this.$service.fetchProduct();

        this.product = response;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.comp-single-product{
  margin: 5%;
  align-content: center;
}
.carous{
  display:flex;
  justify-content: center;
  margin: 5%;
 
}
</style>
