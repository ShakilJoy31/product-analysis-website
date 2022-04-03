import React from 'react';

const ReviewAll = (props) => {
    const {name, img, address, phone, ratings} = props.singlePeople; 
    return (
        <div>
            <div className='People-info'>
                <div className='single-people'>
                    <div className='people-image'>
                        <img src={img} alt="" />
                    </div>
                    <h1>Name: {name}</h1>
                    <p>Address: {address?.city}</p>
                    <p>Phone: {phone}</p>
                    <p>Ratings: {ratings} Out of 10</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewAll;