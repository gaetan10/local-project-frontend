import React from "react";

import './Form.css'
import Button from "./Button";

export default function Form({formData, onChangeInput, onFormSubmit}) {

    return(
        <div className="form-container">
            <form onSubmit={onFormSubmit}>
                <div className="form-field">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="name"
                        placeholder="First and last name"
                        onChange={onChangeInput}
                        value={formData.name}/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="address">Address:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="address" 
                        placeholder="5210 rue Saint Denis, H2J2M2"
                        onChange={onChangeInput}
                        value={formData.address} />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="city">City:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="city" 
                        placeholder="MONTREAL"
                        onChange={onChangeInput}
                        value={formData.city}/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="mainProducts">Main products:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="mainProducts" 
                        placeholder="Mushrooms, leaks, eggs"
                        onChange={onChangeInput}
                        value={formData.mainProducts}/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="picture">Picture:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="picture" 
                        placeholder="A url of a picture"
                        onChange={onChangeInput}
                        value={formData.picture}/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="description">Description:</label>
                    <input 
                        className="form-input" 
                        type="text" 
                        id="description" 
                        placeholder="My farm was created by my parents 30 years ago, it is located near a wood..."
                        onChange={onChangeInput}
                        value={formData.description}/>
                </div>
                <Button type="submit">Save</Button>
            </form>
        </div>   
    )
};

