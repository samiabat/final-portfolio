<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn>
            <v-icon color="yellow" left class="mr-2" icon="fas fa-signature"></v-icon> SAMUEL ABATNEH
        </v-btn>
        <v-spacer></v-spacer>
        <router-link  to="/home" class="text-white ml-10">HOME</router-link>
        <router-link  to="/blogs" class="text-white ml-10">BLOGS</router-link>
        <router-link  to="/projects" class="text-white ml-10">PROJECTS</router-link>
        <router-link  to="/educations" class="text-white ml-10">EDUCATIONS</router-link>
        <router-link  to="/certifications" class="text-white ml-10">CERTIFICATIONS</router-link>
        <router-link  to="/contacts" class="text-white ml-10">CONTACT</router-link>
        <router-link  to="/about" class="text-white ml-10">ABOUT</router-link>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppNavbar',
    methods: {

    }
}

</script>

<style>
a {
    text-decoration: none;
}
</style>