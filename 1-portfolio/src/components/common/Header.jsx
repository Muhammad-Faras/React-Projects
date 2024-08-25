import { React, useState } from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { navlink } from '../data/dummydata';
import styles from './Header.module.css'
import { Menu } from '@mui/icons-material'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header>
            <img src="./images/logo.png" alt="logo" data-aos="fade-right" />
            <nav data-aos="fade-left" className={`${styles.navmenu} ${isOpen ? styles.active : ''}`}>
                {navlink.map((link, i) => (
                    // Use NavLink for active link styling; otherwise, use Link
                    <Link to={link.url} key={i} className={`${styles.link} ${i === 3 ? styles.fourthLink : ''} `}>
                        {link.text}
                    </Link>

                ))}

            </nav>
            <button className={`${styles.toggle}`} onClick={toggleMenu}>
                <Menu />
            </button>

        </header>

    )
}

export default Header