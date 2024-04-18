import React from "react";
import './Button.css';

export default function Button({ children, type, onClick }){

    return(
        <button
        className="app-button"
         type={type}
         onClick={onClick}>
            {children}
        </button>
    )
};