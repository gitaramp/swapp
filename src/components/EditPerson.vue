<template>
  <v-card dark>
    <v-card-title> Edycja {{ personName }} </v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.name"
              label="Nazwa"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.height"
              label="Wzrost"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.mass"
              label="Waga"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.hair_color"
              label="Kolor włosów"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.skin_color"
              label="Kolor skóry"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.eye_color"
              label="Kolor oczu"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="person.gender"
              :items="genders"
              label="Płeć"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.homeworld"
              label="Ojczyzna"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.films"
              label="Filmy"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.species"
              label="Gatunki"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.vehicles"
              label="Pojazdy"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.starships"
              label="Statki kosmiczne"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              disabled
              v-model="person.created"
              label="Data utworzenia"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              disabled
              v-model="person.edited"
              label="Data ostatniej edycji"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="person.url"
              label="Adres url"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import Component from 'vue-class-component';

import { Person, Gender } from '@/types/person';
import {
  EyeColor,
  Gender as GenderEnum,
  BirthYear,
} from '@/enums/person';

@Component({
  name: 'EditPerson',
})
export default class EditPerson extends Vue {
  @Prop() personName!: string;
  valid = false;
  person: Person = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: 'male',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: new Date(),
    edited: new Date(),
    url: '',
  };

  get persons(): Person[] {
    return this.$store.state.person.persons;
  }

  get genders(): Gender[] {
    return ['male', 'female', 'hermaphrodite', 'n/a'];
  }

  async created(): Promise<void> {
    if (this.persons.length === 0) {
      await this.$store.dispatch('loadPersons');
    }
    this.getSelectedPerson();
  }

  getSelectedPerson(): void {
    const person = this.persons.find(
      (x: Person) => x.name === this.personName
    );
    if (person) {
      if (this.canDisplayData(person)) {
        this.person = person;
      }
    }
  }

  canDisplayData(person: Person): boolean {
    return (
      person.eye_color === EyeColor.BROWN_COLOR &&
      person.gender === GenderEnum.FEMALE &&
      person.birth_year === BirthYear.ATTACK_ON_JEDI_TEMPLATE
    );
  }
}
</script>
