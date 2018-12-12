import React from 'react';
import TimerInput from './TimerInput';
import TimerClock from './TimerClock';
import TimerStart from './TimerStart';


export default function Timer(props) {
    

    return (
    <div>
        <TimerInput handleTimerSubmit={props.handleTimerSubmit} />
        <TimerStart handleStartTimer={props.handleStartTimer} />
        <br></br>
        <TimerClock totalseconds={props.totalseconds}/>
    </div>
    );
}