<template>
  <div>
    Edycja
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Person } from '@/types/person';

@Component({
  name: 'EditPerson',
})
export default class EditPerson extends Vue {
  get persons(): Person[] {
    return this.$store.state.person.persons;
  }

  async created(): Promise<void> {
    if (this.$store.state.person.persons.length === 0) {
      await this.$store.dispatch('loadPersons');
    }
    this.getSelectedPerson();
  }

  getSelectedPerson(): void {
    const person = this.persons.find(
      (x: Person) => x.name === this.$route.params.person
    );
    if (person) {
      console.log(person.name);
    }
  }
}
</script>
