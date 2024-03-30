import React from 'react';
import { Routes, Route} from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Register from './pages/Register/Register';
import Interview from './pages/Interview/Interview';


import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      <Route path="/interview" element={<Interview />} />
    </Routes>
  );
}

export default App;
