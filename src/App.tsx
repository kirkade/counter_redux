import React from 'react';
import './App.css';
import {Settings} from "./components/Settings";
import {Counter} from "./components/Counter";

function App() {
    return (
        <div className='App'>
            <div style={{margin: '50px'}}>
                <Settings/>
            </div>
            <div>
                <Counter/>
            </div>


        </div>
    );
}

export default App;
