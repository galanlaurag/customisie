import React, {useEffect, useState} from 'react';
import Product from "./Product";
import {publicRequest} from "../requestMethods";
import {Container} from '../responsive&generalStyling';

const Customisation = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("products");
                return setProducts(res.data);
            } catch(err) {
                return console.log(err);
            }
        }
        getProducts();
    }, []);

    return (
        <Container>
            {products.map((item) => <Product item={item} key={item._id} />)}
        </Container>
    )
}
export default Customisation;


