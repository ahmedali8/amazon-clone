import React from 'react';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

import '../css/Payment.css';

const Payment = () => {

    const [{ basket, user }] = useStateValue();

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
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Payment;
