<template>
  <v-app>
    <v-main>
      <router-view />
      <app-navbar/>
    </v-main>
    <v-footer dark padless class="justify-center">
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <hr>
        <v-card-text class="white--text">
          &#169; {{ new Date().getFullYear() }} — <strong>SAMUEL ABATNEH</strong>
        </v-card-text>
      </v-card>
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
                "mdi-facebook",
                "mdi-twitter",
                "mdi-instagram",
            ],
        };
    },
    components: { AppNavbar }
}
</script>
