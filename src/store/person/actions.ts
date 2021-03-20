import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { PersonState } from './types';

export const actions: ActionTree<PersonState, RootState> = {
  loadAPIResult(): Promise<Array<any>> {
    return fetch('https://swapi.dev/api/people')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        return data;
      });
  },
};
