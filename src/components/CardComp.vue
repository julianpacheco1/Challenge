<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10"></v-progress-linear>
    </template>
    <div>
      
      <v-img ><ImageComp :per="per"/></v-img>
    </div>
    <v-card-title v-on:click="ver">{{ per.name }} </v-card-title>

    <v-card-text>
      <div>
        {{ per.gender }}
      </div>
    </v-card-text>

    <v-card-text>
      <div>{{ per.species }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2">
        <router-link to="/product/id"> ProductID</router-link>
      </v-btn>
    </v-card-actions>
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>

import ImageComp from "./ImageComp.vue"
export default {
  name: "CardComp",
  components: {ImageComp},
  props: ["per"],
  data: () => ({
    height: "",
  }),
  methods: {
    ver() {
      /*    if(event) this.height = 500 
    else this.height = 250 */
    },
  },
  /*   data: () => ({
    selection: 1,
    baseURL: "https://rickandmortyapi.com/api/character",
    personajes: [],
  }),
  methods: {
    getapi() {
      axios
        .get(`${this.baseURL}`)
        .then((res) => {
          this.personajes = res.data.results;
          console.log("personajes", this.personajes);
        })
        .catch((err) => console.log(err));
    },
  },*/
};
</script>
