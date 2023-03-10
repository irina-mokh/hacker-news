import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

import { Box } from '@mui/material';
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
