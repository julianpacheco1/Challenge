<template>
  <div>
    <v-app-bar color="#461e8c" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        class="v-image__image v-image__image--contain"
        style="
          background-image: url('https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png');
          background-position: center center;
        "
      ></v-toolbar-title>

      <v-spacer></v-spacer>
<!-- 
    <div>
      <v-btn >
        <v-icon>mdi-magnify</v-icon>
        <input type="text" v-model="search"/>
      </v-btn>
    </div> -->
      
      <div/>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
    
    };
  },
};
</script>

<style>
logo.style {
  background-image: url(https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png);
  background-position: center center;
}
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
* {
  padding: 0;
  margin: 0;
}
input {
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
