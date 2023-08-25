import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchComedyMovies } from "../store/actions/index";

//swiper
import { Swiper, SwiperSlide } from "swiper/react"; //스와이퍼 적용 임포트
import 'swiper/css'; //스와이퍼 기본 css 적용
import { Navigation, Pagination } from "swiper/modules";// 스와이퍼 좌우 버튼 활성 모듈
import 'swiper/css/navigation'; //좌우 버튼에 대한 기본 css 적용
import 'swiper/css/pagination'; //도트 네비게이션에 대한 기본 css 적용
import './SwiperReset.css'; //버튼 css


//react redux : 리액트 상태 관리 라이브러리. 스토어 데이터를 사용하기 위해서는 redux를 사용해야 한다.
export default function Action() {
    const dispatch = useDispatch();

    useEffect(() => { //useEffect가 실행되면 이라는 뜻
        dispatch(fetchComedyMovies())
    }, []) //조건이 없으면 무한으로 실행되기 때문에 빈 배열을 넣어 가조건을 생성

    const actionData = useSelector((state) => state.comedy.movies, []) || [] //useSelector : redux에 있는 요소. useDispatch로 받아온 상태값을 반환.
    console.log(actionData.results)

    return (
        <ComedyWrapper>
            <MovieTitle>코미디 장르</MovieTitle>
            <Swiper
                spaceBetween={20} //슬라이드와 슬라이드 사이의 여백(gap)
                slidesPerView={6} //한 번에 보여질 슬라이드의 갯수
                slidesPerGroup={6} //한 번에 움직일 슬라이드의 갯수
                loop //무한 반복
                modules={[Navigation, Pagination]} //버튼 모듈 적용
                navigation //navigation css적용
                pagination={{clickable:true}} //pagination css적용. clickable:클릭하면 해당 페이지로 이동
            >
                <div className="movieWrapper">
                    {actionData.results && actionData.results.map(movie => (
                        <SwiperSlide>
                            <Movie>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                            </Movie>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </ComedyWrapper>
    )

}
const MovieTitle = styled.h2`
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    padding-left: 30px;
`
const ComedyWrapper = styled.div`
    transform: translateY(-100px);
    box-sizing: border-box;
`
const Movie = styled.div`
    width: 300px;
    flex-shrink: 0;

    img{
        width: 100%;
        display: block;
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