import React from "react";

function Header(props) {
  return (
    <div className="header-container">
      <h1>Finding Falcone!</h1>
      <div className="header-buttons-container">
      <div className="reset-button" onClick={props.resetData}>Reset</div>   
      <div className="gtrust-homepage-button">GeekTrust Home</div> 
      </div>
    </div>
  );
}
export default Header;