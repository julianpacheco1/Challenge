<template>
  <div>
    <h1>BIENVENIDO</h1>
    <div>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <div>
      <img
        src="https://dasbranding.com/wp-content/uploads/2019/11/Basualdo_galer%C3%ADa_12-1366x768.jpg"
        alt="se rompio"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin : 0 auto
}
</style>

<!-- carrusel
.carousel-parent[data-v-5957d941] {
    position: relative;
    min-width: 0;
    width: 100%;
}
* {
    padding: 0;
    margin: 0;
}
*, :after, :before {
    background-repeat: no-repeat;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}

user agent stylesheet
div {
    display: block;
} -->
