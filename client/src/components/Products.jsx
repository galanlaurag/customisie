// import styled from "styled-components";
// import React from "react";
// import {useLocation} from "react-router-dom";
// import {useEffect, useState} from "react";
// import {publicRequest} from "../requestMethods";
//
// const Product = ({item}) => {
//     const location = useLocation();
//     const id = location.pathname.split("/")[3];
//     const [product, setProduct] = useState([]);
//     useEffect(() =>{
//         const getProducts = async () => {
//             try {
//                 //works for all products
//                 const res = await publicRequest.get(`products/find/${item._id}`);
//                 console.log(res);
//                 setProduct(res.data);
//             } catch(err) {
//             }
//         }
//         getProducts();
//     }, [id]);
//
//
//     return (
//         <Container>
//             <Image src={product.img} key={product._id}/>
//             <Info>{product.title}
//             </Info>
//             <Info>{product.desc}
//             </Info>
//         </Container>
//     );
// };
//
// export default Product;
//
// const Info = styled.div`
//    display: flex;
//    flex-direction: column;
//  `;
// const Container = styled.div`
//    height: 350px;
//    display: flex;
// `;
// const Image = styled.img`
//   height: 75%;
//   z-index: 2;
// `;




// import React, {useEffect, useState} from 'react';
// import styled from "styled-components/macro";
// import {Link, useLocation} from "react-router-dom";
// import axios from "axios";
// import Product from "./Product";
//
//
// const Products = ()=> {
//     const location = useLocation();
//     console.log(location.pathname.split("/")[1]);
//
//     const [product, setProduct] = useState();
//
//     useEffect(() =>{
//         const getProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/api/products");
//                 console.log(res);
//                 setProduct(res.data);
//             } catch(err) {
//             }
//         }
//         getProducts();
//     }, []);
//
//     return (
//         <Container>
//
//             {/*{product?.desc}*/}
//             {/*{product.content}*/}
//             {/*<Product item={item} key={item.id} />*/}
//             {/*<Link to={`/products/${product._id}`}/>*/}
//             {/*<Link to={`/products/${product._id}`}/>*/}
//             {/*{product(item)}*/}
//
//                     {/*{product.find((item) => <Mis item={item} key={item.id} />)}*/}
//
//             {/*<Mis item={item} key={item.id} />*/}
//
//
//             {/*{cat*/}
//             {/*    ? filteredProducts.map((item) => <Product item={item} key={item.id} />)*/}
//             {/*    : products*/}
//             {/*        .slice(0, 8)*/}
//             {/*        .map((item) => <Product item={item} key={item.id} />)}*/}
//
//         </Container>
//     )
// }
//
// export default Products;
//
// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;
// `
//


// import React, {useEffect, useState} from 'react';
// import styled from "styled-components/macro";
// import {Link, useLocation} from "react-router-dom";
// import axios from "axios";
// import Product from "./Product";
// import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
//
//
// const Products = () => {
//     const location = useLocation();
//     console.log("ProductList")
//     console.log(location)
//     const cat = location.pathname.split("/")[2];
//     console.log("ProductList2")
//     console.log(cat);
//     const [products, setProducts] = useState([]);
//
//     useEffect(() =>{
//         const getProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/api/products");
//                 console.log(res);
//                 setProducts(res.data);
//             } catch(err) {
//             }
//         }
//         getProducts();
//     }, []);
//
//
//
//     return (
//         <Container>
//
//             {/*{products.map((item) => { return console.log("item" + item.img); <Product item={item} key={item._id} />})}*/}
//             {products.map((item) => { return <Product item={item} key={item._id} />})}
//
//
//         </Container>
//     )
// }
//
// export default Products;
//
//
// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;
// `






// import React, {useEffect, useState} from 'react';
// import styled from "styled-components/macro";
// import {Link, useLocation} from "react-router-dom";
// import axios from "axios";
// import Product from "./Product";
//
//
// const Products = ({ cat, filters }) => {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//
//     useEffect(() => {
//         const getProducts = async () => {
//             try {
//                 const res = await axios.get(
//                     cat
//                         ? `http://localhost:5000/api/products?category=${cat}`
//                         : "http://localhost:5000/api/products"
//                 );
//                 setProducts(res.data);
//                 console.log("Products")
//                 console.log(res.data)
//             } catch (err) {}
//         };
//         getProducts();
//     }, [cat]);
//
//     useEffect(() => {
//         cat &&
//         setFilteredProducts(
//             products.filter((item) =>
//                 Object.entries(filters).every(([key, value]) =>
//                     item[key].includes(value)
//                 )
//             )
//         );
//     }, [products, cat, filters]);
//
//     return (
//         <Container>
//
//             {cat
//                 ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
//                 : products
//                     .map((item) => <Product item={item} key={item.id} />)}
//
//         </Container>
//     )
// }
//
// export default Products;
//
// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;
// `