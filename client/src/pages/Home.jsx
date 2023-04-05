import React from 'react';
import Slider from '../components/Slider.jsx';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {device, Container, BackgroundImage, BackgroundImageTop, GlobalStyle, GeneralButton, toRight, toLeft, showOpacity} from '../responsive&generalStyling';

const Home = () => {
    return (
        <Container style={{justifyContent: "space-evenly"}}>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <Load>
                <Slider />
                <ButtonsWrapper>
                    <GeneralButton1>Customise your teddy bear</GeneralButton1>
                    <GeneralButton2>Find out more</GeneralButton2>
                </ButtonsWrapper>
            </Load>

        <ReviewsWrapper>
            <Review>
                <Quote>"I recently ordered a custom crochet teddy bear from this shop and I am absolutely in love with it! The attention to detail is amazing, and the ability to choose the colours and design of the bear made it a truly unique gift. The craftsmanship is top-notch and the teddy bear is so soft and cuddly. I highly recommend this shop to anyone looking for a special and personalized gift."</Quote>
                <Name>~Katie</Name>
            </Review>
            <Review>
                <Quote>"I purchased a customized crochet teddy bear for my niece's birthday and she hasn't put it down since she received it! The process of choosing the colours and shapes was so much fun, and the final product exceeded my expectations. The bear is so well-made and the quality of the materials used is evident. I will definitely be ordering more bears in the future!"</Quote>
                <Name>~Ryan</Name>
            </Review>
            <Review>
                <Quote>"I can't say enough good things about these handmade crochet teddy bears! They are the perfect gift for anyone, young or old. The ability to customize every aspect of the bear, makes it truly one-of-a-kind. The attention to detail is impressive and the bear is so soft and snuggly. I highly recommend this shop to anyone looking for a special and meaningful gift."</Quote>
                <Name>~Jessica</Name>
            </Review>
        </ReviewsWrapper>
        </Container>
    )
}
export default Home;

const Load = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation: ${showOpacity} ease-in-out 1s forwards;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 20;
  position: relative;
  top: -3rem;
  @media ${device.laptop} {
    top: -2rem;
  }
  @media ${device.tabletL} {
    top: -1.5rem;
  }
  @media ${device.tabletM} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    top: -1rem;
  }
  @media ${device.mobileM} {
    top: -0.5rem;
  }
`
const GeneralButton1 = styled(GeneralButton)`
  margin: 0 1rem 0 auto;
  animation: ${toRight} ease-in-out 1s forwards;
  @media ${device.tabletM} {
    margin: 1rem auto;
  }
`
const GeneralButton2 = withTheme(styled(GeneralButton)`
  margin: 0 auto 0 1rem;
  animation: ${toLeft} ease-in-out 1s forwards;
  @media ${device.tabletM} {
    margin: 1rem auto;
  }
`)

const ReviewsWrapper = styled.div`
  display: flex;
  @media ${device.laptop} {
    flex-direction: column;
    margin-bottom: 2rem;
  }
  @media ${device.tabletS} {
    margin-bottom: 1rem;
  }
`
const Review = withTheme(styled.div`
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  padding: 2rem;
  margin: 1rem 1rem 3rem 1rem;
  @media ${device.laptop} {
    margin: 1rem 3rem;
  }
  @media ${device.tabletS} {
    margin: 1rem 2rem;
  }
  @media ${device.mobileL} {
    margin: 1rem;
  }
  @media ${device.mobileM} {
    margin: 1rem 0.5rem;
  }
`)
const Quote = styled.p`
  font-style: italic;
`
const Name = styled.span`
  display: block;
  text-align: right;
`
