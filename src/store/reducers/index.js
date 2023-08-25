import { combineReducers } from "redux";
import ActionMovie from './reducerActionMovies.js';
import ComedyMovie from './reducerComedyMovies.js';

const rootReducer = combineReducers({
    action : ActionMovie,
    comedy : ComedyMovie
})

export default rootReducer