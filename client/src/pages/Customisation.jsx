import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {withTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Product from "../components/Product";
import {publicRequest} from "../requestMethods";


const Customisation = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("products");
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

