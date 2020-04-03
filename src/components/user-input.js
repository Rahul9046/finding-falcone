import React from 'react';
import PlanetDropDown from './planet-dropdown';
import VehicleSelect from './vehicle-select';
import '../css/user-input.css';

const showStyle = {
    visibility: ''
},
hideStyle = {
    visibility: 'hidden'
};
const UserInput = (props) => {
    let { planets, vehicles, index, planetSelectHandler, vehicleSelectHandler, showDropDown, selectedPlanet } = props;
    return (
        <div className="user-input-container">
            <div className="destination-text">Destination {index}</div>
            <div className="planets-container">
                <PlanetDropDown planets = {planets} planetSelectHandler={planetSelectHandler}/>
            </div>
            <div className="vehicles-container" style={showDropDown ? showStyle : hideStyle}>
                <VehicleSelect vehicles = {vehicles} vehicleSelectHandler = {vehicleSelectHandler} distance = {(selectedPlanet && selectedPlanet.distance) || undefined} />
            </div>
        </div>
    );
}

export default UserInput;
