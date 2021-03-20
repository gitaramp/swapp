import { ActionTree } from 'vuex';
import { RootState } from '../../types/root';
import { PersonState, Person } from '@/types/person';
import { PersonMutation } from '@/enums/person';

const PAGES_TO_GET = 9;

export const actions: ActionTree<PersonState, RootState> = {
  async loadPersons(): Promise<void> {
    const persons: Person[] = [];
    for (let page = 1; page <= PAGES_TO_GET; page++) {
      await fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then(res => res.json())
        .then(({ results }) => {
          persons.push(results);
        })
        .catch(error => {
          console.log(`Error while trying get persons: ${error}`);
        });
    }

    const filteredPersons = persons
      .flat()
      .filter((x: Person) =>
        /^(?!.*[A,B,C])/.test(x.name[0].toUpperCase())
      );
    this.commit(PersonMutation.SET_PERSONS, filteredPersons);
  },
};
