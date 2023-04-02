import React from 'react';
import Slider from '../components/Slider.jsx';
// import {withTheme} from "@material-ui/core/styles";
// import styled from "styled-components";
import styled from "styled-components/macro";
import {Container, BackgroundImage, GlobalStyle} from '../responsive&generalStyling';

const Home = () => {
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <Image src={`/assets/misieNoBackground.png`}/>
        <Slider />

        </Container>
    )
}
export default Home;

const Image = styled.img`
  width: 80%;
`
