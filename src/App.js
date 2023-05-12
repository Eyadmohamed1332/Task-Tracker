import React from 'react';
import HomePage from "./components/pages/Index"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TasksPage from "./components/pages/Tasks";
import Projects from "./components/pages/Projects";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:projectId/tasks" element={<TasksPage />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
