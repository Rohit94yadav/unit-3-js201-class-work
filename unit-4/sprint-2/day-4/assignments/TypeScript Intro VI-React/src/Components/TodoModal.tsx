import React from 'react';

interface ItodoModalProps {
    id: string;
    title: string,
    onEdit: (id: string, value: string)=> void;
    setShowModal: (value: boolean)=> void;
}

const closeBtn = {
    width: "80px",
    margin: "10px auto"
}

export const TodoModal = ({id, title, onEdit, setShowModal}: ItodoModalProps) => {

    const [ editInp, setEditInp ] = React.useState<string>(title);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setEditInp(e.target.value);
    }

    const handleHideModal: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShowModal(false);
    }

    const handleEdit = ()=>{
        onEdit(id, editInp);
        setShowModal(false);
    }
    
    return (
        <div style={{border: "1px solid black",
                    height: "120px",
                    width: "350px",
                    borderRadius: "5px",
                    boxShadow: "0 0 2px 5px grey",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed",
                    top: "40%",
                    left: "40%",
                    background: "white" }}>
            <div>
                <input type="text" value={editInp} onChange={handleChange} />
                <button onClick={handleEdit} >UPDATE TITLE</button>
            </div>
            <button style={closeBtn} onClick ={handleHideModal}>CLOSE</button>
        </div>
    )
}