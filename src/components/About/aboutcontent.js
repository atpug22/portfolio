import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { SiGmail } from 'react-icons/si';
import { MorphIcon } from 'react-svg-buttons';
const AboutDiv = styled.div`

    .social-card {
       margin:auto;
       width: fit-content;
    }
    .resume-download-button{
        margin:auto;
        width: fit-content;
    }
    
    .react-social-icons{
        color:white;
        width:25px;
        height:25px;
        
    }
    .social-single-icon{
        transform: translateY(0px);
    }
    .react-social-icons:hover{
        cursor:pointer;
    }
    .about-heading{
        
        font-family: 'Poiret One', cursive;
        font-size:xxx-large;
        font-weight: bold;
    }
    .about-content{
        font-family: 'Alegreya Sans', sans-serif;
        font-size:large;
    }
`;

export default function AboutContent() {
    return (
        <>
            <AboutDiv className="my-5">
                <div className="about-heading mb-4"><span>about Me</span></div>
                <div className="about-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque sed ligula ac mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor mi eu dolor iaculis tincidunt. Fusce eget metus eros. Aliquam erat volutpat. Nam sollicitudin eros velit, nec laoreet massa fringilla eu.</p></div>
                <div className="resume-download-button mt-4">
                <a href="/CV_Aryaman.pdf" download><Button variant="secondary">Download CV <MorphIcon
                        type="inbox"
                        size={40}
                        thickness={2}
                        color="#ffffff"
                    /></Button>{' '}</a>
                </div>
                <div className="social-icons mt-4">
                    <Card className="social-card" bg="dark" body>
                        <div className="social-icons2">
                            <IconContext.Provider value={{ color: 'white', className: 'react-social-icons' }}>
                                <div className="lax social-single-icon d-inline-block mx-3" id="linkedin"><a href="https://www.linkedin.com/in/aryamang/" target="blank"><FaLinkedin /></a></div>
                                <div className="lax social-single-icon d-inline-block mx-3" id="github"><a href="https://github.com/atpug22" target="blank"><FaGithub /></a></div>
                                <div className="lax social-single-icon d-inline-block mx-3" id="gmail"><a href="mailto:aryaman.gupta.met19@itbhu.ac.in" target="blank"><SiGmail /></a></div>
                                <div className="lax social-single-icon d-inline-block mx-3" id="insta"><a href="https://www.instagram.com/_ryaman/" target="blank"><FaInstagram /></a></div>
                                <div className="lax social-single-icon d-inline-block mx-3" id="facebook"><a href="https://www.facebook.com/aryaman.gupta.92/" target="blank"><FaFacebook /></a></div>
                            </IconContext.Provider>
                        </div>
                    </Card>
                </div>
            </AboutDiv>
        </>
    );
}