import React from 'react';
import styled from 'styled-components/macro';
import { withTheme } from "@material-ui/core/styles"
import {device} from '../responsive&generalStyling';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';

const Slider = () => {
    return (
        <SliderContainer>
            <link rel="stylesheet" href={`/swiper/swiper.min.css`}/>
            <style>{`
                .swiper-pagination {
                    position: relative;
                    bottom: 4rem !important;
                }
                .swiper-button-next, .swiper-button-prev {
                    top: 29rem;
                }
                  @media ${device.laptop} {
                    .swiper-button-next, .swiper-button-prev {
                        top: 27rem;
                    }
                  }
                  @media ${device.tabletL} {
                    .swiper-button-next, .swiper-button-prev {
                        top: 23rem;
                    }
                  }
                  @media ${device.tabletM} {
                    .swiper-button-next, .swiper-button-prev {
                        top: 18rem
                    }
                    .swiper-pagination {
                        bottom: 5rem !important;
                    }
                  }
                  @media ${device.tabletS} {
                    .swiper-button-next, .swiper-button-prev {
                        top: 17rem;
                    }
                    .swiper-pagination {
                        bottom: 4.5rem !important;
                    }
                  }
                  @media ${device.mobileL} {
                    .swiper-button-next, .swiper-button-prev {
                        top: 14.5rem;
                    }
                    .swiper-pagination {
                        bottom: 4rem !important;
                    }
                  }
                  @media ${device.mobileM} {
                    .swiper-button-next, .swiper-button-prev {
                        top: 13rem;
                    }
                  }
            `}</style>
            <SwiperWrapper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{
                //     delay: 3500,
                //     pauseOnMouseEnter: true,
                //     disableOnInteraction: false,
                // }}
             >
                <SwiperSlide style={{padding: "10px 0"}}>
                    <SlideContainer>
                        <Image1 src={`/assets/teddyBears1.png`}/>
                        <Cont>
                            <h1>CUSTOMISATION</h1>
                            <Desc>Customisie - teddy bears customised by YOU!</Desc>
                        </Cont>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide style={{padding: "10px 0"}}>
                    <SlideContainer>
                        <Image2 src={`/assets/teddyBears2.png`}/>
                        <Cont>
                            <h1>UNIQUENESS</h1>
                            <Desc>390625 possible combinations of unique teddy bears!</Desc>
                        </Cont>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide style={{padding: "10px 0"}}>
                    <SlideContainer className="flasher">
                        <Image3 src={`/assets/teddyBears3.png`}/>
                        <Cont>
                            <h1>QUALITY</h1>
                            <Desc>Handmade using highest-quality materials!</Desc>
                        </Cont>
                    </SlideContainer>
                </SwiperSlide>
            </SwiperWrapper>
            <script src={`/swiper/swiper.min.js`}/>
        </SliderContainer>
    )
}
export default Slider;

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  top: -3rem;
  @media ${device.laptop} {
    top: -2rem;
  }
  @media ${device.tabletL} {
    top: -1.5rem;
  }
  @media ${device.mobileL} {
    top: -1rem;
  }
  @media ${device.mobileM} {
    top: -0.5rem;
  }
`
const SwiperWrapper = withTheme(styled(Swiper)`
  --swiper-pagination-color: ${props => props.theme.palette.primary.main};
  --swiper-navigation-color: ${props => props.theme.palette.primary.main};
  --swiper-pagination-bullet-size: 1rem;
  @media ${device.tabletM} {
    --swiper-navigation-size: 2.5rem;
  }
  @media ${device.tabletS} {
    --swiper-navigation-size: 2rem;
    --swiper-pagination-bullet-size: 0.8rem;
  }
  @media ${device.mobileM} {
    --swiper-navigation-size: 1.5rem;
    --swiper-pagination-bullet-size: 0.6rem;
  }
`)
const SlideContainer = withTheme(styled.div`
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  @media ${device.laptop} {
    margin: 0 3rem;
  }
  @media ${device.tabletM} {
    margin: 0 0.5rem;
    padding: 0;
  }
`)
const Desc = styled.p`
  margin : 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Image = styled.img`
  position: relative;
  margin: 0 auto;
  height: 20rem;
  z-index: 10;
  @media ${device.laptop} {
    height: 18rem;
  }
  @media ${device.tabletL} {
    height: 13.5rem;
    font-size: 1.4rem;
  }
  @media ${device.tabletM} {
    height: 12rem;
  }
  @media ${device.tabletS} {
    height: 11rem;
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    height: 9.5rem;
  }
  @media ${device.mobileM} {
    height: 8rem;
  }
`
const Image1 = styled(Image)`
  bottom: -4rem;
  @media ${device.laptop} {
    bottom: -3rem;
  }
  @media ${device.tabletL} {
    bottom: -2.5rem;
  }
  @media ${device.mobileL} {
    bottom: -2rem;
  }
  @media ${device.mobileM} {
    bottom: -1.5rem;
  }
`
const Image2 = styled(Image)`
  bottom: -3.5rem;
  @media ${device.laptop} {
    bottom: -3rem;
  }
  @media ${device.tabletL} {
    bottom: -2.5rem;
  }
  @media ${device.mobileL} {
    bottom: -1.5rem;
  }
`
const Image3 = styled(Image)`
  bottom: -7.5rem;
  @media ${device.laptop} {
    bottom: -7rem;
  }
  @media ${device.tabletL} {
    bottom: -5rem;
  }
  @media ${device.tabletM} {
    bottom: -4.5rem;
  }
  @media ${device.mobileL} {
    bottom: -3.5rem;
  }
  @media ${device.mobileM} {
    bottom: -3rem;
  }
`

const Cont = withTheme(styled.div`
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  padding: 4rem 1rem 3rem 1rem;
  height: 10rem;
  @media ${device.laptop} {
    height: 9rem;
    padding: 4rem 1rem;
  }
  @media ${device.tabletL} {
    height: 8rem;
    padding: 4rem 1rem 5rem 1rem;
  }
  @media ${device.tabletM} {
    height: 7rem;
    padding: 3rem 1rem 6rem 1rem;
  }
  @media ${device.tabletS} {
    height: 8rem;
  }
  @media ${device.mobileL} {
    padding: 2rem 0.5rem 5rem 0.5rem;
  }
`)

