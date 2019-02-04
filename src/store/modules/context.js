import { set } from 'lodash';

const context = {
  state: {
    loading: false,
    snackBar: {},
    currentUser: null,
    accessToken: null,
  },
  mutations: {
    SET_LOADING_DIALOG: (state, loading) => {
      set(state, 'loading', loading);
    },
    SET_SNACK_BAR: (state, snack) => {
      set(state, 'snackBar', snack);
    },
    SET_CURRENT_USER: (state, user) => {
      set(state, 'currentUser', user);
    },
    SET_ACCESS_TOKEN: (state, token) => {
      set(state, 'accessToken', token);
    },
  },
  actions: {
    async setLoadingDialog({ commit }, loading) {
      commit('SET_LOADING_DIALOG', loading);
    },
    async setSnackBar({ commit }, snack) {
      commit('SET_SNACK_BAR', snack);
    },
    async setCurrentUser({ commit }, user) {
      commit('SET_CURRENT_USER', user);
    },
    async setAccessToken({ commit }, token) {
      commit('SET_ACCESS_TOKEN', token);
    },
  }
};
export default context;
