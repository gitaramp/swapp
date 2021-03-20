<template>
  <div id="app">
    {{ personName }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PersonMutation } from '@/enums/person';

export default Vue.extend({
  name: 'App',
  computed: {
    personName: {
      get(): string {
        return this.$store.state.person.name;
      },
      set(value: string): void {
        this.$store.commit(PersonMutation.SET_NAME, value);
      },
    },
    person: {
      get(): string {
        return this.$store.getters.getPersonInfo;
      },
    },
  },
  mounted() {
    this.personName = 'person name changed';
    this.$store.dispatch('loadPersons');
  },
});
</script>
