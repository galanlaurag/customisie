import React from 'react';
import styled from "styled-components/macro";
import {Add, Remove} from "@material-ui/icons";
import {withTheme} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../components/Product";

const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res);
                setProducts(res.data);
            } catch(err) {
            }
        }
        getProducts();
    }, []);

    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (type) => {
        if(type === "dec") {
            quantity>1 && setQuantity(quantity-1);
        } else {
            setQuantity(quantity+1);
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Your cart</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                        <TopText>Shopping bag (2)</TopText>
                    <TopButton>Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <CartProduct>
                            <ProductDetail>
                                {products.map((item) => <Product item={item} key={item._id} />)}
                                {/*<Image src={require('../assets/krolik.png')} />*/}
                                <Details>
                                    <ProductName>Customised Crochet Teddy Bear</ProductName>
                                    <ProductSize>Large</ProductSize>
                                    <FilterSize>
                                        <FilterSizeOption>Small</FilterSizeOption>
                                        <FilterSizeOption>Regular</FilterSizeOption>
                                        <FilterSizeOption>Large</FilterSizeOption>
                                    </FilterSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove style={{cursor:"pointer"}} onClick={() => handleQuantity("dec")} />
                                    <ProductAmount>{quantity}</ProductAmount>
                                    <Add style={{cursor:"pointer"}} onClick={() => handleQuantity("inc")} />
                                </ProductAmountContainer>
                                <ProductPrice>$999</ProductPrice>
                            </PriceDetail>
                        </CartProduct>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$999</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>$20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$1019</SummaryItemPrice>
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
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

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
// const Image = styled.img`
//   height: 25em;
// `
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const ProductName = styled.span`
`
const ProductSize = styled.span`
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSizeOption = styled.option`
`;
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
