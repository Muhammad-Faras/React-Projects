import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css'
const Navigation = () => {
    return (
        <div>
            {/* top banner */}
            <header className={`${styles.topbanner}`}>
                <p>🥳 New to UsabilityHub: Open and closed card sorting! Read more →</p>
            </header>
            <nav>
                <div className={`${styles.logo}`}>
                    <img src="/images/logo.png" alt="" />
                </div>
                <ul>
                    <li><a href="#" class="">Products</a></li>
                    <li><a href="#" class="">Customers</a></li>
                    <li><a href="#" class="">Pricing</a></li>
                    <li className={`${styles.parentdropdown}`}>
                        <a href="#" >Resources ▼</a>
                        <ul className={`${styles.dropddown}`}>
                            <li>adasd</li>
                            <li>asdasd</li>
                            <li>asdasd</li>
                            <li>asdasd</li>
                        </ul>
                    </li>
                    <li><a href="#" class={`${styles.navbtns} ${styles.loginbtn}`}>Sign in</a></li>
                    <li><a href="#" class={`${styles.navbtns} ${styles.signupbtn}`}>Sign up</a></li>
                </ul>
                <div className={`${styles.fabar}`}><FontAwesomeIcon icon={faBars} /></div>

            </nav>
        </div>
    )
}

export default Navigation