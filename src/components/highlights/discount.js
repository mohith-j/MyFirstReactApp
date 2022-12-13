import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import MyButton from "../utils/myButton";

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < end) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>Off</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase Tickets before February</h3>
            <p>Get a chance to win exciting TS merchs and many more</p>
            <MyButton
              text="Purchase tickets"
              link="https://www.taylorswift.com/events/"
              size="small"
              style={{
                background: "#ffa800",
                color: "#ffffff",
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Discount;
