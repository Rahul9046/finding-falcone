
const SET_TOKEN = 'SET_TOKEN',
    SET_VEHICLES = 'SET_VEHICLES',
    SET_PLANETS = 'SET_PLANETS';

const initState = {
    token: '',
    planets: [],
    vehicles: []
};

export default function rootReducer(state = initState, action){
    debugger;
    switch(action.type){
        case SET_TOKEN:
            return{
                ...state,
                token: action.payload.token
            }
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        case SET_PLANETS:
            return {
                ...state,
                planets: action.payload
            }    
        default:
        return {
            ...state
        }
    }
}