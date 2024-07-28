import styles from './Herosection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
const Herosection = () => {
    return (
        <div className={`${styles.mainherosection}`}>
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            <div className={`${styles.childherosection}`}>
                <div className={`${styles.sectioncontent}`}>
                    <div className={`${styles.sectionbtns}`}>
                        <button><span><FontAwesomeIcon icon={faCommentDots} className={`${styles.cof}`} /></span> Via Support chat</button>
                        <button><span><FontAwesomeIcon icon={faPhone} className={`${styles.cof}`} /></span> Via call</button>
                    </div>
                    <button className={`${styles.emailbtn}`}><span><FontAwesomeIcon icon={faMessage} className={`${styles.emailicon}`} /></span> Via Email Form</button>
                    <form action="#">
                        <input type="text" placeholder='username' />
                        <input type="email" placeholder='email' />
                        <textarea name="" id="" placeholder='Write your thoughts here'></textarea>
                        <button className={`${styles.submitbtn}`} type='submit'>Submit</button>
                    </form>
                </div>
                <div className={`${styles.sectionimage}`}>
                    <img src="/images/section_img.svg" alt="section-image" />
                </div>
            </div>
        </div>
    )
}

export default Herosection