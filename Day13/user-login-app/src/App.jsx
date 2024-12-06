import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Register from './components/Register';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Logout from './components/Logout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App