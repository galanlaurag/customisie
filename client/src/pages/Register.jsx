import {Container, BackgroundImage, GlobalStyle, GeneralButton, BackgroundImageTop} from '../responsive&generalStyling';
import {Wrapper, Form, Input, Error, Span, RegisterButton} from './Login';
import React, {useState} from 'react';
import styled from "styled-components/macro";
import { withTheme } from "@material-ui/core/styles"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../redux/apiCalls";

const Register = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, errorRegister} = useSelector(state => state.user);

    const handleRegister = (e) => {
        e.preventDefault();
        return register(dispatch, {email, password});
    }
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <Wrapper>
                <h1>Create an account</h1>
                <Form>
                    <label>Email <span style={{color: "red"}}>*</span></label><Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password <span style={{color: "red"}}>*</span></label><Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Agreement>
                        By creating and account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>.
                    </Agreement>
                    <GeneralButton onClick={handleRegister} disabled={isFetching}>Register</GeneralButton>
                    {errorRegister && <Error>Something went wrong. Please try again.</Error> }

                    <Span>Already have an account?</Span>
                    <NavbarLink to={"/login"}>
                        <LoginButton>Log in</LoginButton>
                    </NavbarLink>
                </Form>
            </Wrapper>
        </Container>
    )
}
export default Register;


const Agreement = styled.p`
  font-size: 0.7rem;
`
const LoginButton = withTheme(styled(RegisterButton)`
`)
const NavbarLink = styled(Link)`
  width: fit-content;
  margin: auto;
  text-decoration: none;
  display: block;
`
