import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CategoryMenu = () => {
    const categories = ['dans', 'film', 'musik', 'teater'];
    return (
        <ul className="category-menu">
            {
                categories.map((item, key) => {
                    return (
                    <li key={key}><Link to={{
                        pathname: `/category/${item}`,
                        state: {
                            category: item
                        }
                    }}>{item}</Link></li> 
                )})
            }
        </ul>  
    );
}

export default CategoryMenu;