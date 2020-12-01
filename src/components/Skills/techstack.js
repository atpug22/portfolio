import React from 'react';
import styled from 'styled-components';
import { SiCplusplus, SiReact, SiDjango, SiPython, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiJquery, SiGit } from 'react-icons/si';
import { IconContext } from 'react-icons';

const TechStackDiv = styled.div`
    width:fit-content;

    .skills-icons-container{
        width:70%
    }
    .skill-icon{
        width:100px;
        height:100px;
        margin:5px 5px;
    }
    .react-skills-icons{
        width:100px;
        height:100px;

    }
`;
export default function TechStack() {
    return (
        <TechStackDiv className="d-flex justify-content-center align-items-center">
            <div className="container d-block skills-icons-container">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <IconContext.Provider value={{ color: 'white', className: 'react-skills-icons' }}>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="cplusplus"><SiCplusplus /><div className="mt-2 skill-name">C++</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="python"><SiPython /><div className="mt-2 skill-name">Python</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="html"><SiHtml5 /><div className="mt-2 skill-name">Html</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="css"><SiCss3 /><div className="mt-2 skill-name">Css</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="js"><SiJavascript /><div className="mt-2 skill-name">Javascript</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="jquery"><SiJquery /><div className="mt-2 skill-name">JQuery</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="bs"><SiBootstrap /><div className="mt-2 skill-name">Bootstrap</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="git"><SiGit /><div className="mt-2 skill-name">Git</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="django"><SiDjango /><div className="mt-2 skill-name">Django</div></div>
                        <div className="mx-4 skill-icon d-flex justify-content-center align-items-center flex-column" id="react"><SiReact /><div className="mt-2 skill-name">React</div></div>
                    </IconContext.Provider>
                </div>
            </div>
        </TechStackDiv>
    );
}