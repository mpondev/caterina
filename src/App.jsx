import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Account from './pages/Account';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Users from './pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'bookings',
    element: <Bookings />,
  },
  {
    path: 'cabins',
    element: <Cabins />,
  },
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
  {
    path: 'account',
    element: <Account />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
