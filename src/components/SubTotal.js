import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';

import '../css/SubTotal.css';

const SubTotal = () => {

    const [{ basket }] = useStateValue();

    const totalPrice = basket?.reduce((prev, { price }) => (
        prev + price
    ), 0);

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* homework part */}
                            Subtotal ({basket?.length} items): <strong>${totalPrice}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice} // part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    );
};

export default SubTotal;
