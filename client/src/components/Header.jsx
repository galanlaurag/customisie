import React from 'react';
import styled from 'styled-components/macro';
import {PersonOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../redux/apiCalls";

const Header = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state=>state.cart.quantity);
    const [products, setProducts] = useState([]);
    const user = useSelector(state => state.user.currentUser);

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("products/");
                return setProducts(res.data);
            } catch(err) {
                return console.log(err);
            }
        }
        getProducts();
    }, []);

    const handleSignout = (e) => {
        e.preventDefault();
        return signout(dispatch);
    }

    return (
        <header>
            <HeaderContainer>
                <Wrapper>
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
                    <Right>
                        {/*one product with id in the url*/}
                        {products.map((item) => <NavbarLink to={`/product/${item._id}`} key={item._id} ><MenuItem>Customise</MenuItem></NavbarLink>)}
                        {/*all products - same result as there is only one product in the database*/}
                        {/*<NavbarLink to={"/products"}><MenuItem>Customise</MenuItem></NavbarLink>*/}
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
                </Wrapper>
            </HeaderContainer>
        </header>
    )
}
export default Header;

//general
const HeaderContainer = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.fourth.main};
  height: 60px;
  font-size: 1.5rem;
  margin: 0;
`);
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin: 0 1rem;
  flex-wrap: wrap;
`;
const NavbarLink = withTheme(styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.fourth.main};
`);

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
const LogoIcon = styled.div`
  margin-left: 0.5rem;
`;
const Image = styled.img`  
  height: 1rem;
`;
const LogoText = styled(LogoIcon)``;

//navbar
const Right = styled.div`
  flex: 3;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  height: 1.5rem;
`;

// const Language = styled.span`
//   font-size: 1.5rem;
//   cursor: pointer;
//   margin: 0 0.5em;
// `