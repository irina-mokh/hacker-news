// import React from 'react';
// import { Route, Routes, BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { HomePage } from '../pages/Home';
// import { StoryPage } from '../pages/Story';
// import { Layout } from './Layout';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '@mui/system';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
        <h1 className="visually-hidden">Hacker news</h1>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
