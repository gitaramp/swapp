import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { PersonState } from './types';

const PAGES_TO_GET = 9;

export const actions: ActionTree<PersonState, RootState> = {
  async loadPersons(): Promise<Array<PersonState>> {
    const persons: PersonState[] = [];
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
    return persons;
  },
};
