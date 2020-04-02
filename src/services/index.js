import { getTokenRequest, getVehiclesRequest, getPlanetsRequest, findRequest } from './api.js';

/**
 * Function to get the authentication token
 * @returns {Object} the token object
 */
export function getTokenData(){
    return getTokenRequest()
        .then(res =>res.data)
}

/**
 * Function to get the vehicles list
 * @returns {Array} the list of vehicles
 */
export function getVehiclesData(){
    return getVehiclesRequest()
        .then(res =>res.data)
}

/**
 * Function to get the planets list
 * @returns {Array} the list of planets
 */
export function getPlanetsData(){
    return getPlanetsRequest()
        .then(res =>res.data)
}

/**
 * Function to get the result
 * @param {Object} body the body object for the post request
 * @returns {Object} the result of the search
 */
export function getResultData(body){
    return findRequest()
        .then(res =>res.data)
}