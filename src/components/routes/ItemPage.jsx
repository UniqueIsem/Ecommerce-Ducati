import React from 'react'
import { ShopItem } from '../main/ShopItem'
import { Header } from '../default/Header'
import { Footer } from '../default/Footer'

export const ItemPage = () => {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <ShopItem />
      <Footer />
    </>
  )
}
