import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setToken, setVehicles, setPlanets, selectPlanet, selectVehicle } from '../actions';
import UserInputManager from './user-input-manager.js';
import TimeTracker from './time-tracker';
import Find from './find';
import '../css/home.css';

/**
 * function that resturns the initail state of the component
 * @returns {Object} the state object
 */
const getInitialState = ()=>{
    return {
        token: '',
        totalTime: 0,
        planets:[],
        vehicles:[],
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
        this.props.setToken().then(()=>{
            this.setState({
                token: this.props.token
            })
        });
        this.props.setVehicles().then(()=>{
            this.setState({
                vehicles: this.props.vehicles
            })
        });
        this.props.setPlanets().then(()=>{
            this.setState({
                planets: this.props.planets
            })
        });
    }
    planetSelectHandler = (value) =>{
        this.props.selectPlanet(value);
        this.setState({
            planets_selected: [...this.props.selected_planets, value]
        });
    }
    vehicleSelectHandler = (evt) =>{
        let value = evt.target.value;
        this.props.selectVehicle(value);
        this.setState({
            vehicles_selected: [...this.props.selected_vehicles, value]
        });
    }
    render(){
        let { planets, vehicles, noOfInputs } = this.props,
        { planets_selected, vehicles_selected } = this.state;
        return (
            <div className="home-main-container">
                <div className="home-page-title">Select the planets you want to search in:</div>
                <div className="inputs-container">
                    <UserInputManager 
                        planets_selected = {planets_selected} 
                        vehicles_selected = {vehicles_selected}
                        planets = {planets}
                        vehicles = {vehicles}
                        count={noOfInputs}
                        planetSelectHandler = {this.planetSelectHandler}
                        vehicleSelectHandler = {this.vehicleSelectHandler}
                        /> 
                </div>
                <TimeTracker />
                <Find disabled={true}/>
            </div>
            // <div></div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken : ()=> setToken(dispatch),
        setVehicles: ()=> setVehicles(dispatch),
        setPlanets: ()=> setPlanets(dispatch),
        selectPlanet: (data)=> selectPlanet(dispatch, data),
        selectVehicle: (data)=> selectVehicle(dispatch, data)
    }
  }
const mapStateToProps = (state)=>{
    return {
        token: state.token,
        planets: state.planets,
        vehicles: state.vehicles,
        selected_planets: state.selected_planets,
        selected_vehicles: state.selected_vehicles
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);