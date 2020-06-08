export default {
    SET_NEWS(state, data) { // 첫 인자로 state를 받는다
        state.news = data;
    },
    SET_ASK(state, data){
        state.ask = data;
    },
    SET_JOBS(state, data){
        state.jobs = data;
    },
    SET_USER(state, data){
        state.user = data;
    },
    SET_ITEM(state, data){
        state.item = data;
    }
}