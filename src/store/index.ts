import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { person } from '@/store/person';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hello',
  },
  modules: {
    person,
  },
};

export default new Vuex.Store<RootState>(store);
