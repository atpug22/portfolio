import React from 'react';
import styled from 'styled-components';
import TechStack from '../components/Skills/techstack';
import Experience from '../components/Skills/experience';
const ContainerDiv = styled.div`

    background-color:black;
    color:white;
    
    .techstack-heading{
        font-size:60px;
        font-family: 'Quicksand', sans-serif;
        text-align:center;
    }
    .techstack-class{
        width:fit-content;
    }
`;

export default function Skills() {
    return (
            <ContainerDiv className="fluid-container d-flex flex-column justify-content-center align-items-center">
            <div className= "mb-3 techstack-heading mt-5"><div>My TechStack</div></div>
            <div className="techstack-class"><TechStack/></div>
            <div className="mt-5 mb-4 techstack-heading"><div>Experience</div></div>
            <div className="experience-class mb-5"><Experience /></div>
            </ContainerDiv>
    );
}