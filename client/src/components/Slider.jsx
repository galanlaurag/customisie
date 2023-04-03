import React, {useEffect, useRef} from 'react';
import styled from 'styled-components/macro';
import { withTheme } from "@material-ui/core/styles"
import {ArrowBackIosRounded, ArrowForwardIosRounded} from "@material-ui/icons";
import {useState} from "react";
import {device} from '../responsive&generalStyling';

const sliderItems = [
    {
        id: 1,
        img: "/assets/teddyBears1.png",
        title: "CUSTOMISATION",
        desc: "Customisie - teddy bears customised by YOU!",
    },
    {
        id: 2,
        img: "/assets/teddyBears2.png",
        title: "UNIQUENESS",
        desc: "390625 possible combinations of unique teddy bears!",
    },
    {
        id: 3,
        img: "/assets/teddyBears3.png",
        title: "QUALITY",
        desc: "Handmade using highest-quality materials!",
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

    const timerRef = useRef(null);
    const [auto, setAuto] = useState(true);
    useEffect(() => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            if (auto) {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
            }
        }, 3500);
        return ()=>clearTimeout(timerRef.current);
    }, [auto, slideIndex]);
    const onHover = () => {
        setAuto(auto => !auto)
    }

    return (
        <SliderContainer>
            <style> {`
            @keyframes flasher {
                from {
                // background: red;
                opacity: 0;
            }
                to {
                opacity: 1;
                // background: green;
            }
            }

                .flasher {
                display: block;
                animation: flasher 1s;
                // background: red;
                opacity: 1;
                // color: white;
            }
            `}</style>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosRounded />
            </Arrow>
            <Wrapper>
                {sliderItems.map((item) => (
                    //infinite loop
                    <div slideIndex={slideIndex} onMouseOver={onHover} onMouseOut={onHover}>

                        {slideIndex === 0 ? (
                            <Slides>

                            <Slide className="flasher">
                                <ImageContainer>
                                    <Image src={`/assets/teddyBears1.png`}/>
                                    <h1>CUSTOMISATION</h1>
                                    <Desc>Customisie - teddy bears customised by YOU!</Desc>
                                </ImageContainer>
                            </Slide>
                            <HiddenSlide className="flasher">
                                <ImageContainer>
                                    <Image src={`/assets/teddyBears2.png`}/>
                                    <h1>UNIQUENESS</h1>
                                    <Desc>390625 possible combinations of unique teddy bears!</Desc>
                                </ImageContainer>
                            </HiddenSlide>
                            <HiddenSlide className="flasher">
                                <ImageContainer>
                                    <Image src={`/assets/teddyBears3.png`}/>
                                    <h1>QUALITY</h1>
                                    <Desc>Handmade using highest-quality materials!</Desc>
                                </ImageContainer>
                            </HiddenSlide>
                            </Slides>
                        ) : slideIndex === 1 ? (
                            <Slides>
                                <HiddenSlide className="flasher">
                                    <ImageContainer>
                                        <Image src={`/assets/teddyBears1.png`}/>
                                        <h1>CUSTOMISATION</h1>
                                        <Desc>Customisie - teddy bears customised by YOU!</Desc>
                                    </ImageContainer>
                                </HiddenSlide>
                                <Slide className="flasher">
                                    <ImageContainer>
                                        <Image src={`/assets/teddyBears2.png`}/>
                                        <h1>UNIQUENESS</h1>
                                        <Desc>390625 possible combinations of unique teddy bears!</Desc>
                                    </ImageContainer>
                                </Slide>
                                <HiddenSlide className="flasher">
                                    <ImageContainer>
                                        <Image src={`/assets/teddyBears3.png`}/>
                                        <h1>QUALITY</h1>
                                        <Desc>Handmade using highest-quality materials!</Desc>
                                    </ImageContainer>
                                </HiddenSlide>
                            </Slides>
                        ) : (
                            <Slides>
                                <HiddenSlide className="flasher">
                                    <ImageContainer>
                                        <Image src={`/assets/teddyBears1.png`}/>
                                        <h1>CUSTOMISATION</h1>
                                        <Desc>Customisie - teddy bears customised by YOU!</Desc>
                                    </ImageContainer>
                                </HiddenSlide>
                                <HiddenSlide className="flasher">
                                    <ImageContainer>
                                        <Image src={`/assets/teddyBears2.png`}/>
                                        <h1>UNIQUENESS</h1>
                                        <Desc>390625 possible combinations of unique teddy bears!</Desc>
                                    </ImageContainer>
                                </HiddenSlide>
                                <Slide>
                                    <ImageContainer className="flasher">
                                        <Image src={`/assets/teddyBears3.png`}/>
                                        <h1>QUALITY</h1>
                                        <Desc>Handmade using highest-quality materials!</Desc>
                                    </ImageContainer>
                                </Slide>
                            </Slides>
                        )}
                    </div>

                    //loop starting from slide 0 each time
                    // <Slide key={item.id}>
                    //     <ImageContainer >
                    //         <Image src={item.img} />
                    //         <h1>{item.title}</h1>
                    //         <Desc>{item.desc}</Desc>
                    //     </ImageContainer>
                    // </Slide>
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
  display: flex;
  position: relative;
`
const Arrow = withTheme(styled('div')`
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
  @media ${device.laptop} {
    width: 3rem;
  }
  @media ${device.tabletM} {
    width: 2rem;
  }
  @media ${device.mobileL} {
    width: 1rem;
  }
  @media ${device.mobileM} {
    width: 0.5rem;
  }
`)

const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  transition: all 1.5s ease;
  //transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slides = withTheme(styled.div`
  // width: 100%;
  // margin: 0 5rem;
  // //padding: 1rem;
  // text-align: center;
  // background-color: ${props => props.theme.palette.fourth.main};
  // border-radius: 20px;
  // backdrop-filter: blur(10px);
  // box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
`)
const Slide = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  transition: all 1.5s ease;
  height: fit-content;
  visibility: visible;
  opacity: 1;
`
const HiddenSlide = styled(Slide)`
  height: 0;
  width: 0;
  visibility: hidden;
  //opacity: 0;
  transition: all 1.5s ease;
`
const ImageContainer = withTheme(styled.div`
  margin: 0 5rem;
  padding: 1rem;
  text-align: center;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  @media ${device.laptop} {
    margin: 0 4rem;
  }
  @media ${device.tabletM} {
    margin: 0 3rem;
  }
  @media ${device.mobileL} {
    margin: 0 2rem;
  }
  @media ${device.mobileM} {
    margin: 0 1.5rem;
    padding: 0.5rem;
  }
`)
const Desc = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Image = styled.img`  
  width: 75%;
  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.tabletL} {
    width: 85%;
  }
  @media ${device.tabletM} {
    width: 90%;
  }
  @media ${device.tabletS} {
    width: 95%;
  }
`

