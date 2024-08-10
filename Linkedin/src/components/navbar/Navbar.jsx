import React from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUserGroup, faBriefcase, faCommentDots, faBell, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {


    return (
        <header>
            <div className={`${styles.firstdiv}`}>
                <FontAwesomeIcon icon={faLinkedin} className={`${styles.logoicon}`} />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={`${styles.searchIcon}`} />
                <div className={`${styles.searchDiv}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={`${styles.inputIcon}`} />
                    <input
                        type="text"
                        placeholder='Search'
                    />
                </div>
            </div>
            <nav
                className={`${styles.navbar}`}
            >
                <ul>
                    <li className="item1">
                        <a href="#" className={`${styles.naviconLink}`}>
                            <FontAwesomeIcon icon={faHome} className={`${styles.navicon}`} />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="item2">
                        <a href="#" className={`${styles.naviconLink}`}>
                            <FontAwesomeIcon icon={faUserGroup} className={`${styles.navicon}`} />
                            <span>My Network</span>
                        </a>
                    </li>
                    <li className="item3">
                        <a href="#" className={`${styles.naviconLink}`}>
                            <FontAwesomeIcon icon={faBriefcase} className={`${styles.navicon}`} />
                            <span>Jobs</span>
                        </a>
                    </li>
                    <li className="item4">
                        <a href="#" className={`${styles.naviconLink}`}>
                            <FontAwesomeIcon icon={faCommentDots} className={`${styles.navicon}`} />
                            <span>Messaging</span>
                        </a>
                    </li>
                    <li className="item5">
                        <a href="#" className={`${styles.naviconLink}`}>
                            <FontAwesomeIcon icon={faBell} className={`${styles.navicon}`} />
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li className="item6">
                        <a href="#" className={`${styles.naviconLink}`}>
                            <FontAwesomeIcon icon={faUser} className={`${styles.navicon}`} />
                            <span>Me</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
