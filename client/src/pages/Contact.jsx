import {
    device,
    Container,
    BackgroundImage,
    GlobalStyle,
    GeneralButton,
    BackgroundImageTop
} from '../responsive&generalStyling';
import {withTheme} from "@material-ui/core/styles";
import React, {useState} from "react";
import {publicRequest} from "../requestMethods";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components/macro";

const Contact = () => {
    const captchaRef = React.useRef(null);
    const [result, setResult] = useState(null);
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const sendMail = async event => {
        event.preventDefault();
        const captchaToken = await captchaRef.current.executeAsync();
        captchaRef.current.reset();

        publicRequest.post(
            "/send",
            {...state, captchaToken}
        )
            .then(response => {
                setResult(response.data);
                console.log(response.data)
                setState({name: '', email: '', message: ''});
            })
            .catch(() => {
                setResult({success: false, message: 'Something went wrong. Try again later'});
            });
    };

    const onInputChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <Container>
            <GlobalStyle/>
            <style>{`.grecaptcha-badge {z-index: 10;}`}</style>
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            <ContactForm onSubmit={sendMail} id="contactForm">
                <Title>Fill this form to contact us:</Title>
                <ContactFormWrapper>
                    <InputWrapper>
                        <FormLabel htmlFor="name">Name: <span style={{color: "red"}}>*</span></FormLabel>
                        <FormInput id="name"
                               type="text"
                               name="name"
                               value={state.name}
                               placeholder="Enter your full name"
                               onChange={onInputChange}
                               required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabel htmlFor="email">Email: <span style={{color: "red"}}>*</span></FormLabel>
                        <FormInput id="email"
                               type="email"
                               name="email"
                               value={state.email}
                               placeholder="Enter your email"
                               onChange={onInputChange}
                               required />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabel htmlFor="message">Message <span style={{color: "red"}}>*</span></FormLabel>
                        <FormTextarea id="message"
                                  name="message"
                                  value={state.message}
                                  rows="5"
                                  placeholder="Enter your message"
                                  onChange={onInputChange}
                                  required />
                    </InputWrapper>
                    <SendButton type="submit">Send</SendButton>
                    {result && (
                        <SuccessMessage className={`${result.success ? 'success' : 'error'}`}>
                            {result.message}
                        </SuccessMessage>
                    )}
                </ContactFormWrapper>
                <ReCAPTCHA sitekey="6LdYLD0lAAAAAERO-uLytwaM-MdpiyIi4CCbH2-8" size="invisible" ref={captchaRef}/>
            </ContactForm>
        </Container>
    );
}

export default Contact;

const ContactForm = styled.form`
  position: absolute;
  margin: auto;
  height: 75%;
  width: 75%;
  left: 0;
  right: 0;
  bottom: 0;
  top: -2rem;
  @media ${device.laptop} {
    width: 85%;
    height: 85%;
  }
  @media ${device.tabletL} {
    width: 90%;
    height: 90%;
  }
  @media ${device.mobileL} {
    width: 95%;
    height: 95%;
  }
`
const ContactFormWrapper = withTheme(styled.div`
  position: absolute;
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  padding: 3rem;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.tabletL} {
    padding: 2rem;
  }
  @media ${device.tabletM} {
    padding: 1rem;
  }
  @media ${device.mobileM} {
    padding: 0.5rem;
  }
`)
const Title = styled.h2`
  margin: 1rem;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 1.3rem;
  }
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const FormLabel = styled.label`
  margin: 1rem 0.5rem 0 0.5rem;
`
const FormInput = withTheme(styled.input`
  width: 50%;
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
  @media ${device.tabletM} {
    width: -webkit-fill-available;
  }
`);
const FormTextarea = withTheme(styled.textarea`
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
const SendButton = withTheme(styled(GeneralButton)``);
const SuccessMessage = styled.p`
  text-align: center;
`
