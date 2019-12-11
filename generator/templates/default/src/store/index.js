import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import plugins from './plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  actions,
  getters,
  mutations,
  state,
  plugins,
});

export default store;
