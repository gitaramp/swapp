<template>
  <div id="app">
    {{ persons }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Person } from '@/types/person';

export default Vue.extend({
  name: 'App',
  computed: {
    persons: {
      get(): Person[] {
        return this.$store.state.person.persons;
      },
    },
  },
  mounted() {
    this.$store.dispatch('loadPersons');
  },
});
</script>
