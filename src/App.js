import React from "react";
import './resources/styles.css';


import Header from './components/header_footer/Header';
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";

const App=()=> {
  return (
    <div className="App">
      <Header/>

      <Featured/>

      <VenueInfo/>
      <div style={{backgroundColor:'violet', height: '800px'}}></div>
      <div style={{backgroundColor:'yellow', height: '800px'}}></div>
      <div style={{backgroundColor:'orange', height: '800px'}}></div>
      <div style={{backgroundColor:'pink', height: '800px'}}></div>
      <Footer/>
    </div>
  );
}

export default App;
