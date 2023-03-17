<template>
    <v-app id="home">
        <!-- <AppNavbar/> -->
        <v-container fluid>
            <div class="head">
            </div>
            <v-col cols="12">
                <v-row class="pa-8" dense>
                    <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
                        <v-card :color="item.color" dark>
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                                    <v-card-actions>
                                        <v-btn
                                            style="text-decoration:none;background-color:blue;border: 2em;border-radius: 1em;">
                                            <router-link style="color:white;text-decoration:none;" class="ml-2" to="/"
                                                outlined rounded small>
                                                VIEW PROJECT
                                            </router-link>
                                        </v-btn>

                                    </v-card-actions>
                                </div>

                                <v-avatar class="ma-3" size="125" tile>
                                    <v-img :src="item.src"></v-img>
                                </v-avatar>

                            </div>
                            <v-text class="ma-12">Hello HelloWorldHello HelloWorldHello HelloWorldHello HelloWorldHello
                                HelloWorldHello
                                HelloWorldHello HelloWorldHello HelloWorldHello HelloWorldHello HelloWorldHello
                                HelloWorldHello HelloWorld</v-text>
                        </v-card>
                        <router-view />
                    </v-col>
                </v-row>

            </v-col>

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
  
<style scoped>.v-container {
    padding: 0 0;
  
  }
  
  .head {
    position: relative;
    text-align: center;
    padding: 0;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  
  .head::before {
    content: ' ';
    position: absolute;
    top: -12px;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 3deg);
  }
  
  .head::after {
    content: ' ';
    position: absolute;
    top: -12px;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -3deg);
  }
  
  .egg {
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 360px;
    height: 300px;
    background-color: yellow;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
  }
</style>
  