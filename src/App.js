import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import FoodScreen from "./components/FoodScreen/FoodScreen";
import InstamartScreen from "./components/InstamartScreen/InstamartScreen";
import Header from "./components/Header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";


function App() {
  return (
    <Router>
      <AuthProvider>
       
        <center className="form">
 
          <div className="w-full h-screen flex flex-col">
            <Header/>
           
            <Routes>
              <Route path="/" element = {<Login/>} />
              <Route path="/login" element={<Login />} />
           
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/food" element={<FoodScreen />} />
              <Route path="/instamart" element={<InstamartScreen />} />
            </Routes>
           
          </div>
    
        </center>
      </AuthProvider>
    </Router>
  );
}

export default App;
