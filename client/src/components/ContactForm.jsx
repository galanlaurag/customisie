import React, { useState } from "react";
import {publicRequest} from "../requestMethods";
import ReCAPTCHA from "react-google-recaptcha";

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
            {
                captchaToken
            }
        )
            .then(response => {
                setResult(response.data);
                console.log(response.data)
                setState({name: '', email: '', message: ''});
            })
            .catch(() => {
                setResult({success: false, message: 'Something went wrong. Try again later'});
            });




        // event.preventDefault();
        // const token = captchaRef.current.getValue();
        // const token = await captchaRef.current.executeAsync();
        // console.log("token " + token)
        // captchaRef.current.reset();
        // const token = captchaRef.current.getValue();
        // captchaRef.current.reset();
        // // if (token.)
        //
        // await axios.post("/send", {token})
        //     .then(res =>  console.log(res))
        //     .catch((error) => {
        //         console.log(error);
        //     })



        // let token = captchaRef.current.getValue();
        // captchaRef.current.reset();
        // if (token) {
        //     let valid_token = await verifyToken(token);
        //     setValidToken(valid_token);
        //     if (valid_token[0].success === true) {
        //         console.log("verified");
        //         setSuccessMsg("Hurray!! you have submitted the form")
        //     } else {
        //         console.log("not verified");
        //         setErrorMsg(" Sorry!! Verify you are not a bot")
        //     }
        // }


        // publicRequest
        //     .post('/send', {...state, token})
        //     .then(response => {
        //         setResult(response.data);
        //         console.log(response.data)
        //         setState({name: '', email: '', message: ''});
        //     })
        //     .catch(() => {
        //         setResult({success: false, message: 'Something went wrong. Try again later'});
        //     });


    };

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };


    // const verifyToken = async (token) => {
    //     let APIResponse = [];
    //
    //     try {
    //         let response = publicRequest.post(`/send`, {
    //             reCAPTCHA_TOKEN: token,
    //             Secret_Key: "6LcY1z0lAAAAABSmEH6PDX3gTAQUGaw29PQaHZ4K",
    //         });
    //         console.log("sent?")
    //
    //         APIResponse.push(response['data']);
    //
    //         console.log("API");
    //         console.log(APIResponse);
    //         return APIResponse;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


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
                {/*<button type="submit" className="g-recaptcha" data-sitekey="6LdYLD0lAAAAAERO-uLytwaM-MdpiyIi4CCbH2-8" data-callback="onSubmit">Submit</button>*/}
            </form>
        </div>
    );
};

export default ContactForm;