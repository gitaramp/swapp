import { MutationTree } from 'vuex';
import { PersonState, Person } from '@/types/person';
import { PersonMutation } from '@/enums/person';

export const mutations: MutationTree<PersonState> = {
  [PersonMutation.SET_PERSONS](state, payload: Person[]) {
    state.persons = payload;
  },
};
