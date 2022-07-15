import { React, useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';

const ToDoList = () => {
    const INITIAL_STATE = [
        {
            text: '',
            completed: false
        }
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (todo) => {
        let newTodo = {...todo, id: uuid()};
        setTodos( todos => [...todos, newTodo]);
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    }


    return (
        <div className="ToDoList">
            <h1>To Do List</h1>
            <NewToDoForm addTodo={addTodo} />
            {todos.map(({ id, text, completed, removeTodo }) => (
                <li key={uuid()}> {text} </li>
            ))}
        </div>
    )
}

export default ToDoList;