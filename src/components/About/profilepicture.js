import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import profile_pic from './profile_pic.jpeg';

const ProfileDiv = styled.div`
.name{
    font-family: 'Poiret One', cursive;
    font-size:xxx-large;
    font-weight: bold;
}
`;

export default function ProfilePicture() {
    return (
        <ProfileDiv className="d-flex flex-column justify-content-center align-items-center">
            <div className="profile-picture">
                <Image src={profile_pic} width="270px" height="300px" roundedCircle />
            </div>
            <div className="my-name mt-4">
                <span className="name">Aryaman Gupta</span>
            </div>
        </ProfileDiv>
    );

}