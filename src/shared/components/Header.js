import React from "react";
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {

    return(
    <header className="header">
       <Link to="/" className="logo-link"> 
            <h1 className="logo">Local</h1>
        </Link>
        <nav className="nav-links">
            <ul>
                <li><Link to="/" className="nav-link">Farmers</Link></li>
                <li><Link to="/" className="nav-link">Products</Link></li>
                <li><Link to="/farmers/new" className="nav-link">Add</Link></li>
            </ul>
        </nav>
    </header>
    );

};