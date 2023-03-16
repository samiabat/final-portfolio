<template>
  <v-app id="home">
    <Navbar />
    <v-container fluid>

      <head>
        
      </head>
      
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
import Navbar from '../components/AppNavbar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    // HelloWorld,
    Navbar,
  },
});
</script>

<style scoped>
.v-container{
  padding: 16px 0;

}
</style>
