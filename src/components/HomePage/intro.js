import React from 'react';
import 'react-bootstrap';
import Typist from 'react-typist';
import styled from 'styled-components';
import '@sorabhtomar/sofia-pro'
const INTROdiv = styled.div`

.introPara{
    font-family: 'Fira Sans';
    
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 96%;
}
`;



export default function Intro() {
   
    return (
        <>
            <INTROdiv className="container d-flex justify-content-center align-items-center text-center">
                <div className="intro-data">
                    <div className="introPara">
                        <Typist cursor={{hideWhenDone: true,hideWhenDoneDelay: 10}}>
                            Full Stack Web-Developer<br/>
                            Born and Living in India<br/>
                            Raised by the 90's<br/>
                            Now Available For You
                        </Typist>
                    </div>
                </div>
            </INTROdiv>
        </>);
}
