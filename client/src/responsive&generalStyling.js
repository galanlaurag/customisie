import styled, {keyframes} from "styled-components/macro";
import { createGlobalStyle } from 'styled-components';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '500px',
    tabletM: '600px',
    tabletL: '768px',
    laptop: '1024px',
}
export const device = {
    mobileS: `screen and (max-width: ${size.mobileS})`,
    mobileM: `screen and (max-width: ${size.mobileM})`,
    mobileL: `screen and (max-width: ${size.mobileL})`,
    tabletS: `screen and (max-width: ${size.tabletS})`,
    tabletM: `screen and (max-width: ${size.tabletM})`,
    tabletL: `screen and (max-width: ${size.tabletL})`,
    laptop: `screen and (max-width: ${size.laptop})`,
};

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", sans-serif;
  }
  .animate {
    animation: none;
    opacity: 1 !important;
    transform: translateX(0) translateY(0) scale(1);
  }
`
export const Main = styled.main`
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  background-color: #F4EBE6;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;
export const BackgroundImage = styled.img`
  display: block;
  position: absolute;
  opacity: 0.2;
  padding: 0;
  margin: 0;
  bottom: 0;
  width: 100%;
  align-self: center;
  @media ${device.laptop} {
    max-height: 450px;
    width: auto;
  }
  @media ${device.tabletL} {
    max-height: 400px;
  }
  @media ${device.tabletM} {
    max-height: 350px;
  }
  @media ${device.tabletS} {
    max-height: 300px;
  }
`
export const BackgroundImageTop = styled(BackgroundImage)`
  top: 0;
`
export const GeneralButton = styled.button`
  cursor: pointer;
  width: fit-content;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px #98878F;
  background-color: #4C4F6B;
  color: #fff;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px #4C4F6B;
    transform: scale(1.02);
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`

//animations
export const toRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`
export const toLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`
export const toTop = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`
export const showOpacity =  keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`