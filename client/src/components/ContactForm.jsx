import React, { useState } from "react";
import {publicRequest} from "../requestMethods";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
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
        <div>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <form onSubmit={sendMail} id="contactForm">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name"
                           type="text"
                           name="name"
                           value={state.name}
                           placeholder="Enter your full name"
                           onChange={onInputChange}
                           required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email"
                           type="email"
                           name="email"
                           value={state.email}
                           placeholder="Enter your email"
                           onChange={onInputChange}
                           required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message"
                              name="message"
                              value={state.message}
                              rows="3"
                              placeholder="Enter your message"
                              onChange={onInputChange}
                              required />
                </div>
                <ReCAPTCHA sitekey="6LdYLD0lAAAAAERO-uLytwaM-MdpiyIi4CCbH2-8" size="invisible" ref={captchaRef}/>
                <button type="submit">Submit</button>
              </form>
        </div>
    );
};

export default ContactForm;