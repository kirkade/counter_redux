import React, {ChangeEvent, FC, useState} from 'react';
import {resetErrorAC, setErrorAC, setSettingsAC} from "../../BLL/state/counter-reducer";
import {useDispatch} from "react-redux";
import {SettingsType} from "../CounterContainer/CounterContainer";
import {Button, TextField} from "@mui/material";
import styles from './Settings.module.css'


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
        }

    }

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSettings({
            ...changedSettings,
            maxValue: event.currentTarget.valueAsNumber
        }, 'enter values and press Set')
    }

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeSettings({
            ...changedSettings,
            startValue: event.currentTarget.valueAsNumber
        }, 'enter values and press Set')
    }

    return (
        <div className={styles.settingsContainer}>
            <div className={styles.inputContainer}>
                <TextField
                    variant='outlined'
                    type={'number'}
                    size={'small'}
                    style={{margin:'10px'}}
                    label={'Enter max value'}
                    value={changedSettings.maxValue}
                    onChange={onChangeMaxValue}
                    error={changedSettings.maxValue < 1 || changedSettings.maxValue === changedSettings.startValue}
                />

                <TextField
                    variant={'outlined'}
                    type={'number'}
                    size={'small'}
                    style={{margin:'10px'}}
                    label={'Enter start value'}
                    value={changedSettings.startValue}
                    onChange={onChangeStartValue}
                    error={changedSettings.startValue < 0 || changedSettings.startValue >= changedSettings.maxValue}

                />
            </div>
            <div className={styles.button}>
                <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    disabled={error}
                    onClick={onSetHandler}
                >Set
                </Button>

            </div>


        </div>
    );
};
