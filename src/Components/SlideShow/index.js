import React from 'react';
import './style.css';
import ContentBox from '../ContentBox';

const SlideShow = (props) => {
    return (
        <div className="carousel">
			{
				props.content.map(item => {
					return <ContentBox key={item.id} content={item} size="small"/>
				})
			}
        </div>
    );
};

export default SlideShow;