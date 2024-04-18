import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "../components/Form";
import './NewFarmer.css';

export default function NewFarmer() {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        city:'',
        mainProducts:'',
        picture:'',
        description:'',
    });
    
    let navigate = useNavigate();

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
            const response = await fetch('http://localhost:4000/api/farmers/new', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response)
            if (!response.ok) {
                const error = new Error('An error occured when creating profile.');
                error.code = 500;
                throw error;
            }
            const responseData = await response.json();
            const newFarmerId = responseData.newFarmer.id;
            navigate(`/farmers/${newFarmerId}`);

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
