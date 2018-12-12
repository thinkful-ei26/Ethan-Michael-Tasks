import React from 'react';
import Task from './Task';

export default function TaskList(props) {

    const taskListConstructer = props.tasklist.map((task,index) => {
        return <li key={index}><Task tasktitle={task.title} /></li>
    }
    )

    return taskListConstructer
    
}