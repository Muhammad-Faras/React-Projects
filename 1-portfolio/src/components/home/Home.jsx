import React from 'react'
import HeroSection from './HeroSection'
import About from '../pages/About/About'
import Services from '../pages/services/Services'
import Counter from '../pages/services/Counter'
import Portfolio from '../pages/portfolio/Portfolio'
import Testimonials from '../pages/testimonials/Testimonials'
const Home = () => {
    return (
        <>
            <div>
                <HeroSection />
                <About />
                <Services />
                <Counter />
                <Portfolio />
                <Testimonials />
            </div>
        </>
    )
}

export default Home