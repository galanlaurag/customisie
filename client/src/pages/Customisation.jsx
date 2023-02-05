import React from 'react';
import styled from 'styled-components/macro';
import Product from "../components/Product";
import {withTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


const Customisation = () => {
    return (
        <Container>
            <Product />
            <Button>
                <NavbarLink to={"/cart"}>Confirm</NavbarLink>
            </Button>
        </Container>
    )
}
export default Customisation;

const Container = styled.div``
const NavbarLink = withTheme(styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.primary.main};
`)
const Button = styled.button`
`