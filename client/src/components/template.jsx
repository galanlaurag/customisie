import {Container, BackgroundImage, GlobalStyle} from '../responsive&generalStyling';
import React from 'react';
// import styled from "styled-components/macro";

const Slider = () => {
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImage src={`/assets/tlo.png`}/>
        </Container>
    )
}
export default Slider;


