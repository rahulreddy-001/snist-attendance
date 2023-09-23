import "./App.css";

import Root from "./screens/root/Root";
import Login from "./screens/login/Login";
import Dashboard from "./screens/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
