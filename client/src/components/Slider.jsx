import React from 'react';
import styled from 'styled-components';
import { withTheme } from "@material-ui/core/styles"
import {ArrowBackIosRounded, ArrowForwardIosRounded} from "@material-ui/icons";
// import krolik from './assets/krolik.png'

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBackIosRounded />
            </Arrow>
            <Wrapper>
                <ImageContainer>
                    <Image src="../../public/assets/krolik.png" />
                </ImageContainer>
                <InfoContainer>Info</InfoContainer>
                <Slide>

                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowForwardIosRounded />
            </Arrow>
        </Container>
    )
}
export default Slider;

const Container = styled.div`
  width: 100%;
  height: 20em;
  display: flex;
  position: relative;
`
const Arrow = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.secondary.main};
  width: 4em;
  height: 4em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
`)

const Wrapper = styled.div`
  
`
const Slide = styled.div`
  display: flex;
  align-items: center;
`
const ImageContainer = styled.div`
  flex: 1;
`
const InfoContainer = styled.div`
  flex: 1;
`
const Image = styled.img`  
  height: 10em;
`

