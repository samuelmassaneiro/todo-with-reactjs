import React, { useState } from "react";
import "./Todo.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Estudar React", complete: true },
    { text: "Fazer um exercicio todo", complete: true },
    { text: "Colocar o projeto no GitHub", complete: false }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const toggleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, complete: false }]);
    setNewTodo("");
  };

  const handleRemoveTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <form className="add-todo-form" onSubmit={handleAddTodo}>
        <label>
          Add todo:
          <input
            className="add-todo-input"
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
        </label>
        <button className="add-todo-button" type="submit">Add</button>
      </form>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <span
            className={`todo-text ${todo.complete ? "complete" : ""}`}
          >
            {todo.text}
          </span>
          <button className={`${todo.complete ? "incomplete-button" : "complete-button"}`} onClick={() => toggleComplete(index)}>
            {todo.complete ? "Incomplete" : "Complete"}
          </button>
          <button className="remove-button" onClick={() => handleRemoveTodo(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;