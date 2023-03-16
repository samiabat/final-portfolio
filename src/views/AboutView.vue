<template>
  <div class="about">
    <v-app>
      <AppNavbar />
      <v-container fluid>
        <div>
          <h1>This is an about page</h1>
        </div>
      </v-container>
    </v-app>

  </div>
</template>

<script>

import { defineComponent } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';


export default defineComponent({
  name: "AboutView",
  components: { AppNavbar }
});

</script>

<style scoped>
.v-container {
  padding: 16px 0;

}
</style>