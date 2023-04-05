import {
    device,
    Container,
    BackgroundImage,
    GlobalStyle,
    GeneralButton,
    BackgroundImageTop, showOpacity, toTop
} from '../responsive&generalStyling';
import React, {useState} from 'react';
import styled from "styled-components/macro";
import { withTheme } from "@material-ui/core/styles";
import { login } from "../redux/apiCalls";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, errorLogin} = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        return login(dispatch, {email, password});
    }
    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <Wrapper>
                <h1>Log in</h1>
                <Form>
                    <label>Email</label><Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label><Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <ActionBtn onClick={handleLogin} disabled={isFetching}>Login</ActionBtn>
                    {errorLogin && <Error>Please enter correct credentials.</Error>}
                    <Span>Don't have an account?</Span>
                    <RegLink to={"/register"}>
                        <RegisterButton>Create a new account</RegisterButton>
                    </RegLink>
                </Form>
            </Wrapper>
        </Container>
    )
}
export default Login;


export const Wrapper = withTheme(styled.div`
  width: 40%;
  height: 60%;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  padding: 3rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  animation: ${showOpacity} ease-in-out 1s forwards;
  @media ${device.laptop} {
    width: 55%;
  }
  @media ${device.tabletL} {
    width: 65%;
    padding: 2.5rem;
  }
  @media ${device.tabletM} {
    width: 75%;
    padding: 2rem;
  }
  @media ${device.tabletS} {
    width: 80%;
    height: 70%;
    padding: 1.5rem;
  }
  @media ${device.mobileM} {
    width: 85%;
    padding: 1rem;
  }
  @media ${device.mobileS} {
    width: 90%;
    padding: 1rem 0.5rem;
  }
`)
export const Form = styled.div`
  display: flex; 
  flex-wrap: wrap;
  text-align: center;
`
export const Input = withTheme(styled.input`
  width: 100%;
  margin: 1rem 0;
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
export const ActionBtn = styled(GeneralButton)`
  animation: ${toTop} ease-in-out 1s forwards;
`
export const Error = styled.p`
  color: red;
  width: 100%;
`
const RegLink = styled(Link)`
  width: fit-content;
  margin: auto;
  text-decoration: none;
  display: block;
`
export const Span = styled.p`
  font-size: 0.7rem;
  width: 100%;
  margin-top: 3rem;
`
export const RegisterButton = withTheme(styled(GeneralButton)`
  background-color: ${props => props.theme.palette.secondary.main};
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
`)