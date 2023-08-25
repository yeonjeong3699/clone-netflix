import React from "react";
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Nav = styled.nav`
    .gnb{
        display: flex;
        gap: 24px;
        align-items: center;
        li{
            a{
                color: rgba(255, 255, 255, 0.8);
                transition: 500ms;
                font-size: 14px;
                
                &:hover{
                color: rgba(255, 255, 255, 1);
                }
            }

        }
    }
`

export default function Navigation() {
    return (
        <Nav>
            <ul className="gnb">
                <li><Link to={'/'}>홈</Link></li>
                <li><Link to={'/Serise'}>시리즈</Link></li>
                <li><Link to={'/Movie'}>영화</Link></li>
                <li><Link to={'/NewContent'}>NEW!요즘 대세 컨텐츠</Link></li>
                <li><Link to={'/PickContent'}>내가 찜한 컨텐츠</Link></li>
                <li><Link to={'/LangContent'}>언어별로 찾기</Link></li>
            </ul>
        </Nav>
    )
}