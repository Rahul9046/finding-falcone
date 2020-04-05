import React from "react";
import '../css/header.css';
import { connect } from 'react-redux';
import {  resetSelectionState } from '../actions';

const URL = 'https://www.geeksforgeeks.org/';
function Header(props) {
  const handleResetButtonCLick = ()=> {
    props.resetSelectionState();
  },
  handleHomePageButtonClick = () =>{
    window.open(URL, '_blank');
  };
  return (
    <div className="header-container">
      <div className="header-text">Finding Falcone!</div>
      <div className="header-buttons-container">
        <div className="reset-button" onClick={handleResetButtonCLick}>Reset</div>   
        <div className="gtrust-homepage-button" onClick={handleHomePageButtonClick}>GeekTrust Home</div> 
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
      resetSelectionState: async()=>{  // action for resetting the selection state of the store
          await resetSelectionState(dispatch);
      }
  }
}
export default connect(null, mapDispatchToProps)(Header);