import React from 'react';
import './Blogs.css'; 

const Blogs = () => {
    return (
        <div className='question-answer'>
            <div className='answer'>
            <h1>Context Api: </h1>
            <p>
                We can Access the component through drilling like one after another component will be called. We can give an example that is Grand father then Father then child one after another will be called. <br />But if we use Context API no need to call the lowest chile one after another. Here, Grand pa can easily call the grand child component. For that we need to code to decleare the Context API. 
            </p>
            </div>
            <div className='answer'>
                <h1>Semantic Tag: </h1>
                <p>
                    Semantic Tag is a tag that explain their meaning to the machine or browser and the maker of the website. It also describes what is's written for. For example: We write 'p' it means developer wants browser to create a paragraph tag to write something in it. If we write 'div' it means developer wants to create a division to write some code in it. 
                    <br /><br />So this div, p or another else are called Semantic tag. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;