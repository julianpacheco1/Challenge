<template>
  <v-sheet class="mx-auto" elevation="8" max-width="1000">
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-item
        v-for="(pr, i) in related"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="400"
          width="250"
          @click="toggle"
        >
          <div>
            <v-img :src="pr.mainImage.originalUrl"></v-img>
          </div>

          <div>
            <div class="row">
              <div class="col col-12">
                <div style="position: relative">
                  <div class="grey--text">
                    <del>{{ pr.variants[0].pvPrice.basePrice }}</del>
                  </div>

                  <div class="d-flex align-center">
                    <span class="text-no-wrap font-8">
                      <span class="mr-1">$</span>
                      {{ pr.variants[0].pvPrice.price }}
                      <sup>41</sup>
                    </span>
                    <span class="ml-2 red--text font-weight-bold font-1"
                      >{{ pr.variants[0].pvPrice.discountPct }}%OFF</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pr-name">
            {{ pr.name}}
          </div>

          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "ProductsCarousel",
  components: {},
  props: ["related"],
  data() {
    return {
      model: null,
    };
  },
};
</script>

<style>
.pr-name{
  margin:7%;
}

</style>