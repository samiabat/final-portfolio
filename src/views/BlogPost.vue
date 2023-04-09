<template>
  <v-app id="home">
    <!-- <app-navbar/> -->
    <v-container fluid>
      <BlogOne/>
    </v-container>
  </v-app>
</template>
  
<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
  import BlogOne from '../components/BlogOne.vue';

export default defineComponent({
  name: 'AboutView',

  setup() {
    return {
      slider2: 50,
      items: [
        { 'img': '1.png' },
        { 'img': '1.png' },
        { 'img': '1.png' },
        { 'img': '1.png' },
        { 'img': '1.png' },
        { 'img': '1.png' },
        { 'img': '1.png' },
      ]
    }
  },

  components: {
    BlogOne
},
});
</script>
  
<style scoped>.v-container {
  padding: 0 0;

}</style>
  