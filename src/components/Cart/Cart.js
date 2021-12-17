import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        debugger;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    // eslint-disable-next-line no-unused-vars
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h2>This is Cart</h2>
            <h3>ordered item : {cart.length}
            </h3>
            <p>product price : {formatNumber(total)}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax + VAt : {tax} </small></p>
            <p>total Price : {grandTotal}</p>
            <br />
            {
                props.children
            }

        </div>
    );
};

export default Cart;