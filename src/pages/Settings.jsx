import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';

import './Settings.scss';

function Settings() {
  return (
    <>
      <div className="row">
        <h1>Actualizar ajustes</h1>
      </div>
      <UpdateSettingsForm />
    </>
  );
}

export default Settings;
