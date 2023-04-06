import {
    device,
    Container,
    BackgroundImage,
    GlobalStyle,
    GeneralButton,
    BackgroundImageTop, showOpacity,
} from '../responsive&generalStyling';
import React from 'react';
import styled from "styled-components/macro";
import {withTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <ErrorWrapper>
                <Image src={`/assets/teddyBears.png`}/>
                <Wrapper>
                    <Title>Oops! You seem to be lost.</Title>
                    <p>Here are some helpful links:</p>
                    <ErrorLink to={"/"}>
                        <HomeButton>Go back to the homepage</HomeButton>
                    </ErrorLink>
                    <ErrorLink to={"/contact"}>
                        <ContactButton>Contact us</ContactButton>
                    </ErrorLink>
                </Wrapper>
            </ErrorWrapper>
        </Container>
    )
}
export default Error;

const ErrorWrapper = styled.div`
  text-align: center;
  position: relative;
  margin-top: 80px;
  top: -9.5rem;
  @media ${device.laptop} {
    top: -8.5rem
  }
  @media ${device.tabletL} {
    top: -7.5rem
  }
  @media ${device.tabletM} {
    top: -7rem
  }
  @media ${device.mobileL} {
    top: -5rem;
  }
  @media ${device.mobileS} {
    top: -3rem;
  }
`
const Wrapper = withTheme(styled.div`
  text-align: center;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  padding: 7rem 3rem 3rem 3rem;
  margin: auto;
  width: 75%;
  height: 18rem;
  position: relative;
  animation: ${showOpacity} ease 1s;
  @media ${device.laptop} {
    width: 85%;
    height: 16rem;
  }
  @media ${device.tabletL} {
    width: 90%;
    height: 14rem;
    padding: 6rem 1rem 3rem 1rem;
  }
  @media ${device.tabletS} {
    padding: 5rem 1rem 3rem 1rem;
  }
  @media ${device.mobileL} {
    width: 95%;
    height: 16rem;
    padding: 4rem 0.5rem 2rem 0.5rem;
  }
  @media ${device.mobileM} {
    padding: 3rem 0.5rem 1rem 0.5rem;
  }
`)
const ErrorLink = withTheme(styled(Link)`
  width: fit-content;
  margin: 2rem auto;
  text-decoration: none;
  display: block;
  &:last-of-type {
    margin: 0 auto;
  }
  @media ${device.tabletL} {
    margin: 1rem auto;
  }
`)
const Title = styled.h1`
  @media ${device.tabletS} {
    font-size: 1.5rem;
  }
`
const HomeButton = styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.5s forwards;
`
const ContactButton = styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 1s forwards;
`
const Image = styled.img`
  position: relative;
  bottom: -5rem;
  left: 0;
  right: 0;
  height: 20rem;
  margin: 0 auto 0.5rem auto;
  z-index: 20;
  @media ${device.laptop} {
    height: 18rem;
  }
  @media ${device.tabletL} {
    height: 16rem;
    bottom: -4rem;
  }
  @media ${device.tabletM} {
    height: 14rem;
  }
  @media ${device.tabletS} {
    height: 12rem;
    bottom: -3.5rem;
  }
  @media ${device.mobileL} {
    height: 10rem;
    bottom: -3rem;
  }
  @media ${device.mobileM} {
    height: 8rem;
    bottom: -2.5rem;
  }
  @media ${device.mobileS} {
    height:6rem;
    bottom: -2rem;
  }
`

