<template>
  <v-app id="app">
    <v-container fill-height>
      <v-row justify="center">
        <v-col cols="8">
          <Persons />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import Persons from '@/components/Persons.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Persons,
  },
});
</script>
<style>
#app {
  background: url('./assets/images/background.jpg') no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
