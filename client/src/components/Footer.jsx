import React from 'react';
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {Instagram} from "@material-ui/icons";

const Footer = () => {
    return (
        <footer style={{position: "relative"}}>
            <Container>
                <Left>
                    <Logo>
                        <Image src="/assets/krolik.png" />
                    </Logo>
                    <Desc>Opis</Desc>
                    <SocialContainer>
                        <SocialIcon color="FFF">
                            <Instagram />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Privacy policy</ListItem>
                        <ListItem>Terms & conditions</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        Address
                    </ContactItem>
                    <ContactItem>
                        Email address
                    </ContactItem>
                    <ContactItem>
                        Phone number
                    </ContactItem>
                </Right>
            </Container>
        </footer>
    )
}
export default Footer;

export const Container = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.default.main};
  height: 100%;
  display: flex;
`)
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`
const Logo = styled.h1`
  flex: 1;
`
const Image = styled.img`  
  height: 1em;
`
const Desc = styled.div`
  flex: 1;
`
const SocialContainer = styled.div`
  flex: 1;
`
const SocialIcon = styled.div`
  background-color: #${props => props.color};
  flex: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 5px 20px;
`
const Title = styled.h1`
  flex: 1;
  padding: 5px 20px;
`
const List = styled.ul`
  flex: 1;
  padding: 5px 20px;
`
const ListItem = styled.li`
`

const Right = styled.div`
  flex: 1;
  padding: 5px 20px;
`
const ContactItem = styled.div`
  
`