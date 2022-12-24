<template>
  <div>
    <div >
     
    <!--  <div v-for="person in personajes" :key="person.id">
      <div>{{ person.name }}</div>
      <div>{{ person.id }}</div>
      <div>{{ person.gender }}</div>
      <div>{{ person.species }}</div>
     <img :src="person.image" alt="">
     </div> -->
     <!--  v-for="pr in pro" :key="pr.id" -->
     <div>
      <div>{{ pro.data.product.name}}</div>
      <div>{{ pro.data.product.id}}</div>
      <div>{{ pro.data.product.categories[0].name}}</div>
      <div>{{ pro.data.product.urlName}}</div>
      <div>{{ pro.data.product.images[0].originalUrl}}</div>
      <img :src="pro.data.product.images[0].originalUrl" />
     <!-- <img :src="pro.product.images[0]." alt="">  -->
     </div>
      <!--  <div>{{ producto.data.product.name }}</div>
    <div>{{ producto.data.product.id }}</div> -->
    </div>
    <div>
  <!--     <v-img
        height="100%"
        src="https://arcencohogar.vtexassets.com/arquivos/ids/327409-800-800?v=637952336986700000&width=800&height=800&aspect=true"
      ></v-img> -->
      <!-- :src="personajes.data.product.images[0].originalUrl" -->
    </div>
  </div>
</template>

<script>
import axios from "axios"; 


export default {
  name: "SingleProduct",
  components: { },
  props: ["personajes"],
  data(){
    return {
   pro : [],
  }
},
  methods : {
    log(){
      axios.get("http://localhost:3000/productos", { withCredentials: true })
      .then((res) => {
        this.pro.push(res.data)
        this.pro = this.pro[0]
        console.log("pr", this.pro)
      })
    }
  },
  mounted (){
    this.log()
  }
/*   data: () => ({
    selection: 1,
    baseURL: "http://localhost:3000/productos",
    producto: [],
  }),
  methods: {
    getapi() {
      axios
        .get(`${this.baseURL}`, { withCredentials: true })
        .then((res) => {
          this.producto = res.data;
          console.log("personajes2", this.producto.data.product);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getapi();
  }, */
};
</script>
