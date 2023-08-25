import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Modal from "./Modal"
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";

export default function OverItem({ backdrop_path, title, overview, setIsHover, movieId }) {
    const [modal, setModal] = useState(false);

    const onClick = () => {
        setModal(true);
    }
    console.log(movieId)

    return (
        <>
            <HoverWrap>
                <HoverCloseBtn onClick={() => setIsHover(false)}>
                    <MdClose className="close" />
                </HoverCloseBtn>

                <Link to={`/movie/${movieId}`}>
                    <ImgWrap>
                        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
                    </ImgWrap>
                </Link>

                <ControlWrap onClick={() => { onClick() }}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </ControlWrap>
            </HoverWrap>

            {modal && (
                <Modal
                    backdrop_path={backdrop_path}
                    title={title}
                    overview={overview}
                    setModal={setModal}
                />
            )}
        </>
    )
}

const HoverWrap = styled.div`
    width: 500px;
    height: 500px;
    background: gray;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(-100px, -150px);
    z-index: 99;
`

const ImgWrap = styled.div`
    width: 100%;
    overflow: hidden;
    img{
        width: 100%;

    }
`

const HoverCloseBtn = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    .close{
        font-size: 25px;
        color: white;
    }
`

const ControlWrap = styled.div`
    padding: 12px;
    box-sizing: border-box;
    h2{
        font-size: 20px;
        color: white;
        margin-bottom: 12px;
    }
    p{
        font-size: 14px;
        color: white;
        line-height: 1.3;
    }
`