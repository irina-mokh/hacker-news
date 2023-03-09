import { StoryPage } from '../pages/Story';
import { HomePage } from '../pages/Home';
import App from '../components/App';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'stories/:id',
        element: <StoryPage />,
      },
    ],
  },
]);
