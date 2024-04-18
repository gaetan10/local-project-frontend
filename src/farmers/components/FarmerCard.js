import React from "react";
import { Link } from "react-router-dom";


import './FarmerCard.css';

export default function FarmerCard( props ) {

    return(
        <div className="farmer-card">
            <Link to={`farmers/${props.id}`} className="card-link">
            <div className="farmer-picture">
                <img src={props.picture} alt={props.name} />
            </div>
            <div className="farmer-info">
                <h2>{props.name}</h2>
                <h4>{props.address}</h4>
                <p>{props.city}</p>
            </div>
            <div className="farmer-products">
                <p>{props.mainProducts}</p>
            </div>
            </Link>
        </div>
    );
};


