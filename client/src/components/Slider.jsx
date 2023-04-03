import React from 'react';
import styled from 'styled-components/macro';
import { withTheme } from "@material-ui/core/styles"
import {ArrowBackIosRounded, ArrowForwardIosRounded} from "@material-ui/icons";
import {useState} from "react";

const sliderItems = [
    {
        id: 1,
        img: "/assets/teddyBears1.png",
        title: "CUSTOMISATION",
        desc: "Customisie - teddy bears customised by YOU!",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "/assets/teddyBears2.png",
        title: "UNIQUENESS",
        desc: "390625 possible combinations of unique teddy bears!",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "/assets/teddyBears3.png",
        title: "QUALITY",
        desc: "Handmade using highest-quality materials!",
        bg: "fbf0f4",
    },
];

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <SliderContainer>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosRounded />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </ImageContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosRounded />
            </Arrow>
        </SliderContainer>
    )
}
export default Slider;


const SliderContainer = styled.div`
  //width: 100%;
  //height: 20em;
  display: flex;
  //here no flex
  position: relative;
  //height: 55%;
  //margin-top: 80px;
  //height: fit-content;
`
const Arrow = withTheme(styled('div')`
  //background-color: ${props => props.theme.palette.secondary.main};
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
  z-index: 50;
`)

const Wrapper = styled.div`
  //height: 100%;
  height: fit-content;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  height: fit-content;
  //height: 100%;
`
const ImageContainer = withTheme(styled.div`
  margin: 2rem 5rem;
  padding: 1rem;
  text-align: center;
  //here
  //width: 100vw;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
`)
const Title = styled.h1``;
const Desc = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
// const InfoContainer = styled.div`
//   flex: 1;
// `
const Image = styled.img`  
  width: 80%;
  
`

