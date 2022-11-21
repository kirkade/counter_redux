import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import {StateType,} from "../state/store";
import {setSettingsAC} from "../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";


export type SettingsType = {
    startValue: number,
    maxValue: number
}
export const Settings = () => {

    const dispatch = useDispatch()

    const settings: SettingsType = useSelector<StateType,SettingsType>(state => state.counter.settings)
    const [changedSettings, setChangedSettings] = useState<SettingsType>(settings)


    const onSetHandler = () => {
        dispatch(setSettingsAC(changedSettings))
    }

    const onChangeSettings = (settings: SettingsType) => {
        setChangedSettings(settings)
    }

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSettings({...changedSettings, maxValue: event.currentTarget.valueAsNumber})
    }

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSettings({...changedSettings, startValue: event.currentTarget.valueAsNumber})
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
                <Button name={'Set'} callback={onSetHandler}/>
            </div>


        </div>
    );
};
