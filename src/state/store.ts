import {combineReducers, legacy_createStore} from "redux";
import {CounterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const store = legacy_createStore(rootReducer)
export type StateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store