import React, { useState } from "react";
import {publicRequest} from "../requestMethods";


const ContactForm = () => {
    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");
    //     const { name, email, message } = e.target.elements;
    //     let details = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     };
    //     let response = await fetch("http://localhost:80/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(details),
    //     });
    //     setStatus("Submit");
    //     let result = await response.json();
    //     alert(result.status);
    // };

    const [result, setResult] = useState(null);
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const sendMail = event => {
        event.preventDefault();
        publicRequest
            .post('/send', {...state})
            .then(response => {
                setResult(response.data);
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
                <button type="submit">Submit</button>
                {/*<button type="submit" className="g-recaptcha" data-sitekey="6LdYLD0lAAAAAERO-uLytwaM-MdpiyIi4CCbH2-8" data-callback="onSubmit">Submit</button>*/}
            </form>
        </div>
    );
};

export default ContactForm;