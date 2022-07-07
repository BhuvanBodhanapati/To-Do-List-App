import React, { useState } from 'react';



function TaskItem(props){
    
    return (
        <div className='taskItem'>
            <input type='checkbox' 
                    className='checkBox' 
                    onChange={ () => {
                        props.deleteTask(props.id)
                    }}>
            </input>
            <li> {props.task} </li>
        </div>
    )
}

export default TaskItem;