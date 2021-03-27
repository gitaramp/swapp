<template>
  <v-row justify="center">
    <v-col cols="10">
      <Persons />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';

import Persons from '@/components/person/Persons.vue';

export default Vue.extend({
  components: {
    Persons,
  },
});
</script>
