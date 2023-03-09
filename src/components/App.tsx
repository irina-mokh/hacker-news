import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ArticlePage } from '../pages/Article';
import { Layout } from './Layout';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="address" element={<ArticlePage />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
