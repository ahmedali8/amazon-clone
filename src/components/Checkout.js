import React from 'react';
import { useStateValue } from '../context/StateProvider';
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';

import '../css/Checkout.css';


const Checkout = () => {

    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg'
                    alt=''
                />
                <div>
                    <h2 className='checkout__title'>
                        Shopping Basket
                    </h2>

                    {
                        basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }

                </div>
            </div>

            <div className='checkout__right'>
                <SubTotal />
            </div>
        </div>
    );
};

export default Checkout;
