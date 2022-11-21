import React from 'react';
import {SettingsType} from "../components/Settings";

export type CounterType = {
    currentValue: number,
    settings: {
        startValue: number,
        maxValue: number,
    }
}
const initialState: CounterType = {
    currentValue: 0,
    settings: {
        startValue: 0,
        maxValue: 5,
    }

}
export type IncrementAT = ReturnType<typeof incrementAC>
export type ResetAT = ReturnType<typeof resetAC>
export type setSettingsAT = ReturnType<typeof setSettingsAC>

export type CounterActionType = IncrementAT | ResetAT | setSettingsAT

export const CounterReducer = (state = initialState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, currentValue: state.currentValue + 1}
        case "RESET" :
            return {...state, currentValue: state.settings.startValue}
        case "SET-SETTINGS":
            return {
                ...state,
                currentValue: action.settings.startValue,
                settings: {startValue:action.settings.startValue,maxValue:action.settings.maxValue},
            }
        default:
            return state
    }
};

export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetAC = () => ({type: 'RESET'}) as const
export const setSettingsAC = (settings: SettingsType) => ({type: 'SET-SETTINGS', settings}) as const
