import {combineReducers, legacy_createStore} from "redux";
import {CounterReducer} from "./counter-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {loadState, saveState} from "../localstorage/localstorage";


const rootReducer = combineReducers({
    counter: CounterReducer,
})

const persistedState = loadState();



export const store = legacy_createStore(rootReducer,persistedState)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type StateType = ReturnType<typeof rootReducer>

export const typedUseSelector: TypedUseSelectorHook<StateType> = useSelector

// @ts-ignore
window.store = store