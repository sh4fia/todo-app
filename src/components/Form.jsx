import React, { useState } from 'react';

const Form = ( props ) => {

    const [name, setName] = useState("");

    const handleChange = ( e ) => {
        setName(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>What needs to be done?</h2>
            <input type='text' className='task-desc' value={ name } onChange={ handleChange } />
            <button type='submit' className='btn'>Add</button>
        </form>
    )
}

export default Form;