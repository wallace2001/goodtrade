import { combineReducers } from "redux";
import { categoryReducer } from './categorie';
import { toolReducer } from './tools';
import { routerReducer } from './router';


// Exportando todas os estados que estão sendo criados no redux
export const rootReducer = combineReducers({
    categoryReducer,
    toolReducer,
    routerReducer
});