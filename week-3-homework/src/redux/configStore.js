import {createStore, combineReducers} from "redux";
import message from "./modules/message";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({message});

const store = createStore(rootReducer);

export default store;