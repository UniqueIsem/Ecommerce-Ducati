import React from 'react'

export const HomePage = () => {
    return (
        <div className='hp-container'>
            <div className='hp-blank-space'></div>
            <div className='hp-info-container'>
                <div className='hp-text-container'>
                    <div className='hp-message'>
                        <div className='hp-title'>
                            <h1>WELCOME TO DUCATI </h1>
                        </div>
                        <p className='hp-subtitle'>
                            Dive into the universe of emotions and power with Ducati. From the legendary Panigale to the versatile Multistrada, 
                            each motorcycle is an expression of our commitment to excellence and innovation. Join a passionate community of enthusiasts 
                            and experience the thrill of the road like never before. Discover the style, elegance, and performance that only Ducati 
                            can offer. Welcome to the world of two wheels, welcome to Ducati.
                        </p>
                    </div>
                </div>
                <div className='hp-button-container'>
                    <button className='hp-button'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}
