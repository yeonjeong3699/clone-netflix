import React, { useState, useEffect } from "react";
import { styled } from 'styled-components' //스타일 컴포넌트 api / 설치방법 : yarn add styled-components
import { SiNetflix } from 'react-icons/si'; //아이콘 사용.아이콘마다 하위폴더 다름 / 설치방법 : npm install react-icons --save
import { Link } from "react-router-dom"; //a태그 대신 사용하는 link를 사용하기 위한 훅
import Navigation from "./Navigation";
import Search from "./Search";

const HeaderContainer = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    width: 100vw;
    padding: 16px 32px;
    box-sizing: border-box;
    z-index: 1;
    
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100 */
    background: -moz-linear-gradient(top,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */

    align-items: center;
    gap: 30px;
    transition: 500ms;
    &.on{
        background-color: #000000;
    }
    .logo{
        font-size: 30px;
        a{
            display: flex;
            align-items: center;
            path{
            color: red;
            }
        }
    }
`

const HeaderRight = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 24px;
`

export default function Header() {
    const [show, setShow] = useState(false);

    //리액트에서는 
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            // console.log(window.scrollY);
            if(window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    })

    return (
        <HeaderContainer className={`${show && 'on'}`}>
            <h1 className="logo"><Link to={'/'}><SiNetflix /></Link></h1>
            <Navigation />

            <HeaderRight>
                <Search />
            </HeaderRight>

        </HeaderContainer>
    )
}