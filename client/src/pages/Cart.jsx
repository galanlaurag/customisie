import React from 'react';
import styled from "styled-components/macro";
import {Add, Remove} from "@material-ui/icons";
import {withTheme} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import axios from "axios";
// import Product from "../components/Product";
import {useSelector} from "react-redux";
import {increaseProductQuantity, decreaseProductQuantity} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res);
                return setProducts(res.data);
            } catch(err) {
                return console.log(err);
            }
        }
        getProducts();
    }, []);

    const [quantity, setQuantity] = useState(1);
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const handleQuantity = (type) => {
        if(type === "dec") {
            //update number next to buttons
            quantity>1 && setQuantity(quantity-1);
            //update cart
            dispatch(
                decreaseProductQuantity({id: cart.products._id, decrement: 1})
            )
        } else {
            //update number next to buttons
            setQuantity(quantity+1);
            //update cart
            dispatch(
                increaseProductQuantity({id: cart.products._id, increment: 1})
            )
        }
    }

    //add code to prevent from adding separate items with same key - instead add productQuantity
    return (
        <Container>
            <Wrapper>
                <Title>Your cart</Title>
                <Top>
                    {products.map((item) => (
                        <CartLink to={`/product/${item._id}`} key={item._id} >
                            <TopButton>Customise another teddy bear</TopButton>
                        </CartLink>
                    ))}
                    <TopText>Shopping bag ({cart.quantity})</TopText>
                    <TopButton>Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <CartProduct>
                            {/*in the future change key to img as it will be unique for each different product - id will remain the same for each product so will not be unique*/}
                            {cart.products.map((product) => (
                            <ProductDetail key={product._id}>
                                {/*{products.map((item) => <Product item={item} key={item._id} />)}*/}
                                {/*<Image src={require('../assets/krolik.png')} />*/}

                                    <Image src={product.img} />
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Remove style={{cursor:"pointer"}}  onClick={() => handleQuantity("dec")} />
                                            <ProductAmount>{quantity}</ProductAmount>
                                            <Add style={{cursor:"pointer"}} onClick={() => handleQuantity("inc")} />
                                        </ProductAmountContainer>
                                        <ProductPrice>{product.price}</ProductPrice>
                                    </PriceDetail>
                                </ProductDetail>
                                    ))}
                        </CartProduct>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>$20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total + 20}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}
export default Cart;

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5em;
`
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
`
const TopText = styled.span`
  margin: 0 10px;
`
const CartLink = withTheme(styled(Link)`
   text-decoration: none;
   color: ${props => props.theme.palette.primary.main};
 `)

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  height: 25em;
`
const PriceDetail = styled.span`
    flex: 1;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 1.5rem;
`

const Summary = withTheme(styled('div')`
  border: 1px solid ${props => props.theme.palette.primary.main};
  flex: 1;
  padding: 20px;
  border-radius: 10px;
`)
const SummaryTitle = styled.h1`
`
const SummaryItem = withTheme(styled('div')`
  color: ${props => props.type === "total" && props.theme.palette.primary.main};
  font-weight: ${props => props.type === "total" && "900"};
  font-size: ${props => props.type === "total" && "1.5rem"};
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`)
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
`
