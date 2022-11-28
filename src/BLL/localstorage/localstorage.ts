import {StateType} from "../state/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('settings');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (settings: StateType) => {
    try {
        const serializedState = JSON.stringify(settings);
        localStorage.setItem('settings', serializedState);
    } catch {
        // ignore write errors
    }
};