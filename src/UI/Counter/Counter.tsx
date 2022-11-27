import React, {FC, memo} from 'react';
import {incrementAC, resetAC} from "../../BLL/state/counter-reducer";
import {useDispatch} from "react-redux";
import styles from './Counter.module.css'
import {Button} from "@mui/material";

type CounterPropsType = {
    currentValue: number
    maxValue: number
    error: boolean
    settingsRules: string
}

export const Counter: FC<CounterPropsType> = memo((props) => {

    const {currentValue, maxValue, error, settingsRules} = props
    const dispatch = useDispatch()

    const increment = () => {
        if (currentValue < maxValue) {
            dispatch(incrementAC())
        }
    }
    const reset = () => {
        dispatch(resetAC())
    }

    const counterStyle = currentValue === maxValue ? styles.end : ''


    return (
        <div>
            {
                error
                    ? <div>Incorrect value!</div>
                    : <div className={counterStyle}>
                        {settingsRules !== ''
                            ? settingsRules
                            : currentValue}
                    </div>

            }

            <Button
                variant='contained'
                size='small'
                color='primary'
                disabled={error || settingsRules !== ''}
                onClick={increment}
            >
                Add
            </Button>
            <Button
                variant='contained'
                size='small'
                color='primary'
                disabled={error || settingsRules !== ''}
                onClick={reset}
            >
                Reset
            </Button>
        </div>
    );
});
