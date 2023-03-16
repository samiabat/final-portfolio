<template>
    <div class="about">
        <v-app>
            <AppNavbar />
        </v-app>
      <h1>This is an educations page</h1>
    </div>
  </template>

<script>

import { defineComponent } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';

export default defineComponent({
    name: "EducationPage",
    components: { AppNavbar }
});

</script>