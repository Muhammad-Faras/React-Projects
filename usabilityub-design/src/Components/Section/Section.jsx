import React from 'react'
import styles from './Section.module.css'
export const Section = () => {
    return (
        <section className={`${styles.mainsection}`}>
            <div className={`${styles.sectoioncontent}`}>
                <h1>Design Confidently</h1>
                <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                <button>Get Started</button>
            </div>
            <div className={`${styles.sectoionimg}`}>
                <img src="/images/section_img.png" alt="section img" />
            </div>
        </section>

    )
}

export const CompaniesSection = () => {
    return <section className={`${styles.companiessection}`}>
        <p>The world’s best companies rely on UsabilityHub to make better design decisions.</p>
        <div className={`${styles.companieslogo}`}>
            <img src="/images/comapnies_amazon.png" alt="" />
            <img src="/images/comapnies_google.png" alt="" />
            <img src="/images/comapnies_rabbit.png" alt="" />
            <img src="/images/comapnies_airtable.png" alt="" />
            <img src="/images/comapnies_asana.png" alt="" />

        </div>

    </section>
}


export const FeatureSection = () => {
    return <section className={`${styles.featuresection}`}>
        <h1>Your user research Swiss Army knife</h1>
        <button>See all Features →</button>
        <div className={`${styles.cardsection}`}>
            <div className={`${styles.subcardsection}`}>
                <img src="/images/1_card.svg" alt="" />
                <h2>Card sorting</h2>
                <p>Discover how people group and label information.</p>
                <button>Learn more→</button>
            </div>
            <div className={`${styles.subcardsection}`}>
                <img src="/images/2_card.svg" alt="" />
                <h2>Card sorting</h2>
                <p>Discover how people group and label information.</p>
                <button>Learn more→</button>
            </div>
            <div className={`${styles.subcardsection}`}>
                <img src="/images/3_card.svg" alt="" />
                <h2>Card sorting</h2>
                <p>Discover how people group and label information.</p>
                <button>Learn more→</button>
            </div>
            <div className={`${styles.subcardsection}`}>
                <img src="/images/4_card.svg" alt="" />
                <h2>Card sorting</h2>
                <p>Discover how people group and label information.</p>
                <button>Learn more→</button>
            </div>
            <div className={`${styles.subcardsection}`}>
                <img src="/images/5_card.svg" alt="" />
                <h2>Card sorting</h2>
                <p>Discover how people group and label information.</p>
                <button>Learn more→</button>
            </div>
            <div className={`${styles.subcardsection}`}>
                <img src="/images/6_card.svg" alt="" />
                <h2>Card sorting</h2>
                <p>Discover how people group and label information.</p>
                <button>Learn more→</button>
            </div>
        </div>
    </section>
}


export const BigFeatureSection = () => {
    return <section >
        <div className={`${styles.bigfeaturesection}`}>
            <div className={`${styles.subbigfimage}`}>
                <img src="/images/1_big_feature.png" alt="" />
            </div>
            <div className={`${styles.subbigfcontent}`}>
                <p>
                    Easier decision making for</p>
                <h2>Product managers</h2>
                <p>Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.</p>
            </div>
        </div>
        <div className={`${styles.bigfeaturesection} ${styles.bfsec1}`}>
            <div className={`${styles.subbigfcontent} ${styles.id}`} >
                <p>
                    Easier decision making for</p>
                <h2>Product managers</h2>
                <p>Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.</p>
            </div>
            <div className={`${styles.subbigfimage}`}>
                <img src="/images/2_big_feature.png" alt="" />
            </div>
        </div>
        <div className={`${styles.bigfeaturesection}`}>
            <div className={`${styles.subbigfimage}`}>
                <img src="/images/3_big_feature.png" alt="" />
            </div>
            <div className={`${styles.subbigfcontent}`}>
                <p>
                    Easier decision making for</p>
                <h2>Product managers</h2>
                <p>Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.</p>
            </div>
        </div>

    </section>
}

export const ExampleSection = () => {
    return <section className={`${styles.examplesection}`}>
        <h1>One platform, endless possibilities</h1>
        <button>see more examples →</button>
        <div className={`${styles.examplesectionimage}`}>
            <div className={`${styles.esecimage}`}>
                <p>Can user complete a task in my software interface?</p>
            </div>
            <div className={`${styles.esecimage} ${styles.img2}`}>
                <p>Can user complete a task in my software interface?</p>
            </div>
            <div className={`${styles.esecimage} ${styles.img3}`}>
                <p>Can user complete a task in my software interface?</p>
            </div>
            <div className={`${styles.esecimage} ${styles.img4}`}>
                <p>Can user complete a task in my software interface?</p>
            </div>
        </div>
    </section>
}
export const CtaSection = () => {
    return <section className={`${styles.ctasection}`}>
        <h1>Start testing today
        </h1>
        <p>Take the guesswork out of design decisions</p>
        <button>Get Started</button>
    </section>
}

export const FooterSection = () => {
    return <footer>
        <div className={`${styles.footersubsec}`}>
            <img src="/images/logo.png" alt="" />
            <div className={`${styles.footernav}`}>
                <h4>Products</h4>
                <a href="#" class="hover-link">Overview</a>
                <a href="#" class="hover-link">Pricing</a>
                <a href="#" class="hover-link">Usability Hub</a>
                <a href="#" class="hover-link">Customers Page</a>
                <a href="#" class="hover-link">Status Page</a>
            </div>
            <div className={`${styles.footernav}`}>
                <h4>Methodologies</h4>
                <a href="#" class="hover-link">Card Sorting</a>
                <a href="#" class="hover-link">Prototype Testing</a>
                <a href="#" class="hover-link">First Click Tests</a>
                <a href="#" class="hover-link">Preference Tests</a>
                <a href="#" class="hover-link">Five Second Tests</a>
                <a href="#" class="hover-link">Design Surveys</a>
            </div>
            <div className={`${styles.footernav}`}>
                <h4>Resources</h4>
                <a href="#" class="hover-link">Blog</a>
                <a href="#" class="hover-link">Examples</a>
                <a href="#" class="hover-link">Testing Guides</a>
                <a href="#" class="hover-link">Help Center</a>
                <a href="#" class="hover-link">Contact</a>
                <a href="#" class="hover-link">Careers</a>
            </div>
        </div>

    </footer>
}

export const SubFooter = () => {
    return <div className={`${styles.subfooter}`}>
        <a href="">Privacy Policy</a>
        <a href="">Terms & Condition</a>
        <a href="">Security Information</a>
    </div>
}