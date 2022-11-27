import React, {ChangeEvent, FC, useState} from 'react';
import {MyButton} from "../Button/MyButton";
import {resetErrorAC, setErrorAC, setSettingsAC} from "../../BLL/state/counter-reducer";
import {useDispatch} from "react-redux";
import {SettingsType} from "../CounterContainer/CounterContainer";


type SettingsPropsType = {
    settings: SettingsType
    setSettingsRules: (title: string) => void
    error: boolean
}

export const Settings: FC<SettingsPropsType> = (props) => {

    const {settings, setSettingsRules, error} = props

    const dispatch = useDispatch()


    const [changedSettings, setChangedSettings] = useState<SettingsType>(settings)


    const onSetHandler = () => {
        dispatch(setSettingsAC(changedSettings))
        setSettingsRules('')
    }

    const onChangeSettings = (settings: SettingsType, title: string) => {
        setSettingsRules(title)
        setChangedSettings(settings)
        if (settings.startValue < 0
            || settings.startValue >= settings.maxValue
            || settings.maxValue < 0
        ) {
            dispatch(setErrorAC())
        } else {
            dispatch(resetErrorAC())
            setSettingsRules('')
        }

    }

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSettings({
            ...changedSettings,
            maxValue: event.currentTarget.valueAsNumber
        }, 'enter values and press SAVE')
    }

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSettings({
            ...changedSettings,
            startValue: event.currentTarget.valueAsNumber
        }, 'enter values and press SAVE')
    }

    return (
        <div>
            <div>
                <span>max value</span>
                <input type="number" onChange={onChangeMaxValue} value={changedSettings.maxValue}/>
            </div>
            <div>
                <span>start value</span>
                <input type="number" onChange={onChangeStartValue} value={changedSettings.startValue}/>
            </div>
            <div>
                <MyButton name={'Set'} callback={onSetHandler} disabled={error}/>
            </div>


        </div>
    );
};
