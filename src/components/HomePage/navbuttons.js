import React from 'react';
import styled from 'styled-components';
// import { IoIosContact } from 'react-icons/io';
// import {SiAboutDotMe} from 'react-icons/si';
import {BsAward,BsPerson,BsFileCode,BsCardText} from 'react-icons/bs';
// import {GrProjects} from 'react-icons/gr';
import { IconContext } from "react-icons";
const NavBarDiv = styled.div`
.react-icons{
    color:white;
    width:50px;
    height:50px;
    
}
.nav-icon{
    transform: translateY(0px);
}
.react-icons:hover{
    cursor:pointer;
}
`;
export default function NavBar() {
    return (
        <NavBarDiv>
            <div className="icons-bar">
            <IconContext.Provider value={{color:'white', className: 'react-icons' }}>
                <div className="lax nav-icon d-inline-block mx-3"  id="about"><BsPerson/></div>
                <div className="lax nav-icon d-inline-block mx-3"  id="skills"><BsAward /></div>
                <div className="lax nav-icon d-inline-block mx-3"  id="projects"><BsFileCode/></div>
                <div className="lax nav-icon d-inline-block mx-3"  id="contact"><BsCardText /></div>
            </IconContext.Provider>
            </div>
        </NavBarDiv>
    );
}