import axios from "axios";

/*
<axios>
설치방법 : yarn add axios

자바스크립트에서 사용하던 외부에서 api를 연동하기 위한 fetch api의 리액트 버전
axios를 더 선호한다.
*/

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';

const API_KEY = '1cc4df7112728c276c5e279caee2de15'; //각 계정마다 배정받는 고유 key 값
const BASE_URL = `https://api.themoviedb.org/3`; //정보를 받아올 url의 공통 주소를 변수화


//action
export const fetchActionData = (data) => {
    return {
        type: FETCH_ACTION_MOVIES,
        data
    }
}

export const fetchActionMovies = () => {
    return (dispatch) => {
        //dispatch : 외부에서 데이터를 가져올 때 사용하는 reducer의 기능으로 useState를 대체한다.
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
        .then(res => {
            dispatch(fetchActionData(res.data))
        }) //axios에서 콜백함수를 대체하는 return문과 같은 구문
    }
}


//comedy
export const fetchComedyData = (data) => {
    return {
        type: FETCH_COMEDY_MOVIES,
        data
    }
}

export const fetchComedyMovies = () => {
    return (dispatch) => {
        //dispatch : 외부에서 데이터를 가져올 때 사용하는 reducer의 기능으로 useState를 대체한다.
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
        .then(res => {
            dispatch(fetchComedyData(res.data))
        }) //axios에서 콜백함수를 대체하는 return문과 같은 구문
    }
}