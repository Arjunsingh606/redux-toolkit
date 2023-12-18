import React from "react";

const Todo = ({ todo, setTodo, addTodo }) => {
  const todoArray = [...todo, todo];
  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          placeholder="add todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoArray.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Todo;
