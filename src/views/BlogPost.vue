<template>
    <v-app id="home">
        <!-- <app-navbar/> -->
      <v-container fluid>
        <v-row justify="center">
                <v-col class="text-center">
                    <v-subheader class="text-h4 justify-center">Blogs</v-subheader>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum. </p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col lg="12" v-for="project in 6" :key="project" class="px-2">
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
                </v-col>
            </v-row>
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
  
  <style scoped>
  .v-container {
  padding: 0 0;

}
</style>
  