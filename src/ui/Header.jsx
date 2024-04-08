import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';

import './Header.scss';

function Header() {
  return (
    <header>
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
