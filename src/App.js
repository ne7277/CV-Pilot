import React from 'react';
import HomePage from './Component/HomePage/HomePage';
import CVForm from './Component/CV Form/CVForm';
import BiodataBuilder from './Component/Biodata Builder/BiodataBuilder';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CVForm />} />
      <Route path="/biodata" element={<BiodataBuilder />} />
    </Routes>
  );
}

export default App;
