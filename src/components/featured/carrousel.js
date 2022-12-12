import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderOne from '../../resources/images/ts1.jpeg';
import sliderTwo from '../../resources/images/ts2.jpeg';
import sliderThree from '../../resources/images/ts3.jpeg';

const Carrousel=()=>{

    const settings={
        dots:false,
        infinity: true,
        autoplay: true,
        speed: 500
    }

    return(
        <div className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${sliderOne})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                            className="carrousel_image"
                            style={{
                                background: `url(${sliderTwo})`,
                                height: `${window.innerHeight}px`
                            }}
                        >
                    </div></div>
                <div>
                <div
                        className="carrousel_image"
                        style={{
                            background: `url(${sliderThree})`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    )

}
export default Carrousel;