import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActionTypes } from "../store/todo/todoReducer";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const saveHandler = (data) => {
    dispatch({
      type: todoActionTypes.EDIT,
      payload: data,
    });
  };

  const enebled = text.trim().length > 0;

  // setTodos(
  //   todos.map((todo) => {
  //     if (todo.id !== todoId) return todo;
  //     return {
  //       ...todo,
  //       completed: !todo.completed,
  //     };
  //   })
  // );
  const removeAll = () => {
    dispatch({ type: todoActionTypes.DELETE_ALL });
  };

  // setTodos(todos.filter((todo) => todo.id !== todoId));

  const addTodo = () => {
    dispatch({ type: todoActionTypes.ADD_TODO, payload: text });
    setText("");
    // if (text.trim().length) {
    //   setTodos([
    //     ...todos,
    //     {
    //       id: Math.random().toString(),
    //       text,
    //       completed: false,
    //     },
    //   ]);
    // }
  };

  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={!enebled} onClick={addTodo}>
          Add
        </button>
        <button onClick={removeAll}>delete all</button>
      </div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          saveHandler={saveHandler}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;
