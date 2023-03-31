import {Container, BackgroundImage, GlobalStyle} from '../responsive&generalStyling';
import React from 'react';
import styled from "styled-components";

const Home = () => {
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <Title>[Demo version]</Title>
            <Info>You will soon be able to access information about your account.</Info>
        </Container>
    )
}
export default Home;

const Title = styled.h2`
text-align: center`
const Info = styled.h3`
  text-align: center;    
`