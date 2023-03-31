import React from 'react';
import styled from 'styled-components/macro';
import {PersonOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {useState} from "react";
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

    return (
        <header style={{position: "fixed", zIndex: "50", width: "100%", top: "0"}}>
            <Demo>This is a demo version - not a working store (yet:))!</Demo>
            <HeaderContainer>
                    {/*logo & name*/}
                    <Left>
                        {/*<Language>EN</Language>*/}
                        <NavbarLink to={"/"}>
                            <Logo>
                                <LogoIcon>
                                    <Image src="/assets/logo.png" />
                                </LogoIcon>
                                <LogoText>
                                    Customisie
                                </LogoText>
                            </Logo>
                        </NavbarLink>
                    </Left>
                    {/*navbar*/}
                    <HamburgerImg src={`/assets/hamburger.png`} onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
                    <Right className={isNavExpanded && "expanded"} onClick={ () => {{isNavExpanded && setIsNavExpanded(!isNavExpanded)}}}>
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
  @media ${device.mobileL} {
    padding: 0 0.5rem 0 0;
  }
`);
const Demo = withTheme(styled('span')`
  background-color: ${props => props.theme.palette.secondary.main};
  color: #fff;
  height: 20px;
  display: block;
  text-align: center;
`);
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0;
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
    display: none;
    position: absolute;
    top: 80px;
    background-color: ${props => props.theme.palette.primary.main}eb;
    flex-direction: column;
    right: 0;
    width: 100%;
    height: auto;
    &.expanded {
      display: block;
    }
  }
`);

const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 1.5rem;
  height: 2rem;
  @media ${device.tabletL} {
    margin-left: 1rem;
  }
  @media ${device.tabletM} {
    margin-left: 0;
    padding-right: 1rem;
  }
  @media ${device.mobileL} {
    padding-right: 0.5rem;
  }
`;

// const Language = styled.span`
//   font-size: 1.5rem;
//   cursor: pointer;
//   margin: 0 0.5em;
// `