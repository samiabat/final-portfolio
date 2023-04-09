<template>
    <v-card class="weekly-schedule">
      <v-card-title class="headline font-weight-bold">Weekly Schedule</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Tasks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="day in days" :key="day.name">
                <td>{{ day.name }}</td>
                <td>{{ day.time }}</td>
                <td>{{ day.tasks }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'WeeklySchedule',
    data() {
      return {
        days: [
          { name: 'Monday', time: '9:00AM - 4:30PM', tasks: 'Attend internship sessions' },
          { name: 'Tuesday', time: '9:00AM - 4:30PM', tasks: 'Attend internship sessions' },
          { name: 'Wednesday', time: '9:00AM - 4:30PM', tasks: 'Attend internship sessions' },
          { name: 'Thursday', time: '9:00AM - 4:30PM', tasks: 'Attend internship sessions' },
          { name: 'Friday', time: '9:00AM - 12:00PM', tasks: 'Attend internship sessions' },
          { name: 'Monday', time: '12:00PM - 1:30PM', tasks: 'Lunch break' },
          { name: 'Monday', time: '4:45PM - 11:00PM', tasks: 'Dinner time' },
          { name: 'Monday-Thursday', time: '11:00PM - 2:00AM', tasks: 'Assistantship time' },
          { name: 'Any day', time: 'Any time', tasks: 'Solve at least 2 hard problems on Leetcode' },
          { name: 'Any day', time: 'Any time', tasks: 'Solve at least 1 Codeforces problem' },
          { name: 'Any day', time: 'Any time', tasks: 'Learn some algorithm and practice on that' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .weekly-schedule {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .headline {
    color: #333;
    margin-bottom: 20px;
  }
  
  td {
    font-size: 14px;
    font-weight: 500;
    padding: 12px 16px;
  }
  </style>
  