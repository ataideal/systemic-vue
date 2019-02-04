import { get,set } from 'lodash';
import UserService from '@/services/UserService'

const user = {
  state: {
    users: [],
  },
  mutations: {
    SET_USERS: (state, users) => {
      set(state, 'users', users);
    },
    NEW_USER: (state, user) => {
      state.users.push(user)
    },
    SET_USER: (state, user) => {
      const users = state.users.map((e) => {
        if (e.id === user.id) {
          return user;
        }
        return e;
      });
      set(state, 'users', users);
    },
    DELETE_USER: (state, user) => {
      const users = state.users.filter((e) => {
        if (e.id === user.id) {
          return false;
        }
        return true;
      });
      set(state, 'users', users);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await UserService.getUsers()
      commit('SET_USERS', response.data.data);
    },
    async newUser({ commit }, user) {
      const response = await UserService.newUser(user)
      commit('NEW_USER', response.data.data);
    },
    async updateUser({ commit },user) {
      const response = await UserService.editUser(user)
      commit('SET_USER', response.data.data);
    },
    async deleteUser({ commit },user) {
      const response = await UserService.editUser(user)
      commit('DELETE_USER', response.data.data);
    },
  }
};
export default user;
