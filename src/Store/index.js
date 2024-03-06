import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./Slices/counterSlice";
import todoReducer from "./Slices/todoSlice";
import cityReducer from "./Slices/сitySlice/citySlice";
import { thunk } from "redux-thunk";


const root = combineReducers({
    counter:  countReducer,
    todo: todoReducer,
    city: cityReducer
})


const store = createStore(root, applyMiddleware(thunk));

export default store;
