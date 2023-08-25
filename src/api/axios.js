import axios from "axios";

const API_KEY = '1cc4df7112728c276c5e279caee2de15'; //각 계정마다 배정받는 고유 key 값
const BASE_URL = `https://api.themoviedb.org/3`; //정보를 받아올 url의 공통 주소를 변수화

const instance = axios.create({
    baseURL : BASE_URL,
    params : {
        api_key : API_KEY,
        language : 'ko-KR'
    }
})

export default instance;