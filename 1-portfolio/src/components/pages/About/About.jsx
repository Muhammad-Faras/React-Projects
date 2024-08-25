import React from 'react'
import { about } from '../../data/dummydata'
import styles from './About.module.css'
import Heading from '../../common/Heading'
const About = () => {
    return (
        <>
            <section className={`${styles.aboutSection}`}>
                <div className={`${styles.aboutContainer}`}>
                    {about.map((val, i) => (
                        <>
                            <div className={`${styles.left}`}>
                                <img data-aos="fade-down-right" src={val.cover} alt="about-man-image" />
                            </div>
                            <div data-aos="fade-down-left" className={`${styles.right}`}>
                                <Heading title="About Me" />
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <div className={`${styles.btns}`}>
                                    <button className={`${styles.downloadBtn}`}>Download Cv</button>
                                    <button className={`${styles.downloadBtn}`}>Download Cv</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About