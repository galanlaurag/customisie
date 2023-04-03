import {device, Container, BackgroundImage, GlobalStyle, GeneralButton} from '../responsive&generalStyling';
import React from 'react';
import styled from "styled-components/macro";
import {withTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <Container>
            <Wrapper>
                <GlobalStyle/>
                <BackgroundImage src={`/assets/tlo.png`}/>
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <ErrorLink to={"/"}>
                    <GeneralButton>Go back to the homepage</GeneralButton>
                </ErrorLink>
                <ErrorLink to={"/contact"}>
                    <GeneralButton>Contact us</GeneralButton>
                </ErrorLink>
            </Wrapper>
            <Image src={`/assets/teddyBears.png`}/>
        </Container>
    )
}
export default Error;

const Wrapper = styled.div`
  text-align: center;
`
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
const Image = styled.img`
  bottom: 0;
  left: 0;
  right: 0;
  width: 45%;
  margin: 0 auto 0.5rem auto;
  z-index: 50;
  @media ${device.laptop} {
    width: 65%;
  }
  @media ${device.tabletL} {
    width: 80%;
  }
  @media ${device.tabletS} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 95%;
  }
`

