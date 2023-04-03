import React from 'react';
import styled from 'styled-components/macro';
import { withTheme } from "@material-ui/core/styles"
import {device} from '../responsive&generalStyling';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';

const Slider = () => {
    return (
        <SliderContainer>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
            />
            <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
            <SwiperWrapper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    pauseOnMouseEnter: true
                }}
             >
                <SwiperSlide style={{padding: "10px 0"}}>
                    <ImageContainer>
                        <Image src={`/assets/teddyBears1.png`}/>
                        <Title>CUSTOMISATION</Title>
                        <Desc>Customisie - teddy bears customised by YOU!</Desc>
                    </ImageContainer>
                </SwiperSlide>
                <SwiperSlide style={{padding: "10px 0"}}>
                    <ImageContainer>
                        <Image src={`/assets/teddyBears2.png`}/>
                        <Title>UNIQUENESS</Title>
                        <Desc>390625 possible combinations of unique teddy bears!</Desc>
                    </ImageContainer>
                </SwiperSlide>
                <SwiperSlide style={{padding: "10px 0"}}>
                    <ImageContainer className="flasher">
                        <Image src={`/assets/teddyBears3.png`}/>
                        <Title>QUALITY</Title>
                        <Desc>Handmade using highest-quality materials!</Desc>
                    </ImageContainer>
                </SwiperSlide>
            </SwiperWrapper>
        </SliderContainer>
    )
}
export default Slider;

const SliderContainer = styled.div`
  display: flex;
  position: relative;
`
const SwiperWrapper = withTheme(styled(Swiper)`
  --swiper-pagination-color: ${props => props.theme.palette.primary.main};
  --swiper-navigation-color: ${props => props.theme.palette.primary.main};
  --swiper-pagination-bottom: 1.5rem;
  --swiper-pagination-bullet-size: 1rem;
  @media ${device.tabletM} {
    --swiper-navigation-size: 2.5rem;
  }
  @media ${device.tabletS} {
    --swiper-navigation-size: 2rem;
  }
  @media ${device.mobileM} {
    --swiper-navigation-size: 1.5rem;
  }
`)
const ImageContainer = withTheme(styled.div`
  margin: 0 4rem;
  height: 65vh;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  @media ${device.laptop} {
    margin: 0 3rem;
    padding: 2rem 1rem;
    height: 60vh;
  }
  @media ${device.tabletL} {
    height: 55vh;
  }
  @media ${device.tabletM} {
    margin: 0 0.5rem;
    padding: 1rem;
  }
  @media ${device.mobileM} {
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
`)
const Desc = styled.p`
  margin : 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Image = styled.img`  
  margin: 0 auto;
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
const Title = styled.h1`
  @media ${device.tabletS} {
    margin: 0;
  }
`

