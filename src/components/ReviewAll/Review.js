import React from 'react';
import CustomHook from '../CustomHook';
import ReviewAll from './ReviewAll';
import './Review.css'; 

const Review = () => {
    const [people, setPeople] = CustomHook([]); 
    console.log(people); 
    return (
        <div>
            <h1>The People Reviewed Our product</h1>
            <div className='all-people'>
            {
                people.map(singlePeople => <ReviewAll singlePeople={singlePeople}></ReviewAll>)
            }
        </div>
        </div>
    );
};

export default Review;