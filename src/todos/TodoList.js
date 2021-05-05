import React, { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";

const TodoList = () => {
    const [todoRemaining, setTodoRemaining] = useState(0);

    const [todos, setTodos] = useState([
        {text: "Learn about react",
        isCompleted: false},
        {text: "Lunch with friend",
        isCompleted: false},
        {text: "Build todo app",
        isCompleted: false}
    ]);

    useEffect(() => {
        setTodoRemaining(todos.filter(todo => !todo.isCompleted).length)
    }, [todos]);
    
    const addTodo = todo => {
        const newTodos = [...todos, {text: todo, isCompleted: false}];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos);
    }

    return (
        <>
            <div><h1>To do - items</h1></div>
            <div>
                <NewTodoForm addTodo={addTodo} />
            </div>
        
            <div className="todo-list">
                {todos.map((todo, index) => <TodoListItem 
                    todo={todo}
                    index={index}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    key={index} />)}
            </div> 
            <div>Pending todos ({todoRemaining})</div>
        </>  
    )
}    

export default TodoList;