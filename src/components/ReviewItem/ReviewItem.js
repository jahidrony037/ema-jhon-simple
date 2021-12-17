import React from 'react';
import "./ReviewItem.css";
const ReviewItem = (props) => {
    const { name, quantity, key, img, price } = props.product;
    const removeProduct = props.removeProduct;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>unit price: {price} </small></p>
                <button onClick={() => removeProduct(key)} className='button'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;