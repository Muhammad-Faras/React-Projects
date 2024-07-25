function HeroSection() {
    return (
        <section className="container herosection">
            <div className="hero-section-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="section-content-btns">
                    <button className="section-shopnow-btn">Shop Now</button>
                    <button className="section-category-btn">Category</button>
                </div>
                <p className="availale-para">Also Available On</p>
                <div className="social-btns">
                    <img src="/hero_section_images/flipkart.png" alt="" />
                    <img src="/hero_section_images/amazon.png" alt="" />
                </div>
            </div>
            <div className="hero-section-image">
                <img src="/hero_section_images/shoe_image.png" alt="" />
            </div>
        </section>
    )
}

export default HeroSection;