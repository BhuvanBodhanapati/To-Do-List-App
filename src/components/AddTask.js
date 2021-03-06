import React from 'react';


function AddTask(props){
    return (
        <div className='addTask'>
                <input type="text" 
                        placeholder='New Task' 
                        onChange={props.getNewTask} 
                        value={props.newTask}
                        onKeyPress={(event)=>{
                            if(event.code=='Enter'){
                                props.addNewTask();
                            }
                        }}>
                </input>
                <button onClick={props.addNewTask}>Add</button>
        </div>
    )
}


export default AddTask;