import React from 'react'
import Heading from '../../common/Heading'
import { portfolio } from '../../data/dummydata'
import styles from './Portfolio.module.css'
const Portfolio = () => {
    return (
        <div className={`${styles.portfolioSection}`}>
            <Heading title="Portfolio" />
            <div data-aos="fade-down" className={`${styles.btns}`}>
                <button>All</button>
                <button>Marketing</button>
                <button>Design</button>
                <button>Dvelopment</button>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="2000" className={`${styles.cardContainer}`}>
                {portfolio.map((item, i) => (
                    <div className={`${styles.card}`}>
                        <img src={item.cover} alt="portfolio-img" />
                        <div className={`${styles.info}`}>
                            <p>{item.title}</p>
                            <p>{item.name}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Portfolio