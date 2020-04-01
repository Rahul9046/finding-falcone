import React from "react";
import '../css/header.css'

function Header(props) {
  return (
    <div className="header-container">
      <div className="header-text">Finding Falcone!</div>
      <div className="header-buttons-container">
        <div className="reset-button" onClick={props.resetData}>Reset</div>   
        <div className="gtrust-homepage-button">GeekTrust Home</div> 
      </div>
    </div>
  );
}
export default Header;