import { ActionTree } from 'vuex';
import { RootState } from '../../types/root';
import { PersonState, Person } from '@/types/person';
import { PersonMutation } from '@/enums/person';

export const actions: ActionTree<PersonState, RootState> = {
  async loadPersons(actionTree, page): Promise<void> {
    let persons: Person[] = [];
    await fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then(res => res.json())
      .then(({ results }) => {
        persons = results;
      })
      .catch(error => {
        this.commit(PersonMutation.SET_ERROR, true);
        console.log(`Error while trying get persons: ${error}`);
      });

    const filteredPersons = persons
      .flat()
      .filter((x: Person) =>
        /^(?!.*[A,B,C])/.test(x.name[0].toUpperCase())
      );
    this.commit(PersonMutation.SET_PERSONS, filteredPersons);
    this.commit(PersonMutation.SET_LOADING, false);
  },
};
