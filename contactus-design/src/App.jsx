import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Herosection from './components/Herosection/Herosection'
function App() {
  return (
    <div className='container'>
      <Navigation />
      <Herosection />
    </div>
  )
}

export default App
