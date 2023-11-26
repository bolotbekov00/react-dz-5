import React, {useState} from 'react';
import "./TodoStyle.css"


function AddTodo({onAddTodo}) {

    const [title, setTitle] = useState('')


    return (
        <div className='blockAdd'>
            <input
                type="text"
                placeholder='Add Todo'  value={title}
                onChange={event =>  setTitle(event.target.value) }
            />

            <button onClick={() => {
                setTitle('');
                onAddTodo(title)}}
            >
                Add Todo
            </button>
        </div>
    );
}

export default AddTodo;