import React from 'react';
import styled from "styled-components/macro";
import {
    device,
    Container,
    BackgroundImage,
    GlobalStyle,
    GeneralButton,
    BackgroundImageTop, showOpacity
} from '../responsive&generalStyling';
import {Add, Remove, Close} from "@material-ui/icons";
import {withTheme} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
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
                const res = await userRequest.post("/checkout/payment", {
                  tokenId: stripeToken.id,
                  amount: cart.total*100,
                })
                return navigate('/success', {stripeData: res.data, products: cart})
            } catch(err) {
                return console.log(err);
            }
        }
        stripeToken && makeRequest();
    },[stripeToken, cart, navigate])

    return (
        <CartContainer>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
            <BackgroundImage src={`/assets/tlo.png`}/>
                {cart.quantity !== 0 ?
                    <Top>
                        {products.map((item) => (
                            <CartLink to={"/customise"} key={item._id}>
                                <TopButton>Customise another teddy bear</TopButton>
                            </CartLink>
                        ))}
                    </Top>
                : <EmptyCartWrapper>
                        <EmptyImage src={`/assets/teddyBears4.png`}/>
                        <Empty>
                            <EmptyCart>Your cart is empty</EmptyCart>
                            {products.map((item) => (
                                <CartLink to={"/customise"} key={item._id}>
                                    <EmptyButton>Customise your teddy bear!</EmptyButton>
                                </CartLink>
                            ))}
                        </Empty>
                  </EmptyCartWrapper>}
                <Bottom>
                    <Info>
                        <CartProduct>
                            {cart.products.map((product) => (
                            <ProductDetail key={product.size+product.headShape+product.earsShape+product.armsShape+product.legsShape+product.headColour+product.eyesColour+ product.earsColour+product.innerEarsColour+product.armsColour+product.handsColour+product.legsColour+product.feetColour+product.noseColour}>
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
                                <Comment>
                                    <Textarea rows="5" placeholder="Add comment or special request here :)"/>
                                </Comment>
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
                                    <SummaryItemPrice>£{cart.total}</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Shipping</SummaryItemText>
                                    <SummaryItemPrice>£20</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice>£{cart.total+20}</SummaryItemPrice>
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
                                        <CheckoutButton>Checkout now</CheckoutButton>
                                    </StripeCheckout>
                                )}
                            </Summary>
                        </SummaryWrapper>
                    }
                </Bottom>
        </CartContainer>
    )
}
export default Cart;


const CartContainer = styled(Container)`
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
  @media ${device.tabletM} {
    margin-bottom: 1.5rem;
  }
`
const TopButton = withTheme(styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 1s forwards;
  @media ${device.tabletM} {
    animation: ${showOpacity} ease 1s 0.5s forwards;
  }
`);
const CartLink = withTheme(styled(Link)`
  text-decoration: none;
  z-index: 20;
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
  position: relative;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.25s forwards;
  @media ${device.laptop} {
    padding: 1rem;
  }
  @media ${device.tabletM} {
    padding: 1rem 4rem;
    margin-bottom: 1.5rem;
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
`
const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 10rem;
  @media ${device.mobileL} {
    width: 8rem;
  }
`
const PriceDetails = styled.span`
  height: 23em;
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

const Comment = styled.div`
  padding-top: 2rem;
  width: 100%;
`
const Textarea = withTheme(styled.textarea`
  font-size: 1rem;
  width: -webkit-fill-available;
  padding: 1rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.palette.primary.main};
    border: 1px solid ${props => props.theme.palette.default.main};
  }
`);

const SummaryWrapper = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.fourth.main};
  border: none;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  width: 40%;
  height: fit-content;
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.5s forwards;
  @media ${device.tabletM} {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`)
const Summary = styled.div`
  padding: 2rem 3rem;
  text-align: center;
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
  text-align: left;
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
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span`
    font-weight: bold;
`
const CheckoutButton = styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.75s forwards;
  @media ${device.tabletM} {
    animation: ${showOpacity} ease 1s 1s forwards;
  }
`

const EmptyCartWrapper = styled.div`
  text-align: center;
  position: relative;
  top: -11rem;
  margin-top: 80px;
  animation: ${showOpacity} ease 1s;
  @media ${device.tabletL} {
    top: -10rem
  }
  @media ${device.tabletM} {
    top: -9rem
  }
  @media ${device.mobileL} {
    top: -8rem;
  }
  @media ${device.mobileM} {
    top: -7rem;
  }
  @media ${device.mobileS} {
    top: -6rem;
  }
`
const Empty = withTheme(styled.div`
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  padding: 7rem 3rem 5rem 3rem;
  margin: auto;
  width: 75%;
  position: relative;
  @media ${device.laptop} {
    width: 85%;
  }
  @media ${device.tabletL} {
    width: 90%;
    padding: 6rem 1rem 3rem 1rem;
  }
  @media ${device.mobileL} {
    width: 95%;
    padding: 5rem 0.5rem 3rem 0.5rem;
  }
  @media ${device.mobileM} {
    padding: 4rem 0.5rem 2rem 0.5rem;
  }
`)
const EmptyCart = styled.h1`
  text-align: center;
`
const EmptyImage = styled.img`
  position: relative;
  bottom: -9rem;
  left: 0;
  right: 0;
  height: 24rem;
  margin: 0 auto 0.5rem auto;
  z-index: 20;
  @media ${device.laptop} {
    height: 22rem;
    bottom: -8rem;
  }
  @media ${device.tabletL} {
    height: 20rem;
    bottom: -7.5rem;
  }
  @media ${device.tabletM} {
    height: 18rem;
    bottom: -7rem;
  }
  @media ${device.tabletS} {
    height: 16rem;
    bottom: -6rem;
  }
  @media ${device.mobileL} {
    height: 12rem;
    bottom: -5rem;
  }
  @media ${device.mobileM} {
    height: 10rem;
    bottom: -4rem;
  }
  @media ${device.mobileS} {
    height: 8rem;
    bottom: -3.5rem;
  }
`
const EmptyButton = styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.5s forwards;
`
