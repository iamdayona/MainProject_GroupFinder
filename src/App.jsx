import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import GroupCard from './components/GroupCard';
import GroupDetails from './pages/GroupDetails';
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Role-based routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute role="user">
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <AdminPanel />
          </ProtectedRoute>
        } />
        

        <Route path="/groupcard" element={<GroupCard />} />
        <Route path="/group/:id" element={<GroupDetails />} />
      </Routes>
    </div>
  );
}

export default App;
