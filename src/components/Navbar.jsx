// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary" sx={{ width: '100vw' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 4 }}>
        <Typography variant="h6" sx={{ color: 'white' }}>
          Study Groups
        </Typography>
        <Box>
          <HamburgerMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
