import React from 'react';
import Slider from '../components/Slider.jsx';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {device, Container, BackgroundImage, BackgroundImageTop, GlobalStyle, GeneralButton} from '../responsive&generalStyling';

const Home = () => {
    return (
        <Container style={{justifyContent: "space-evenly"}}>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
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
  position: relative;
  top: -4rem;
  @media ${device.laptop} {
    top: -3rem;
  }
  @media ${device.tabletL} {
    top: -2.5rem;
  }
  @media ${device.tabletM} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    top: -2rem;
  }
  @media ${device.mobileM} {
    top: -1.5rem;
  }
`
const GeneralButton1 = styled(GeneralButton)`
  margin: 0 1rem 0 auto;
  @media ${device.tabletM} {
    margin: 1rem auto;
  }
`
const GeneralButton2 = withTheme(styled(GeneralButton)`
  background-color: ${props => props.theme.palette.secondary.main};
  color: #000;
  margin: 0 auto 0 1rem;
  @media ${device.tabletM} {
    margin: 1rem auto;
  }
`)
