import React from 'react';
import styled from 'styled-components/macro';
import {PersonOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";
import {useSelector} from "react-redux";
// import Pay from "../components/Pay";
// import Success from "../components/Success";

const Header = () => {
    const cartQuantity = useSelector(state=>state.cart.quantity);
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("products/");
                console.log(res);
                setProducts(res.data);
            } catch(err) {
            }
        }
        getProducts();
    }, []);
    return (
        <header>
            <Container>
                <Wrapper>
                    <Left>
                        {/*<Language>EN</Language>*/}
                        <NavbarLink to={"/"}>
                            <Logo>
                                <LogoIcon>
                                    <Image src={require('../assets/krolik.png')} />
                                </LogoIcon>
                                <LogoText>
                                    Customisie
                                </LogoText>
                            </Logo>
                        </NavbarLink>
                    </Left>
                    <Right>
                        {/*one products with url with id*/}
                        {products.map((item) => <NavbarLink to={`/product/${item._id}`} key={item._id} ><MenuItem>Customize</MenuItem></NavbarLink>)}
                        {/*all products customisation page with confirm button*/}
                        {/*<NavbarLink to={"/products"}><MenuItem>Customize</MenuItem></NavbarLink>*/}
                        <NavbarLink to={"/about"}><MenuItem>About</MenuItem></NavbarLink>
                        <NavbarLink to={"/contact"}><MenuItem>Contact</MenuItem></NavbarLink>
                        <NavbarLink to={"/register"}><MenuItem><PersonOutlined /></MenuItem></NavbarLink>
                        <NavbarLink to={"/cart"}><MenuItem>
                            <Badge overlap="rectangular" badgeContent={cartQuantity} color='secondary'>
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
// const Language = styled.span`
//   font-size: 1.5rem;
//   cursor: pointer;
//   margin: 0 0.5em;
// `
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