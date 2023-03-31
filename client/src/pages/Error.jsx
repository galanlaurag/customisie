import {Container, BackgroundImage, GlobalStyle, GeneralButton} from '../responsive&generalStyling';
import React from 'react';
import styled from "styled-components/macro";
import {withTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const Slider = () => {
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
        </Container>
    )
}
export default Slider;

const Wrapper = styled.div`
  text-align: center;
`
const ErrorLink = withTheme(styled(Link)`
  width: fit-content;
  margin: 2rem auto;
  text-decoration: none;
  display: block;
`)
