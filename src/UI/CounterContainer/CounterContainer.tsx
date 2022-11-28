import React, {useState} from 'react';
import {Counter} from "../Counter/Counter";
import {typedUseSelector} from "../../BLL/state/store";
import styles from './CounterContainer.module.css'
import {Settings} from "../Settings/Settings";
import {CounterType} from "../../BLL/state/counter-reducer";

export type SettingsType = {
    startValue: number,
    maxValue: number
}

export const CounterContainer = () => {

    const [settingsRules, setSettingsRules] = useState<string>('')

    const counter = typedUseSelector<CounterType>(state => state.counter)

    return (
        <div className={styles.container}>
            <div style={{margin: '20px'}}>
                <Settings
                    settings={counter.settings}
                    setSettingsRules={setSettingsRules}
                    error={counter.error}
                />
            </div>

            <div style={{margin: '20px'}}>
                <Counter
                    currentValue={counter.currentValue}
                    maxValue={counter.settings.maxValue}
                    error={counter.error}
                    settingsRules={settingsRules}
                />
            </div>

        </div>
    );
};

