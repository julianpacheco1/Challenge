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
        class="im"
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
          src: "https://andujarynavarro.com/wp-content/uploads/2017/09/material-construccion.jpg",
        },
        {
          src: "https://proest.com/wp-content/uploads/2021/12/common-construction-materials-1024x493.jpg",
        },
        {
          src: "https://jesusgonzaleztienda.com/web2017/wp-content/uploads/2018/06/griferia-cocina-1030x773.jpg",
        },
        {
          src: "https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/65/95/659534_3db28893cb69cbc4e7b3539ce84d2597383b8db4df9294254ed8fe408268b7a7/md.webp",
        },
      ],
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin: 0 auto;
}

.im {
  width: 100%;
  height: auto;
}
</style>
