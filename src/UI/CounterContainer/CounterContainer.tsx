import React, {useState} from 'react';
import {Counter} from "../Counter/Counter";
import {useSelector} from "react-redux";
import {StateType} from "../../BLL/state/store";
import styles from './CounterContainer.module.css'
import {Settings} from "../Settings/Settings";

export type SettingsType = {
    startValue: number,
    maxValue: number
}

export const CounterContainer = () => {

    const [settingsRules,setSettingsRules] = useState<string>('')

    const currentValue = useSelector<StateType, number>(state => state.counter.currentValue)
    const maxValue = useSelector<StateType, number>(state => state.counter.settings.maxValue)
    const error = useSelector<StateType, boolean>(state => state.counter.error)
    const settings: SettingsType = useSelector<StateType,SettingsType>(state => state.counter.settings)




    return (
        <div className={styles.container}>
            <div>
                <Settings settings={settings} setSettingsRules={setSettingsRules} error={error}/>
            </div>
            <div>
                <Counter currentValue={currentValue} maxValue={maxValue} error={error} settingsRules={settingsRules}/>
            </div>

        </div>
    );
};

