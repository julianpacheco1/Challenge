<template>
  <div id="app">
    <NavbarComp />

    <div style="min-height: 60vh">
      <router-view :baseURL="baseURL" :personajes="personajes"/> 
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarComp from "./components/NavbarComp.vue";
export default {
  data() {
    return {
      baseURL: "https://rickandmortyapi.com/api/character",
      //baseURL: "http://localhost:8080/",
      personajes: [],
    };
  },
  components: { NavbarComp },
  methods: {
  async getapi() {
       await axios
        .get(`${this.baseURL}`)
        .then((res) => {
          this.personajes = res.data.results;
          console.log("personajes", this.personajes);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
      this.getapi();
    },
};
</script>
