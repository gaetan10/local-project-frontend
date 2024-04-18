import React from "react";
import Button from "../../farmers/components/Button";
import './ProductCard.css';

export default function ProductCard({ product }){

    return(
        <div className="product-card">
            <div className="product-image">
                <img src={product.productImage} alt={product.productName}/>
            </div>
            <div className="product-details">
                <h4>{product.productName}</h4>
                <p><strong>{product.productPrice} €</strong></p>
            </div>
            <div className="add-to-basket">
                <Button>Add</Button>
            </div>
        </div>
    )
};