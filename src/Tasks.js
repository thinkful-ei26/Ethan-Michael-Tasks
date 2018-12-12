import React from 'react';
import TaskList from './TaskList';
import Timer from './Timer';
import TaskInput from './TaskInput';

export default class Tasks extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            tasks:[{title:'Make more tasks'}],
            minutes: 0,
            seconds: 0
        }

        this.handleNewTask = this.handleNewTask.bind(this);

        this.handleTimerSubmit = this.handleTimerSubmit.bind(this);

        this.handleTimerChange = this.handleTimerChange.bind(this);
    }

    handleNewTask(task){
        console.log(task);
        console.log(this.state.tasks);
        this.setState({tasks: [...this.state.tasks, {title:task}]})
        console.log(task);
    }
    // this.setState({guesses: [...this.state.guesses, value ]});

    handleTimerSubmit(time){
        console.log(time);
        this.setState({
            minutes: time
        })
    }


    render(){
        return <div>
        <TaskInput handleNewTask={this.handleNewTask} />
        <TaskList tasklist={this.state.tasks} />
        <Timer handleTimerSubmit={this.handleTimerSubmit}/>
        </div>
    }
}