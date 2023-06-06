import React,{useState} from 'react';
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';

const App=()=>{

    const [items,setItems]=useState([]);

    const addItem=(value)=>{
        setItems(prevItems=>{
            return [...prevItems,value];
        });
    }

    const deleteItem=(id)=>{
        setItems(prevItems=>{
            return(
                prevItems.filter((item,index)=>{
                    return index !==id;
                })
            )
        })
    }

    return(
        <div className='container'>
            <div className='heading'>
                <h1>To-Do List</h1>
            </div>
        
            <InputArea onAdd={addItem} />

            {
                items.map((todoitem,index)=>{
                    return <ToDoItem 
                    key={index}
                    id={index}
                    text={todoitem}
                    onChecked={deleteItem}
                    />
                })
            }
        </div>
    );
}

export default App;