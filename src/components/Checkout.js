import React from 'react';

import '../css/Checkout.css';
import SubTotal from './SubTotal';

const Checkout = () => {
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
                </div>
            </div>

            <div className='checkout__right'>
                <SubTotal />
            </div>
        </div>
    );
};

export default Checkout;
