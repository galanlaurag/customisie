import React, {useEffect, useState} from 'react';
import styled from "styled-components/macro";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";


const Product = ({ item })=> {
    const location = useLocation();
    console.log(location.pathname.split("/")[1]);

    const [product, setProduct] = useState((0));

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res);
                // setProduct(res.data)
            } catch(err) {
            }
        }
        getProducts();
    });

    return (
        <Container>
            {/*<Link to={`/products/${product._id}`}/>*/}

                    {/*{product.map((item) => <Product item={item} key={item.id} />)}*/}

        </Container>
    )
}

export default Product;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`