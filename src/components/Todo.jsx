import React, { useState } from 'react'

const Todo = (props) => {

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    const handleChange = ( e ) => {
        setNewName(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className='edit-form' onSubmit={handleSubmit}>
            <div>
                <label>New name for {props.id}</label>
                <input id={props.id} className='edit-text' type='text' value={newName} onChange={handleChange} />
            </div>
            <div>
                <button type='submit' className='btn'>Save</button>
                <button type='button' className='btn' onClick={() => setEditing(false)}>Cancel</button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className='view-form'>
            <div>
                <input id={props.id} type='checkbox' className='check' defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)} />
                <label className='todo-label' htmlFor={props.id}>{props.name}</label>
            </div>
            <div>
                <button type='button' className='btn' onClick={() => setEditing(true)}>Edit</button>
                <button type='button' className='btn' onClick={() => props.deleteTask(props.id)}>Delete</button>
            </div>
        </div>
    )

    return (
        <>
            {isEditing ? editingTemplate : viewTemplate}
        </>
    )
}

export default Todo;