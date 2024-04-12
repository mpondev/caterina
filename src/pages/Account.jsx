import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';

import './Account.scss';

function Account() {
  return (
    <>
      <h1>Actualizar cuenta</h1>

      <div className="account-row">
        <h3>Actualizar datos de usuario</h3>
        <UpdateUserDataForm />
      </div>

      <div className="account-row">
        <h3>Actualizar contraseña</h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
}

export default Account;
