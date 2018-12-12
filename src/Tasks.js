import React from 'react';
import TaskList from './TaskList';
import Timer from './Timer';
import TaskInput from './TaskInput';

export default class Tasks extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            // add a second key value pair for each task totalseconds
            // change the functions that rely on this.state.totalseconds
            // active array of task timers
            // remove or add active tasks
            // 
            tasks:[{title:'Make more tasks',id:'',totalseconds:''}],
            minutes: 0,
            seconds: 0,
            totalseconds: 0,
            intervalId: ''
        }

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleTimerSubmit = this.handleTimerSubmit.bind(this);
        this.handleTimerChange = this.handleTimerChange.bind(this);
        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({totalseconds: this.state.totalseconds - 1 });
        console.log(this.state.totalseconds);
    }

    handleTimerChange(){
        this.setState({totalseconds: this.state.minutes * 60});
        let timer = setInterval(this.tick, 1000);
        this.setState({intervalId: timer})
    }

    handleNewTask(task){
        console.log(task);
        console.log(this.state.tasks);
        this.setState({tasks: [...this.state.tasks, {title:task}]});
        console.log(task);
    }
    // this.setState({guesses: [...this.state.guesses, value ]});

    handleTimerSubmit(time){
        console.log(time);
        this.setState({
            minutes: time
        })
    }

    handleStartTimer(){
        console.log('clicked');
        this.handleTimerChange();
    }



    render(){
        if(this.state.totalseconds === 0){
            clearInterval(this.state.intervalId);
        }
        return <div>
        <TaskInput handleNewTask={this.handleNewTask} />
        <TaskList tasklist={this.state.tasks} />
        <Timer totalseconds={this.state.totalseconds} handleStartTimer={this.handleStartTimer} handleTimerSubmit={this.handleTimerSubmit}/>
        </div>
    }
}