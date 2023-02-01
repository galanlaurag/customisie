import React from 'react';
import styled from "styled-components/macro";
import { withTheme } from "@material-ui/core/styles"

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Button>Login</Button>
                    <Link>Forgot your password?</Link>
                    <Link>Create a new account</Link>
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
const Link = styled.a`
  font-size: 0.7rem;
  margin: 20px 10px 0;
  width: 100%;
`
const Button = styled.button`
  width: 100%;
  margin: 5px 100px 20px;
`