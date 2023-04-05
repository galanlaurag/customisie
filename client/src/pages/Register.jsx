import {Container, BackgroundImage, GlobalStyle, BackgroundImageTop, showOpacity} from '../responsive&generalStyling';
import {Wrapper, Form, Input, Error, Span, RegisterButton, ActionBtn} from './Login';
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
                    <ActionBtn onClick={handleRegister} disabled={isFetching}>Register</ActionBtn>
                    {errorRegister && <Error>Something went wrong. Please try again.</Error> }

                    <Span>Already have an account?</Span>
                    <LogLink to={"/login"}>
                        <LoginButton>Log in</LoginButton>
                    </LogLink>
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
const LogLink = styled(Link)`
  width: fit-content;
  margin: auto;
  text-decoration: none;
  display: block;
  opacity: 0;
  animation: ${showOpacity} ease 1s 1s forwards;
`
