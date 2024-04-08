import { useState } from 'react';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';

import './UpdateUserDataForm.scss';

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form className="update-user-form" onSubmit={handleSubmit}>
      <div className="update-user-form--row">
        <label htmlFor="email">Dirección de email</label>
        <input value={email} disabled />
      </div>

      <div className="update-user-form--row">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </div>

      <div className="update-user-form--row">
        <label htmlFor="avatar">Imagen de avatar</label>
        <input
          className="file"
          type="file"
          id="avatar"
          accept="image/*"
          onChange={e => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </div>

      <div className="update-user-form--row">
        <button
          type="reset"
          className="cancel-btn"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button disabled={isUpdating}>Actualizar cuenta</button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;
