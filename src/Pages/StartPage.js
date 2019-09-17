import React from 'react';
import Thumbnail from '../Components/Thumbnail';
import CategoryMenu from '../Components/CategoryMenu';
import Header from '../Components/Header';
import SeeMore from '../Components/SeeMore';


const StartPage = () => {
    return (
        <div>
            <CategoryMenu/>
            <Header/>
            <SeeMore/>
            <Thumbnail size="large"/>
        </div>
    );
};

export default StartPage;