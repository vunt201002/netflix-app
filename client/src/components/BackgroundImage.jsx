import React from 'react';
import styled from 'styled-components';

import bg from "../assets/bg.jpg";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
`;

const BackgroundImage = () => {
    return (
        <Container>
            <img src={bg} alt="background" />
        </Container>
    )
};

export default BackgroundImage;