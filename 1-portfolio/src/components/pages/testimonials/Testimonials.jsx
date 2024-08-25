import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,  // Enable the arrows for navigation
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                <div>Testimonials</div>
                <div>12222222222</div>
                <div>33333333333</div>
            </Slider>
        </div>
    );
}

export default Testimonials;
