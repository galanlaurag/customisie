import React from 'react';
import {withTheme} from "@material-ui/core/styles";
import styled, {css} from "styled-components/macro";
import { LogoIcon, LogoText } from './Header'
import {Link} from "react-router-dom";
import {device} from "../responsive&generalStyling";

const Footer = () => {
    return (
        <footer style={{position: "relative"}}>
            <FooterContainer>
                <Left>
                    <NavbarLinkHome to={"/"}>
                        <Logo>
                            <LogoIcon>
                                <Image src="/assets/logo.png" />
                            </LogoIcon>
                            <LogoText>
                                Customisie
                            </LogoText>
                        </Logo>
                    </NavbarLinkHome>
                    <Desc>Handmade crochet teddy bears customisable by you!</Desc>
                    <SocialContainer>
                        <Link to={{ pathname: "https://instagram.com/customisie?igshid=YmMyMTA2M2Y=" }} target="_blank">
                            <SocialIcon color="FFF">
                                <InstagramIcon src="/assets/instagram.png" />
                            </SocialIcon>
                        </Link>
                        <Link to={{ pathname: "https://www.tiktok.com/" }} target="_blank">
                            <SocialIcon color="FFF">
                                <TikTokIcon src="/assets/tiktok.png" />
                            </SocialIcon>
                        </Link>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful links</Title>
                    <List>
                        <ListItem><NavbarLink to={"/"}><MenuItem>Home</MenuItem></NavbarLink></ListItem>
                        <ListItem><NavbarLink to={"/cart"}><MenuItem>Cart</MenuItem></NavbarLink></ListItem>
                        <ListItem><NavbarLink to={"/about"}><MenuItem>About</MenuItem></NavbarLink></ListItem>
                        <ListItem><NavbarLink to={"/privacy-policy"}><MenuItem>Privacy policy</MenuItem></NavbarLink></ListItem>
                        <ListItem><NavbarLink to={"/terms-conditions"}><MenuItem>Terms & conditions</MenuItem></NavbarLink></ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <NavbarLink to={"/contact"}><MenuItem>Contact page</MenuItem></NavbarLink>
                    </ContactItem>
                    <ContactItem>
                        Krakow, Poland
                    </ContactItem>
                    <ContactItem>
                        contact@customisie.pl
                    </ContactItem>
                </Right>
            </FooterContainer>
        </footer>
    )
}
export default Footer;

//general
const FooterContainer = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.default.main};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 2rem 0 2rem;
  justify-content: space-between;
  @media ${device.tabletL} {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }
`)
const footerPart = css`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 2rem;
  @media ${device.tabletL} {
    padding-bottom: 1.5rem;
  }
`;
const Title = styled.h1`
  color: #fff;
  margin: 0 0 1rem 0;
  @media ${device.tabletL} {
    font-size: 1.5rem;
  }
`

//left
const Left = styled.div`
  ${footerPart};
  @media ${device.tabletM} {
    width: 100%;
  }
`
const NavbarLinkHome = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0;
`;
const Logo = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 1rem 0;
  @media ${device.tabletL} {
    font-size: 1.5rem;
  }
`
const Image = styled.img`  
  height: 1rem;
`
const Desc = styled.div``;
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  background-color: #fff;
  width: 40px;
  height: 40px;
  margin: 0.5rem 0.5rem 0 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const socialMediaIcon = css`
  width: 1rem;
  height: 1rem;
  font-size: 1.5rem;
`
const InstagramIcon = styled.img`
  ${socialMediaIcon};
`;
const TikTokIcon = styled.img`
  ${socialMediaIcon};
`;

//middle
const Center = styled.div`
  ${footerPart};
  @media ${device.tabletM} {
    width: 45%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`
const List = styled.ul`
  margin: 0;
  padding-left: 20px;
`;
const ListItem = styled.li``;
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 0;
`;
export const MenuItem = styled.div`
  cursor: pointer;
`;

//right
const Right = styled.div`
  ${footerPart};
  @media ${device.tabletM} {
    width: 45%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`
const ContactItem = styled.div`
  margin: 0 0 0.5rem 0;
`;