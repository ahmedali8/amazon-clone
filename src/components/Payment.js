import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../context/reducer';
import axios from '../axios/axios';

import '../css/Payment.css';

const Payment = () => {

    const [{ basket, user }] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState("")
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>', clientSecret);


    const handleSubmit = async (event) => {
        event.preventDefault();

        setProcessing(true);
        
        // stripe stuff
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment Intent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate.replace('/orders', { replace: true });
        })
    }

    const handleChange = (event) => {
        // listens for changes in Card Element
        // and display any errors as the customer types their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.messsage : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout
                    (<Link to="/checkout">
                        {basket?.length} items
                    </Link>)
                </h1>

                {/* Payment Section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment Section - Reiview Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe code goes here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                                {error && <div>{error}</div>}  {/* short circuit evaluation */}
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Payment;
