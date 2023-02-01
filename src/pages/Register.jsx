import React from 'react';
import styled from "styled-components/macro";
import { withTheme } from "@material-ui/core/styles"

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating and account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>Register</Button>
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