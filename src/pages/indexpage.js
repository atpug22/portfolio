import React from 'react';
import styled from 'styled-components';
import Intro from '../components/HomePage/intro'
import NavBar from '../components/HomePage/navbuttons'
const ContainerDiv = styled.div`

    background-color:black;
    color:white;
    height:100vh;
`;

export default function Home() {
    return (
            <ContainerDiv className="fluid-container d-flex flex-column justify-content-center align-items-center">
            <div className= "mb-3"><NavBar /></div>
            <div><Intro/></div>
            </ContainerDiv>
    );
}