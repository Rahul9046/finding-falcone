
import { getTokenData, getVehiclesData, getPlanetsData, getResultData } from '../services';

export async function setToken(dispatch){
    return await getTokenData().then((data)=>{
        dispatch({
            type: 'SET_TOKEN',
            payload: data
        });   
    });
}
export async function setVehicles(dispatch){
    return await getVehiclesData().then((data)=>{
        dispatch({
            type: 'SET_VEHICLES',
            payload: data
        });   
    });
}
export async function setPlanets(dispatch){
    return await getPlanetsData().then((data)=>{
        dispatch({
            type: 'SET_PLANETS',
            payload: data
        });   
    });
}
export function selectPlanet(dispatch, data){
    dispatch({
        type: 'SELECT_PLANET',
        payload: data
    }); 
}
export function selectVehicle(dispatch, data){
    dispatch({
        type: 'SELECT_VEHICLE',
        payload: data
    }); 
}



