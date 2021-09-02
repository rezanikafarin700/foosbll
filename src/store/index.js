import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import store from './Store'

export default new Vuex.Store({
    modules: {
        store
    }

});
