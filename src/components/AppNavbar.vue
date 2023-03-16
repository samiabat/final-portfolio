<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn>
            <v-icon color="yellow" left class="mr-2" icon="fas fa-signature"></v-icon> SAMUEL ABATNEH
        </v-btn>

        <v-spacer></v-spacer>
        <a href="/" class="text-yellow ml-12">HOME</a>
        <a href="/blogs" class="text-white ml-12">BLOGS</a>
        <a href="/projects" class="text-white ml-12">PROJECTS</a>
        <a href="/educations" class="text-white ml-12">EDUCATIONS</a>
        <a href="/certifications" class="text-white ml-12">CERTIFICATIONS</a>
        <a href="/contact" class="text-white ml-12">CONTACT</a>
        <a href="/about" class="text-white ml-12">ABOUT</a>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        // scroll(refName) {
        //     const element = document.getElementById(refName);
        //     element.scrollIntoView({behavior: 'smooth'});
        // }
    }
}

</script>

<style>
a {
    text-decoration: none;
}
</style>