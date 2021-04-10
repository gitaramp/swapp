<template>
  <div>
    <v-row class="mt-10" justify="center">
      <PulseLoader v-if="isLoading" color="#ffe81f" />
      <ErrorHandler
        v-if="isError"
        message="Nie udało się pobrać danych"
        @tryAgain="loadPersons()"
      />
    </v-row>
    <v-card v-if="!isLoading && !isError">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="17"
        class="elevation-1"
        dense
        disable-pagination
        :hide-default-footer="true"
      >
        <template v-slot:top>
          <div class="d-flex justify-end py-2 pr-5">
            <span class="base-color">
              <v-icon class="base-color">
                mdi-account-multiple-outline
              </v-icon>
              {{ countFemale }} kobiet
            </span>
            <span class="ml-5 base-color">
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
            <v-icon color="#eb596e">
              mdi-alert-octagon
            </v-icon>
            <v-chip
              class="ml-1 pa-1"
              color="#eb596e"
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
            :to="{ name: 'Edit', params: { person: item.name } }"
          >
            <v-icon small class="mr-2" color="#ffffff">
              mdi-pencil
            </v-icon>
          </router-link>
        </template>
        <template v-slot:footer>
          <v-pagination
            class="pa-4"
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
          ></v-pagination>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import ErrorHandler from '@/components/common/ErrorHandler.vue';
import { Person } from '@/types/person';
import { Header } from '@/types/common';
import { EyeColor, BMI, Gender } from '@/enums/person';

@Component({
  name: 'Persons',
  components: {
    PulseLoader,
    ErrorHandler,
  },
})
export default class Persons extends Vue {
  page = 1;
  totalPages = 9;

  get items(): Person[] {
    return this.$store.state.person.persons;
  }

  get isLoading(): boolean {
    return this.$store.state.person.loading;
  }

  get isError(): boolean {
    return this.$store.state.person.error;
  }

  get headers(): Header[] {
    return [
      { text: 'Nazwa', value: 'name' },
      { text: 'Wzrost', value: 'height' },
      { text: 'Masa', value: 'mass' },
      { text: 'Kolor włosów', value: 'hair_color' },
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
    } else if (color === EyeColor.BLACK_COLOR) {
      color = EyeColor.BLACK_ALTERNATIVE;
    }
    return `color: ${color}`;
  }

  mounted(): void {
    this.loadPersons();
  }

  handlePageChange(value: number): void {
    this.page = value;
    this.loadPersons(value);
  }

  loadPersons(page = 1): void {
    this.$store.dispatch('loadPersons', page);
  }
}
</script>
