import React from 'react';

export default function TimerInput(props) {
  const onSubmit =  e => {
    e.preventDefault();
    const data = new FormData(e.target);
    e.target.value = '';
    return props.handleTimerSubmit(data.get('timer-input')) ;
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="timer-input">Enter time (in minutes) here</label>
      <input type="number" name="timer-input" />
      <button type="submit">Submit Time</button>
    </form>
  );
}