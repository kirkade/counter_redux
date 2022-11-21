import React from 'react';
import {StateType,} from "../state/store";
import {incrementAC, resetAC} from "../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "./Button";

export const Counter = () => {

    const currentValue = useSelector<StateType, number>(state => state.counter.currentValue)
    const maxValue = useSelector<StateType, number>(state => state.counter.settings.maxValue)

    const dispatch = useDispatch()

    const increment = () => {
        if (currentValue < maxValue) {
            dispatch(incrementAC())
        }
    }

    const reset = () => {
        dispatch(resetAC())
    }
    return (
        <div>
            <div>{currentValue}</div>
            <Button
                name={'inc'}
                callback={increment}

            />
            <Button
                name={'reset'}
                callback={reset}
            />
        </div>
    );
};
