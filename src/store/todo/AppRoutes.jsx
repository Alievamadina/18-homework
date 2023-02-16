import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../../components/Auth";
import TodoList from "../../components/TodoList";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='auth'/>} />
        <Route path="auth" element={<Auth />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
