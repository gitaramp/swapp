<template>
  <v-card>
    <v-card-title class="card-title">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        dense
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="15"
      :search="search"
      class="elevation-1"
      dark
      dense
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Person } from '@/types/person';
import { Header } from '@/types/common';

@Component({
  name: 'Persons',
})
export default class Persons extends Vue {
  search = '';

  get items(): Person[] {
    return this.$store.state.person.persons;
  }
  get headers(): Header[] {
    return [
      { text: 'Nazwa', align: 'start', value: 'name' },
      { text: 'Wzrost', align: 'start', value: 'height' },
      { text: 'Masa', align: 'start', value: 'mass' },
      { text: 'Kolor włosów', align: 'start', value: 'hair_color' },
      { text: 'Kolor skóry', align: 'start', value: 'skin_color' },
      { text: 'Kolor oczu', align: 'start', value: 'eye_color' },
      { text: 'Rok urodzenia', align: 'start', value: 'birth_year' },
      { text: 'Płeć', align: 'start', value: 'gender' },
      {
        text: 'Actions',
        align: 'start',
        value: 'actions',
        sortable: false,
      },
    ];
  }

  mounted(): void {
    this.$store.dispatch('loadPersons');
  }

  editItem(person: Person): void {
    console.log(`item: ${person.name}`);
  }
}
</script>
<style scoped>
.card-title {
  background: #ffe81f;
}
</style>
