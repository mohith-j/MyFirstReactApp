import React from "react";
import "./resources/styles.css";

import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Princing from "./components/pricing";
import Location from "./components/location";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueinfo">
        <VenueInfo />
      </Element>

      <Element name="highlight">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Princing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
