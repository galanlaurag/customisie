import styled from "styled-components/macro";
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
    //font-family: Arial, Helvetica, sans-serif;
  }
`
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
  opacity: 0.3;
  padding: 0;
  margin: 0;
  bottom: 0;
  max-height: 500px;
  align-self: center;
  @media ${device.laptop} {
    max-height: 450px;
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

//header & footer
// export const NavbarLink = styled(Link)`
//   text-decoration: none;
//   color: #fff;
//   margin: auto 0;
// `;
// export const LogoIcon = styled.div`
//   margin-left: 0.5rem;
// `;
// export const LogoText = styled(LogoIcon)``;