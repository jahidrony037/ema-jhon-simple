import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    let { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);

    return (
        <div>
            <h2 style={{ color: "coral", margin: "20px 120px" }}>Your Product Details Here </h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;