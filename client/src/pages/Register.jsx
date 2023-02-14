import React from 'react';
import styled from "styled-components/macro";
import { withTheme } from "@material-ui/core/styles"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../redux/apiCalls";
import {useState} from "react";

const Register = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = [password, setPassword];
    const dispatch = useDispatch();
    const {isFetching, errorRegister} = useSelector(state => state.user);

    const handleRegister = (e) => {
        e.preventDefault();
        return register(dispatch, {email, password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    {/*<Input placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>*/}
                    <Agreement>
                        By creating and account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button onClick={handleRegister} disabled={isFetching}>Register</Button>
                    {errorRegister && <Error>Something went wrong. Please try again.</Error> }

                    <Span>Already have an account?</Span>
                    <NavbarLink to={"/login"}>
                        <Button>Log in</Button>
                    </NavbarLink>
                </Form>
            </Wrapper>
        </Container>
    )
}
export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.default.main};
  width: 40%;
  height: 60%;
  padding: 50px;
`)
const Title = styled.h1`
    
`
const Form = styled.div`
  display: flex; 
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 0.7rem;
  margin: 20px 10px;
`
const Button = styled.button`
`
const NavbarLink = styled(Link)`
`
const Span = styled.span`
  font-size: 0.7rem;
  margin: 20px 10px 0;
  width: 100%;
`
const Error = styled.span`
  color: red;
`