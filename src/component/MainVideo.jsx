import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import request from "../api/request";
import { styled } from "styled-components";

export default function MainVideo() {
    const [movie, setMovie] = useState(null);
    const [showImg, setShowImg] = useState(true); //처음에 이미지가 보여야 하므로 값을 true로 설정
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(()=>{
        if(showImg && videoKey){
            changeVideo();
        }
    }, [showImg, videoKey])

    const fetchData = async () => {
        try {
            const res = await axios.get(request.fetchNowPlayMovie)
            const movieId =
                res.data.results[
                    Math.floor(Math.random() * res.data.results.length)
                ].id;
            //setMovie(movieId);
            const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
                params: { append_to_response: 'videos' },
            });
            if (movieDetail.videos && movieDetail.videos.results.length > 0) {
                console.log(movieDetail.videos.results.length)
                setMovie(movieDetail);
                setVideoKey(movieDetail.videos.results[0].key)
                console.log(movieDetail.videos.results[0].key)

                setTimeout(()=>{
                    setShowImg(false)
                },2000)
            }

        } catch (error) {
            console.log('에러내용:', error)
        }
    }

    const changeVideo = () => {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey}`;
        iframe.width = '100%';
        iframe.height = `100%`;
        videoContainer.appendChild(iframe)
    }

    return (
        <>
            {showImg && movie && (
                <MainVideoWrapper img={movie.backdrop_path}>
                    {/* <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} /> */}
                </MainVideoWrapper>
            )}
            <VideoWrapper id="videoContainer"></VideoWrapper>
        </>
    )
}

const MainVideoWrapper = styled.div`
    background-image: url(https://image.tmdb.org/t/p/original/${(props) => props.img});
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-size: cover;
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

const VideoWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`