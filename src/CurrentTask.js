import React from 'react';
import Task from './Task';
// import TaskList from './TaskList';

export default function CurrentTask(props) {
  // console.log(props.tasklist.length);
  const taskDuration = props.initialTime/props.tasklist.length;
  const index = props.tasklist.length - (Math.ceil(props.totalseconds/taskDuration));
  console.log(index);
  if (props.totalseconds === 0 || props.initialTime === 0){
    return <span></span>
  }
  else {
    return (
      <span>Your current task is: <Task tasktitle={props.tasklist[index].title} /> </span>
    );
  }
}