import React from 'react'
import { services } from '../../data/dummydata'
import Heading from '../../common/Heading'
import styles from './Services.module.css'

const Services = () => {
    return (
        <>
            <section className={`${styles.servicesSection}`}>
                <Heading title="Services" />
                <div className={`${styles.servicesContainer}`}>

                    {services.map((val, i) => (
                        <div data-aos="flip-left" className={`${styles.card}`}>
                            <i>{val.icon}</i>
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


        </>

    )
}

export default Services