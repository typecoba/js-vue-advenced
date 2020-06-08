import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemInfo} from "../api";

export default {
    FETCH_NEWS(context){
        fetchNewsList()
            .then(response=>{
                console.log(response);
                // 여기에서 state에 바로접근 불가능 mutation을 통해야함
                // context라는 인자를 통해 state에 접근할 수 있음
                context.commit('SET_NEWS', response.data);
            })
            .catch(error=>{console.log(error);});
    },

    FETCH_ASK(context){
        fetchAskList()
            .then(response => {
                console.log(response);
                context.commit('SET_ASK', response.data);
            })
            .catch(error=>{console.log(error);});
    },

    FETCH_JOBS(context){
        fetchJobsList()
            .then(response=>{
                console.log(response);
                context.commit('SET_JOBS',response.data);
            })
            .catch(error=>{console.log(error);});

    },

    FETCH_USER({commit}, username){
        fetchUserInfo(username)
            .then(({data}) => { // response 오브젝트의 data 불러들임
                console.log(data);
                commit('SET_USER', data);
            })
            .catch(error => {console.log(error)});
    },

    FETCH_ITEM({commit}, id){
        fetchItemInfo(id)
            .then(({data}) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch(error => {console.log(error)});
    }
}