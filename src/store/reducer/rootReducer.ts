import { combineReducers } from "redux";
import { categoryReducer } from './categorie';


export const rootReducer = combineReducers({
    categoryReducer,
});