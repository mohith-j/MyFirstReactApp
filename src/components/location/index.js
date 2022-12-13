import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13303.963219279674!2d-112.2625593!3d33.5276247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9c497aa9569305b!2sState%20Farm%20Stadium!5e0!3m2!1sen!2sus!4v1670923974285!5m2!1sen!2sus"
        width="100%" 
        height="500px" 
        frameBorder="0"
        title="gglemaps" 
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
