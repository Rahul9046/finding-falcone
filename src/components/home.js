import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setToken, setVehicles, setPlanets } from '../actions';
import UserInput from './user-input';
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
    render(){
        let { planets, vehicles } = this.state,
        count = this.props.noOfInputs,
        userInputs = Array.apply(null, Array(count)).map((val, index)=>{
           return <UserInput key={index} planets={planets} vehicles={vehicles} index={index + 1}/>
        });
        return (
            <div className="home-main-container">
                <div className="home-page-title">Select the planets you want to search in:</div>
                <div className="inputs-container">
                    {userInputs}
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
        setPlanets: ()=> setPlanets(dispatch)
    }
  }
const mapStateToProps = (state)=>{
    return {
        token: state.token,
        planets: state.planets,
        vehicles: state.vehicles
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);