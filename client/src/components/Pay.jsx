import React, {useState, useEffect} from 'react';
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from "react-router";
const KEY = "pk_test_51MXrCYDrYh7D6zYnxy924WvRxevvlvI2axfVhxtnmlo9LtujWAmquoYywBOZPEyXi11ydJFKJR9jZGjvwjwXblxP005aqkVEhL";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };
    useEffect(() => {
        //backend server request
        const makeRequest = async() => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: 9000
                });
                console.log(res.data);
                navigate('/success');
            } catch(err) {
                console.log(err);
            }
        };
        //if stripeToken then call makeRequest function
        stripeToken && makeRequest();
    }, [stripeToken, navigate])
    return (
        <div>
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
            <StripeCheckout
                name="Customisie"
                image={require('../assets/krolik.png')}
                billingAddress
                shippingAddress
                description = "Your total is $90"
                amount = {9000}
                token = {onToken}
                stripeKey = {KEY}>
                <button>
                    Pay now
                </button>
            </StripeCheckout>
            )}
        </div>
    )
}
export default Pay;