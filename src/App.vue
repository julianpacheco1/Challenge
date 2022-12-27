<template>
  <div id="app">
    <NavbarComp />

    <div style="min-height: 60vh">
      <router-view />
    </div>

    <FooterComp/>

  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";


export default {
  data() {
    return {
      pro: [],
    };
  },
  components: { NavbarComp, FooterComp },
  methods: {},
};
</script>
