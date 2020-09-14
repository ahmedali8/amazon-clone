import React from 'react';
import CurrencyFormat from 'react-currency-format';

import '../css/SubTotal.css';

const SubTotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            {/* homework part */}
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} // part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    );
};

export default SubTotal;
