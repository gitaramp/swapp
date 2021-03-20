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
      :items-per-page="17"
      :search="search"
      class="elevation-1"
      dark
      dense
    >
      <template v-slot:top>
        <div class="d-flex justify-end py-2 pr-5">
          <span>
            <v-icon class="base-color">
              mdi-account-multiple-outline
            </v-icon>
            {{ countFemale }} kobiet
          </span>
          <span class="ml-5">
            <v-icon class="base-color">
              mdi-account-multiple-outline
            </v-icon>
            {{ countMale }} mężczyzn
          </span>
        </div>
      </template>
      <template v-slot:item.name="{ item }">
        <span
          class="v-data-table-item-name"
          :style="getNameColor(item.eye_color)"
        >
          {{ item.name }}
        </span>
        <span v-show="getExcessWeight(item) > 0">
          <v-icon color="error">
            mdi-alert-octagon
          </v-icon>
          <v-chip
            class="ml-1 pa-1"
            color="error"
            small
            label
            text-color="black"
          >
            +{{ getExcessWeight(item) }}kg
          </v-chip>
        </span>
      </template>
      <template v-slot:item.actions="{ item }">
        <router-link
          :to="{ name: 'EditPerson', params: { person: item.name } }"
        >
          <v-icon small class="mr-2">
            mdi-pencil
          </v-icon>
        </router-link>
      </template>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Person } from '@/types/person';
import { Header } from '@/types/common';
import { EyeColor, BMI, Gender } from '@/enums/person';

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
      { text: 'Nazwa', value: 'name' },
      { text: 'Wzrost', value: 'height' },
      { text: 'Masa', value: 'mass' },
      { text: 'Kolor włosów', value: 'hair_color' },
      { text: 'Kolor skóry', value: 'skin_color' },
      { text: 'Kolor oczu', value: 'eye_color' },
      { text: 'Rok urodzenia', value: 'birth_year' },
      { text: 'Płeć', value: 'gender' },
      {
        text: 'Akcje',
        value: 'actions',
        sortable: false,
      },
    ];
  }

  get countFemale(): number {
    return this.items.filter(
      (x: Person) => x.gender === Gender.FEMALE
    ).length;
  }

  get countMale(): number {
    return this.items.filter((x: Person) => x.gender === Gender.MALE)
      .length;
  }

  getExcessWeight(person: Person): number {
    const maxWeightForPerson = this.getMaxWeight(
      Number(person.height)
    );
    return Number(person.mass) - maxWeightForPerson;
  }

  getMaxWeight(height: number): number {
    return Math.round((BMI.OVERWEIGHT * Math.pow(height, 2)) / 10000);
  }

  getNameColor(eyeColor: string): string {
    let color = eyeColor;
    if (eyeColor.includes(EyeColor.SEPARATED_COLORS)) {
      color = eyeColor.split(EyeColor.SEPARATED_COLORS)[0];
    } else if (eyeColor.includes(EyeColor.MULTI_COLORS)) {
      color = eyeColor.split(EyeColor.MULTI_COLORS)[0];
    } else if (eyeColor.includes(EyeColor.UNKNOWN)) {
      color = EyeColor.DEFAULT_COLOR;
    }

    if (color === EyeColor.BLUE_COLOR) {
      color = EyeColor.BLUE_ALTERNATIVE;
    }
    return `color: ${color}`;
  }

  mounted(): void {
    this.$store.dispatch('loadPersons');
  }

  editItem(person: Person): void {
    console.log(`item: ${person.name}`);
  }
}
</script>
