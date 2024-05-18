import React from 'react'
import { Header } from '../default/Header'
import { Home } from '../main/Home'
import { MotoCarousel } from '../main/MotoCarousel'
import { GearCarousel } from '../main/GearCarousel'
import { Footer } from '../default/Footer'

export const HomePage = () => {
    return (
        <div className='home-container' id='homeContainer'>
            <header className="App-header">
                <Header />
            </header>
            <div className='App-body'>
                <Home />
                <MotoCarousel />
                <GearCarousel />
            </div>
            <div className='App-footer'>
                <Footer />
            </div>
        </div>
    )
}
