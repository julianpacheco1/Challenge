<template>
  <div>
    <div>{{ personajes.data.product.name }}</div>
    <div>{{ personajes.data.product.id }}</div>
    <div>
      <v-img height="500" src="https://arcencohogar.vtexassets.com/arquivos/ids/327409-800-800?v=637952336986700000&width=800&height=800&aspect=true"></v-img>
      <!-- :src="personajes.data.product.images[0].originalUrl" -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleProduct",
  components: {},
  data: () => ({
    selection: 1,
    baseURL: "http://localhost:3000/productos",
    personajes: [],
  }),
  methods: {
    getapi() {
      axios
        .get(`${this.baseURL}`, { withCredentials: true })
        .then((res) => {
          this.personajes = res.data;
          console.log("personajes2", this.personajes.data.product);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getapi();
  },
};
</script>
