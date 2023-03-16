<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn>
            <v-icon color="yellow" left class="mr-2" icon="fas fa-signature"></v-icon> SAMUEL ABATNEH
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn text @click="scroll('Home')" class="text-yellow">Home</v-btn>
        <v-btn text @click="scroll('Projects')" class="text-yellow">Projects</v-btn>
        <v-btn text @click="scroll('Blogs')" class="text-yellow">Blogs</v-btn>
        <v-btn text @click="scroll('Certificates')" class="text-yellow">Certificates</v-btn>
        <v-btn text @click="scroll('About')" class="text-yellow">About</v-btn>
        <v-btn text @click="scroll('Contact')" class="text-yellow">Contact</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
}

</script>

<style>
</style>