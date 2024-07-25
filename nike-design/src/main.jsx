import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './navbar/navbar'
import HeroSection from './herosection/hero_section'
import './navbar/navbar.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <NavBar />
      <HeroSection />
    </div>
  </React.StrictMode>,
)
