import React from 'react';

export default function TimerInput(props) {
  const onSubmit =  e => {
    e.preventDefault();
    const data = new FormData(e.target);
    e.target.value = '';
    // e.target.timerinput.value = '';
    return props.handleTimerSubmit(data.get('timerinput')) ;
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="timerinput">Enter time (in minutes) here</label>
      <input type="number" name="timerinput" />
      <button type="submit">Submit Time</button>
    </form>
  );
}