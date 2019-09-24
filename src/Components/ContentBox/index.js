import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail';
import TextContainer from '../TextContainer';
import { Link } from 'react-router-dom';

const ContentBox = (props) => {
    const { content } = props;

    return (
        <div className={`content-box ${props.size}`}>
            <Link to={{
                pathname: `/player/${content.id}`,
                state: {
                    playerId: content.id
                }
            }}>
                <Thumbnail type={content.type} size={props.size} content={content} />
                <TextContainer type={content.type} size={props.size} content={content} />
            </Link>
        </div>
    );
};

export default ContentBox;