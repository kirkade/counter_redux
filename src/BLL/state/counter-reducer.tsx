import {SettingsType} from "../../UI/CounterContainer/CounterContainer";


export type CounterType = {
    currentValue: number,
    settings: {
        startValue: number,
        maxValue: number,
    }
    error: boolean
}
const initialState: CounterType = {
    currentValue: 0,
    settings: {
        startValue: 0,
        maxValue: 5,
    },
    error: false

}
export type IncrementAT = ReturnType<typeof incrementAC>
export type ResetAT = ReturnType<typeof resetAC>
export type setSettingsAT = ReturnType<typeof setSettingsAC>
export type setErrorAT = ReturnType<typeof setErrorAC>
export type resetErrorAT = ReturnType<typeof resetErrorAC>

export type CounterActionType = IncrementAT | ResetAT | setSettingsAT | setErrorAT | resetErrorAT

export const CounterReducer = (state = initialState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, currentValue: state.currentValue + 1}
        case "RESET" :
            localStorage.clear()
            return {...state, currentValue: state.settings.startValue}
        case "SET-SETTINGS":
            return {
                ...state,
                currentValue: action.settings.startValue,
                settings: {startValue: action.settings.startValue, maxValue: action.settings.maxValue},
            }
        case 'SET_ERROR':
            return {...state, error: true}
        case 'RESET_ERROR':
            return {...state, error: false}
        default:
            return state
    }
};

export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetAC = () => ({type: 'RESET'}) as const
export const setSettingsAC = (settings: SettingsType) => ({type: 'SET-SETTINGS', settings}) as const
export const setErrorAC = () => ({type: 'SET_ERROR'}) as const
export const resetErrorAC = () => ({type: 'RESET_ERROR'}) as const
