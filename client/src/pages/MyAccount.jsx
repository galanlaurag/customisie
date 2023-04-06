import {Container, BackgroundImage, GlobalStyle, BackgroundImageTop} from '../responsive&generalStyling';
import React, {useEffect} from 'react';
import styled from "styled-components";

const Home = () => {
    useEffect(() => {
        document.title = 'Customisie - My account';
    }, []);
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
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