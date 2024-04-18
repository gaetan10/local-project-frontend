import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './EditFarmer.css'
import Form from "../components/Form";

export default function EditFarmer() {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name:'',
        address: '',
        city: '',
        mainProducts: '',
        picture:'',
        description:''
    });

    const { farmerId } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchFarmerById = async() => {
            const response = await fetch(`http://localhost:4000/api/farmers/${farmerId}`, {method: 'GET'});
            const responseData = await response.json();
            setFormData(responseData.farmer)
        };
        fetchFarmerById();

    },[farmerId])

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
        try {
            const response = await fetch(`http://localhost:4000/api/farmers/${farmerId}`, {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                const error = new Error('An error occured when updating profile');
                error.code = 500;
                throw error;
            }
            navigate(`/farmers/${farmerId}`);
        } catch (error) {
            setError(error.message);
        }
    } 

    return (
        <div className="main-form">
            {error && <div>{error.message}</div>}
            <Form 
                formData={formData}
                onChangeInput={handleInputChange}
                onFormSubmit={handleFormSubmit}/>
        </div>
    )

};