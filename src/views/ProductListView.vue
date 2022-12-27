<!-- ok, para escribir JS, Necesitop porner doble llaves {{}} -->
<template>
  <div>
    <v-container>
      <div>
        <v-btn>
          <v-icon>mdi-magnify</v-icon>
          <input
            class="busq"
            type="text"
            v-model="search"
            placeholder="Search"
          />
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex v-for="prod in filterSearch" :key="prod.id" xm4>
          <CardComp :prd="prod" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CardComp from "../components/CardComp.vue";

export default {
  name: "ProductListView",

  components: { CardComp },

  data: () => ({
    search: "",
    alignments: ["start"],
    selection: 1,
    products: [],
  }),

  computed: {
    filterSearch() {
      return this.products.filter((prd) => {
        return prd.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  async mounted() {
    await this.fetchProduct();
  },

  methods: {
    async fetchProduct() {
      console.log("isDataLoaded",this.isDataLoaded);
      try {
        const { relatedProducts } = await this.$service.fetchProduct();

        this.products = relatedProducts;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.busq {
  text-align: center;
  background: #461e8c;
  outline: none;
  border: 1px;
  width: 150px;
  margin: 1rem;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
}
</style>
