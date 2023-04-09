<template>
    <v-card class="pa-3">
      <div class="text-h4 text-center">{{ countdown }}</div>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetDate: new Date('2023-12-16T23:59:59'),
        countdown: ''
      };
    },
    mounted() {
      this.updateCountdown();
      setInterval(() => {
        this.updateCountdown();
      }, 1000);
    },
    methods: {
      updateCountdown() {
        const timeDiff = this.targetDate.getTime() - Date.now();
        if (timeDiff > 0) {
            console.log(Date.now())
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24) % 7);
          const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);
          this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          this.countdown = 'Countdown Complete!';
        }
      },
    },
  };
  </script>
  