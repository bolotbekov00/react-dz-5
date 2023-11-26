import React, { useState } from 'react';
import "./TodoStyle.css"

function SearchTodo({ todos, onAddTodo, onChangeTodo, initialTodo, onFindTodo }) {
    const [find, setFind] = useState('');

    function handleSearch() {
        const result = initialTodo.find(e => e.id === Number(find));
        onFindTodo(result);
    }

    return (
        <div className='searchTodo  '>
            <input
                type="text"
                value={find}
                onChange={(e) => setFind(e.target.value)}
                placeholder="Укажите номер задания"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchTodo;
