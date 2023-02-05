import React from 'react';
import styled from 'styled-components/macro';
import {PersonOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
// import Pay from "../components/Pay";
// import Success from "../components/Success";

const Header = () => {
    return (
        <header>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <Logo>
                            <LogoIcon>
                                <Image src={require('../assets/krolik.png')} />
                            </LogoIcon>
                            <LogoText>
                                Customisie
                            </LogoText>
                        </Logo>
                    </Left>
                    <Right>
                        <NavbarLink to={"/customisation"}><MenuItem>Customize</MenuItem></NavbarLink>
                        <NavbarLink to={"/about"}><MenuItem>About</MenuItem></NavbarLink>
                        <NavbarLink to={"/contact"}><MenuItem>Contact</MenuItem></NavbarLink>
                        <NavbarLink to={"/register"}><MenuItem><PersonOutlined /></MenuItem></NavbarLink>
                        <NavbarLink to={"/cart"}><MenuItem>
                            <Badge overlap="rectangular" badgeContent={7} color='secondary'>
                                <ShoppingCartOutlined style={{marginBottom: "10px"}}/>
                            </Badge>
                        </MenuItem></NavbarLink>
                    </Right>
                </Wrapper>
            </Container>
        </header>
    )
}
export default Header;

const Container = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.fourth.main};
  height: 60px;
  font-size: 1.5rem;
  margin: 0;
`)
const NavbarLink = withTheme(styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.fourth.main};
`)
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin: 0 1em;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`
const Language = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 0.5em;
`
const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
`
const LogoIcon = styled.div`
  margin-left: 0.5em;
`
const Image = styled.img`  
  height: 1em;
`
const LogoText = styled(LogoIcon)`
`

const Right = styled.div`
  flex: 3;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 0.5em;
  height: 1.5rem;
`