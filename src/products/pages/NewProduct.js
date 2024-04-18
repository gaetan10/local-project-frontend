import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Form from "../components/Form";
import './NewProduct.css';

export default function NewProduct() {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        productName:'',
        productPrice: '',
        productImage:''
    });
    const [farmerId, setFarmerId] = useState(null);
    
    let navigate = useNavigate();
    const params = useParams();

     useEffect(() => {
        if (params && params.farmerId) {
            setFarmerId(params.farmerId);
        }
    }, [params]);
  
    

    function handleInputChange(event) {
        const id = event.target.id;
        const value = event.target.value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    }
    
  
   async function handleFormSubmit(event) {
        event.preventDefault();
        const current = farmerId
        try {
            const response = await fetch(`http://localhost:4000/api/products/${current}/new`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response)
            if (!response.ok) {
                const error = new Error('An error occured when adding product.');
                error.code = 500;
                throw error;
            }
            const responseData = await response.json();
            const farmerId = responseData.farmer.id;
            navigate(`/farmers/${farmerId}`);

        } catch (error) {
            setError(error.message);
        }
    } ;

    return (
        <div className="main-form">
            {error && <div>{error.message}</div> }
            <Form 
                formData={formData}
                onChangeInput={handleInputChange}
                onFormSubmit={handleFormSubmit}/>
        </div>
        
    )
};
