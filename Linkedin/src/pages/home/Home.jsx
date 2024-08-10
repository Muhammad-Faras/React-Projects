import React from 'react';
import Index from '../../components/layout/Index';
import styles from './Home.module.css';

const Home = () => {
    return (
        <Index>
            <div className={`${styles.parentSection}`}>
                <div className={`${styles.profileSection}`}>
                    <div className="profileinfo">
                        <div className={`${styles.profileheader}`}>
                            <div className={`${styles.pheaderimg}`}>
                                {/* <img src="./images/profile_img.jpeg" alt="profile img" /> */}
                            </div>
                            <p>Muhammad Faras</p>
                            <p>Python & Django Developer | HTML | CSS | Tailwind CSS | Git</p>
                        </div>
                        <div className="profileanalytics">
                            analytics
                        </div>
                        <div className="profilepremiumadd">
                            premium add
                        </div>
                        <div className="profilesaveitem">
                            save item
                        </div>
                    </div>
                    <div className="recentinfo">

                    </div>
                </div>
















                <div className={`${styles.contentSection}`}></div>
                <div className={`${styles.suggestionSection}`}></div>
            </div>
        </Index>
    );
};

export default Home;
