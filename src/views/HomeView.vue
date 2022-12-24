<template>
  <div >
    <GridComp/>
  </div>
</template>

<script>
// @ is an alias to /src

import GridComp from "../components/GridComp.vue";

export default {
  name: 'HomeView',
  components: {
  GridComp,
  },
  props:["personajes"]
}
</script>
