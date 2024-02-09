import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
