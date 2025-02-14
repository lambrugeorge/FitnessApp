import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Stack 
      direction="row" 
      justifyContent="space-around" 
      sx={{ 
        gap: { sm: '123px', xs: '40px' }, 
        mt: { sm: '32px', xs: '20px' },
        px: '20px',
        justifyContent: 'none'}}>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography 
          color="primary"
          fontWeight="600"
          fontSize="26px"
        >
          Fitness Club
        </Typography>
      </Link>
      <Stack
        direction='row' 
        gap="40px" 
        alignItems="center"
        fontSize="24px"
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="primary">Acasă</Button>
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none' }}>
          <Button color="primary">Exerciții</Button>
        </a>
        <IconButton onClick={toggleTheme} color="primary">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
