<template>
  <!-- 'https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png' -->
<!-- https://dasbranding.com/wp-content/uploads/2019/11/Basualdo_galer%C3%ADa_12-1366x768.jpg -->
  <div>
    <v-app-bar color="#461e8c" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <router-link id="all" :to="{ name: 'all' }" style="color: whitesmoke">
        Productos</router-link
      >

      <router-link id="home" :to="{ name: 'home' }">
        <v-toolbar-title
          class="v-image__image v-image__image--contain"
          style="
            background-image: url('https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/fcfc5e2b51aa92dc6a39c93084a97153ea98dd51.png.webp');
            background-position: center center;
          "
        >
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <div />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {};
  },
};
</script>

<style>
.v-image__image--contain {
  -webkit-background-size: contain;
  -moz-background-size: contain;
  background-size: contain;
}
.v-image__image {
  background-repeat: no-repeat;
}
.v-image__image,
.v-image__placeholder {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
