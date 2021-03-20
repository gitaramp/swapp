import { MutationTree } from 'vuex';
import { PersonState } from './types';
import { PersonMutation } from '@/enums/person';

export const mutations: MutationTree<PersonState> = {
  [PersonMutation.SET_NAME](state, payload: string) {
    state.name = payload;
  },
};
