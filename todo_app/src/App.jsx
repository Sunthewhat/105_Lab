import "./Style/App.css";
import React from "react";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
  );
}

export default App;
