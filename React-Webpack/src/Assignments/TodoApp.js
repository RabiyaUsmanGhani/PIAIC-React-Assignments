import React, { useState } from "react";

export function TodoApp() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);

  const addTodo = (mode) => {
    if (mode === "edit") {
      todoList[edit] = value;
      setTodoList([...todoList]);
      setEdit(null)
    } else {
      setTodoList([...todoList, value]);
    }
    setValue("");
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const editDeleteItem = (val, i, mode) => {
    if (mode === "delete") {
      let tempList = todoList.filter((item, ind) => ind !== i);
      setTodoList(tempList);
    } else {
      setValue(val);
      setEdit(i);
    }
  };

  return (
    <>
      <h2 className="text-center">TODO App</h2>
      <div className="w-50 d-flex justify-content-between m-auto">
        <input
          className="form-control"
          value={value}
          onChange={onInputChange}
        />
        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            if (edit !== null) {
              addTodo("edit");
            } else {
              addTodo("add");
            }
          }}
        >
            {edit !== null ? 'Edit' : 'Add'}
         
        </button>
      </div>

      <div className="w-50 flex-column align-items-center m-auto">
        {todoList?.map((item, i) => {
          return (
            <div className="card mt-2 " key={i}>
              <div className="card-body p-2 d-flex justify-content-between">
                <span>{item}</span>
                <div className="d-flex">
                  <button
                    className="btn btn-sm btn-success "
                    onClick={() => editDeleteItem(item, i, "edit")}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger ml-1"
                    onClick={() => editDeleteItem(item, i, "delete")}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
