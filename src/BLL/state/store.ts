import {combineReducers, legacy_createStore} from "redux";
import {CounterReducer} from "./counter-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const store = legacy_createStore(rootReducer)
export type StateType = ReturnType<typeof rootReducer>

export const typedUseSelector: TypedUseSelectorHook<StateType> = useSelector

// @ts-ignore
window.store = store