import { React, useState } from 'react';

const NewToDoForm = ({ addTodo }) => {
    
    const INITIAL_STATE = {
        text: '',
        completed: false
    }
    const [todo, setTodo] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo(INITIAL_STATE);
    }

    return (
        <div className="NewToDoForm">
            <h1>New To Do Form</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="text">
                    Text:
                    <input
                    type="text"
                    name="text"
                    value={ todo.text } 
                    onChange={ handleChange } />
                </label>
                <button type="submit">Create To Do</button>
            </form>
        </div>  
    );
}

export default NewToDoForm;