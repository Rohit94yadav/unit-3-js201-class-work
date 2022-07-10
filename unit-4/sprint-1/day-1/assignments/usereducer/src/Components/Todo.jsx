import React, { useContext, useEffect, useState } from 'react';
import { TodoInput } from './TodoInput';
import Axios from 'axios';
import { TodoContext } from '../Context/TodoContextProvider';
import { TodoOut } from './TodoOut';

export const Todo = () => {

    const [ todoInp, setTodoInp ] = useState("");
    const { state, dispatch, getTodoData, addTodoData } = useContext(TodoContext);

    const data = state.data;
    console.log(data)

    const handleChange = (e)=>{
        const { value } = e.target;
        setTodoInp(value);
    };

    const handleAdd = (payload)=>{
        dispatch(addTodoData(payload));
    };

    useEffect(()=>{
        dispatch(getTodoData());
    },[]);
    
    return (
        <div>
            <TodoInput handleChange={handleChange} handleAdd={handleAdd} todoInp={todoInp} />
            {
                data.map(item=> <TodoOut key={item.id} {...item} />)
            }
        </div>
    )
}
