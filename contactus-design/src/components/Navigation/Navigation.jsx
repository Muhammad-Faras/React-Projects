import React from 'react'
import styles from './Navigation.module.css'
const Navigation = () => {
    console.log(styles);
    return (

        <nav className={`${styles.nav}`}>
            <img src="/images/logo.png" alt="logo" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav >
    )
}

export default Navigation