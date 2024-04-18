import React from "react";
import ProductCard from "./ProductCard";
import './ProductsList.css';

export default function ProductsList({ products }){
    console.log('products', products)
    if(products.length === 0){
        return <p>No products yet.</p>
    }
    return (
        <div className="products-list">
            {products.map((product, index) => {
                return <ProductCard key={index} product={product} />
        })}
        </div>
    )
};