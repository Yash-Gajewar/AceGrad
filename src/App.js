import React from 'react';
import { Routes, Route} from "react-router-dom";
import Signup from './pages/Signup/Signup';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default App;
