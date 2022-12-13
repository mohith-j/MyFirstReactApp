import React from "react";
import MyButton from "../utils/myButton";
import { Zoom } from "react-awesome-reveal";

const Princing = () => {
    const priceState = {
        prices:[300,600,1000],
        position:['Balcony','Medium','Star'],
        desc:[
            'Economy Class. Recliner Seats. Complimentary Water Bottle.',
            'Comfortable Boxes, with complimentary food and live telecast of the concert',
            'Right beside the stage. Chance to see TS close. Complimentary food and merchs. Printed Concert Tickets'
        ],
        linkto:['https://www.taylorswift.com/events/','https://www.taylorswift.com/events/','https://www.taylorswift.com/events/'],
        delay:[500,0,500]   
    }

    const showBoxes = () => (
        priceState.prices.map((box,index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            style={{
                                color:'#ffffff'
                            }} 
                            link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )


    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div> 
    )
}

export default Princing;