import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first30 = fakeData.slice(0, 30);
    const [products] = useState(first30);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [])
    //Refactor add Cart
    const handelAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key)
        // console.log(sameProduct);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} key={pd.key} handelAddProduct={handelAddProduct} showAddToCart={true} ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><button className='button' >Order Review</button></Link>
                </Cart>
            </div>

        </div >
    );
};

export default Shop;