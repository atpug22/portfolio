import React from 'react';
import styled from 'styled-components';
// import { IoIosContact } from 'react-icons/io';
// import {SiAboutDotMe} from 'react-icons/si';
import {BsAward,BsFileCode,BsCardText} from 'react-icons/bs';
// import {GrProjects} from 'react-icons/gr';
import { IconContext } from "react-icons";
const NavBarDiv = styled.div`
.react-icons{
    color:black;
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
export default function NavBar2() {
    return (
        <NavBarDiv>
            <div className="icons-bar">
            <IconContext.Provider value={{color:'black', className: 'react-icons' }}>
                <div className="lax nav-icon mx-4 my-3"  id="skills"><BsAward /></div>
                <div className="lax nav-icon mx-4 my-3"  id="projects"><BsFileCode/></div>
                <div className="lax nav-icon mx-4 my-3"  id="contact"><BsCardText /></div>
            </IconContext.Provider>
            </div>
        </NavBarDiv>
    );
}