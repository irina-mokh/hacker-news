import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '@mui/system';

export function Layout() {
  return (
    <>
      <Header />
      <Container component="main" sx={{ flexGrow: '1' }}>
        <h1 className="visually-hidden">Hacker news</h1>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
