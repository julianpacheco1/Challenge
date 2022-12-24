<!-- ok, para escribir JS, Necesitop porner doble llaves {{}} -->
<template>
  <div>
    <v-container>
      <div>
        <v-btn>
          <v-icon>mdi-magnify</v-icon>
          <input class="busq" type="text" v-model="search" placeholder="Search" />
        </v-btn>
      </div>


      <v-layout wrap>
        <v-flex v-for="pers in filterSearch" :key="pers.id" xm4>
          <CardComp :per="pers" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* import axios from "axios" */
import CardComp from "./CardComp.vue";

export default {
  name: "GridComp",
  components: { CardComp },
  props:["personajes"],
  data: () => ({
    search: "",
    alignments: ["start"],
    selection: 1,
   /*  baseURL: "https://rickandmortyapi.com/api/character",
    personajes: [], */
  }),
  /* methods: {
    getapi() {
      axios
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
  },  */
  computed: {
    filterSearch() {
      return this.personajes.filter((psj) => {
        return psj.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>
.busq{
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