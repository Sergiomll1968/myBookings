import { useRoutes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Confirm from './pages/Confirm/Confirm.jsx';
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
      },
      {
        element: <Confirm />,
        path: '/confirm',
      }
    ]
  );
}

export default AppRouter;
