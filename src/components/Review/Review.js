import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import happyImage from '../../images/giphy.gif';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState();


    const handelPlacehoder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    let thankyou;
    let developer;
    if (orderPlaced) {
        thankyou = <img style={{ marginTop: '10px' }} src={happyImage} alt="" />
        developer = <h3 style={{ color: "lightGray" }}> developed by Jahid Rony</ h3>
    }

    const handelRemoveProduct = (productKey) => {
        // console.log("remove  clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        console.log(productKeys);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        // console.log(cartProducts);
    }, [])
    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem removeProduct={handelRemoveProduct} product={pd} key={pd.key}></ReviewItem>)
                }
                {thankyou}{developer}
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handelPlacehoder} className='button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;