import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {}
    },
    getters:{ // computed와 동일한속성
        fetchedAsk(state){
            return state.ask;
        },
        fetchedUser(state){
            return state.user;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations: // 2. 꺼내와서 state에 담기
        mutations
    ,
    actions: // 1. 비동기호출
        actions
    ,
})