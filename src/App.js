import React from 'react';
import { Routes, Route} from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Register from './pages/Register/Register';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
