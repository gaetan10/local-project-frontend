import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';

import PhotoGallery from "../components/PhotoGallery";
import './FarmerDetail.css';
import Button from "../components/Button";
import ProductsList from "../../products/components/ProductsList";

export default function FarmerDetail() {
    const [farmer, setFarmer] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { farmerId } = useParams();

    const DUMMY_PHOTOS = [farmer.picture,
'https://www.veganfoodandliving.com/wp-content/uploads/2021/09/farmers-working-in-organic-field.jpg', 'https://facts.net/wp-content/uploads/2023/10/10-intriguing-facts-about-organic-farming-1696302944.jpg']
    
let navigate = useNavigate();

    useEffect(function () {
            const fetchFarmerById = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/api/farmers/${farmerId}`, { method: 'GET' });
                    if(!response.ok){
                        throw new Error('No existing farmer at this ID. Please try anoter ID.')
                    }
                    const responseData = await response.json();
                    setFarmer(responseData.farmer);
                } catch (error) {
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }; 
            fetchFarmerById();
            
            },[farmerId]);
        

    async function handleDelete() {
        const isConfirmed = window.confirm("Are you sure you want to delete this farmer profile?");
        if (isConfirmed) {
            await fetch(`http://localhost:4000/api/farmers/${farmerId}`, { method: 'DELETE' });
            navigate('/');
        }
    };

    if(loading){
        return <h2>Farmer data is loading...</h2>
    };

    if(error){
        return <h2>{error}</h2>
    };

    console.log(farmer)

return (
        <>
            <div className="gallery">
                <PhotoGallery photos={DUMMY_PHOTOS}/>
            </div>
            <div className="farmer-information">
                <div className="farmer-presentation">
                    <h2>About {farmer.name}</h2>
                    <p>{farmer.description}</p>
                </div> 
                <div className="farmer-details">
                    <h2>Farm Details</h2>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Address: {farmer.address}</li>
                        <li><i class="fas fa-city"></i> City: {farmer.city}</li>
                        <li><i class="fas fa-info-circle"></i> Specialties: {farmer.mainProducts}</li>
                    </ul>
                </div>
            </div>
            <div className="farmer-products">
                    <div className="products-header">
                        <h1>Products</h1>
                        <Link to={`/farmers/${farmerId}/products/new`}><Button>Add Product</Button></Link>
                    </div>
                    <ProductsList products={farmer.products} />
                </div>
            <div className="actions">
                <Link to={`edit`}> <Button type="submit">Edit</Button> </Link>
                {/* <button onClick={handleDelete} type="submit">Delete</button> */}
                <Button onClick={handleDelete} type="submit">Delete</Button>
            </div>
        </>
        )
};