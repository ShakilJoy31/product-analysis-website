import React from 'react';
import './Review.css'; 

const ReviewAll = (props) => {
    const {name, img, address, phone, ratings, review} = props.singlePeople; 
    return (
        <div>
            <div className='People-info'>
                <div className='single-people'>
                    <div className='people-image'>
                        <img src={img} alt="" />
                    </div>
                    <h1><span className='for-color'>Name:</span> {name}</h1>
                    <p><span className='for-color'>Address: </span> {address?.city}</p>
                    <p><span className='for-color'>Phone</span> {phone}</p>
                    <p><span className='for-color'>Comment: </span> {review}</p>
                    <p><span className='for-color'>Rating: </span> {ratings} Out of 10</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewAll;