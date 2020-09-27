import React from "react";

function AddTodo({ input, setInput, addTodo }) {
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="mb-3">
      <div className="d-flex justify-content-end">
        <input
          value={input}
          onChange={inputChange}
          onClick={(e) => (e.target.value = "")}
          type="text"
          className="form-control mr-4 text-center"
        />

        <div>
          <button
            disabled={!input}
            onClick={addTodo}
            type="submit"
            className="btn btn-info px-5"
          >
            AddTodo
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
