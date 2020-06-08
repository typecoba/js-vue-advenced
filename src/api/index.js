import axios from "axios";

// http request response 관련 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// api 함수 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`); // es6 문법 템플릿 스트링
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo
}