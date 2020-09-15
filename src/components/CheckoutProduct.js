import React from 'react';
import { useStateValue } from '../context/StateProvider';
import FlipMove from 'react-flip-move';

import '../css/CheckoutProduct.css'

const CheckoutProduct = ({ id, title, price, rating, image }) => {

    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
            <div className='checkoutProduct' key={id}>
                <img className='checkoutProduct__image' src={image} alt='' />

                <div className='checkoutProduct__info'>

                    <p className='checkoutProduct__title'>{title}</p>

                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className='checkoutProduct__rating'>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span role='img' aria-label='star' key={i}>🌟</span>
                            ))
                        }
                    </div>

                    <button onClick={() => removeFromBasket()}>Remove to Basket</button>

                </div>

            </div>
        </FlipMove>
    );
};

export default CheckoutProduct;
