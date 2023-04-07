import "./App.css";
import SignIn from "./Components/signinComponent";
import Dashboard from "./Components/dashboardComponent";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <Box sx={{ p: 1 }}>
              <Dashboard />
            </Box>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
