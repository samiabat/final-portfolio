<template>
  <!-- <app-navbar/> -->
  <v-container fluid>
    <div class="head">
      <v-row>
        <v-col cols="5">
          <div style="position: relative;" class="mt-16">
            <h1 class="text-grey">HELLO, </h1>
            <h1>I'M SAMUEL ABATNEH</h1>
            <span class="text-grey">Web Scrapper, AI & Software Engineer</span>
            <br>
            <v-btn tile dark class="text-yellow mt-8" variant="outlined">Contact me</v-btn>
          </div>
        </v-col>

        <v-col cols="2">
          <div
            style="position: absolute; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">
            <v-icon icon="fas fa-angle-double-down"></v-icon>
          </div>
        </v-col>
        <v-col cols="3">
          <div style="position: relative;z-index: 9999;" class="mt-16">
            <v-img src="sa.png" contain max-height="300"></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <CountDownTImer />
    </div>
    <v-col cols="12" class="mt-10" id="about">
      <div>
        <v-row>
          <v-col cols="5" sm="4">
            <div class="egg">
              <v-img src="sa.png" contain max-height="400"></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6">

            <WeeklySchedule />
          </v-col>
        </v-row>
      </div>
    </v-col>

  </v-container>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

// Components
import CountDownTImer from '@/components/CountDownTImer.vue';
import WeeklySchedule from '../components/WeeklySchedule.vue';

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
    // HelloWorld,
    // AppNavbar,
    // HelloWorld
    CountDownTImer,
    WeeklySchedule
  },
});
</script>

<style scoped>
.v-container {
  padding: 0 0;

}

.head {
  position: relative;
  text-align: center;
  margin-top: -20px;
  padding: 0;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head::before {
  content: ' ';
  position: absolute;
  top: -12px;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 3deg);
}

.head::after {
  content: ' ';
  position: absolute;
  top: -12px;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -3deg);
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 360px;
  height: 300px;
  background-color: yellow;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
}
</style>
