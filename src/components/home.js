import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import { setToken, setVehicles, setPlanets, selectPlanet, selectVehicle, findFalcone, setTotalTime, resetSelectionState } from '../actions';
import UserInputPage from './user-input-page';
import ResultPage from './result-page';
import '../css/home.css';

/**
 * function that resturns the initail    state of the component
 * @returns {Object} the state object
 */
const getInitialState = ()=>{
    return {
        planets_selected:[],
        vehicles_selected:[]
    }
}
class Home extends Component{
    constructor(props){
        super(props);
        // initialize initial state
        this.state = getInitialState();
    }
    async componentDidMount(){
        await this.props.setToken();
        await this.props.setVehicles();
        await this.props.setPlanets();
    }
    // handler for selecting a planet from  then dropdown
    planetSelectHandler = (value) =>{
        this.props.selectPlanet(value);
        this.setState({
            planets_selected: [...this.props.selected_planets, value]
        });
    }
    // handler for selecting a vehicle from the radio button list
    vehicleSelectHandler = (planetDistance, vehicleName) =>{
        let vehiclesSpeed = this.props.vehicles.find((vehicle)=>vehicle.name === vehicleName).speed,
            timeTaken = planetDistance / vehiclesSpeed;
        this.props.selectVehicle(vehicleName);
        this.setState({
            vehicles_selected: [...this.props.selected_vehicles, vehicleName]
        });
        this.props.setTotalTime(this.props.totalTime + timeTaken);
    }
    // handler for the find button 
    findResultHandler = async ()=>{
        let { planets_selected, vehicles_selected } = this.state,
        {token, findFalcone} = this.props;
        // call the action to find the result
       await findFalcone({
            token,
            planet_names: planets_selected,
            vehicle_names: vehicles_selected
        });
        this.setState(getInitialState());
    }
    render(){
        debugger;
        let { planets, vehicles, noOfInputs, result, totalTime } = this.props,
        { planets_selected, vehicles_selected } = this.state;
        return (
            <Router>
                <Switch>
                    <Route path="/result">
                        <ResultPage 
                            result={result} 
                            totalTime={totalTime} 
                            resetSelectionState={this.props.resetSelectionState}/>
                    </Route>
                    <Route path="/">
                        <UserInputPage 
                            planets = {planets}
                            vehicles = {vehicles}
                            noOfInputs={noOfInputs}
                            planets_selected = {planets_selected}
                            vehicles_selected ={vehicles_selected}
                            totalTime = {totalTime}
                            planetSelectHandler = {this.planetSelectHandler} 
                            vehicleSelectHandler = {this.vehicleSelectHandler}
                            findResultHandler = {this.findResultHandler}/> 
                    </Route>
                </Switch>
            </Router>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken : async ()=> { // action for setting the token
            await setToken(dispatch);
        },
        setVehicles: async ()=> { // action for setting the total vehicles available initially
            await setVehicles(dispatch);
        },
        setPlanets: async ()=> { // action for setting the total planets available initially 
            await setPlanets(dispatch);
        },
        findFalcone: async (req) => { // action for finding the search result
            await findFalcone(dispatch, req);
        },
        selectPlanet: (data)=> selectPlanet(dispatch, data), // action for selecting a planet
        selectVehicle: (data)=> selectVehicle(dispatch, data), // action for selecting a vehicle
        setTotalTime: (time)=>{setTotalTime(dispatch, time)}, // action for calculating total time 
        resetSelectionState: async()=>{  // action for resetting the selection state of the store
            await resetSelectionState(dispatch);
        }
    }
  }
const mapStateToProps = (state)=>{
    return {
        token: state.token,
        planets: state.planets,
        vehicles: state.vehicles,
        selected_planets: state.selected_planets,
        selected_vehicles: state.selected_vehicles,
        result: state.result,
        totalTime: state.totalTime
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);