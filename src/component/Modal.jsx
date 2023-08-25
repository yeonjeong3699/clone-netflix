import React from "react";
import { useRef } from "react";
import { styled } from "styled-components";
import useClick from "./Hook/useClick";
import { MdClose } from "react-icons/md";

export default function Modal({ backdrop_path, setModal, title, overview }) {
    const ModalRef = useRef();
    //useRef : 특정한 dom요소에 접근하기 위한 hook

    useClick(ModalRef, () => {
        setModal(false);
    })

    return (
        <ModalContainer>
            <ModalWrapper>
                <ModalItem ref={ModalRef}>
                    <ModalInfo>
                        <ModalTitle>{title}</ModalTitle>
                    </ModalInfo>

                    <ModalCloseBtn onClick={() => setModal(false)}>
                        <MdClose className="close" />
                    </ModalCloseBtn>

                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />

                    <ModalText>
                        {overview}
                    </ModalText>
                </ModalItem>
            </ModalWrapper>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    transform: translate(0px, calc(-150px + -50%));
`

const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: black;
`

const ModalItem = styled.div`
    max-width: 50vw;
    max-height: 80vh;

    img{
        width: 100%;
    }
`

const ModalCloseBtn = styled.button`
    width: 35px;
    height: 35px;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100%;
    .close{
        font-size: 25px;
        color: white;
    }
`

const ModalInfo = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    padding-top: 250px;
    padding-left: 30px;
    width: auto;
    height: auto;
`

const ModalTitle = styled.h2`
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
`

const ModalText = styled.div`
    font-size: 20px;
    color: white;
    line-height: 1.5;
    padding: 24px;
    box-sizing: border-box;
`