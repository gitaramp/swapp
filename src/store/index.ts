import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '../types/root';
import { person } from '@/store/person';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    person,
  },
};

export default new Vuex.Store<RootState>(store);
