import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { PersonState } from '@/store/person/types';
import { getters } from '@/store/person/getters';
import { mutations } from '@/store/person/mutations';
import { actions } from '@/store/person/actions';

const state: PersonState = {
  name: 'user test',
};

export const person: Module<PersonState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
