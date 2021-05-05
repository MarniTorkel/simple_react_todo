import React from "react";

const TodoListItem = ({ todo, index, completeTodo, deleteTodo }) => {

    return (
    <div className="todo">
        <h3 style={{textDecoration: todo.isCompleted? "line-through": "" }}>{todo.text}</h3>
        <div>
            <input type="button" value="Mark as completed" onClick={() => completeTodo(index)} />
            <input type="button" value="Remove" onClick={() => deleteTodo(index)} />
        </div>
        
    </div>
)}

export default TodoListItem;