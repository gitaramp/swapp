import { Module } from 'vuex';
import { RootState } from '@/types/root';
import { getters } from '@/store/person/getters';
import { mutations } from '@/store/person/mutations';
import { actions } from '@/store/person/actions';
import { PersonState } from '@/types/person';

const state: PersonState = {
  persons: [],
  loading: true,
};

export const person: Module<PersonState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
