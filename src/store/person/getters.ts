import { GetterTree } from 'vuex';
import { PersonState } from '@/store/person/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<PersonState, RootState> = {
  getPersonInfo(state): string {
    return `Name: ${state.name}`;
  },
};
