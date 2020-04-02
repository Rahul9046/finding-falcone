import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken, setVehicles, setPlanets } from '../actions'

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
        await this.props.setToken();
        await this.props.setVehicles();
        await this.props.setPlanets();
        let { planets, vehicles, token } = this.props;
        this.setState({
            planets,
            vehicles,
            token
        });
    }
    render(){
        return (
            <div></div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken : ()=> { setToken(dispatch) },
        setVehicles: ()=>{ setVehicles(dispatch) },
        setPlanets: ()=>{ setPlanets(dispatch) }
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