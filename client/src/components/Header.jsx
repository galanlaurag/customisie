import React, {useEffect} from 'react';
import styled from 'styled-components/macro';
import {PersonOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../redux/apiCalls";
import { device } from '../responsive&generalStyling';

const Header = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state=>state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleSignout = (e) => {
        e.preventDefault();
        return signout(dispatch);
    }

    //add active class to current page
    const location = useLocation();
    useEffect(() => {
        const divs =  document.querySelectorAll('[class*="NavbarLink"]');
        divs.forEach((div) => {
            if (window.location.href.indexOf(div.getAttribute('href')) !== -1) {
                div.classList.add('active');
            } else {
                div.classList.remove('active');
            }
        });
    }, [location]);

    return (
        <header style={{position: "fixed", zIndex: "50", width: "100%", top: "0"}}>
            <style> {`
            .MuiBadge-anchorOriginTopRightRectangular.MuiBadge-invisible {
                display: none;
            }
            `}</style>
            <Demo>This is a demo version - not a working store (yet:))!</Demo>
            <HeaderContainer>
                    {/*logo & name*/}
                    <Left>
                        {/*<Language>EN</Language>*/}
                        <HomeLink to={"/"}>
                            <Logo>
                                <LogoIcon>
                                    <Image src="/assets/logo.png" />
                                </LogoIcon>
                                <LogoText>
                                    Customisie
                                </LogoText>
                            </Logo>
                        </HomeLink>
                    </Left>
                    {/*navbar*/}
                    <HamburgerImg src={`/assets/hamburger.png`} onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
                    <Right className={isNavExpanded && "expanded"} onClick={() => {isNavExpanded && setIsNavExpanded(!isNavExpanded)}}>
                        <NavbarLink to={"/customise"}><MenuItem>Customise</MenuItem></NavbarLink>
                        <NavbarLink to={"/about"}><MenuItem>About</MenuItem></NavbarLink>
                        <NavbarLink to={"/contact"}><MenuItem>Contact</MenuItem></NavbarLink>
                        {user ? <NavbarLink to={"/myaccount"}><MenuItem><PersonOutlined /></MenuItem></NavbarLink> : <NavbarLink to={"/login"}><MenuItem><PersonOutlined /></MenuItem></NavbarLink>}
                        <NavbarLink to={"/cart"}><MenuItem>
                            <Badge overlap="rectangular" badgeContent={cartQuantity} color='secondary'>
                                <ShoppingCartOutlined style={{marginBottom: "10px"}}/>
                            </Badge>
                        </MenuItem></NavbarLink>
                        {user && <NavbarLink to={"/logout"}><MenuItem onClick={handleSignout}>Log out</MenuItem></NavbarLink>}
                    </Right>
            </HeaderContainer>
        </header>
    )
}
export default Header;

//general
const HeaderContainer = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  height: 60px;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 0.5rem;
  flex-wrap: wrap;
  @media ${device.tabletL} {
    padding: 0 1rem 0 0;
  }
`);
const Demo = withTheme(styled('span')`
  background-color: ${props => props.theme.palette.secondary.main};
  color: #fff;
  height: 20px;
  display: block;
  text-align: center;
`);
const HomeLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 1rem;
  @media ${device.tabletL} {
    margin: 0 0.5rem;
  }
`
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline;
  background-image: linear-gradient(to right, #fff, #fff);
  background-repeat: no-repeat;
  background-size: 0 2px;
  background-position: bottom left;
  transition: background-size 0.3s ease-out;
  margin: 0 1rem;
  height: fit-content;
  &.active {
    background-size: 100% 2px;
  }
  @media ${device.tabletL} {
    margin: 0 0.5rem;
  }
  @media ${device.tabletM} {
    display: block;
    width: fit-content;
    margin: 0.5rem 1rem 0.5rem auto;
  }
`;

//logo & name
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const LogoIcon = styled.div`
  margin: auto auto auto 0.5rem;
`;
const Image = styled.img`  
  height: 3rem;
  vertical-align: middle;
`;
export const LogoText = styled(LogoIcon)``;

//navbar
const HamburgerImg = styled.img`
  cursor: pointer;
  height: 30px;
  display: none;
  @media ${device.tabletM} {
    display: block;
    text-align: right;
  }
`
const Right = withTheme(styled('div')`
  flex: 3;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  height: 1.8rem;
  @media ${device.tabletM} {
    position: absolute;
    top: 80px;
    background-color: ${props => props.theme.palette.primary.main}eb;
    flex-direction: column;
    right: 0;
    width: 100%;
    height: auto;
    transition: all 0.25s;
    overflow: hidden;
    transform-origin: top center;
    transform: scale(1,0);
    display: block;
    &.expanded {
      transform: scale(1);
    }
  }
`);
const MenuItem = styled.div`
  cursor: pointer;
  height: 2rem;
`;

// const Language = styled.span`
//   font-size: 1.5rem;
//   cursor: pointer;
//   margin: 0 0.5em;
// `