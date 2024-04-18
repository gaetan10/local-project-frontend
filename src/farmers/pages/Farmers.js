import React, { useEffect, useState } from "react";
import FarmersList from "../components/FarmersList";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

      useEffect(() => {
        const fetchFarmers = async() => {
          try {
            const response = await fetch('http://localhost:4000/api/farmers', {method:'GET'});
            if (!response.ok) {
              throw new Error('Could not load farmers. Please try again later.');
            }
            const responseData = await response.json();
            setFarmers(responseData.farmers);
            
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
        fetchFarmers(); 
      },[]);

      if(loading){
        return <h2>Loading farmers...</h2>
      }

      if(error){
        return(
          <h2>{error}</h2>
        );
      }

      if(farmers.length === 0){
        return (
          <>
            <h2>No existing farmer yet. Create one.</h2>
            <Link to="/farmers/new"><Button>Create Farmer</Button></Link>
          </>
        )
      }
   
    return  <FarmersList farmers={farmers}/>
}; 