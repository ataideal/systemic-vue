import Vue from 'vue';
import Vuex from 'vuex';
import context from './modules/context';
import getters from './getters';
import user from './modules/user'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        context,
        user
    },
    getters
});

export default store;
