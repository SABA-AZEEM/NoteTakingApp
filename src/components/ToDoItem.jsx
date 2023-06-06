import React from 'react';

const ToDoItem=(props)=>{
    return(
        <div className='checkbox' onClick={()=>{
            props.onChecked(props.id);
            }}>
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    );
}

export default ToDoItem;