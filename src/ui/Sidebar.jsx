import Logo from './Logo';
import MainNav from './MainNav';
import Uploader from '../data/Uploader';

import './Sidebar.scss';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />
      <MainNav />

      <Uploader />
    </aside>
  );
}

export default Sidebar;
