import React from "react";

import Todo from "./Todo";
function ListTodo({ todos, removeTodo }) {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
}

export default ListTodo;
