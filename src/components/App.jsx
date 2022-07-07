import React, {useState} from 'react';
import AddTask from './AddTask';
import TaskItem from './TaskItem';


function App(){
    
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function getNewTask(event){
        setNewTask(event.target.value);
    }
    function addNewTask(){
        if(newTask.length!=0){
            setTasks( (prevTasks) => ( [...prevTasks , newTask] ));
        }
        setNewTask("");
    }
    function deleteTask(id){
        setTasks( (prevTasks) => {
            return prevTasks.filter( (task, index) => {
                return (index!=id)
            })
        })
    }
    return (
        <div className='todoBoard'>

            <h1>To Do List</h1>

            <AddTask 
                getNewTask = {getNewTask}
                newTask = {newTask}
                addNewTask = {addNewTask}
            />

            <div className='allTasks'>
                {tasks.map( (task,index) => {
                    if(task.length!=0){
                        return (
                            <TaskItem 
                                key = {index}
                                id = {index}
                                task = {task}
                                deleteTask = {deleteTask}
                            />
                        )
                    }
                })}
            </div>

        </div>
    )
}

export default App;