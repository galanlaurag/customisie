import React from 'react';
import styled from "styled-components/macro";
import {Add, Remove, Delete} from "@material-ui/icons";
import {withTheme} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
// import axios from "axios";
// import Product from "../components/Product";
import {useSelector} from "react-redux";
import {increaseProductQuantity, decreaseProductQuantity, clearCart} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {publicRequest} from "../requestMethods";
import {userRequest} from "../requestMethods";
const KEY = process.env.REACT_APP_STRIPE;


const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("products/");
                // console.log(res);
                return setProducts(res.data);
            } catch(err) {
                return console.log(err);
            }
        }
        getProducts();
    }, []);

    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    //payment implementation
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => { setStripeToken(token);}
    const navigate = useNavigate();
    useEffect(() => {
        const makeRequest = async() => {
            try {
                //TODO change to userRequest later when authentication implemented
                const res = await userRequest.post("/checkout/payment", {
                  tokenId: stripeToken.id,
                  amount: cart.total*100,
                })
                // console.log(res.data)
                return navigate('/success', {stripeData: res.data, products: cart})
            } catch(err) {
                return console.log(err);
            }
        }
        stripeToken && makeRequest();
    },[stripeToken, cart, navigate])

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
                    {stripeToken ? (<span>Processing. Please wait...</span>) : (
                        <StripeCheckout
                            name="Customisie"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}>
                            <TopButton>Checkout now</TopButton>
                        </StripeCheckout>
                    )}
                </Top>
                <Bottom>
                    <Info>
                        <CartProduct>
                            {cart.products.map((product) => (
                            <ProductDetail key={product.size+product.headShape+product.earsShape+product.armsShape+product.legsShape+product.headColour+product.eyesColour+ product.earsColour+product.innerEarsColour+product.armsColour+product.handsColour+product.legsColour+product.feetColour+product.noseColour}>
                                {/*{products.map((item) => <Product item={item} key={item._id} />)}*/}
                                {/*<Image src={require('../assets/krolik.png')} />*/}


                                    {/*<Image src={product.img} />*/}
                                <ImageContainer>
                                    {/*head*/}
                                    <Image id="headImg" src={`/assets/head/${product.headColour}/${product.headShape}.png`} style={{zIndex: "11"}}/>
                                    {product.headShape === "Eye patch" &&
                                        <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour}/Eye.png`} style={{zIndex: "12"}}/>
                                    }
                                    {product.headShape === "Big eyes" &&
                                        <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour}/Eyes.png`} style={{zIndex: "12"}}/>
                                    }
                                    {product.headShape === "Regular" &&
                                        <Image id="noseImg" src={`/assets/nose/${product.noseColour}/Nose.png`} style={{zIndex: "12"}}/>
                                    }
                                    {/*ears*/}
                                    <Image id="earsImg" src={`/assets/ears/${product.earsColour}/${product.earsShape}.png`} style={{zIndex: "10"}}/>
                                    {product.earsShape === "Round" &&
                                        <Image id="innerEarsImg" src={`/assets/innerEars/${product.innerEarsColour}/Inner ears.png`} style={{zIndex: "11"}}/>
                                    }
                                    {/*arms*/}
                                    <Image id="amrsImg" src={`/assets/arms/${product.armsColour}/${product.armsShape}.png`} style={{zIndex: "10"}}/>
                                    {product.armsShape === "With hands" &&
                                        <Image id="handsImg" src={`/assets/hands/${product.handsColour}/Hands.png`} style={{zIndex: "11"}}/>
                                    }
                                    {product.armsShape === "With hands & fingernails" &&
                                        <Image id="handsImg" src={`/assets/hands/${product.handsColour}/Hands & fingernails.png`} style={{zIndex: "11"}}/>
                                    }
                                    {/*legs*/}
                                    <Image id="legsImg" src={`/assets/legs/${product.legsColour}/${product.legsShape}.png`} style={{zIndex: "9"}}/>
                                    {product.legsShape === "With feet" &&
                                        <Image id="feetImg" src={`/assets/feet/${product.feetColour}/Feet.png`} style={{zIndex: "10"}}/>
                                    }
                                    {product.legsShape === "With feet & toenails" &&
                                        <Image id="feetImg" src={`/assets/feet/${product.feetColour}/Feet & toenails.png`} style={{zIndex: "10"}}/>
                                    }
                                </ImageContainer>


                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Delete style={{cursor:"pointer"}} onClick={() => {dispatch(clearCart({size: product.size, headShape: product.headShape, earsShape: product.earsShape, armsShape: product.armsShape,
                                                legsShape: product.legsShape, headColour: product.headColour, eyesColour: product.eyesColour, earsColour: product.earsColour,
                                                innerEarsColour: product.innerEarsColour, armsColour: product.armsColour, handsColour: product.handsColour,
                                                legsColour: product.legsColour, feetColour: product.feetColour, noseColour: product.noseColour}))}} />
                                            <Remove style={{cursor:"pointer"}} onClick={() => {product.productQuantity>1 && dispatch(decreaseProductQuantity({size: product.size, headShape: product.headShape, earsShape: product.earsShape, armsShape: product.armsShape,
                                                legsShape: product.legsShape, headColour: product.headColour, eyesColour: product.eyesColour, earsColour: product.earsColour,
                                                innerEarsColour: product.innerEarsColour, armsColour: product.armsColour, handsColour: product.handsColour,
                                                legsColour: product.legsColour, feetColour: product.feetColour, noseColour: product.noseColour}))}} />
                                            <ProductAmount>{product.productQuantity}</ProductAmount>
                                            <Add style={{cursor:"pointer"}} onClick={() => {dispatch(increaseProductQuantity({size: product.size, headShape: product.headShape, earsShape: product.earsShape, armsShape: product.armsShape,
                                                legsShape: product.legsShape, headColour: product.headColour, eyesColour: product.eyesColour, earsColour: product.earsColour,
                                                innerEarsColour: product.innerEarsColour, armsColour: product.armsColour, handsColour: product.handsColour,
                                                legsColour: product.legsColour, feetColour: product.feetColour, noseColour: product.noseColour}))}} />
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
                            <SummaryItemPrice>$ {cart.total - 20}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>$20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        {stripeToken ? (<span>Processing. Please wait...</span>) : (
                            <StripeCheckout
                                name="Customisie"
                                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                                billingAddress
                                shippingAddress
                                description={`Your total is $${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={KEY}>
                                <Button>Checkout now</Button>
                            </StripeCheckout>
                        )}
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
  margin-bottom: 1em;
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
  flex-direction: column;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  //position: relative;
`
const ImageContainer = styled.div`
  position: relative;
`
const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 25em;
`
const PriceDetail = styled.span`
  flex: 1;
  margin-left: 15em;
  height: 25em;
  position: relative;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10em;
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
  height: fit-content;
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
