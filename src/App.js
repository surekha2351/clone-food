import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/Header";
import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <center className="form">
        <Header />
        <div className="w-full h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        </center>
      </AuthProvider>
    </Router>
  );
}

export default App;
