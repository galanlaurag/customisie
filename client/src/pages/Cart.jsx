import React from 'react';
import styled from "styled-components/macro";
import {device, Container, BackgroundImage, GlobalStyle} from '../responsive&generalStyling';
import {Add, Remove, Close} from "@material-ui/icons";
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
            <GlobalStyle/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <Wrapper>
                {cart.quantity !== 0 ?
                    <Top>
                        {products.map((item) => (
                            <CartLink to={`/product/${item._id}`} key={item._id} >
                                <TopButton>Customise another teddy bear</TopButton>
                            </CartLink>
                        ))}
                    </Top>
                : <EmptyCartWrapper>
                        <EmptyCart>Your cart is empty</EmptyCart>
                        <CartLink to={"/product/63e403d9576f75935a992dac"}>
                            <EmptyCartButton>Customise your teddy bear!</EmptyCartButton>
                        </CartLink>
                  </EmptyCartWrapper>}
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


                                <CloseBtn style={{cursor:"pointer"}} onClick={() => {dispatch(clearCart({size: product.size, headShape: product.headShape, earsShape: product.earsShape, armsShape: product.armsShape,
                                    legsShape: product.legsShape, headColour: product.headColour, eyesColour: product.eyesColour, earsColour: product.earsColour,
                                    innerEarsColour: product.innerEarsColour, armsColour: product.armsColour, handsColour: product.handsColour,
                                    legsColour: product.legsColour, feetColour: product.feetColour, noseColour: product.noseColour}))}} />

                                <PriceDetails>
                                        <PriceDetail>
                                            <InfoText style={{paddingTop: "3rem"}}>Product amount</InfoText>
                                            <ProductAmountContainer>
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
                                        </PriceDetail>
                                        <PriceDetail>
                                            <InfoText>Price</InfoText>
                                            <ProductPrice>£{product.price}</ProductPrice>
                                        </PriceDetail>
                                        <PriceDetail>
                                            <InfoText>Price total</InfoText>
                                            <ProductPrice>£{product.price*product.productQuantity}</ProductPrice>
                                        </PriceDetail>
                                    </PriceDetails>
                                </ProductDetail>
                                    ))}
                        </CartProduct>
                    </Info>
                    {cart.quantity !== 0 &&
                        <SummaryWrapper>
                            <Summary>
                                <SummaryTitle>Order summary</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>£{cart.total - 20}</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Shipping</SummaryItemText>
                                    <SummaryItemPrice>£20</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice>£{cart.total}</SummaryItemPrice>
                                </SummaryItem>
                                {stripeToken ? (<span>Processing. Please wait...</span>) : (
                                    <StripeCheckout
                                        name="Customisie"
                                        image="/assets/logo2.png"
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
                        </SummaryWrapper>
                    }
                </Bottom>
            </Wrapper>
        </Container>
    )
}
export default Cart;


const Wrapper = styled.div`
  padding: 1rem 2rem;
  @media ${device.laptop} {
    padding: 1rem;
  }
  @media ${device.mobileM} {
    padding: 1rem 0.5rem;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`
const TopButton = withTheme(styled.button`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  background-color: ${props => props.theme.palette.secondary.main};
  color: #fff;
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`);
const CartLink = withTheme(styled(Link)`
   text-decoration: none;
   color: ${props => props.theme.palette.primary.main};
 `)

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tabletM} {
    flex-direction: column;
  }
`
const Info = styled.div`
  width: 40%;
  @media ${device.laptop} {
    width: 55%;
  }
  @media ${device.tabletM} {
    width: 100%;
  }
`
const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ProductDetail = withTheme(styled.div`
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  display: flex;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    padding: 1rem;
  }
  @media ${device.tabletM} {
    padding: 1rem 4rem;
  }
  @media ${device.tabletS} {
    padding: 1rem 2rem;
  }
  @media ${device.mobileL} {
    padding: 1rem;
  }
  @media ${device.mobileM} {
    padding: 1rem 0.5rem;
  }
`);
const ImageContainer = styled.div`
  position: relative;
  width: 45%;
  @media ${device.mobileL} {
    //width: 50%;
  }
`
const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 10rem;
  @media ${device.mobileL} {
    width: 8rem;
    //width: 50%;
  }
`
const PriceDetails = styled.span`
  //margin-left: 11.5rem;
  height: 23em;
  //width: 100%;
  width: 55%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media ${device.mobileL} {
    height: 18rem;
  }
`
const PriceDetail = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`
const InfoText = styled.p`
  margin: 0;
  text-align: right;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-right: -5px;
  font-weight: bold;
`
const CloseBtn = withTheme(styled(Close)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  width: 2rem !important;
  height: 2rem !important;
  z-index: 10;
  @media ${device.mobileL} {
    margin: 0.5rem;
  }
`)
const ProductAmount = styled.div`
`
const ProductPrice = styled.div`
  text-align: right;
  padding: 0.5rem;
  font-weight: bold;
`

const SummaryWrapper = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.fourth.main};
  border: none;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  width: 40%;
  height: fit-content;
  @media ${device.tabletM} {
    width: 100%;
    margin-top: 2rem;
  }
`)
const Summary = styled.div`
  padding: 2rem 3rem;
  @media ${device.laptop} {
    padding: 1rem;
  }
  @media ${device.tabletM} {
    padding: 1rem 4rem;
  }
  @media ${device.tabletS} {
    padding: 1rem 2rem;
  }
  @media ${device.mobileL} {
    padding: 1rem;
  }
  @media ${device.mobileM} {
    padding: 1rem 0.5rem;
  }
;
`
const SummaryTitle = styled.h1`
  margin: 0;
  @media ${device.laptop} {
   font-size: 1.6rem;
  }
`
const SummaryItem = withTheme(styled('div')`
  color: ${props => props.type === "total" && props.theme.palette.primary.main};
  font-weight: ${props => props.type === "total" && "900"};
  font-size: ${props => props.type === "total" && "1.5rem"};
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`)
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
    font-weight: bold;
`
const Button = withTheme(styled.button`
  cursor: pointer;
  display: block;
  margin: auto;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`)

const EmptyCartWrapper = styled.div`
  justify-content: center;
`
const EmptyCart = styled.h1`
    text-align: center;
`

const EmptyCartButton = withTheme(styled.button`
  cursor: pointer;
  display: block;
  font-size: 1.1rem;
  margin: auto;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`);
