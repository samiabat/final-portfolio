<template>
  <v-app id="home">
    <!-- <app-navbar/> -->
    <v-container fluid>
      <div v-for="project in 6" :key="project">
        <div class="mx-16 mt-16 px-16 text-center">
          <h1><u><i>COMPTITIVE PROGRAMMING</i></u> </h1>
          <h2><u>How I join compititive programming</u></h2>
        </div>
        <v-row justify="center" class="mx-16 mt-16">
          <v-col cols="6" class="pl-16 pr-16">
            <v-carousel cycle hide-delimiter-background show-arrows="hover">
              <v-carousel-item src="atrons.png"></v-carousel-item>

              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"></v-carousel-item>

              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="6" class="mb-16">
            <strong>L</strong>orem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!suscipit quaerat fuga!Lorem ipsum dolor sit amet co.
          </v-col>
          <!-- <v-col lg="12" v-for="project in 6" :key="project" class="px-2">
                    <v-card class="mx-auto">
                        <v-img src="atrons.png" cover></v-img>

                        <v-card-title>
                            Web developer
                        </v-card-title>
                        <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
                            have time for sleeping, soldier, not with all the
                        </v-card-text>

                        <v-divider class="mx-4">
                        </v-divider>

                        <v-card-actions>
                            <v-btn color="success" rounded>View Details</v-btn>
                            <v-spacer />
                            <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly
                                size="small"></v-rating>

                        </v-card-actions>

                    </v-card>
                
                  </v-col> -->
        </v-row>
        <v-row justify="center" class="mx-16">
          <v-col cols="12" class="px-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit molestiae iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore unde sit
            molestiae
            iure recusandae?
            Necessitatibus praesentium quia saepe consectetur aliquid sit molestiae voluptatum labore! Assumenda quam
            suscipit quaerat fuga!
          </v-col>
        </v-row>

        <hr>
        <br>
      </div>

    </v-container>
  </v-app>
</template>
  
<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
//   import AppNavbar from '../components/AppNavbar.vue';

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
    // AppNavbar
  },
});
</script>
  
<style scoped>.v-container {
  padding: 0 0;

}</style>
  