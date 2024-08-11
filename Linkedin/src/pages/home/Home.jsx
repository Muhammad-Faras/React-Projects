import React from 'react';
import Index from '../../components/layout/Index';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePiedPiper } from '@fortawesome/free-brands-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return (
        <Index>
            <div className={`${styles.parentSection}`}>

                <div className={`${styles.profileSection}`}>
                    <div className={`${styles.profileinfo}`}>
                        <div className={`${styles.profileheader}`}>
                            <div className={`${styles.pheaderimg}`}>
                                <img src="./images/profile_img.jpeg" alt="profile img" />
                            </div>
                            <p>Muhammad Faras</p>
                            <p>Python & Django Developer | HTML | CSS | Tailwind CSS | Git</p>
                        </div>
                        <div className={`${styles.profileAnalytics}`}>
                            <div className={`${styles.views}`}>
                                <p>Profile Viewers</p>
                                <p>20</p>
                            </div>
                            <div className={`${styles.impressions}`}>
                                <p>Profile Impressions</p>
                                <p>234</p>
                            </div>
                        </div>
                        <div className={`${styles.profilePremiumAdd}`} >
                            <p> Unlock Premium tools & insights</p>
                            <p><FontAwesomeIcon icon={faSquarePiedPiper} style={{ color: "#FFD43B", marginRight: '3px', }} />Try Premium for PKR0</p>
                        </div>
                        <div className={`${styles.profileSaveItem}`}>
                            <FontAwesomeIcon icon={faBookmark} />
                            <p>save item</p>
                        </div>
                    </div>
                    <div className={`${styles.recentinfo}`}>
                        aaaaaaaaaaasdasdasdasdasda <br />
                        asdasd
                        asd
                    </div>
                </div>
















                <div className={`${styles.contentSection}`}></div>
                <div className={`${styles.suggestionSection}`}></div>
            </div>
        </Index >
    );
};

export default Home;
