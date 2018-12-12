import React from 'react';
import TimerInput from './TimerInput';
import TimerClock from './TimerClock';


export default function Timer(props) {
    

    return (
    <div>
        <TimerInput handleTimerSubmit={props.handleTimerSubmit} />
        <TimerClock />
    </div>
    );
}