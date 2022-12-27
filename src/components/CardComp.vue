<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10"></v-progress-linear>
    </template>
    <div>
      
      <v-img
       
        :src="prd.mainImage.originalUrl"
        height="100%"
        
      ></v-img>
    </div>
    <v-card-title>{{ prd.name }} </v-card-title>

    <v-card-text>
      <div>
        STOCK {{prd.variants[0].stock.qty}}
      </div>
    </v-card-text>

    <v-card-text>
      <div> PRICE {{prd.variants[0].pvPrice.basePrice}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2">
        <router-link id="prod" :to="{name : 'vista', params : {id:prd.id}}"> ProductID</router-link>
      </v-btn>
    </v-card-actions>
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>


export default {
  name: "CardComp",
  components: {},
  props: ["prd"],
  data: () => ({
  }),
  methods: {
    ver() {
      /*    if(event) this.height = 500 
    else this.height = 250 */
    },
   
  },
};
</script>

<style>
.imagen{
max-width: 300px;
}

</style>