import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    top: false,
    another: 'My state',
    counter: 0,
  },
  getters: {
    myState: (state) => `${state.another}: ${state.top} - ${state.counter}`,
  },
  mutations: {
    customMutation(state, payload) {
      state.another = 'Altered state';
      state.counter += 1;
      if (!payload || payload.updateTop) {
        state.top = true;
      }
    },
  },
  actions: {
    myAction({ commit }) {
      console.log('Executed myAction');
      commit('customMutation');
    },
    myActionWithParameter({ commit }) {
      console.log('Executed myActionWithParameter');
      commit('customMutation', { updateTop: false });
    },
  },
});
