import React from 'react'
import HeaderComponents from '../Header/HeaderComponents'
import AboutComponent from '../Body/About/AboutComponent'
import PortFolio from '../Body/Portfolio/PortFolio'
import ContactComponent from '../Body/Contact/ContactComponent'
import Footer from '../Footer/FooterComponents'

function Home() {
  return (
    <div>
      <HeaderComponents />
      <AboutComponent />
      <PortFolio />
      <ContactComponent />
      <Footer />
    </div>
  )
}

export default Home
