import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
// import Products from "../components/Products";
import {withTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
// import {useLocation} from "react-router";
import Product from "../components/Product";
import axios from "axios";


const Customisation = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products?category=test");
                console.log(res);
                setProducts(res.data);
            } catch(err) {
            }
        }
        getProducts();
    }, []);

    return (
        <Container>
            {products.map((item) => <Product item={item} key={item._id} />)}
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

