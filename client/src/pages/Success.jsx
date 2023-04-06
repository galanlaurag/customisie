import {
    Container,
    BackgroundImage,
    GlobalStyle,
    GeneralButton,
    BackgroundImageTop,
    showOpacity
} from '../responsive&generalStyling';
import {clearAllCart} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {withTheme} from "@material-ui/core/styles";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";

const Success = () => {
    useEffect(() => {
        document.title = 'Customisie - Payment successful';
    }, []);
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
                    <HomeButton>Go back to the homepage</HomeButton>
                </SuccessLink>
                <SuccessLink to={"/myaccount"}>
                    <AccountButton>Go to your account</AccountButton>
                </SuccessLink>
            </SuccessWrapper>
        </Container>
    )
}

export default Success;

const SuccessWrapper = styled.div`
  text-align: center;
`
const HomeButton = styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.5s forwards;
`
const AccountButton = styled(GeneralButton)`
  opacity: 0;
  animation: ${showOpacity} ease 1s 1s forwards;
`
const SuccessLink = withTheme(styled(Link)`
  width: fit-content;
  margin: 2rem auto;
  text-decoration: none;
  display: block;
`)

