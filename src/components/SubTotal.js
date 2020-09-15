import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/reducer';
import { useNavigate } from 'react-router-dom';

import '../css/SubTotal.css';

const SubTotal = () => {

    let navigate = useNavigate();
    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* homework part */}
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={() => navigate('/payment')}>Proceed to checkout</button>
        </div>
    );
};

export default SubTotal;
