import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from 'typewriter-effect'
import styles from './HeroSection.module.css'
const HeroSection = () => {
    return (
        <>
            <section className={`${styles.heroSection}`}>
                {home.map((val, i) => (
                    <div className={`${styles.heroContainer}`}>
                        <h3>{val.text}</h3>
                        <h1><Typewriter
                            options={{
                                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                autoStart: true,
                                loop: true
                            }} /></h1>
                        <p>{val.desc}</p>
                        <button className={`${styles.downloadBtn}`}>Download Cv</button>
                    </div>
                ))}
            </section>
        </>
    )
}

export default HeroSection