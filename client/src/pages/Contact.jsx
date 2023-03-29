import ContactForm from '../components/ContactForm';
import {Container, BackgroundImage, GlobalStyle} from '../responsive&generalStyling';

const Contact = () => {

    // function captchaScript() {
    //     const recaptchaApi = document.createElement("script");
    //     const recaptchaScript = document.createElement("script");
    //     recaptchaApi.type = 'text/javascript';
    //     recaptchaApi.src = 'https://www.google.com/recaptcha/api.js';
    //     document.head.appendChild(recaptchaApi);
    //     recaptchaScript.type = 'text/javascript';
    //     recaptchaScript.text = ' function onSubmit(token) {\n' +
    //         '         document.getElementById("contactForm").submit();\n' +
    //         '       }'
    //     document.head.appendChild(recaptchaScript);
    // }
    // captchaScript();


    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImage/>
            <ContactForm />
            {/*<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer/>*/}
        </Container>
    );
}

export default Contact;