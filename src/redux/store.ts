import { combineReducers, createStore } from "redux";
import counter from "./reducers/counter";

const rootReducer = combineReducers({ counter });

export default createStore(rootReducer);
