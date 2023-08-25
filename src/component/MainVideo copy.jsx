import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export default function MainVideo() {
    const [randomVideo, setRandomVideo] = useState(null);
    //비디오의 객체가 계속 바뀌기 때문에 기본값을 설정하고 로딩 시 새로운 값을 받아오기 위한 설정. 변경되는 값을 useState로 저장

    useEffect(() => { //비디오 json 파일을 읽어왔을 때 실행할 함수
        /*
        async와 await는 useEffect hook에서 비동기 데이터를 가져올 때 사용하는 api이다.
        json 파일은 비동기 데이터이기 때문에 async와 await를 사용. (동기, 비동기는 하단 참조)
        */
        async function fetchVideo() { //async : 비동기 데이터를 수행하는 부분을 지정
            try { //if문과 비슷한 문법. 작업을 시도하는 블록구문. 불러왔을 때를 의미한다.
                //await : 외부에서 불러올 때 기다리라고 명령. videos는 위에서 이미 다 불러왔기 때문에 await 사용할 필요가 없음.
                const res = await fetch('/videos/movie.json'); //res는 보통 responsive를 지칭하며 줄여러 res라고 부른다. 비동기 방식으로 연결할 파일을 지정.
                const data = await res.json(); //지정된 파일의 데이터 유형을 지정
                const videos = data.movieList; //지정된 파일의 객체명을 지정

                console.log(videos)

                if (videos.length > 0) {
                    const randomIndex = Math.floor(Math.random() * videos.length);
                    setRandomVideo(videos[randomIndex]);
                } else {
                    console.warn('no video!') //불러올 비디오의 파일이 없을 때 콘솔창에 경고창 띄우기(노랑색)
                }
            } catch (error) { //if문과 비슷한 문법. 작업을 시도하는 동안 문제가 생기는 블록구문.try가 실행되는 동안 감지되는 예외를 처리하는 구문. 불러오지 못했을 때를 의미한다.
                console.error('video error', error); //어떠한 경우에서 파일을 불러오지 못한 경우 콘솔창에 에러창 띄우기(빨간색)
            }
        }
        fetchVideo() //useEffect 내부에서 실행할 수 있도록 빼주기
    }, [])
    //useEffect는 기본적으로 마운트(로딩) 될 때 마다 계속 실행하기 때문에 무한 파싱 또는 로딩이 걸릴 수 있다.
    //해결방법은 구성요소가 모두 렌더링 될 때 한 번만 실행되도록 마지막 구문에 빈 배열[]을 추가하여야 한다.

    if (!randomVideo) {
        return <p>동영상을 로딩중입니다.</p>
    }

    return (
        <>
            <MainVideoWrapper>
                <video autoPlay muted loop src={randomVideo.url}>
                </video>

                <div className="textBox">
                    <div className="text">
                        <h2>{randomVideo.title}</h2>
                        <p>{randomVideo.text}</p>
                    </div>
                    <div className="linkBox">
                        <Link className="dic-btn" to={randomVideo.link}><FaPlay />재생</Link>
                        <Link className="info-btn" to={randomVideo.link}>자세히 보기</Link>
                    </div>
                </div>
            </MainVideoWrapper>
        </>
    )
}

const MainVideoWrapper = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    video{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .textBox{
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 40px;
        .text{
            display: flex;
            flex-direction: column;
            gap: 15px;
            h2{
                color: #ffffff;
                font-size: 60px;
                font-weight: bold;
            }
            p{
                color: #ffffff;
                font-size: 24px;
            }
        }
        .linkBox{
            display: flex;
            gap: 24px;
            a{
                font-size: 16px;
                color: #ffffff;
                border: solid 1px white;
                border-radius: 5px;
                padding: 10px 25px;
                transition: 500ms;
                background: rgba(255, 255, 255, 0.3);
                display: flex;
                align-items: center;
                gap: 5px;
                &:hover{
                    background: rgba(255, 255, 255, 0.1);
                }
                svg{
                    width: 10px;
                }
            }
        }
    }
`

/*

<동기형 데이터>
서버에 요청을 보냈을 때 답변이 돌아와야 다음 동작이 수행되는 방식. 이전 작업에서 오류가 나면 다음 작업을 절대 실행하지 않음.
로직이 직관적으로 보이기 때문에 작업하는데 수월하지만 순차적으로 작업을 실행하기 때문에 시간이 오래걸리는 작업에서는 단접으로 작용된다.
    ex) a, b, c 를 작업할 때 : a작업이 끝난 후 b작업 실행, b작업이 끝난 후 c작업 실행, b작업 오류일 경우 c작업 실행불가

<비동기 데이터>
서버에 요청을 보냈을 때 응답 상태와 상관없이 다음 작업을 실행함. 동시에 여러작업을 하게 되면 순차적으로 실행하지 않고 동시에 실행한다.
로직은 복잡하지만 동시에 여러작업을 실행하기 때문에 효율적이다.
    ex) a, b, c 를 작업할 때 : a, b, c 작업 모두 서버 속도가 느리든 빠르든 오류든 동시에 실행됨. 때문에 a, b, c 의 로딩 속도가 각각 다를 수 있음.

*/