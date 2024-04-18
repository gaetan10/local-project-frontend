import React from "react";
import FarmerCard from "./FarmerCard";

import './FarmersList.css'


export default function FarmersList({farmers}){

    return(
        <div className="farmers-list">
        {farmers.map((farmer) =>
               (
                        <FarmerCard 
                        key={farmer.id}
                        id={farmer.id}
                        name={farmer.name}
                        picture={farmer.picture}
                        address={farmer.address}
                        city={farmer.city}
                        mainProducts={farmer.mainProducts}
                        />
                   
       ) )}
            
        </div>
    )
};