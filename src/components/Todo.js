import React from "react";

function Todo({ todo, removeTodo }) {
  return (
    <>
      <div className="modal fade" id="editTodo">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <input type="text" />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <li className="list-group-item pointer d-flex justify-content-between align -items-center">
        {todo.todo}
        <div>
          <button
            id="editTodo"
            className="btn btn-success mr-2"
            data-toggle="modal"
            data-target="#editTodo"
          >
            Edit Todo
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeTodo(todo.id)}
          >
            Delete todo
          </button>
        </div>
      </li>
    </>
  );
}

export default Todo;
