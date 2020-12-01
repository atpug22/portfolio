import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const ExperienceDiv = styled.div`
.experience-card{
    color:white;
    background-color:black;
    border-width: 5px;
    border-style: solid;
    border-color:white;
    border-radius:20px;
    width:60%;
}
`;

export default function Experience() {
    return (
        <ExperienceDiv className="d-flex flex-column justify-content-center align-items-center">
            <Card className="experience-card my-2">
                <Card.Body>
                    <Card.Title>1. Kohbee</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Web Developer</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="experience-card my-2">
                <Card.Body>
                    <Card.Title>2. Kyukey</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Web Developer</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </ExperienceDiv>
    );
}