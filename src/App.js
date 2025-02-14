import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, CircularProgress, createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';

import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

// Lazy loading pentru componente
const Home = React.lazy(() => import('./pages/Home'));
const ExerciseDetail = React.lazy(() => import('./pages/ExerciseDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <CircularProgress />
  </Box>
);

const AppContent = () => {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#FF2625',
      },
      secondary: {
        main: '#3A1212',
      },
    },
    typography: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <Box 
        width="400px" 
        sx={{ 
          width: { xl: '1488px' },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
        }} 
        m="auto"
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </MUIThemeProvider>
  );
};

const App = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;