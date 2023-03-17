<template>
    <v-app id="home">
        <!-- <AppNavbar/> -->
        <v-container fluid class="my-16">
            <v-row justify="center">
                <v-col class="text-center">
                    <v-subheader class="text-h4 justify-center">Projects</v-subheader>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum. </p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col lg="4" v-for="project in 6" :key="project" class="px-2">
                    <v-card class="mx-auto" max-width="500" max-height="800">
                        <v-carousel cycle hide-delimiter-background show-arrows="hover">
                            <v-carousel-item src="atrons.png"></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
                        </v-carousel>

                        <!-- <v-img src="atrons.png" cover></v-img> -->

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
// import AppNavbar from '@/components/AppNavbar.vue';
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
// import AppNavbar from '../components/AppNavbar.vue';

export default defineComponent({
    name: 'ProjectPage',

    data: () => ({
        items: [
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'ATRONS',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'MICROWORKS',
                artist: 'Ellie Goulding',
            },
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'PMRS',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'BGI EMS',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People',
            },
        ],
    }),

    setup() {
        return {
            slider2: 50,
            item: [
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
  