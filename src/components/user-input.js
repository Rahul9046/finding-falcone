import React from 'react';
import PlanetDropDown from './planet-dropdown';
import VehicleSelect from './vehicle-select';
import '../css/user-input.css';

const UserInput = (props) => {
    let { planets, vehicles, index, planetSelectHandler, vehicleSelectHandler} = props;
    return (
        <div className="user-input-container">
            <div className="destination-text">Destination {index}</div>
            <div className="planets-container">
                <PlanetDropDown planets = {planets} planetSelectHandler={planetSelectHandler}/>
            </div>
            <div className="vehicles-container">
                <VehicleSelect vehicles = {vehicles} vehicleSelectHandler = {vehicleSelectHandler}/>
            </div>
        </div>
    );
}

export default UserInput;
