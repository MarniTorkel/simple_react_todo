import React, {useState} from "react";

const NewTodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleClick = e => {
        e.preventDefault();
        if (!inputValue) return;

       addTodo(inputValue);
        setInputValue("");
    }

    return (
        <div className="new-todo">
            <input className="new-todo-item"
                type="text"
                value = {inputValue}
                onChange={e => setInputValue(e.target.value)} 
                placeholder="Enter new to do list" />

            <input type="button" value="Add todo" onClick={handleClick} />
                
        </div>
    )
    }

export default NewTodoForm;