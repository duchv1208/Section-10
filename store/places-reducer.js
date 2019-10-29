import { ADD_PLACE } from "./places-action";
import Place from '../models/Place';

const initState = {
    places:[]
}

export default placeReducer = (state = initState, action)=>{
    switch (action.type){
        case ADD_PLACE:
            const title = action.placeData.title; 
            const newPlace = new Place(new Date().toString(), title);
            return {...state, places: state.places.concat(newPlace)}
        default:
            return state;
    }
};