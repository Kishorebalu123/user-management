import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddEditUser />} />
      <Route path="/edit/:id" element={<AddEditUser />} />
    </Routes>
  </Router>
);

export default App;
