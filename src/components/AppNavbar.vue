<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn>
            <v-icon color="yellow" left class="mr-2" icon="fas fa-signature"></v-icon> SAMUEL ABATNEH
        </v-btn>

        <v-spacer></v-spacer>
        <a href="/" class="text-yellow ml-10">HOME</a>
        <a href="/blogs" class="text-white ml-10">BLOGS</a>
        <a href="/projects" class="text-white ml-10">PROJECTS</a>
        <a href="/educations" class="text-white ml-10">EDUCATIONS</a>
        <a href="/certifications" class="text-white ml-10">CERTIFICATIONS</a>
        <a href="/contacts" class="text-white ml-10">CONTACT</a>
        <a href="/about" class="text-white ml-10">ABOUT</a>
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