import React from "react";
import { FaTimes } from "react-icons/fa";

const Todo = ({
  todo,
  handleDelete,
}: {
  todo: {
    task: string;
    id: string;
  };
  handleDelete: (taskDelete: string) => void;
}) => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "410px",
        paddingTop: "10px",
      }}
    >
      <h1>{todo.task}</h1>
      <button className="del-btn" onClick={() => handleDelete(todo.id)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Todo;
