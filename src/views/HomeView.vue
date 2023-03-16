<template>
  <v-app id="home">
    <Navbar />
    <v-container fluid>
      <div class="head">

      </div>
      
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
.head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head::before{
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 4deg);
}
.head::after{
  content: ' ';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -4deg);
}
</style>
