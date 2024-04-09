import { useState } from 'react';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';
import FormRow from '../../ui/FormRow';

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
      <FormRow label="Dirección de email">
        <input value={email} disabled />
      </FormRow>

      <FormRow label="Nombre completo">
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Imagen de avatar">
        <input
          className="file"
          type="file"
          id="avatar"
          accept="image/*"
          onChange={e => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <button
          type="reset"
          className="btn btn--cancel"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button className="btn" disabled={isUpdating}>
          Actualizar cuenta
        </button>
      </FormRow>
    </form>
  );
}

export default UpdateUserDataForm;
