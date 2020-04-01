
import { getTokenData, getVehiclesData, getPlanetsData, getResultData } from '../services';

export async function setToken(dispatch){
    let payload = await getTokenData();
    dispatch({
        type: 'SET_TOKEN',
        payload: payload
    });
}
export async function setVehicles(dispatch){
    let payload = await getVehiclesData();
    dispatch({
        type: 'SET_VEHICLES',
        payload: payload
    });
}
export async function setPlanets(dispatch){
    let payload = await getPlanetsData();
    dispatch({
        type: 'SET_PLANETS',
        payload: payload
    });
}



