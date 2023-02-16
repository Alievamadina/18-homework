import React, { useState } from "react";
import styled from "styled-components";
import { todoActionTypes } from "../store/todo/todoReducer";

const TodoItem = ({ id, title, completed, saveHandler, dispatch }) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(title);

  const textEditSaveHandler = () => {
    setEdit(false);
    saveHandler({ id, value: editInput });
  };

  const changeEditInputHandler = (e) => {
    setEditInput(e.target.value);
  };
  const editHandler = (title) => {
    setEdit(true);
    setEditInput(title);
  };
  const toggleTodoComplete = (todoId) => {
    dispatch({ type: todoActionTypes.COMPLETED, payload: todoId });
  };
  const removeTodo = (id) => {
    dispatch({ type: todoActionTypes.DELETE, payload: id });
  };

  return (
    <div>
      <ul>
        {edit ? (
          <>
            <div>
              <input
                type="text"
                value={editInput}
                onChange={changeEditInputHandler}
              />
              <button onClick={textEditSaveHandler}>Save</button>
            </div>
          </>
        ) : (
          <>
            <li>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
              />
              <CompletedStyle completed={completed}>{title}</CompletedStyle>
              <button className="delete" onClick={() => removeTodo(id)}>
                delete
              </button>
              <button onClick={() => editHandler(title)}>edit</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default TodoItem;

const CompletedStyle = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
`;
