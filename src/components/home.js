import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import { setToken, setVehicles, setPlanets, selectPlanet, selectVehicle, findFalcone, setTotalTime } from '../actions';
import UserInputPage from './user-input-page';
import ResultPage from './result-page';
import '../css/home.css';

/**
 * function that resturns the initail    state of the component
 * @returns {Object} the state object
 */
const getInitialState = ()=>{
    return {
        token: '',
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
    vehicleSelectHandler = (planetDistance, vehicleName) =>{
        let vehiclesSpeed = this.props.vehicles.find((vehicle)=>vehicle.name === vehicleName).speed,
            timeTaken = planetDistance / vehiclesSpeed;
        this.props.selectVehicle(vehicleName);
        this.setState({
            vehicles_selected: [...this.props.selected_vehicles, vehicleName]
        });
        this.props.setTotalTime(this.props.totalTime + timeTaken);
    }
    findResultHandler = ()=>{
        let { planets_selected, vehicles_selected } = this.state,
        {token, findFalcone} = this.props;
        findFalcone({
            token,
            planet_names: planets_selected,
            vehicle_names: vehicles_selected
        });
        this.setState(getInitialState());
    }
    render(){
        let { planets, vehicles, noOfInputs, result, totalTime } = this.props,
        { planets_selected, vehicles_selected } = this.state;
        return (
            <Router>
                <Switch>
                    <Route path="/result"><ResultPage result={result} totalTime={totalTime} setTotalTime={this.props.setTotalTime}/></Route>
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
        setToken : ()=> setToken(dispatch),
        setVehicles: ()=> setVehicles(dispatch),
        setPlanets: ()=> setPlanets(dispatch),
        selectPlanet: (data)=> selectPlanet(dispatch, data),
        selectVehicle: (data)=> selectVehicle(dispatch, data),
        findFalcone: async (req) => {
            await findFalcone(dispatch, req);
        },
        setTotalTime: (time)=>{setTotalTime(dispatch, time)}
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