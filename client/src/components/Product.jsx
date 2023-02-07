import styled from "styled-components";
import mergeImages from "merge-images";
import React from "react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";

const Product = ({item}) => {

    //mergin multiple images - works DO NOT DELETE
    async function mergeMultipleImages() {
        await mergeImages(['http://localhost:3000/static/media/uszy.95f309a756b72a842cfa.png', 'http://localhost:3000/static/media/glowa.8843494bc3e645fc3839.png'])
            .then((mergedSrc) => {
                document.getElementById("mis").src = mergedSrc;
            })
            .catch(err => console.log(err));
    }
    mergeMultipleImages();


    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log("location = " + location.pathname);
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try {
                //works for individual product
                // const res = await publicRequest.get("products/find/" + id);
                //works for all products
                // const res = await publicRequest.get(`products/find/${item._id}`);
                //works for both!!
                const res = await publicRequest.get(
                    item
                        ? `products/${item._id}`
                        : "products/" + id
                );
                console.log(res);
                setProduct(res.data);
            } catch(err) {
            }
        }
        getProducts();
    }, [item, id]);


    return (
        <Container>
            {/*local img*/}
            <Image id="mis"/>

            {/*img from database*/}
            <Image src={product.img} key={product._id}/>
            <Info>{product.title}
            </Info>
            <Info>{product.desc}
            </Info>

            {/*<Image src={item.img} key={item._id}/>*/}
            {/*<Info>{item.title}*/}
            {/*</Info>*/}
            {/*<Info>{item.desc}*/}
            {/*</Info>*/}
        </Container>
    );
};

export default Product;

const Info = styled.div`
   display: flex;
   flex-direction: column;
 `;

const Container = styled.div`
   height: 350px;
   display: flex;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
