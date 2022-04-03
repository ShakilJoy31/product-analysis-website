import React from 'react';
import './Home.css';
import CustomHook from '../CustomHook';
import ReviewPeople from '../ReviewPeople/ReviewPeople';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [people, setPeople] = CustomHook([]);
    const threePeople = people.slice(0, 3);

    const navigate = useNavigate(); 
    const handleSeeAllButton = () =>{
        navigate('/review'); 
    }

    return (
        <div>
            <div className='name-and-pic'>
                <div className='product'>
                    <div className='new-product'>
                        <h1>Our New Product</h1>
                        <h1><span className='your-choose'>Your next Choose</span></h1>
                        <p>Our upcoming new produst with reasonable price. <br /> Our recomendation is to buy this and have fun with your family and friends. <br /> This car contains a lot of customization and it's very much luxuries. <br /> We're having a lot of demand for that car. I wish you to have a demo ride with this car. <br />Thank you.  </p>
                        <button className='seeAll'>Live Demo</button>
                    </div>
                    <div>
                        <img src="https://khaledrentacar.com/wp-content/uploads/2019/08/Sedan.jpg" alt="" />
                    </div>
                </div>


            </div>

            <div>
                <h1>Customer Review (3)</h1>
            </div>
            <div className='review-people'>
                {
                    threePeople.map(people => <ReviewPeople people={people}></ReviewPeople>)
                }
            </div>
            <div className='seeAll-button'>
                <button onClick={handleSeeAllButton} className='seeAll'>See All Review</button>
            </div>
        </div>
    );
};

export default Home;