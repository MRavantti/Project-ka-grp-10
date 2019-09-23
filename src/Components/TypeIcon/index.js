import React from 'react';
import './style.css';


const Icon = (props) => {
    let width = props.size === "small" ? "20" : "28";
    let height = props.size === "small" ? "20" : "28";
    


    return (
        <div className={`icon-box ${props.type} ${props.size}`}>
            {
                props.type === "video" && 
                    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08203 7.95639V20.0431C8.08203 20.9647 9.09703 21.5247 9.8787 21.0231L19.3754 14.9797C20.0987 14.5247 20.0987 13.4747 19.3754 13.0081L9.8787 6.97639C9.09703 6.47472 8.08203 7.03472 8.08203 7.95639Z" fill="white"/>
                    </svg>
            }
            {
                props.type === "sound" &&
                <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3 2.93974C7.72333 3.30141 3.5 8.18975 3.5 13.7781V21.5831C3.5 23.5197 5.06333 25.0831 7 25.0831H8.16667C9.45 25.0831 10.5 24.0331 10.5 22.7497V18.0831C10.5 16.7997 9.45 15.7497 8.16667 15.7497H5.83333V13.7547C5.83333 9.27475 9.28667 5.37808 13.755 5.24975C18.3867 5.12141 22.1667 8.81975 22.1667 13.4164V15.7497H19.8333C18.55 15.7497 17.5 16.7997 17.5 18.0831V22.7497C17.5 24.0331 18.55 25.0831 19.8333 25.0831H21C22.9367 25.0831 24.5 23.5197 24.5 21.5831V13.4164C24.5 7.38475 19.4133 2.54308 13.3 2.93974Z" fill="white"/>
                </svg>
            }
            {
                props.type === "course" &&
                <h1 className="date">{props.date}</h1>
            }
        </div>
    );
};

export default Icon;