import React, {useState} from 'react';
import TaskList from "./TaskList";
import AddTodo from "./addTodo";
import SearchTodo from "./searchTodo";
import "./TodoStyle.css"



let nextId = 2
const initialTodo = [
    {id: 0, title: "Купить молоко", done: true},
    {id: 1, title: "Купить хлеб", done:  true},
    {id: 2, title: "Купить нан", done: true}
]



function Todo() {

    const [todos, setTodos] = useState(initialTodo)
    const [foundTodo, setFoundTodo] = useState(null)

    function handelFIndTodo(todo){
        setFoundTodo(todo)
    }

    function handelAddTodos(title){
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }
    function handelChangeTodos(nextTodo){
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            }
            else {
                return  t;
            }
        }))
    }
    function handelDeleteTodo(todoId){
        setTodos(
            todos.filter(t => t.id !== todoId)
        )
    }



    return (
        <div className="todoBlock">
            <AddTodo onAddTodo={handelAddTodos}/>
            <TaskList
                todos={todos}
                onChangeTodo={handelChangeTodos}
                onDelete={handelDeleteTodo} />
            <SearchTodo
                initialTodo={initialTodo}
                onAddTodo={handelAddTodos}
                onChangeTodo={handelChangeTodos}
                todos={todos}
                onFindTodo={handelFIndTodo}
            />
            {foundTodo && (
                <div>
                    Найденое дело: {foundTodo.title}
                </div>
            )}
        </div>
    );
}

export default Todo;