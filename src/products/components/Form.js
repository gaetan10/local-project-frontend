import React from "react";

import './Form.css'
import Button from "../../farmers/components/Button";

export default function Form({formData, onChangeInput, onFormSubmit}) {

    return(
        <div className="form-container">
            <form onSubmit={onFormSubmit}>
                <div className="form-field">
                    <label className="form-label" htmlFor="productName">Product Name:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="productName"
                        placeholder="Name of the product"
                        onChange={onChangeInput}
                        value={formData.productName}/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="productPrice">Price:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="productPrice" 
                        placeholder="10"
                        onChange={onChangeInput}
                        value={formData.productPrice} />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="productImage">Image:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="productImage" 
                        placeholder="picture of your product"
                        onChange={onChangeInput}
                        value={formData.productImage}/>
                </div>
                <Button type="submit">Save</Button>
            </form>
        </div>   
    )
};

