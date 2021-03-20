<template>
  <div id="#app">
    <v-container fill-height>
      <v-row class="v-row-persons">
        <v-col cols="8">
          <Persons />
        </v-col>
      </v-row>
    </v-container>
  </div>
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
html {
  font-family: 'Roboto';
  background: url('./assets/images/background.jpg') no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.v-row-persons {
  justify-content: center;
  align-content: center;
}
</style>
