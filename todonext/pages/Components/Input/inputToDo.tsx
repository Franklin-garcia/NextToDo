import React from "react";
import useInputForm from "./state/useInputForm";

const InputToDo = () => {
  const { level, todo, setInput, onSubmit } = useInputForm();
  return (
    <>
      <div className="input-group mb-3 p-10">
        <div className="form-group col-md-3">
          <select
            id="inputState"
            className="form-control"
            placeholder="Level"
            name="level"
            value={level}
            onChange={(e) => setInput(e)}
          >
            <option>Hight</option>
            <option>Middle</option>
            <option>Low</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <input
            name="todo"
            className="form-control"
            placeholder="Type your task"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={todo}
            onChange={(e) => setInput(e)}
          />
        </div>
        <div className="form-group col-md-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={(e) => onSubmit(e)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default InputToDo;
