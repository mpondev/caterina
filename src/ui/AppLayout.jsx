import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

import './AppLayout.scss';

function AppLayout() {
  return (
    <div className="appLayout">
      <Header />
      <Sidebar />
      <main className="appLayout--main">
        <div className="appLayout--main--container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
