import {Container, BackgroundImage, GlobalStyle, GeneralButton, BackgroundImageTop} from '../responsive&generalStyling';
import {clearAllCart} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import React from "react";
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";

const Success = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const emptyCart = async() => {
            try {
                return dispatch(
                    clearAllCart()
                )
            } catch (err) {
                return console.log(err);
            }
        }
        emptyCart();
    }, [dispatch])

    return (
        <Container>
            <SuccessWrapper>
                <GlobalStyle/>
                <BackgroundImageTop src={`/assets/tloTop.png`}/>
                <BackgroundImage src={`/assets/tlo.png`}/>
                <h2>Payment successful, thank you for your order!</h2>
                <SuccessLink to={"/"}>
                    <GeneralButton>Go back to the homepage</GeneralButton>
                </SuccessLink>
                <SuccessLink to={"/myaccount"}>
                    <GeneralButton>Go to your account</GeneralButton>
                </SuccessLink>
            </SuccessWrapper>
        </Container>
    )
}

export default Success;

const SuccessWrapper = styled.div`
  text-align: center;
`
const SuccessLink = withTheme(styled(Link)`
  width: fit-content;
  margin: 2rem auto;
  text-decoration: none;
  display: block;
`)

