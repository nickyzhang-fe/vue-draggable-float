/**
 * @author Nickyzhang
 * @date 2018/7/13
 * @description file templates
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './action'

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store;
