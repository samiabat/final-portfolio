<template>
    <div class="about">
        <v-app id="about">
            <AppNavbar />
            <h1>This is an blogpost page</h1>
        </v-app>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';

export default defineComponent({
    name: "BlogPost",
    components: { AppNavbar }
});

</script>