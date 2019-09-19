import React from 'react';
import './style.css';

const CategoryMenu = () => {
    return (
        <ul className="category-menu">
            <li><a href="/category/dans">Dans</a></li>
            <li><a href="/category/film">Film</a></li>
            <li><a href="/category/musik">Musik</a></li>
            <li><a href="/category/teater">Teater</a></li>
        </ul>
    );
}

export default CategoryMenu;