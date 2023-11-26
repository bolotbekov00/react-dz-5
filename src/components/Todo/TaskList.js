import "./TodoStyle.css"
import React, {useState} from 'react';

function Task({todo, onChange, onDelete}) {

    const [isEditing, setIsEditing] = useState(false)

    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <input type="text" value={todo.title}
                       onChange={e => {
                           onChange({
                               ...todo,
                               title: e.target.value
                           })
                       }}
                />
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Editing</button>
            </>
        )
    }
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={e => {
                        onChange({...todo, done: e.target.checked})
                    }}
                />
                {todoContent}
                <button onClick={() => onDelete(todo.id)}>
                    delete
                </button>
            </label>
        </div>
    )
}


function TaskList({
                      todos,
                      onChangeTodo,
                      onDelete
                  }) {
    return (
        <ul>
            {todos && Array.isArray(todos) &&
                todos.map(todo => (
                    <li key={todo.id}>
                        <Task
                            todo={todo}
                            onChange={onChangeTodo}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
        </ul>
    );
}

export default TaskList;