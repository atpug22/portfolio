import React from 'react';
import styled from 'styled-components';
import NavBar2 from '../components/About/aboutnavitems';
import ProfilePicture from '../components/About/profilepicture';
import AboutContent from '../components/About/aboutcontent';
import {Container, Row, Col} from 'react-bootstrap';
const ContainerDiv = styled.div`

    background-color:white;
    color:black;
`;

export default function About() {
    return (
        <ContainerDiv className="fluid-container d-flex flex-row align-items-center ">
            <NavBar2 />
            <div className="fluid-container d-flex flex-row justify-content-center">
                <Container>
                    <Row>
                        <Col className="col-6 d-flex justify-content-center align-items-center p-4">
                            <ProfilePicture  />
                        </Col>
                        <Col className="col-6 p-5">
                            <AboutContent  />
                        </Col>
                    </Row>
                </Container>

            </div>
        </ContainerDiv>
    );
}