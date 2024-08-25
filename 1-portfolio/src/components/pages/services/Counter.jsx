import React from 'react'
import { project } from '../../data/dummydata'
import styles from './Counter.module.css'
import CountUp from 'react-countup'
const Counter = () => {
    return (
        <>

            <div className={`${styles.counterContainer}`}>
                {project.map((item, i) => (
                    <div key={i} className={`${styles.subContainer}`}>
                        <i>{item.icon}</i>
                        <h1><CountUp enableScrollSpy duration={3} end={item.num} /></h1>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div></>
    )
}

export default Counter