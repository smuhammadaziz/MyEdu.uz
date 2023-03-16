import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';
import Create from './pages/create/create';
import Index from './pages/loginStudents/Index';

function App() {
  return (
    <div className='MyEdu'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/entering' element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
