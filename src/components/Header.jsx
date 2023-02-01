import React from 'react';
import styled from 'styled-components/macro';
import {PersonOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles"

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
                        <MenuItem>Customize</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Contact</MenuItem>
                        <MenuItem><PersonOutlined /></MenuItem>
                        <MenuItem>
                            <Badge overlap="rectangular" badgeContent={7} color='secondary'>
                                <ShoppingCartOutlined style={{marginBottom: "10px"}}/>
                            </Badge>
                        </MenuItem>
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