import React from 'react';

export default function TimerStart(props){
  return (
    <button type="button" onClick={props.handleStartTimer}>Start Timer</button>
  )
}