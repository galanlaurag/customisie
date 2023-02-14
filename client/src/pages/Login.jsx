import React, {useState} from 'react';
import styled from "styled-components/macro";
import { withTheme } from "@material-ui/core/styles";
import { login } from "../redux/apiCalls";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, errorLogin} = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        return login(dispatch, {email, password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>Log in</Title>
                <Form>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
                    {errorLogin && <Error>Please enter correct credentials.</Error> }

                    <Span>Forgot your password?</Span>

                    <Span>Don't have an account?</Span>
                    <NavbarLink to={"/register"}>
                        <Button>Create a new account</Button>
                    </NavbarLink>
                </Form>

            </Wrapper>
        </Container>
    )
}
export default Login;

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
const Button = styled.button`
  width: 100%;
  margin: 5px 100px 20px;
  &:disabled {
    cursor: not-allowed;
  }
`
const Error = styled.span`
  color: red;
`
const NavbarLink = styled(Link)`
`
const Span = styled.span`
  font-size: 0.7rem;
  margin: 20px 10px 0;
  width: 100%;
`