import React from 'react';
import { TodoModal } from './TodoModal';

interface ITodoListProps {
    id: string;
    title: string;
    status: boolean;
    onToggle: (id: string)=> void;
    onDelete: (id: string)=> void;
    handleEdit: (id: string, value:string)=> void;
}

export const TodoList = ({id, title, status, onToggle, onDelete, handleEdit}: ITodoListProps) => {

    const [ showModal, setShowModal ] = React.useState<boolean>(false);

    const handleToggle: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        onToggle(id);
    }

    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        onDelete(id);
    }

    const handleshowModal: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShowModal(true);
    }
    
    return (
        <div>
            <h3>{title}</h3>
            <p>{status? "Completed" : "NotCompleted"}</p>
            <button onClick={handleToggle} >Toggle</button>
            <button onClick={handleDelete} >Delete</button>
            <button onClick={handleshowModal} >Edit</button>
            {
                showModal && <TodoModal id={id} title={title} onEdit={handleEdit} setShowModal={setShowModal} />
            }
        </div>
    )
}