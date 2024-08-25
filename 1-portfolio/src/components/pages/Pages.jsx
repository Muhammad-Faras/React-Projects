import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../common/Header';
import Home from '../home/Home';
import About from './About/About';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Testimonials from './testimonials/Testimonials';
import Blog from './blog/Blog';
const Pages = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/testimonials' element={<Testimonials />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/contact' element={<About />}></Route>
            </Routes>
        </Router>

    )
}

export default Pages