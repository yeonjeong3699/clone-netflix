import axios from "../api/axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import GlobalStyle from '../styled/GlobalStyle';

export default function DetailPage() {

    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(
                `/movie/${movieId}`
            )
            setMovie(request.data)
        }
        fetchData();
    }, [movieId])

    return (
        <>
            <GlobalStyle />
            <DetailWrap>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
            </DetailWrap>
        </>
    )
}

const DetailWrap = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`