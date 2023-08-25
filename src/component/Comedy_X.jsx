import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchComedyMovies } from "../store/actions/index";
import Movie from "./Movie_X";


//react redux : 리액트 상태 관리 라이브러리. 스토어 데이터를 사용하기 위해서는 redux를 사용해야 한다.
export default function Comedy() {
    const dispatch = useDispatch();

    useEffect(() => { //useEffect가 실행되면 이라는 뜻
        dispatch(fetchComedyMovies())
    }, []) //조건이 없으면 무한으로 실행되기 때문에 빈 배열을 넣어 가조건을 생성

    const actionData = useSelector((state) => state.comedy.movies, []) || [] //useSelector : redux에 있는 요소. useDispatch로 받아온 상태값을 반환.
    console.log(actionData.results)

    return (
        <>
            <ComedyWrapper>
                <h2 className="movieTitle">코미디 장르</h2>
                <div className="movieWrapper">
                    {actionData.results && actionData.results.map(movie => (
                        <Movie props={movie} />
                    ))}
                </div>
            </ComedyWrapper>
        </>
    )

}

const ComedyWrapper = styled.div`
    transform: translateY(-100px);
    padding-left: 30px;
    box-sizing: border-box;

    .movieTitle{
        font-size: 40px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 20px;
    }

    .movieWrapper{
        display: flex;
        overflow: hidden;
        align-items: center;
        gap: 6px;

        .movieItem{
            width: 250px;
            flex-shrink: 0;

            img{
                width: 100%;
            }
        }
    }
`





// 데이터가 잘 연결되어 있는지 콘솔 확인용
// export default function Action() {
//     useEffect(() => {
//         fetchApi();
//     }, [])
// }
// const API_KEY = '1cc4df7112728c276c5e279caee2de15'; //각 계정마다 배정받는 고유 key값
// const BASE_URL = `https://api.themoviedb.org/3`;// 정보를 받아올 url의 공통 주소를 변수화
// const Genre = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`

// const fetchApi = async () => {
//     const res = await axios.get(Genre);
//     console.log(res.data)
// }