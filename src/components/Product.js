import React from 'react';
import { useStateValue } from '../context/StateProvider';

import '../css/Product.css';

const Product = ({ id, title, price, rating, image }) => {

    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    }

    
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role='img' aria-label='star' key={i}>🌟</span>
                        ))
                    }
                </div>
            </div>

            <img
                src={image}
                alt=''
            />

            <button onClick={() => addToBasket()}>Add to Basket</button>
        </div>
    );
};

export default Product;
