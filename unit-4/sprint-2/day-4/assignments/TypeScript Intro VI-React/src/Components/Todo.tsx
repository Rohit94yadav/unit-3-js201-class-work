import React from 'react'
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import {v4 as uuid} from 'uuid';

interface ITodoProps {
    id: string;
    title: string;
    status: boolean;
}

export const Todo = () => {

    const [ todos, setTodos ] = React.useState<ITodoProps[]>([]);

    const handleAdd = (title: string | null)=>{
        if(title === null ){
            alert("Please Add Something");
            return;
        }
        const payload: ITodoProps = {
            title,
            status: false,
            id: uuid()
        }
        setTodos([...todos, payload])
    }

    const handleToggle = (id: string)=>{
        const updated = todos.map(item=> item.id === id? {...item, status: !item.status} : item)
        setTodos(updated);
    }

    const handleDelete = (id: string)=>{
        const updated = todos.filter(item=> item.id !== id)
        setTodos(updated);
    }

    const handleEdit = (id: string, value: string)=>{
        const updated = todos.map(item => item.id === id? {...item, title: value} : item);
        setTodos(updated)
    }
    
    return (
        <div>
            <TodoInput onClick={handleAdd} />
            {
                todos.map(item=> <TodoList key={item.id} {...item} onToggle={handleToggle} onDelete={handleDelete} handleEdit={handleEdit} />)
            }
        </div>
    )
}