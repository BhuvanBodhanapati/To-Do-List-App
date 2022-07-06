import React, { useState } from 'react';



function TaskItem(props){

    const [completed, setCompleted] = useState(false);

    function markCompleted(event){
        setCompleted((prevValue) => !prevValue);
    }

    return (
        <div className='taskItem'>
            <li 
                onClick={()=>{
                    props.deleteTask(props.id)
                }}
                style={{textDecoration : completed ? "line-through" : 'none'}} >
                {props.task}
            </li>
        </div>
    )
}

export default TaskItem;