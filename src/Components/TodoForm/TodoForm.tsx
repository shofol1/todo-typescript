import React, { ChangeEvent } from "react";

const TodoForm = ({
  handleSubmit,
  add,
}: {
  handleSubmit: (e: ChangeEvent<HTMLInputElement>) => void;
  add: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div onSubmit={add}>
      <form>
        <div className="input-group">
          <input onChange={handleSubmit} type="text" placeholder="add task" />
          <button className="btn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
