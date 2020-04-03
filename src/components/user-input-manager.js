
import React from 'react';
import UserInput from './user-input';

const UserInputManager = (props) => {
    let {planets_selected , vehicles_selected, planets, vehicles, count, planetSelectHandler, vehicleSelectHandler} = props,
    getUserInputs = (selectedPlanets, selectedVehicles, planets, vehicles, count)=>{
        // create deep copies of vehicles ans planets to prevent the props object to get mutated
        let remainingPlanets = JSON.parse(JSON.stringify(planets)),
        remainingVehicles = JSON.parse(JSON.stringify(vehicles));
        // prepare a list of user input componnet
        return Array.apply(null, Array(count)).map((val, index) => {
            // starting from the first slected planet, iteratively reduce the list with the last selected planet
            // geting removed from the array
            remainingPlanets = remainingPlanets.filter(planet => planet.name !== selectedPlanets[index - 1]);
            // if planet of the current user input is selected only then perform operations on the vehicles
            if (selectedPlanets[index]){
                if (selectedVehicles[index]){
                    // if a vehicle is selected then reduce its count
                    remainingVehicles = remainingVehicles.map((vehicle)=>{
                        if (vehicle.name === selectedVehicles[index]){
                            vehicle.total_no -= 1;
                            return vehicle;
                        } 
                        return vehicle;
                    });
                }
                return (
                    <UserInput 
                        key={index}
                        selectedPlanet = {selectedPlanets[index]} 
                        planets={remainingPlanets} 
                        vehicles={JSON.parse(JSON.stringify(remainingVehicles))} 
                        planetSelectHandler = {planetSelectHandler}
                        vehicleSelectHandler = {vehicleSelectHandler}
                        index={index + 1}
                    />
                )
            } 
            return (
                <UserInput 
                    key={index}
                    selectedPlanet = {undefined} 
                    planets={remainingPlanets} 
                    vehicles={JSON.parse(JSON.stringify(remainingVehicles))} 
                    planetSelectHandler = {planetSelectHandler}
                    vehicleSelectHandler = {vehicleSelectHandler}
                    index={index + 1}
                />
            )
        });
    };
    return (
        <div>
            {getUserInputs(planets_selected , vehicles_selected, planets, vehicles, count)}
        </div>
    );
}

export default UserInputManager;