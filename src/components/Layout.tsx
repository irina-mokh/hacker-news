import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export interface IMenuProps {
  isOpened: boolean;
  toggleMenu: () => void;
}

export function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
