import { combineReducers } from "redux";
import { categoryReducer } from './categorie';
import { toolReducer } from './tools';
import { routerReducer } from './router';


export const rootReducer = combineReducers({
    categoryReducer,
    toolReducer,
    routerReducer
});