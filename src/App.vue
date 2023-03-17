<template>
  <v-app>
    <v-main>
      <AppNavbar />
      <router-view />
    </v-main>
    <!-- <v-footer dark padless class="justify-center">
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <hr>
        <v-card-text class="white--text">
          &#169; {{ new Date().getFullYear() }} — <strong>SAMUEL ABATNEH</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
        risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
        Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
        cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>SAMUEL ABATNEH</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';


export default {
  name: "App",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    };
  },
  components: { AppNavbar }
}
</script>
