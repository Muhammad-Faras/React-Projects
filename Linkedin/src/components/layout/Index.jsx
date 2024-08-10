import React from 'react'
// import Navbar from '../navbar/Navbar'
import './index.css'
import Navbar from '../navbar/Navbar'
const Index = (props) => {
    return (
        <div className='parentdiv'>
            <Navbar />
            <div className="main">
                <div className="main-wrap">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Index