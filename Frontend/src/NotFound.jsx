// components/NotFound.jsx
import React from 'react';
import NotFoundPic from "./assets/NotFoundpic.png"
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='NotFound-container'>
            <img src={NotFoundPic} alt="Not Found Pic" width="700px" height="1000px" />
            <div>
                <h1>Oops!</h1>
                <h2>We couldn't find the page you were looking for</h2>
                <Link to={"/"}>
                    <button className='GoHome-btn'>← Go Home</button>
                </Link>
            </div>
            {/* Add any additional content or styling as needed */}
        </div>
    );
};

export default NotFound;