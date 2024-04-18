import React from "react";

import './PhotosGallery.css'

export default function PhotoGallery({photos}) {

    return (
        <div className="photo-gallery">
       { photos.map((photo, index) => (
            <img key={index} src={photo} alt={`photo-${index}`} className="photo" />
        ))}
        </div>
    )

};