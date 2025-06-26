// src/components/HamburgerMenu.jsx
import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
  {[
    <MenuItem key="home" component={Link} to="/" onClick={handleClose}>Home</MenuItem>,

    user?.role === 'admin' && (
      <MenuItem key="admin" component={Link} to="/admin" onClick={handleClose}>Admin Panel</MenuItem>
    ),

    user?.role === 'user' && (
      <MenuItem key="dashboard" component={Link} to="/dashboard" onClick={handleClose}>Dashboard</MenuItem>
    ),

    user ? (
      <MenuItem key="logout" onClick={() => { handleLogout(); handleClose(); }}>Logout</MenuItem>
    ) : [
      <MenuItem key="login" component={Link} to="/login" onClick={handleClose}>Login</MenuItem>,
      <MenuItem key="signup" component={Link} to="/signup" onClick={handleClose}>Sign Up</MenuItem>
    ]
  ]}
</Menu>

    </>
  );
};

export default HamburgerMenu;
