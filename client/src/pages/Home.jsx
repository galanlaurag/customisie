import React from 'react';
import Slider from '../components/Slider.jsx';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {Container, BackgroundImage, GlobalStyle, GeneralButton} from '../responsive&generalStyling';

const Home = () => {
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImage src={`/assets/tlo.png`}/>
        <Slider />
        <ButtonsWrapper>
            <GeneralButton1>Customise your teddy bear</GeneralButton1>
            <GeneralButton2>Find out more</GeneralButton2>
        </ButtonsWrapper>

        </Container>
    )
}
export default Home;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 20;
`
const GeneralButton1 = styled(GeneralButton)`
  margin: 0 1rem 0 auto;
`
const GeneralButton2 = withTheme(styled(GeneralButton)`
  background-color: ${props => props.theme.palette.secondary.main};
  color: #000;
  margin: 0 auto 0 1rem;
`)
