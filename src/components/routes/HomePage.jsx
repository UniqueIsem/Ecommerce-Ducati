import React from 'react'
import { Home } from '../main/Home'
import { MotoCarousel } from '../main/MotoCarousel'
import { GearCarousel } from '../main/GearCarousel'

export const HomePage = () => {
    return (
        <div className='home-container' id='homeContainer'>
            <Home></Home>
            <MotoCarousel></MotoCarousel>
            <GearCarousel></GearCarousel>
        </div>

    )
}
