import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CategoryMenu = () => {
    return (
        <ul className="category-menu">
            <li><Link to="/category/dans">Dans</Link></li> 
            <li><Link to="/category/film">Film</Link></li> 
            <li><Link to="/category/musik">Musik</Link></li> 
            <li><Link to="/category/teater">Teater</Link></li> 
        </ul>  
    );
}

export default CategoryMenu;