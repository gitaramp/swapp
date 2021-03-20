<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="10">
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
