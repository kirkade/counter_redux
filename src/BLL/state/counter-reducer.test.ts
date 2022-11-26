import {
    CounterReducer,
    CounterType,
    incrementAC,
    resetAC,
    resetErrorAC,
    setErrorAC,
    setSettingsAC
} from "./counter-reducer";
import {SettingsType} from "../../UI/CounterContainer/CounterContainer";

let startState:CounterType
beforeEach(()=>{
    startState =  {
        settings:{
            startValue: 0,
            maxValue:5,
        },
        error:false,
        currentValue:0
    }
})

test('counter should be increased by 1', () => {
    //data

    //action
    const newState = CounterReducer(startState,incrementAC())

    //expect
    expect(newState).not.toBe(startState)
    expect(newState.currentValue).toBe(1)
})

test('current value should be equal start value', () => {
    //data

    //action
    const newState = CounterReducer(startState,resetAC())

    //expect
    expect(newState).not.toBe(startState)
    expect(newState.currentValue).toBe(0)
})

test('counter value should be equal settings value', () => {
    //data

    const settings:SettingsType = {
        maxValue:8,
        startValue:3
    }
    //action
    const newState = CounterReducer(startState,setSettingsAC(settings))

    //expect
    expect(newState).not.toBe(startState)
    expect(newState.currentValue).toBe(3)
    expect(newState.settings.maxValue).toBe(8)
    expect(newState.settings.startValue).toBe(3)
})

test('counter should set error', () => {
    //data

    //action
    const newState = CounterReducer(startState,setErrorAC())

    //expect
    expect(newState).not.toBe(startState)
    expect(startState.error).toBe(false)
    expect(newState.error).toBe(true)
})

test('counter should reset error', () => {
    //data
    const oldState:CounterType ={
        settings:{
            startValue: 0,
            maxValue:5,
        },
        error:true,
        currentValue:0
    }

    //action
    const newState = CounterReducer(startState,resetErrorAC())

    //expect
    expect(newState).not.toBe(startState)
    expect(oldState.error).toBe(true)
    expect(newState.error).toBe(false)

})