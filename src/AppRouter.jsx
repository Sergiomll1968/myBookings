import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Booking from './pages/Booking/Booking.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Profile />,
        path: '/profile',
      },
      {
        element: <Booking />,
        path: '/booking',
      }
    ]
  );
}

export default AppRouter;
