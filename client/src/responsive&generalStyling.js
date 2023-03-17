import styled from "styled-components/macro";

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

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const BackgroundImage = styled.img`
  display: block;
  position: absolute;
  opacity: 0.3;
  width: 100%;
  padding: 0;
  margin: 0;
  bottom: 0;
`