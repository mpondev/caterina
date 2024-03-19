import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

import './AppLayout.scss';

function AppLayout() {
  return (
    <div className="appLayout">
      <Header />
      <Sidebar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
