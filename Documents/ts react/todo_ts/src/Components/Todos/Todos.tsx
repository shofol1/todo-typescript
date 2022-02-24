import React, { ChangeEvent, useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

interface taskType {
  task: string;
  id: string;
}
const getTodos = () => {
  const todo = localStorage.getItem("todos");
  if (todo) {
    return JSON.parse(todo);
  }
};
const Todos = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<taskType[]>(getTodos());
  const [err, setErr] = useState<string>("");
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const add = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const id = uuidv4();
    const newTask = { task, id };
    if (task.length > 0) {
      const id = uuidv4();
      const newTask = { task, id };
      setTodos([...todos, newTask]);
      setErr("");
    } else {
      setErr("please add your task");
    }
  };
  const handleDelete = (taskDelete: string): void => {
    setTodos(todos.filter((item) => item.id !== taskDelete));
  };
  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <div>
      <AnimatePresence>
        <TodoForm handleSubmit={handleSubmit} add={add} />
        <p style={{ color: "red" }}>{err}</p>
        {todos.map((item, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Todo key={i} todo={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Todos;
