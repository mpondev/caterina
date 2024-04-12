import { useUser } from './useUser';

import './UserAvatar.scss';

function UserAvatar() {
  const { user } = useUser();
  const { avatar, fullName } = user.user_metadata;

  return (
    <div className="user-avatar">
      <img
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
        className="user-avatar--img"
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
