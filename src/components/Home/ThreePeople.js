import React from 'react';

const ThreePeople = (props) => {
    const {name, img, address, phone} = props.people; 
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <h1>Name: {name}</h1>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default ThreePeople;