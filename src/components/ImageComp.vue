<template>
     <div>
      <v-img height="500" :src="per.image"></v-img>
      <!-- :src="personajes.data.product.images[0].originalUrl" -->
    </div>
</template>

<script>


export default {
  name: "ImageComp",
  components: {},
  props:["per"],
data : () => ({
}),
  methods: {
  },
}
</script>