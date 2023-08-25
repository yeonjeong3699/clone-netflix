import { FETCH_ACTION_MOVIES } from "../actions/index";

export default function(state = [], action){
    switch(action.type){
        case FETCH_ACTION_MOVIES : 
        return {
            ...state,
            movies : action.data
        }
        default:
            return state
    }
}