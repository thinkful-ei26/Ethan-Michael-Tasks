import React from 'react';

export default function TaskInput(props) {
    // will take in a function to store input in state
    const onSubmit =  e => {
        e.preventDefault();
        const data = new FormData(e.target);
        // console.log(e.target.taskinput);
        e.target.taskinput.value = '';
        return props.handleNewTask(data.get('taskinput')) ;
    }
    return <form onSubmit={onSubmit} >
        <label htmlFor='taskinput'>Input new tasks here!</label>
        <input type='text' name='taskinput' />
    </form>
    
}