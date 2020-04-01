
import { URL, VEHICLES, FIND, PLANETS, TOKEN} from './constant.js';
import axios from 'axios';

/**
 * Function to send a post request to the server to get the token
 * @returns {Promise} Promise
 */
export function getTokenRequest(){
    return axios.post(`${URL}${TOKEN}`, null, {'Accept': 'application/json'});
}

/**
 * Function to send a get request to the server to get the vehicles
 * @returns {Promise} Promise
 */
export function getVehiclesRequest(){
    return axios.get(`${URL}${VEHICLES}`);
}

/**
 * Function to send a get request to the server to get the planets
 * @returns {Promise} Promise
 */
export function getPlanetsRequest(){
    return axios.get(`${URL}${PLANETS}`);
}

/**
 * Function to send a post request to the server to get the result of the search
 * @param {Object} body body parameters for the post request
 * @returns {Promise} Promise
 */
export function findRequest(body){
    return axios.post(`${URL}${FIND}`, body, {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
}