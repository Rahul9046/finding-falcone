
import { SERVER_URL, VEHICLES, FIND, PLANETS, TOKEN} from './constant.js';
import axios from 'axios';

/**
 * Function to send a post request to the server to get the token
 * @returns {Promise} Promise
 */
export function getTokenRequest(){
    return axios.post(`${SERVER_URL}${TOKEN}`, null, {headers: {'Accept': 'application/json'}});
}

/**
 * Function to send a get request to the server to get the vehicles
 * @returns {Promise} Promise
 */
export function getVehiclesRequest(){
    return axios.get(`${SERVER_URL}${VEHICLES}`);
}

/**
 * Function to send a get request to the server to get the planets
 * @returns {Promise} Promise
 */
export function getPlanetsRequest(){
    return axios.get(`${SERVER_URL}${PLANETS}`);
}

/**
 * Function to send a post request to the server to get the result of the search
 * @param {Object} body body parameters for the post request
 * @returns {Promise} Promise
 */
export function findRequest(body){
    return axios.post(`${SERVER_URL}${FIND}`, body, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}